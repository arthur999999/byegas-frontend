import { getOneList } from "@/api/chains"
import CardSpecific from "@/components/chain_id/CardSpecific"
import CommentsCard from "@/components/chain_id/CommentsCard"
import FavoriteCard from "@/components/chain_id/FavoriteCard"
import TopBar from "@/components/TopBar"
import { CallPopModal } from "@/utils/CallPopModal"
import axios from "axios"
import { useRouter } from "next/router"
import { useCallback, useEffect, useState } from "react"
import style from "../../styles/Home.module.css"

export default function Chain() {
    const dataObject: {
        name: string,
        dataStructured: {
          Standart: {
            gwei: number,
            usd: number
          },
          Fast: {
            gwei: number,
            usd: number
          },
          Rapid: {
            gwei: number,
            usd: number
          }
        },
        favorite: boolean,
        image: string,
        id: number,
        comments: [],
        alarm: []
      }  = {
    name: "Loading...",
    dataStructured: {
      Standart: {
        gwei: 0,
        usd: 0
      },
      Fast: {
        gwei: 0,
        usd: 0
      },
      Rapid: {
        gwei: 0,
        usd: 0
      }
    },
    favorite: false,
    image: "Loading",
    id: 0,
    comments: [],
    alarm: []
  } 
    const [data, setData] = useState(dataObject)
    const [secondTime, setSecondTime] = useState(true)
    const router = useRouter()
    
    
    
   
      
    

    useEffect(()=> {
      const id =(router.query.id)
      const response =  getOneList(id).then((response)=>{
        if(response.name != "AxiosError"){
          setData(response)
          
        }
      }).catch((error) =>{
        return
      })
      
         if(!secondTime){
            setTimeout(()=> {
                setSecondTime(true)
            }, 5000)
         }else{
            setTimeout(()=> {
                setSecondTime(false)
            }, 5000)
         }
         
    }, [secondTime, router])
    return(
        <>
            <div className={style.home}>
            <TopBar/>
            <div className={style.box}>
                <CardSpecific data={data}/>
                <div>
                    <FavoriteCard data={data} />
                    <CommentsCard data={data}/>
                </div>
            </div>
          </div>
        </>
    )
}