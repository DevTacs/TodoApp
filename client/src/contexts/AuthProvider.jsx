import {createContext, useContext, useEffect, useState} from 'react'
import axios from 'axios'

axios.defaults.withCredentials = true

const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)

export default function AuthProvider({children}) {
    const [user, setUser] = useState({
        id: null,
        username: null,
    })
    const [auth, setAuth] = useState(false)

    const [loading, setLoading] = useState(true)

    const checkAuth = async () => {
        try {
            const response = await axios.get(
                'http://localhost:3000/auth/check-auth'
            )
            const {id, username} = response.data
            setUser({id, username})
            setAuth(true)
        } catch (error) {
            setUser({id: null, username: null})
            setAuth(false)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        checkAuth()
    }, [])

    return (
        <AuthContext.Provider value={{auth, setAuth, user, setUser, loading}}>
            {children}
        </AuthContext.Provider>
    )
}
