import TopBar from "@/components/TopBar";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import style from "../styles/Home.module.css"

export default function Home(){
    const [ token, setToken ] = useState("")
    const router = useRouter()
    useEffect(()=> {
        const tokenGet = localStorage.getItem("authToken")
        if(!tokenGet) {
          router.push("/")
          return
        }
        setToken(tokenGet)
      }, [])
    return (
        <>
          <div className={style.home}>
            <TopBar/>
            <h2>Ranking</h2>
          </div>
            
        </>
    )
}