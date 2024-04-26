import { APIENDPOINST } from '@/utils/api/api-urls'
import { z } from 'zod'
import ScanWorkerFinger from './worker-finger'

export const UserSchema = z.object({
  status: z.literal('success'),
  message: z.string(),
  user: z.array(
    z.object({
      id: z.number(),
      name: z.string(),
      domicilio: z.string(),
      telefono: z.string(),
      horario: z.string(),
      empresa: z.string(),
      email: z.string().email(),
      perm_type: z.string()
    })
  )
})

// export type User = z.infer<typeof UserWorkerSchema>

export default async function RegisterWorker (form: FormData) {
  console.log('RegisterWorker function called with form:', form)

  const HoraDeEntrada = form.get('Hora de entrada') as string
  console.log('Hora de entrada:', HoraDeEntrada)
  const FechaDeSalida = form.get('Hora de salida') as string
  console.log('Hora de salida:', FechaDeSalida)
  const format = `${HoraDeEntrada} a ${FechaDeSalida}`
  console.log('format:', format)
  const query = new URLSearchParams()
  query.append('hora', format)
  query.append('fecha', form.get('Dias de trabajo') as string)

  console.log('Query Params:', query.toString())

  const response = await fetch(`${APIENDPOINST.postRegisterPoint}?${query.toString()}`, {
    method: 'POST',
    body: form
  })

  console.log('Response:', response.status)

  const data = await response.json()

  console.log('Response Data:', data)

  const parsedData = UserSchema.parse(data)

  console.log('Parsed Data:', parsedData)

  const userId = parsedData.user.map((user) => user.id)[0]
  console.log('userId:', userId)

  if (!response.ok) {
    return {
      response: data,
      rawResponse: response
    }
  } else if (response.ok) {
    console.log('Register successful')
    await ScanWorkerFinger(
      userId
    ).then((res) => {
      console.log('Finger Scan Response:', res)
      return {
        response: UserSchema.parse(data),
        rawResponse: response
      }
    }
    )
      .catch((err) => {
        console.error('Error:', err)
      })
  }
}
