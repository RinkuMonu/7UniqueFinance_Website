import Car from '@/app/components/Car'
import FAQComponent from '@/app/components/FAQ'
import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import React from 'react'

const page = () => {
  return (
    <div>

    <Header/>
    <Car/>
    <FAQComponent/>
    <Footer/>
    </div>
  )
}

export default page