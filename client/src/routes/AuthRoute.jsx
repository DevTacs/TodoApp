import {useAuth} from '../contexts/AuthProvider'
import {Outlet, Navigate} from 'react-router-dom'
import axios from 'axios'
import {useEffect} from 'react'

axios.defaults.withCredentials = true

export default function AuthRoute() {
    const {auth, loading} = useAuth()

    if (loading) return <h1>Loading...</h1>

    return !auth ? <Outlet /> : <Navigate to="/notes" />
}
