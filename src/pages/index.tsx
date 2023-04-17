import Image from 'next/image'
import Link from 'next/link'
import { useContext, useEffect, useState } from 'react'
import styles from '../styles/Login.module.css'
import { sendLogin } from '@/api/auth'
import { UserInfoContext } from '../../contexts/context'
import { CallPopModal } from '@/utils/CallPopModal'
import { useRouter } from 'next/router'



export default function Login({}) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { setClassName } = useContext(UserInfoContext)
  const { setText } = useContext(UserInfoContext)
  const router = useRouter()
  useEffect(()=> {
    const token = localStorage.getItem("authToken")
    if(token) {
      router.push("/home")
    }
  }, [])
  

  const body = {
    email,
    password
  }

  async function login() {
    const result = await sendLogin(body)
    if(!result.token){
      CallPopModal(result.response.data, {setClassName, setText})
      return
    }
    localStorage.setItem("authToken", result.token)
    localStorage.setItem("userName", result.name)
    if(result.image != undefined){
      localStorage.setItem("userImage", result.image)
    }
    router.push("/home")

  }

  return (
    <>
      <div className={styles.login}>
        <Image src='/images/ethlogo1.png' alt='' width={250} height={140}/>
        <h2>Byegas</h2>
        <div>
          <input type="text" placeholder='e-mail' onChange={(e) => { setEmail(e.target.value) }} value={email} />
          <input type="password" placeholder='password' onChange={(e) => { setPassword(e.target.value) }} value={password} />
        </div>
        <button onClick={() => login()}>sign-in</button>
        <Link href={"/register"}>
          <p>sign-up</p>
        </Link>
        
      </div>
    </>
  )

}


