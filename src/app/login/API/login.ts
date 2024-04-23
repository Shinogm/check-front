'use server'

import { APIENDPOINST } from '@/utils/api/api-urls'
import { z } from 'zod'

<<<<<<< HEAD
const LoginSchema = z.object({
=======
const LoginAdminSchema = z.object({
>>>>>>> 72eadf24f433997d97dcbb49f5c14ff56f268bbc
    email: z.string().email(),
    password: z.string()
    })

<<<<<<< HEAD
export default async function Login (form: FormData): Promise<z.infer<typeof LoginSchema>> {
=======
export default async function LoginAdmin (form: FormData): Promise<z.infer<typeof LoginAdminSchema>> {
>>>>>>> 72eadf24f433997d97dcbb49f5c14ff56f268bbc
    return await fetch(`${APIENDPOINST.postLoginPoint}`, {
        method: 'POST',
        body: form
    })
        .then(async res => await res.json())
        .then(data => {
            if (data?.error !== undefined) {
                throw new Error(data.error)
            }
<<<<<<< HEAD
            console.log(data)
            return LoginSchema.parse(data)
=======
            return LoginAdminSchema.parse(data)
>>>>>>> 72eadf24f433997d97dcbb49f5c14ff56f268bbc
        })
}