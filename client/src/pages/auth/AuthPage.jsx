import React from 'react'
import {Link, Outlet} from 'react-router-dom'
import Header from '../../components/Header'

export default function AuthPage() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}
