'use server'
import { z } from 'zod'

const UserAdminSchema = z.object({
  status: z.literal('success'),
  user: z.object({
    id: z.number(),
    created_at: z.string(),
    name: z.string(),
    domicilio: z.string(),
    telefono: z.string(),
    empresa: z.string(),
    email: z.string(),
    permission: z.string()
  })
})

export type UserEmail = z.infer<typeof UserAdminSchema>

export default async function GetEmail (email: string) {
  const response = await fetch(`http://localhost:3001/user/get/email?email=${email}`)
  console.log('Response:', response)
  console.log('Response:', response.status)
  const data = await response.json()
  console.log(data)
  if (!response.ok) {
    throw new Error(data.message ?? 'Something went wrong!')
  } else {
    console.log('UserAdminSchema:')
    return UserAdminSchema.parse(data)
  }
}
