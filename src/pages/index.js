import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'

import ScanPopup from '../pages/scaner/ScanPopup'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
  
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <ScanPopup/>
    </>
  )
}
