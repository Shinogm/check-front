import { APIENDPOINST } from '@/utils/api/api-urls'
import { z } from 'zod'

const UserAdminSchema = z.object({
  status: z.literal('success'),
  message: z.string(),
  users: z.array(
    z.object({
      id: z.number(),
      created_at: z.string(),
      name: z.string(),
      domicilio: z.string(),
      telefono: z.string(),
      empresa: z.string(),
      horario: z.string(),
      email: z.string().email(),
      permission: z.string()
    })
  )
})

export default async function GetAdmins (id: number) {
  const response = await fetch(`${APIENDPOINST.getAllUserByPermIdPoint(id)}`)
  console.log('Response:', response.status)
  const data = await response.json()
  console.log(data)
  if (!response.ok) {
    return data
  } else {
    return UserAdminSchema.parse(data)
  }
}
