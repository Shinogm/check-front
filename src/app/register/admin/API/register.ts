'use server'

import { APIENDPOINST } from '@/utils/api/api-urls'
import { z } from 'zod'

const UserAdminSchema = z.object({
    id: z.number(),
    name: z.string(),
    domicilio: z.string(),
    telefono: z.string(),
    empresa: z.string(),
    email: z.string().email(),
    password: z.string().optional(),
    perm_type: z.string().optional()
  })
  const tokenPASS = 145

  export default async function RegisterAdmin (form: FormData, token: number): Promise<z.infer<typeof UserAdminSchema>> {
    if (token !== tokenPASS) {
      throw new Error('Token invalido')
    }

    console.log(form)
   
    return await fetch(`${APIENDPOINST.postRegisterPoint}`, {
      method: 'POST',
      body: form
    })
      .then(async res => await res.json())
      .then(data => {
        if (data?.error !== undefined) {
          throw new Error(data.error)
        }
        console.log(data)
        return UserAdminSchema.parse(data)
      })
  }
  