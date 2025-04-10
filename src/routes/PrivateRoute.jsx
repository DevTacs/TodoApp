import React from 'react'
import {Navigate, Outlet} from 'react-router-dom'
import {useAuth} from '../contexts/AuthProvider'

export default function PrivateRoute() {
    const {auth} = useAuth()

    return auth ? <Outlet /> : <Navigate to="/auth/login" />
}
