import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import styles from '../styles/Register.module.css'



export default function Register() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  return (
    <>
      <div className={styles.login}>
        <Image src='/images/ethlogo1.png' alt='' width={250} height={140}/>
        <h2>Byegas</h2>
        <div>
          <input type="text" placeholder='name'  />
          <input type="text" placeholder='e-mail'  />
          <input type="password" placeholder='password' />
          <input type="password" placeholder='confirm password'/>
        </div>
        <button>sign-up</button>
        <Link href={"/"}>
            <p>sign-in</p>
        </Link>
        
      </div>
    </>
  )

}