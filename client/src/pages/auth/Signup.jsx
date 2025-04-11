import {Link} from 'react-router-dom'

export default function Signup() {
    return (
        <form className="flex flex-col w-[300px] mt-[100px] p-4 mx-auto rounded-md text-font-800 bg-back-100">
            <h2 className="text-2xl font-bold m-4 text-center">Signup</h2>
            <div className="flex flex-col">
                <label htmlFor="username">Username</label>
                <input
                    className="py-1.5 px-4 my-2 rounded-md text-sm outline-0 border-1 placeholder-font-800 border-font-800"
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Enter your username"
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="password">Password</label>
                <input
                    className="py-1.5 px-4 my-2 rounded-md text-sm outline-0 border-1 placeholder-font-800 border-font-800"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter your password"
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                    className="py-1.5 px-4 my-2 rounded-md text-sm outline-0 border-1 placeholder-font-800 border-font-800"
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="Repeat your password"
                />
            </div>
            <button className="mt-8 mb-4 py-2 px-4 text-back-100 bg-font-800 rounded-md cursor-pointer">
                Submit
            </button>
            <p className="text-sm ">
                Already have an account?
                <Link className="font-bold underline" to="/auth/login">
                    Login
                </Link>
            </p>
        </form>
    )
}
