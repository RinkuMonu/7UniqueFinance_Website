
import FAQComponent from '@/app/components/FAQ'
import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import Two from '@/app/components/Two'
import React from 'react'
import { Fa500Px } from 'react-icons/fa'

const page = () => {
  return (
    <div>

    <Header/>
 <Two/>
 <FAQComponent/>
    <Footer/>
    </div>
  )
}

export default page