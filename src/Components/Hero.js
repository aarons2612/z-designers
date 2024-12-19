import "./Hero.css";
import IntroImg from "../Assets/intro-bg.jpeg";
import React, { useEffect, useState, useCallback } from 'react';
import { Link } from "react-router-dom";

const Hero = () => {
  const [scrollDirection, setScrollDirection] = useState(null);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isVisible, setIsVisible] = useState(true);  // Initially visible

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;

    if (scrollTop > lastScrollTop) {
      setScrollDirection('down');
    } else if (scrollTop < lastScrollTop) {
      setScrollDirection('up');
    }

    setLastScrollTop(scrollTop);
  }, [lastScrollTop]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    if (scrollDirection === 'down') {
      setIsVisible(false);
    } else if (scrollDirection === 'up') {
      setIsVisible(true);
    }
  }, [scrollDirection]);

  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src={IntroImg} alt="IntroImg" />
        </div>
        <div className={`content ${isVisible ? 'fade-in' : 'fade-out'}`}>
            <p className="typing-animation">HI, We are Z-Designers</p>
            <h1>Design & Development Studio</h1>
            <div className="buttons">
                <Link to="/services" className="btn">Services</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  );
}

export default Hero;
