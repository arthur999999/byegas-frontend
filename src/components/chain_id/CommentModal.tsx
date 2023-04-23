import { sendComment } from "@/api/comment"
import { CallPopModal } from "@/utils/CallPopModal"
import { Dispatch, SetStateAction, useContext, useState } from "react"
import { UserInfoContext } from "../../../contexts/context"
import style from "../../styles/Comments.module.css"

export default function CommentModal({modal, setModal, id}: {modal: boolean, setModal: Dispatch<SetStateAction<boolean>>, id: number}){
    const [comment, setComment] = useState("")
    const { setClassName } = useContext(UserInfoContext)
    const { setText } = useContext(UserInfoContext)
    async function newComment(){
        const body = {
            comment: comment
        }
        const result = await sendComment( id, body )
        if(result == "OK"){
            setModal(false)
            return
        }
        CallPopModal("Error commenting", {setClassName, setText} )
    }

    return(
        <>
            <div className={modal ? style.modal : style.hidden}>
                <div>
                    <h2>New comment</h2>
                    <input name="comment" type="text" placeholder="comment" maxLength={50} minLength={1} onChange={(e) => { setComment(e.target.value) }} value={comment}/>
                    <button onClick={() => newComment()}>Send</button>
                </div>
                <button onClick={()=> setModal(false)}>X</button>
            </div>
        </>
    )
}