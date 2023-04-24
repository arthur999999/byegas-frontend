import { getAlarms } from "@/api/alarm"
import { useCallback, useEffect, useState } from "react"
import style from "../../styles/Alarms.module.css"
import ModalAlarm from "../chain_id/ModalAlarm"
import Button from "./button"

export default function AlarmsCards() {
    const [alarms, setAlarms] = useState([])
    const [reload, setReload] = useState(false)

    const handleCallBack = useCallback(async()=> {
        const result = await getAlarms()
        if(result[0]){
            setAlarms(result)
            console.log(result)
        }
    }, [])

    useEffect(()=> {
        handleCallBack()
    }, [ ,reload])
    return(<>
        <div className={style.alarm}>
            {alarms[0] ?  alarms.map((m: any, key) => {
                return(<>
                <div key={key} className={style.alarmCard}>
                    <p>{m.chains.name}</p>
                    <span>Price Alarm</span>
                    <span>{m.valueGas}{m.inGwei? "GWEI" : "USD"}</span>
                    <Button m={m} setReload={setReload} reload={reload}/>
                </div>
                </>)
                
            }) : <h3>No Alarms</h3>}
         </div>
    </>)
}