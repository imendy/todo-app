import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import TodoWrap from '../components/TodoWrap'
import Footer from '../components/Footer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Home: NextPage = () => {

  
  
  return (
    <div className="flex flex-col ">
      <Head>
        <title>Todo app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <TodoWrap />
     <div className="">
       <Footer  />
     </div>

   <ToastContainer />
      
    </div>
  )
}

export default Home