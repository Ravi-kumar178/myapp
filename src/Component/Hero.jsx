import React from 'react'
/* import img1 from "../assets/Banner_1[963].jpg"
import img2 from "../assets/Banner_1.jpg"
import img3 from "../assets/Banner_3.jpg"
import img4 from "../assets/Banner_3.jpg" */

import img1 from "../assets/Banner_1.jpg"
import img2 from "../assets/Banner_3 (1) - Copy.jpg"
import img3 from "../assets/Untitled-4.jpg"
import img4 from "../assets/Untitled-5.jpg"
import { useState,useEffect } from 'react'
import { BsArrowRight } from 'react-icons/bs'
import "./Hero.css"
import { Link as ScrollLink } from "react-scroll";
import { Button } from '../Navbar/Button'


const images = [img1,img2,img3,img4];

function Hero() {

    const [value, setValue] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setValue((v) => {
          return v === 3 ? 0 : v + 1;
        });
      }, 4500);
      return () => clearInterval(interval);
    }, []);


    const scrollToSection = () => {
      const section = document.getElementById("form");
      debugger
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    };

  return (
    <div id='hero' className='heroFirstDiv'>
        <div className='relative heroSecondDiv' >
            <img src={images[value]} alt="img" width="100%" height={490} className='w-full h-[500px] heroBanner'/>
        </div>

    
    <button className='heroButton' onClick={scrollToSection}>Express Interest</button>
      
   
  
    </div>
  )
}

export default Hero