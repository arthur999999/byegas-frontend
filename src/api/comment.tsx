import axios from "axios"

type comment = {
    comment: string
}

export async function sendComment(id: number, body: comment) {
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/comments/${id}`, body, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("authToken")}`,
            },
          } )
        return response.data
    } catch (error) {
        return error
    }
}