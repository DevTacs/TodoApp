import {Link} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import zod from 'zod'

const loginSchema = zod.object({
    username: zod
        .string()
        .min(5, {message: 'Username must be at least 5 characters'}),
    password: zod
        .string()
        .min(5, {message: 'Password must be at least 5 characters'}),
})

export default function LoginPage() {
    const {
        register,
        handleSubmit,
        formState: {errors, isValid},
    } = useForm({
        resolver: zodResolver(loginSchema),
    })

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <form
            className="flex flex-col w-[300px] mt-[100px] p-4 mx-auto rounded-md text-font-800 bg-back-100"
            onSubmit={handleSubmit(onSubmit)}>
            <h2 className="text-2xl font-bold m-4 text-center">Login</h2>
            <div className="flex flex-col">
                <label htmlFor="username">Username</label>
                {errors.username && (
                    <div className="text-xs text-red-600">
                        {errors.username.message}
                    </div>
                )}
                <input
                    {...register('username')}
                    className="py-1.5 px-4 my-2 rounded-md text-sm outline-0 border-1 placeholder-font-800 border-font-800"
                    type="text"
                    placeholder="Enter your username"
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="password">Password</label>
                {errors.password && (
                    <div className="text-xs text-red-600">
                        {errors.password.message}
                    </div>
                )}
                <input
                    {...register('password')}
                    className="py-1.5 px-4 my-2 rounded-md text-sm outline-0 border-1 placeholder-font-800 border-font-800"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter your password"
                />
            </div>
            <button
                className={`mt-8 mb-4 py-2 px-4 text-back-100 bg-font-800 rounded-md cursor-pointer ${
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
