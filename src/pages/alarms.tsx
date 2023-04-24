import AlarmsCards from "@/components/alarms/alarmsCards";
import TopBar from "@/components/TopBar";
import style from "../styles/Home.module.css"

export default function Alarms(){
    return(
        <>
            <div className={style.home}>
            <TopBar/>
            <div className={style.alarm}>
                <h2>Alarms</h2>
                <AlarmsCards/>
            </div>
            </div>
        </>
    )
}