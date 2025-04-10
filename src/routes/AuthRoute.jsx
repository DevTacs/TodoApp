import React from 'react'
import {useAuth} from '../contexts/AuthProvider'
import {Navigate, Outlet} from 'react-router-dom'

export default function AuthRoute() {
    const {auth} = useAuth()

    return !auth ? <Outlet /> : <Navigate to="/notes" />
}
