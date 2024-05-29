import { APIENDPOINST } from '@/utils/api/api-urls'

export default async function modifyWorker (form: FormData, id: number) {
  console.log('modifyWorker function called with form:', form)

  const HoraDeEntrada = form.get('horaEntrada') as string
  console.log('Hora de entrada:', HoraDeEntrada)
  const FechaDeSalida = form.get('horaSalida') as string
  console.log('Hora de salida:', FechaDeSalida)
  const format = `${HoraDeEntrada} a ${FechaDeSalida}`
  console.log('format:', format)
  const query = new URLSearchParams()
  query.append('hora', format)
  query.append('fecha', form.get('fechaSemana') as string)

  console.log('Query Params:', query.toString())

  const response = await fetch(`${APIENDPOINST.putUserByIdPoint(id)}?${query.toString()}`, {
    method: 'PUT',
    body: form
  })

  console.log('Response:', response.status)

  const data = await response.json()

  console.log('Response Data:', data)

  if (!response.ok) {
    throw new Error(data.message)
  }

  return {
    response: data
  }
}
