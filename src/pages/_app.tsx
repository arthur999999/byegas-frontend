import '../styles/reset.css'
import type { AppProps } from 'next/app'
import { UserInfoContext, UserInfoProvider } from "../../contexts/context"
import { PopModal } from '@/components/PopModal'
import { useContext } from 'react'

export default function App({ Component, pageProps }: AppProps) {

  return(
  <UserInfoProvider>
    <Component {...pageProps} />
    <PopModal/>
  </UserInfoProvider>
  )
}
