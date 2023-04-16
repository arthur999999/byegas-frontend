import { createContext, useState } from "react";

type context = {
    className: boolean,
    token: string,
    setToken: any,
    setClassName: any,
    text: string,
    setText: any
}

export const UserInfoContext = createContext<context>({ className: true, token: "", setToken: 1, text: "", setClassName: 1, setText: 1  })

export const UserInfoProvider = ({ children }: {children: any}) => {
    const [token, setToken] = useState("")
    const [ className, setClassName] = useState(true)
    const [ text, setText] = useState("")

    return <UserInfoContext.Provider value={{token, setToken, className, setClassName, text, setText}}>{children}</UserInfoContext.Provider>

}