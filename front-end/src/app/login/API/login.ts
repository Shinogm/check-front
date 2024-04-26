import { APIENDPOINST } from '@/utils/api/api-urls'
import { redirect } from 'next/navigation'
import { z } from 'zod'

const LoginSchema = z.object({
  email: z.string().email(),
  status: z.string().optional(),
  id: z.number(),
  created_at: z.string(),
  name: z.string(),
  domicilio: z.string(),
  telefono: z.string(),
  empresa: z.string()
})

export default async function Login (email: string, password: string) {
  console.log('Login function called with email:', email, 'and password:', password)

  const queryParams = new URLSearchParams({
    email,
    password
  })

  console.log('Query Params:', queryParams.toString())

  const response = await fetch(`${APIENDPOINST.postLoginPoint}?${queryParams.toString()}`, {
    method: 'POST'
  })
  console.log('Response:', response.status)

  const data = await response.json()

  console.log('Response Data:', data)

  if (!response.ok) {
    return {
      response: data,
      rawResponse: response
    }
  } else if (Number(data.status) === 200) {
    console.log('Login successful')
    redirect('/dashboard')
  }

  return {
    response: LoginSchema.parse(data.token),
    rawResponse: response
  }
}
