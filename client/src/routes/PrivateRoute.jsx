import {Outlet, Navigate} from 'react-router-dom'
import {useAuth} from '../contexts/AuthProvider'
import {useEffect} from 'react'
import axios from 'axios'

axios.defaults.withCredentials = true
export default function PrivateRoute() {
    const {auth, loading} = useAuth()

    if (loading) return <h1>Loading...</h1>

    return auth ? <Outlet /> : <Navigate to="/auth/login" />
}
