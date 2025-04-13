import express from 'express'
import jwt from 'jsonwebtoken'
import {login, signup} from '../controllers/auth.controller.js'

const router = express.Router()

router.post('/login', login)
router.post('/signup', signup)
router.get('/check-auth', (req, res) => {
    const {token} = req.cookies

    if (!token) return res.status(401).json({message: 'Unauthorized'})
    try {
        const {iat, exp, ...user} = jwt.verify(
            token,
            process.env.AUTH_TOKEN_SECRET
        )
        return res.status(200).json({message: 'Authorized', user})
    } catch (error) {
        console.log(error)
        return res
            .status(401)
            .json({message: 'Forbidden: Invalid token or expired token'})
    }
})

export default router
