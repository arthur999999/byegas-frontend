import axios from "axios"

export async function sendFavorite(id: number) {
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/chains/favorite/${id}`, {}, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("authToken")}`,
            },
          } )
        return response.data
    } catch (error) {
        return error
    }
}

export async function deleteFavorite(id: number) {
  try {
      const response = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/chains/favorite/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        } )
      return response.data
  } catch (error) {
      return error
  }
}