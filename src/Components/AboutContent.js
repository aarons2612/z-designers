import { Link } from "react-router-dom"
import "./AboutContent.css"
import pro1 from "../Assets/intro-bg.jpeg"
import pro2 from "../Assets/Hero-bg.png"
import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who we are!</h1>
            <p>Welcome to our company, where innovation meets precision! We specialize in designing 3D mechanical parts, providing top-notch 3D printing services, and delivering cutting-edge web development, UI design, and graphic design solutions. Our dedicated team ensures each project is executed with excellence, bringing your vision to life with unparalleled creativity and technical expertise.</p>
            <Link to="/contact" ><button className="btn">CONTACT</button></Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-top">
                    <img src={pro1} className="img" alt="img"/>
                </div>
                <div className="img-bottom">
                    <img src={pro2} className="img" alt="img"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent