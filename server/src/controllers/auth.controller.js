import userList from '../models/user.model.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

export const login = async (req, res) => {
    const {username, password} = req.body

    const user = userList.find((u) => u.username === username)
    if (!user) return res.status(404).json({message: 'User not found'})

    //const isMatch = await bcrypt.compare(password, user.password)
    if (password !== user.password)
        return res.status(401).json({message: 'Invalid credentials'})

    const token = jwt.sign(
        {id: user.id, username: user.username},
        process.env.AUTH_TOKEN_SECRET,
        {
            expiresIn: '1d',
        }
    )
    res.cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 24 * 60 * 60 * 1000,
    })

    return res.status(200).json({
        message: 'Login successful',
        id: user.id,
        username: user.username,
        isAuth: true,
    })
}

export const signup = async (req, res) => {
    const {username, password} = req.body

    const user = userList.find((u) => u.username === username)
    if (user != undefined)
        return res.status(409).json({message: 'User already exists'})

    const hashedPassword = await bcrypt.hash(password, 10)
    userList.push({id: userList.length + 1, username, password: hashedPassword})

    return res.status(201).json({message: 'Signup successful'})
}
