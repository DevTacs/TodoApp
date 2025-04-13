import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import loginSchema from '../schema/loginSchema'

export default function useLoginForm() {
    return useForm({
        resolver: zodResolver(loginSchema(5)),
    })
}
