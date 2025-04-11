import React from 'react'
import {Link, Outlet} from 'react-router-dom'
import Header from '../../components/Header'

export default function AuthPage() {
    return (
        <>
            <Header>
                <ul>
                    <li className="py-1 px-4 bg-accent-400 rounded-md text-font-800">
                        <Link to="/auth/login">Login</Link>
                    </li>
                </ul>
            </Header>
            <Outlet />
        </>
    )
}
