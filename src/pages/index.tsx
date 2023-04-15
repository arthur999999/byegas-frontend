import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import styles from '../styles/Login.module.css'



export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <>
      <div className={styles.login}>
        <Image src='/images/ethlogo1.png' alt='' width={250} height={140}/>
        <h2>Byegas</h2>
        <div>
          <input type="text" placeholder='e-mail'  />
          <input type="password" placeholder='password' />
        </div>
        <button>sign-in</button>
        <Link href={"/register"}>
          <p>sign-up</p>
        </Link>
        
      </div>
    </>
  )

}


