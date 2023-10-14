import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';
import { ScrollLink } from 'react-scroll';

export function Button() {


  const scrollToSection = () => {
    const section = document.getElementById("contactus");
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
           <button className="profile" onClick={scrollToSection}>Express Interest</button>
    </div> 
  );
}
