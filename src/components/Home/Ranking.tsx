import { CallPopModal } from "@/utils/CallPopModal"
import axios from "axios"
import Image from "next/image"
import { useCallback, useContext, useEffect, useState } from "react"
import { UserInfoContext } from "../../../contexts/context"
import style from "../../styles/Ranking.module.css"
import {  FaRedo } from "react-icons/fa"
import { sendFavorite } from "@/api/favorite"
import Card from "./Card"
import { getAllList } from "@/api/chains"

export default function Ranking() {
    const [data, setData] = useState([])
    const [secondTime, setSecondTime] = useState(true)



    const handleCallBack = useCallback(async()=> {
            const response = await getAllList()
            if(response[0]){
                setData(response)
            }
            console.log(response)
       
        
        
    }, [])
    
    useEffect(()=> {

        handleCallBack()
         if(!secondTime){
            setTimeout(()=> {
                setSecondTime(true)
            }, 10000)
         }else{
            setTimeout(()=> {
                setSecondTime(false)
            }, 10000)
         }
         
    }, [secondTime])

    

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