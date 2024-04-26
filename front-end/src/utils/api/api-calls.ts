import { APIENDPOINST } from './api-urls'

export default async function GetPermsAll (): Promise<any> {
  const headers = new Headers()
  headers.append('accept', 'application/json')

  const options = {
    method: 'GET',
    headers
  }

  const response = await fetch(`${APIENDPOINST.getPermsAllPoint}`, options)
  const data = await response.json()
  console.log(data)
  return data
}
