
import Commercial from '@/app/components/Commercial'
import FAQComponent from '@/app/components/FAQ'
import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import React from 'react'
import { Fa500Px } from 'react-icons/fa'

const page = () => {
  return (
    <div>

    <Header/>
 <Commercial/>
 <FAQComponent/>
    <Footer/>
    </div>
  )
}

export default page