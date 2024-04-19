import { APIENDPOINST } from '@/utils/api/api-urls'
import { z } from 'zod'
import GetPermsAll from '@/utils/api/api-calls'

const UserAdminSchema = z.object({
    id: z.number(),
    name: z.string(),
    domicilio: z.string(),
    telefono: z.string(),
    horario: z.string().optional(),
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

    const user = {
      name: form.get('name') as string,
      domicilio: form.get('domicilio') as string,
      telefono: form.get('telefono') as string,
      horario: form.get('horario') as string,
      empresa: form.get('empresa') as string,
      email: form.get('email') as string,
      password: form.get('password') as string
    }
    return await fetch(`${APIENDPOINST.postRegisterPoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: JSON.stringify(user)
    })
      .then(async res => await res.json())
      .then(data => {
        if (data.error !== undefined) {
          throw new Error(data.error)
        }
        console.log(data)
        return UserAdminSchema.parse(data)
      })
  }
  