import React from 'react'

import  { useState } from 'react';
import './Partners.css'; // Import your CSS file for styling

import image1 from "../assets/ministry of family and health welfare logo[958].jpg"
import image2 from "../assets/nin[959].png"
import image3 from "../assets/5.png"
import image4 from "../assets/18.png"
import image5 from "../assets/10Copy1.png"
import image6 from "../assets/6.png"
import image7 from "../assets/16.png"
import image8 from "../assets/15 Copy1.png"



function Partners() {

  const [showMore, setShowMore] = useState(false);

  const images = [
     image1,
     image2,
     image3,
     image4,
     image5,
     image6,
     image7,
     image8,
    
     
  ];

  const visibleImages = showMore ? images : images.slice(0, 8);

  return (
    
      <div id='partners' className='firstPartner'>
  
        <div className='partnerHeading'>
              <div className='partnerSecondDiv'></div>
              <h1 className='partnerText'>50+ Industry Associates</h1>
              <div className='partnerSecondDiv'></div>
          </div>

          <div className='partnerHeading'>
              <div className='partnerSecondDiv'></div>
              <h1 className='partnerText'>50+ Renowned Speakers</h1>
              <div className='partnerSecondDiv'></div>
          </div>

          <div className='partnerHeading'>
              <div className='partnerSecondDiv'></div>
              <h1 className='partnerText'>50+ Renowned Sponsors</h1>
              <div className='partnerSecondDiv'></div>
          </div>
        
      {/*<div className="partner">
        {visibleImages.map((image, index) => (
          <img key={index} className='partnerImage' src={image} alt={`Image ${index + 1}`} />
        ))}
        </div>
        */}
       
      </div>
        
  );
}

export default Partners