import useLoginForm from '../../hooks/useLoginForm'
import {useAuth} from '../../contexts/AuthProvider'
import {Link} from 'react-router-dom'
import Swal from 'sweetalert2'
import DisplayError from '../../components/DisplayError'
import Input from '../../components/forms/Input'
import axios from 'axios'

axios.defaults.withCredentials = true

export default function LoginPage() {
    const {
        register,
        reset,
        handleSubmit,
        formState: {errors, isValid},
    } = useLoginForm()
    const {setAuth, setUser} = useAuth()

    const onSubmit = async (data) => {
        try {
            const response = await axios.post(
                `http://localhost:3000/auth/login`,
                data
            )

            const {id, username} = response.data
            setUser({id, username})

            await Swal.fire({
                icon: 'success',
                title: 'Login successful',
                text: 'You are now logged in',
                showConfirmButton: false,
                timer: 1500,
            })
            setAuth(true)
        } catch (error) {
            const errorMessage =
                error.response.data.message || 'Something went wrong'
            await Swal.fire({
                icon: 'error',
                title: 'Login failed',
                text: errorMessage,
                showConfirmButton: false,
                timer: 1500,
            })
            reset()
            setAuth(false)
        }
    }

    return (
        <form
            className="flex flex-col w-[300px] mt-[100px] p-4 mx-auto rounded-md text-font-800 bg-back-100"
            onSubmit={handleSubmit(onSubmit)}>
            <h2 className="text-2xl font-bold m-4 text-center">Login</h2>
            <div className="flex flex-col">
                <label htmlFor="username">Username</label>
                {errors.username && (
                    <DisplayError error={errors.username.message} />
                )}
                <Input register={register} name="username" type="text" />
            </div>
            <div className="flex flex-col">
                <label htmlFor="password">Password</label>
                {errors.password && (
                    <DisplayError error={errors.password.message} />
                )}
                <Input register={register} name="password" type="password" />
            </div>
            <button
                className={`mt-8 mb-4 py-2 px-4 rounded-md cursor-pointer ${
                    isValid
                        ? 'text-back-100 bg-font-800 cursor-pointer'
                        : 'bg-gray-400 text-gray-200 cursor-not-allowed'
                }`}>
                Submit
            </button>
            <p className="text-sm ">
                Don't have an account?
                <Link className="font-bold underline" to="/auth/signup">
                    Signup
                </Link>
            </p>
        </form>
    )
}
