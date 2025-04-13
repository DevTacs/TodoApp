import express from 'express'
import cookieParser from 'cookie-parser'
import jwt from 'jsonwebtoken'
import cors from 'cors'

const app = express()

app.use(
    cors({
        origin: 'http://localhost:5173',
        credentials: true,
    })
)
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

import checkAuth from './middlewares/checkAuth.middleware.js'
import authRoutes from './routes/auth.route.js'

app.use('/auth', authRoutes)
// app.use('/notes', checkAuth, noteRoutes)

const port = process.env.PORT || 3000

app.listen(port)
