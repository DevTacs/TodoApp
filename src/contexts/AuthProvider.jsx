import React from 'react'

const AuthContext = React.createContext()

export const useAuth = () => React.useContext(AuthContext)

export default function AuthProvider({children}) {
    const [auth, setAuth] = React.useState(true)

    return (
        <AuthContext.Provider value={{auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    )
}
