import { deleteFavorite, sendFavorite } from "@/api/favorite"
import { Key, useState } from "react"
import style from "../../styles/Ranking.module.css"
import { FaRegStar, FaStar } from "react-icons/fa"
import { CallPopModal } from "@/utils/CallPopModal"
import { useRouter } from "next/router"

export default function Card({m, numRank}:{m: { 
    name: string,
    dataStructured: {
        gwei: number,
        usd: number
    },
    favorite: boolean,
    image: string,
    id: number
    }, numRank: number }){

    const [favorite, setFavorite] = useState(m.favorite)
    const router = useRouter()

    function selectChain(id: number){
        router.push(`/chain/${id}`)
    }

    async function favChain(id: number){
        if(!favorite){
            const result = await sendFavorite(id)
            if(result != "Created"){
                return
                
            }
            setFavorite(true)
        }else{
            const result = await deleteFavorite(id)
            if(result != "OK"){
                return
                
            }
            setFavorite(false)
        }
        

    }

    return(
        <>
        <div  className={style.card}>
                    <span onClick={()=> selectChain(m.id)}>{numRank + 1} <img src={`/images/${m.image}`} alt="chain logo" /></span>
                    <span onClick={()=> selectChain(m.id)}>{m.name}</span>
                    <span onClick={()=> favChain(m.id)}>{favorite? <FaStar/> : <FaRegStar/>}</span>
                    <span>{(m.dataStructured.usd * 10000).toFixed(0)} /10K USD</span>
                </div>
        </>
    )
}