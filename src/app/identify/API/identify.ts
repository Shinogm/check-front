import { APIENDPOINST } from '@/utils/api/api-urls'
import { z } from 'zod'

export const FingerWorkerSchema = z.object({
  status: z.literal('success'),
  score: z.number(),
  user: z.object({
    id: z.number(),
    created_at: z.string(),
    name: z.string(),
    domicilio: z.string(),
    telefono: z.string(),
    empresa: z.string(),
    email: z.string().email(),
    horario: z.string(),
    password: z.string()
  })
})

export type FingerWorker = z.infer<typeof FingerWorkerSchema>

export default async function IdentifyWorker () {
  const response = await fetch(`${APIENDPOINST.identifyWorkerPoint}`, {
    method: 'POST'
  })

  const data = await response.json()
  console.log(data)

  const parsedData = FingerWorkerSchema.parse(data)

  if (!response.ok) {
    throw new Error('Failed to fetch')
  }

  return parsedData
}
