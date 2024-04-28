import { APIENDPOINST } from '@/utils/api/api-urls'
import { z } from 'zod'

export const FingerWorkerSchema = z.object({
    status: z.literal('success'),
    message: z.string(),
    finger: z.array(
        z.object({
            id: z.number(),
            worker_id: z.number(),
            finger: z.string()
        })
    )
})

export default async function IdentifyWorker () {
    const response = await fetch(`${APIENDPOINST.identifyWorkerPoint}`, {
        method: 'POST'
    })

    const [data] = await response.json()

    const parsedData = FingerWorkerSchema.parse(data)


    if (!response.ok) {
        return {
            response: data,
            rawResponse: response
        }
    }

    return {
        response: parsedData,
        rawResponse: response
    }
}