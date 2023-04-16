import { sendRegister } from '@/api/auth'
import { CallPopModal } from '@/utils/CallPopModal'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext, useState } from 'react'
import { UserInfoContext } from '../../contexts/context'
import styles from '../styles/Register.module.css'



export default function Register() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const router = useRouter()

  const body = {
    name: name,
    email: email,
    password: password,
    confirmPassword: confirmPassword
  }
  const { setClassName } = useContext(UserInfoContext)
  const { setText } = useContext(UserInfoContext)
 

  async function register() {
    const result = await sendRegister(body)
    if(result == "OK"){
        router.push("/")
        return
    }
    CallPopModal(result.response.data, {setClassName, setText})
  }


  return (
    <>
      <div className={styles.login}>
        <Image src='/images/ethlogo1.png' alt='' width={250} height={140}/>
        <h2>Byegas</h2>
        <div>
          <input type="text" placeholder='name' onChange={(e) => { setName(e.target.value) }} value={name} />
          <input type="text" placeholder='e-mail' onChange={(e) => { setEmail(e.target.value) }} value={email} />
          <input type="password" placeholder='password' onChange={(e) => { setPassword(e.target.value) }} value={password}/>
          <input type="password" placeholder='confirm password' onChange={(e) => { setConfirmPassword(e.target.value) }} value={confirmPassword}/>
        </div>
        <button onClick={() => register()}>sign-up</button>
        <Link href={"/"}>
            <p>sign-in</p>
        </Link>
        
      </div>
    </>
  )

}