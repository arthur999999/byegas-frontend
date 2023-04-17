import axios from "axios"

export async function postAlarm(body: any, id: number){
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/alarms/${id}`, body, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("authToken")}`,
            },
          } )
        return response.data
    } catch (error) {
        return error
    }
}

export async function getTelegram(){
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/telegram/`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("authToken")}`,
            },
          } )
        return response.data
    } catch (error) {
        return error
    }
}