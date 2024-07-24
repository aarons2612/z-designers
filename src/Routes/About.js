import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import HeroImg from '../Components/HeroImg'
import AboutContent from '../Components/AboutContent'

const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg heading="ABOUT US" text="Providing solutions on 3D Mechanical Designs"/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About