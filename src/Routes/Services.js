import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import HeroImg from '../Components/HeroImg'
import PricingCards from '../Components/PricingCards'
import Work from '../Components/Work'

const Services = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg heading="SERVICES" text="Our recent Services"/>
      <Work/>
      <PricingCards/>
      <Footer/>
    </div>
  )
}

export default Services