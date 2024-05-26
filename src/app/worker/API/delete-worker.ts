import { APIENDPOINST } from "@/utils/api/api-urls"

  

export const deleteWorker = async(id: number) => {
    const response = await fetch(`${APIENDPOINST.deleteUserByIdPoint(id)}`,{
        method: 'DELETE',

    
})

console.log('Response:', response)


if (!response.ok){
    return undefined
}

return {status: response.status}
}