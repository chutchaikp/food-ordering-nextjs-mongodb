import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
// import styles from '@/styles/Home.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from '../styles/About.module.scss'
import Featured from '@/components/Featured'
import PizzaList from '@/components/PizzaList'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>

      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Hello ..." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Featured />
      <PizzaList />

    </>
  )
}
