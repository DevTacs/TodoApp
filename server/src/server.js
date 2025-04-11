import express from 'express'
import cors from 'cors'

const app = express()

app.use(
    cors({
        origin: 'http://localhost:5100',
        credentials: true,
    })
)
app.use(express.json())
app.use(express.urlencoded({extended: true}))

import checkAuth from './middlewares/checkAuth.middleware.js'

import authRoutes from './routes/auth.route.js'
// import noteRoutes from './routes/notes.route.js'

app.use('/auth', authRoutes)
// app.use('/notes', checkAuth, noteRoutes)

const port = process.env.PORT || 3000

app.listen(port)
