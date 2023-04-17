import { CallPopModal } from "@/utils/CallPopModal"
import axios from "axios"
import Image from "next/image"
import { useCallback, useContext, useEffect, useState } from "react"
import { UserInfoContext } from "../../contexts/context"
import style from "../styles/Ranking.module.css"
import {  FaRedo } from "react-icons/fa"
import { sendFavorite } from "@/api/favorite"
import Card from "./Card"

export default function Ranking() {
    const [data, setData] = useState([])
    const [time, setTime] = useState(true)
    const [secondTime, setSecondTime] = useState(true)


    function limitTime(){
        if(time){
            getRank()
        }
        setTime(false)

    }
    const handleCallBack = useCallback(async()=> {
        try {
            const respose = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/chains/list/all`,{
                timeout: 6000,
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("authToken")}`,
                },
              } )
            setData(respose.data)
            console.log(respose.data)
        } catch (error) {
            console.log(error)
        }
        
        
    }, [])
    
    useEffect(()=> {

        handleCallBack()
         if(!secondTime){
            setTimeout(()=> {
                setSecondTime(true)
            }, 20000)
         }else{
            setTimeout(()=> {
                setSecondTime(false)
            }, 20000)
         }
         
    }, [secondTime])

    function getRank() {
         const respose = axios.get(`${process.env.NEXT_PUBLIC_API_URL}/chains/list/all`,{
            timeout: 6000,
            headers: {
              Authorization: `Bearer ${localStorage.getItem("authToken")}`,
            },
          } )
         respose.then((data)=>{
            console.log(data.data)
            if(!data.data[0] || !data.data[1] || !data.data[2]){
                return
            }
            setData(data.data)
         }).catch((error)=>{
            console.log(error)
         })
         setTimeout(()=> {
            setTime(true)
        }, 10000)
    
    }

    return(
        <>
        <div className={style.back}>
            {data[0] && data[1] && data[2] ? data.map((m: { 
            name: string,
            dataStructured: {
                gwei: number,
                usd: number
            },
            favorite: boolean,
            image: string,
            id: number
            }, key)=> ( <Card m={m} key={key} numRank={key}/>)) : "Loading..."}
        </div>
            
        </>
    )
}