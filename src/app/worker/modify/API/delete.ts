'use server'

import { APIENDPOINST } from '@/utils/api/api-urls'

export default async function deleteWorker (id: number) {
  console.log('deleteWorker function called with id:', id)

  const response = await fetch(`${APIENDPOINST.deleteUserByIdPoint(id)}`, {
    method: 'DELETE'
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
