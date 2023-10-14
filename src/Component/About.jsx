import React from 'react'
import "./About.css"
import { FaWallet } from "react-icons/fa";

function About() {
  return (
    <div id='abt' className='about'>

        <div className='partnerHeading'>
              <div className='partnerSecondDiv'></div>
              <h1 className='partnerText'>About NHWIC</h1>
              <div className='partnerSecondDiv'></div>
          </div>

          <p className='aboutPara'>
            The National Health Writers & Influencers Convention-2023 is a premier gathering of healthcare writers, influencers, and thought leaders. This twoday event aims to equip attendees with the latest insights and tools to navigate the ever-evolving landscape of healthcare writing. Explore cuttingedge topics, engage with industry experts, and honor the champions of rural healthcare.
          </p>

         <a target='blank' className='btnanc' href='https://healfoundation.in/about-us'>
            <button className='aboutBtn'>
             <p>Visit our Website</p>
             <FaWallet/>
            </button>
         </a>  

    </div>
  )
}

export default About