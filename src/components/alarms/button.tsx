import { useEffect, useState } from "react";
import ModalAlarm from "../chain_id/ModalAlarm";

export default function Button({m, setReload, reload}:{m: any, setReload: any, reload:any}){
    const [modal, setModal] = useState(false)
    useEffect(()=>{
        if(reload){
            setReload(false)
            
        }else{
            setReload(true)
        }
        
    }, [modal])

    return(
        <>
            <button onClick={()=> setModal(true)}>+</button>
            <ModalAlarm modal={modal} setModal={setModal} id={m.id} chainId={m.chains.id}/>
        </>
        
    )
}