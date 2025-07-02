
import FAQComponent from '@/app/components/FAQ'
import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import Tractor from '@/app/components/Tractor'
import React from 'react'

const page = () => {
  return (
    <div>

    <Header/>
 <Tractor/>
 <FAQComponent/>
    <Footer/>
    </div>
  )
}

export default page