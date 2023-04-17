import style from "../styles/Chain.module.css"
import TablePrice from "./TablePrice"

export default function CardSpecific({data}: {
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
        comments: [],
        alarm: []
      } 
    }){
    return(
        <>
            <div className={style.card}>
                <h2>{data.name}</h2>
                <img src={`/images/${data.image}`}></img>
                <div>
                    <TablePrice data={data.dataStructured} />
                </div>
            </div>
        </>
    )
}