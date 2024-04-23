'use server'

import { APIENDPOINST } from '@/utils/api/api-urls'
import { z } from 'zod'

const LoginSchema = z.object({
    email: z.string().email(),
    password: z.string()
    })

export default async function Login (form: FormData): Promise<z.infer<typeof LoginSchema>> {
    return await fetch(`${APIENDPOINST.postLoginPoint}`, {
        method: 'POST',
        body: form
    })
        .then(async res => await res.json())
        .then(data => {
            if (data?.error !== undefined) {
                throw new Error(data.error)
            }
            console.log(data)
            return LoginSchema.parse(data)
        })
}