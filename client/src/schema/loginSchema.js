import zod from 'zod'

const loginSchema = (minLength) => {
    return zod.object({
        username: zod
            .string()
            .min(5, {message: 'Username must be at least 5 characters'}),
        password: zod
            .string()
            .min(5, {message: 'Password must be at least 5 characters'}),
    })
}

export default loginSchema
