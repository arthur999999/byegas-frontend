import { useEffect, useState } from "react"
import style from "../../styles/Comments.module.css"
import CommentModal from "./CommentModal"

export default function CommentsCard({data}: {
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
        comments: any,
        alarm: any
      } 
    }) {
    const [modal, setModal] = useState(false)
    const [comments, setComments] = useState([])
    useEffect(()=>{
        setComments(data.comments)
    }, [modal])
    return(<>
        <div className={style.comment}>
            <div className={style.title}><h2>Comments</h2> <button onClick={()=> setModal(true)}>+</button></div>
            <div className={style.background}>
                {comments? comments.map((m: any, key)=>{
                   return( <div key={key}>
                            <img src={m.users.image[0]? m.users.image[0].imageUrl : "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg"} alt="" height={40} width={40}/>
                            <div className={style.commentCard}>
                                <p>{m.users.name}</p>
                                <span>{m.text}</span>
                            </div>
                            
                        </div>)
                }): "No comments"}
            </div>
        </div>
        <CommentModal modal={modal} setModal={setModal} id={data.id}/>
    </>)
}