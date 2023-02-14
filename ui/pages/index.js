import Head from 'next/head'
import Image from 'next/image'

// import styles from '@/styles/Home.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from '../styles/About.module.scss'
import Featured from '@/components/Featured'
import PizzaList from '@/components/PizzaList'
import axios from 'axios'
import AddButton from '@/components/AddButton'
import Add from '@/components/Add'
import { useState } from 'react'

// export default function Home({ data, }) {

//   return (
//     <div>App</div>
//   )
// }

export default function Home({ data, isAdmin, }) {

  const [open, setOpen] = useState(false)

  return (
    <>

      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Hello ..." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Featured />
      {isAdmin && <> <AddButton setOpen={setOpen} /> </>}
      <PizzaList pizzaList={data} />
      {open && <>      <Add setOpen={setOpen} />      </>}

    </>
  )
}

// ngets

export async function getServerSideProps(ctx) {
  const myCookie = ctx.req?.cookies || ""
  let isAdmin = false;
  if (myCookie.token === process.env.TOKEN) {
    isAdmin = true;
  }
  const url = 'http://localhost:3000/api/products';
  const res = await axios.get(url)

  return {
    props: {
      data: res.data,
      isAdmin,
    }
  }
}