import { useContext, useState } from "react"
import { UserInfoContext } from "../../contexts/context"
import styles from "../styles/PopModal.module.css"

export function PopModal() {
    const {className} = useContext(UserInfoContext);
    const {text} = useContext(UserInfoContext);
    return(
        <>
            <div className={className ?  styles.hidden : styles.pop }>
                {text}
            </div>
            
        </>
    )
}