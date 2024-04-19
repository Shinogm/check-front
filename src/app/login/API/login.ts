import { APIENDPOINST } from '@/utils/api/api-urls'
import { z } from 'zod'
import GetPermsAll from '@/utils/api/api-calls'

const ignoredPerms = ['Administrador'] // Agrega aquí los permisos que desees ignorar

const UserWorkerSchema = z.object({
  id: z.number(),
  name: z.string(),
  domicilio: z.string(),
  telefono: z.string(),
  horario: z.string().optional(),
  empresa: z.string(),
  email: z.string().email(),
  perm_type: z.string().refine(async (value) => {
    // Obtener la lista de permisos
    const perms = await GetPermsAll()

    // Verificar si el valor de 'perm_type' coincide con alguno de los nombres de permisos,
    // pero ignorando específicamente los permisos de la lista ignoredPerms
    return perms.some(perm => perm.name === value && !ignoredPerms.includes(value))
  }, {
    message: `permisos invalidos === ${ignoredPerms.join(', ')}`
  }).optional()
})

// export type User = z.infer<typeof UserWorkerSchema>

export default async function RegisterWorker (form: FormData): Promise<z.infer<typeof UserWorkerSchema>> {
  const query = new URLSearchParams()
  query.append('hora', form.get('hora') as string)
  query.append('fecha', form.get('fecha') as string)
  const user = {
    name: form.get('name') as string,
    domicilio: form.get('domicilio') as string,
    telefono: form.get('telefono') as string,
    horario: form.get('horario') as string,
    empresa: form.get('empresa') as string,
    email: form.get('email') as string,
    horas: form.get('horas') as string,
    dias: form.get('dias') as string
  }
  return await fetch(`${APIENDPOINST.postRegisterPoint}?${query.toString()}`, {
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
      return UserWorkerSchema.parse(data)
    })
}

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

export async function RegisterAdmin (form: FormData, token: number): Promise<z.infer<typeof UserAdminSchema>> {
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
