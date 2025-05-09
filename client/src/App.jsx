import React from 'react'
import {Route, Routes} from 'react-router-dom'
import {useAuth} from './contexts/AuthProvider.jsx'
import AuthRoute from './routes/AuthRoute.jsx'
import AuthPage from './pages/auth/AuthPage.jsx'
import LoginPage from './pages/auth/LoginPage.jsx'
import Signup from './pages/auth/Signup.jsx'
import PrivateRoute from './routes/PrivateRoute.jsx'
import NotePage from './pages/note/NotePage.jsx'
import NoteModal from './components/notes/NoteModal.jsx'
import HomePage from './pages/note/HomePage.jsx'

export default function App() {
    return (
        <Routes>
            <Route element={<AuthRoute />}>
                <Route path="/auth" element={<AuthPage />}>
                    <Route path="login" element={<LoginPage />} />
                    <Route path="signup" element={<Signup />} />
                </Route>
            </Route>

            <Route element={<PrivateRoute />}>
                <Route path="/notes" element={<NotePage />}>
                    <Route path="" element={<HomePage />} />
                    <Route path=":id" element={<NoteModal />} />
                </Route>
            </Route>
        </Routes>
    )
}
