import axios from "axios";

type url = {
    url: string
}

export async function postImage(body: url){
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/image`, body, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("authToken")}`,
            },
          } )
        return response.data
    } catch (error) {
        return error
    }
}