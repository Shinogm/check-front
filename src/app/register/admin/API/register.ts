'use server'

import { APIENDPOINST } from '@/utils/api/api-urls'
import { z } from 'zod'

const UserAdminSchema = z.object({
  id: z.number(),
  name: z.string(),
  domicilio: z.string(),
  telefono: z.string(),
  empresa: z.string(),
  email: z.string(),
  password: z.string().optional(),
  perm_type: z.string().optional()
})
const tokenPASS = 145

export default async function RegisterAdmin (form: FormData, token: number) {
  if (token !== tokenPASS) {
    throw new Error('Token invalido')
  }

  console.log(form)

  const response = await fetch(`${APIENDPOINST.postRegisterPoint}`, {
    method: 'POST',
    body: form
  })

  const data = await response.json()
  console.log('data:', data)

  const parsedData = UserAdminSchema.array().parse(data.user)
  console.log('parsedData:', parsedData)

  if (response.status !== 200) {
    console.log('response:', response)
  }

  return { status: response.status, user: parsedData }
}
