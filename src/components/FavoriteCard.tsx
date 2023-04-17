import style from "../styles/Chain.module.css"
import { FaRegStar, FaStar } from "react-icons/fa"
import { useState } from "react"
import { deleteFavorite, sendFavorite } from "@/api/favorite"
import ModalAlarm from "./ModalAlarm"
import Link from "next/link"

export default function FavoriteCard({data}: {
    data: {
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
        comments: any ,
        alarm: any
      } 
    }){
    const [fav, setFav] = useState(data.favorite)
    const [modal, setModal] = useState(false)
    
    async function favChain(id: number){
        if(!fav){
            const result = await sendFavorite(id)
            if(result != "Created"){
                return
                
            }
            setFav(true)
        }else{
            const result = await deleteFavorite(id)
            if(result != "OK"){
                return
                
            }
            setFav(false)
        }
    }

    return(<>
        <div className={style.favorite}>
            <h2>Favorite <span onClick={()=> favChain(data.id)}>{fav ? <FaStar/> : <FaRegStar/> }</span></h2>
            <div><span>Alarm price</span> <button onClick={()=> setModal(true)}>+</button>
            <p>{data.alarm[0] ? data.alarm[0].valueGas : "No Alarms" }</p>
            </div>
            < ModalAlarm modal={modal} setModal={setModal} id={data.alarm[0] ?  data.alarm[0].id : 0} chainId={data.id}/>
        </div>
    </>)
}