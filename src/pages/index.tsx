import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import styles from '../styles/Login.module.css'
import { sendLogin } from '@/api/auth'



export default function Login({}) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const body = {
    email,
    password
  }

  async function login() {
    const result = await sendLogin(body)
    console.log(result)
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


