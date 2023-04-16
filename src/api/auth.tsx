import axios from "axios"


export async function sendLogin(body: login) {
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/sign-in`, body)
        return response.data
    } catch (error) {
        return error
    }
}

export async function sendRegister(body: register) {
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/sign-up`, body)
        return response.data
    } catch (error) {
        return error
    }
}

type register = {
    name: string,
    email: string,
    password: string,
    confirmPassword: string
}

type login = {
    email: string,
    password: string
}