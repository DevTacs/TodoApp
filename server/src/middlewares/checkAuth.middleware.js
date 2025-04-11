import jwt from 'jsonwebtoken'

export default function checkAuth(req, res, next) {
    const {token} = req.cookies

    if (!token) return res.status(401).json({message: 'Unauthorized'})

    try {
        jwt.verify(token, process.env.AUTH_TOKEN_SECRET)
        next()
    } catch (error) {
        console.log(error)
        return res
            .status(401)
            .json({message: 'Forbidden: Invalid token or expired token'})
    }
}
