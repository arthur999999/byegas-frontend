import { postImage } from "@/api/image"
import { CallPopModal } from "@/utils/CallPopModal"
import { useRouter } from "next/router"
import { useContext, useState } from "react"
import { UserInfoContext } from "../../contexts/context"

export default function UserModal({setShow, setImage}: {setShow: any, setImage: any}) {
    const router = useRouter()
    const [url, setUrl] = useState("")
    const { setClassName } = useContext(UserInfoContext)
    const { setText } = useContext(UserInfoContext)

    function signOut(){
        localStorage.removeItem("authToken")
        localStorage.removeItem("userName")
        localStorage.removeItem("userImage")
        router.push("/")
    }

    async function changeImage(){
        const result = await postImage({url: url})
        if(result != "OK"){
            const text: string = result.response.data
            CallPopModal(text, {setClassName, setText})
            return
        }
        setShow(false)
        setImage(url)
        localStorage.setItem("userImage", url)
    }

    
    return(
        <>
            <p>
                <button onClick={()=> setShow(false)}>X</button>
            </p>
            <div>
            <button onClick={() => signOut()}>Sign Out</button>
            
            <p>Change Image</p>
            <input type="text" placeholder="URL image" onChange={(e) => { setUrl(e.target.value) }} value={url}/>
            <button onClick={() => changeImage()}>Change</button>
            </div>

        </>
    )
}