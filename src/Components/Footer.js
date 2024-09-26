import { FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";
import "./Footer.css";

import React from 'react'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"white", marginRight:"2rem"}}/>
                
                <div>
                    <p>FXEC, Vannarpettai.</p>
                </div>
                </div>
            
            <div className="phone">
            <h4><FaPhone size={20} style={{color:"white", marginRight:"2rem"}}/>+91 7092631585</h4>
            <h4><FaPhone size={20} style={{color:"white", marginRight:"2rem"}}/>+91 9655484162</h4>
            </div>
            <div className="email">
            <h4><FaMailBulk size={20} style={{color:"white", marginRight:"2rem"}}/>zdesigners07@gmail.com</h4>
            </div>
            </div>

            <div className="right">
                <h4>About the company</h4>
                <p>©Z-designers. All rights reserved. Specializing in 3D Mechanical Design, 3D Printing and Web Development. Crafted with care and precision to bring your vision to life.</p>
                <div className="social">
                <Link to="https://www.facebook.com/share/vzsfe59KN4JF8Ryv/?mibextid=qi2Omg"><FaFacebook size={30} style={{color:"white", marginRight:"1rem"}}/></Link>
                <Link to="https://www.instagram.com/z.designers_?igsh=bTlxNGt1Y3pjY3p1"><FaInstagram size={30} style={{color:"white", marginRight:"1rem"}}/></Link>
                <Link to="https://www.linkedin.com/in/z-designer-192147301"><FaLinkedin size={30} style={{color:"white", marginRight:"1rem"}}/></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer