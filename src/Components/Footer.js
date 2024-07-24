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
            </div>
            <div className="email">
            <h4><FaMailBulk size={20} style={{color:"white", marginRight:"2rem"}}/>zdesigners@gmail.com</h4>
            </div>
            </div>

            <div className="right">
                <h4>About the company</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. </p>
                <div className="social">
                <Link to="https://www.facebook.com/share/vzsfe59KN4JF8Ryv/?mibextid=qi2Omg"><FaFacebook size={30} style={{color:"white", marginRight:"1rem"}}/></Link>
                <FaInstagram size={30} style={{color:"white", marginRight:"1rem"}}/>
                <FaLinkedin size={30} style={{color:"white", marginRight:"1rem"}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer