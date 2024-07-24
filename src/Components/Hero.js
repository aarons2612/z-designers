import "./Hero.css";
import IntroImg from "../Assets/intro-bg.jpeg";
import React from 'react'
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img"
            src={IntroImg} alt="IntroImg"/>
        </div>
        <div className="content">
            <p>HI, We are Z-Designers</p>
            <h1>Design & Development Studio</h1>
            <div className="">
                <Link to="/services" className="btn">Services</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default Hero