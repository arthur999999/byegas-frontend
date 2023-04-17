import { getTelegram, postAlarm } from "@/api/alarm"
import { CallPopModal } from "@/utils/CallPopModal"
import { useContext, useState } from "react"
import { UserInfoContext } from "../../contexts/context"
import style from "../styles/Chain.module.css"

export default function ModalAlarm({modal, setModal, id, chainId}: {
    modal: any, setModal: any, id : any, chainId: number
}) {
    const [value, setValue] = useState("")
    const [show, setShow] = useState(false)
    const [telegram, setTelegram] = useState('')
    const [boolean, setBoolean] = useState(false)
    const { setClassName } = useContext(UserInfoContext)
    const { setText } = useContext(UserInfoContext)
    const body = {
        id: id ,
        valueGas: Number(value) ,
        inGwei: boolean
    }
    function close(){
        setModal(false)
        setShow(false)
    }

    async function create(){
        const result = await postAlarm(body, chainId)
        if(result != "Created"){
            CallPopModal(result.response.data, {setClassName, setText})
            return
        }
        setModal(false)
    }

    async function telegramGet(){
        const result = await getTelegram()
        if(typeof result !== "string"){
            CallPopModal(result.response.data, {setClassName, setText})
            return
        }
        setTelegram(result)
        setShow(true)
    }
    return(<>
        <div className={modal? style.alarm: style.hidden}>
            <div className={style.background}>
                <h2>Create Alarm</h2>
                <input type="text" placeholder="value gas"  onChange={(e) => { setValue(e.target.value) }} value={value} />
                <p>in Gwei?<input onChange={boolean? ()=> setBoolean(false) : ()=> setBoolean(true)} type="checkbox"  defaultChecked={false} /></p>
                <button onClick={()=> create()}>Create</button>
                <button onClick={()=> telegramGet()}>Generate Telegram code</button>
                
                
            </div>
            <button onClick={()=> close()}>X</button>
            <div className={show? style.telegram : style.hidden}>
                <div>
                    <h2>{`send to bot /register ${telegram}`}</h2>
                    <a href={"https://t.me/ByegasBot"  } target="_blank">https://t.me/ByegasBot</a>
                </div>  
            </div>
            </div>
            
    </>)
}