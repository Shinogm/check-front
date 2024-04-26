'use server'
import { APIENDPOINST } from '@/utils/api/api-urls'
import { z } from 'zod'

const FingerSchema = z.object({
  status: z.literal('success'),
  message: z.string(),
  finger: z.object({
    id: z.number(),
    worker_id: z.number(),
    image: z.string()
  })
})
export default async function ScanWorkerFinger (userID: Number) {
  console.log('ScanWorkerFinger function called with userID:', userID)
  const query = new URLSearchParams()
  query.append('user_id', userID.toString())

  const response = await fetch(`${APIENDPOINST.postCreateWorkerFingerePoint}?${query.toString()}`, {
    method: 'POST'
  })

  console.log('Response:', response.status)

  const data = await response.json()

  console.log('Response Data:', data)

  const parsedData = FingerSchema.parse(data)
  console.log('Parsed Data:', parsedData)

  if (!response.ok) {
    return {
      response: data,
      rawResponse: response
    }
  } else if (Number(data.status) === 200) {
    console.log('Scan successful')
  }
  return {
    response: FingerSchema.parse(data),
    rawResponse: response
  }
}
