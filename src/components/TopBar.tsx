import { useEffect, useState } from "react"
import style from "../styles/TopBar.module.css"
import { FaGasPump, FaBell, FaRegStar } from "react-icons/fa";
import UserModal from "./UserModal";

export default function TopBar() {

    const [name, setName] = useState("")
    const [image, setImage] = useState("https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg")
    const [show , setShow] = useState(false)
    useEffect(()=> {
        const nameGet = localStorage.getItem("userName")
        if(!nameGet){
            return
        }
        setName(nameGet)
        const imageGet = localStorage.getItem("userImage")
        if(!imageGet){
            return
        }
        setImage(imageGet)
      }, [])
    
    return(
        <>
            <div className={style.topbar}>
                
                    <p><FaGasPump className={style.icon}/> Byegas</p>
                    <p><FaBell className={style.icon}/> Alarms</p>
                    <p><FaRegStar className={style.icon}/>Favorites</p>
                    <p onClick={()=> setShow(true)} ><img  src={image} alt="" className={style.image}/> {name}</p>

                
            </div>
            <div className={show ? style.modal: style.hidden}>
                <UserModal setShow={setShow} setImage={setImage}/>
            </div>
            
            
        </>
    )
}