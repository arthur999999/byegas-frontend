import axios from "axios"

export async function getAllList(){
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/chains/list/all`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("authToken")}`,
            },
          } )
        return response.data
    } catch (error) {
        return error
    }
}

export async function getOneList(id: string | string[] | undefined){
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/chains/listone/${id}`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("authToken")}`,
            },
          } )
        return response.data
    } catch (error) {
        return error
    }
}
