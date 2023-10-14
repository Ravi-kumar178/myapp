import React, { useState } from 'react';
import { Button } from './Button'
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import { Link as ScrollLink } from "react-scroll";
import "./Navbar.css"

import { BiChevronDown } from "react-icons/bi";

import img from "../assets/Final Logo of 8th National Health Writers & Influencers Convention-2023[787].png"




function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [secondDropDownOpen, setSecondDropDownOpen] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => {
    setClick(false);
    setDropdownOpen(false);
    
     // Close the dropdown when a link is clicked
  };

 const closeMobileMenu2 = () => {
    setClick(false);
    setSecondDropDownOpen(false);
     // Close the dropdown when a link is clicked
  };

 const toggleDropdown2 = () => {
    setSecondDropDownOpen(!secondDropDownOpen);
  }

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
   
  };



  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setDropdownOpen(false);
      setSecondDropDownOpen(false); // Close the dropdown after clicking a dropdown item
    }
  };

  return (
    <>
      <nav id='nav' className="navbar">
        <ScrollLink to="hero" smooth={true} duration={500} className="navbar-logo" onClick={closeMobileMenu}>
           <img src={img} className='logoImg'></img>
        </ScrollLink>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <ScrollLink to="hero" smooth={true} duration={500} className="nav-links nav-color gridItem" onClick={closeMobileMenu}>
              Home
            </ScrollLink>
          </li>
          <li className="nav-item">
            <ScrollLink to="abt" smooth={true} duration={500} className="nav-links nav-color gridItem" onClick={closeMobileMenu}>
              About
            </ScrollLink>
          </li>
          <li className="nav-item" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
            <div  className="nav-up nav-chevron nav-color gridItem" onClick={closeMobileMenu}>
             <p>Upcoming Convention</p>
             <BiChevronDown/>
            </div>
            {dropdownOpen && (
              <ul className="dropdown-menu">
                <li>
                  <div
                    onClick={() => scrollToSection('agenda')}
                    className="nav-links dropDownborder"
                  >
                    Agenda
                  </div>
                </li>
                <li>
                  <div
                    onClick={() => scrollToSection('delegates')}
                    className="nav-links dropDownborder"
                  >
                    Delegates
                  </div>
                </li>
                <li>
                  <div
                    onClick={() => scrollToSection('partners')}
                    className="nav-links dropDownborder"
                  >
                    Partners
                  </div>
                </li>

                <li>
                  <div
                    onClick={() => scrollToSection('partners')}
                    className="nav-links dropDownborder"
                  >
                    Speakers
                  </div>
                </li>

                <li>
                  <div
                    onClick={() => scrollToSection('partners')}
                    className="nav-links dropDownborder"
                  >
                    Sponsors
                  </div>
                </li>
              </ul>
            )}
          </li>
          <li className="nav-item" onMouseEnter={toggleDropdown2} onMouseLeave={toggleDropdown2}>
            <div className="nav-links nav-chevron nav-color gridItem" onClick={closeMobileMenu2}>
              <p>Previous Conventions</p>
              <BiChevronDown/>
            </div>
            {secondDropDownOpen && (
              <ul className="dropdown-menu">
                  <li>
                  <div
                    onClick={() => scrollToSection('previousspeakers')}
                    className="nav-links dropDownborder"
                  >
                    Speakers
                  </div>
                </li>

                <li>
                  <div
                    onClick={() => scrollToSection('previousdelegates')}
                    className="nav-links dropDownborder"
                  >
                    Delegates
                  </div>
                </li>

                <li>
                  <div
                    onClick={() => scrollToSection('pastAssociates')}
                    className="nav-links dropDownborder"
                  >
                    Partners
                  </div>
                </li>

                <li>
                  <div
                    onClick={() => scrollToSection('pastAssociates')}
                    className="nav-links dropDownborder"
                  >
                    Sponsors
                  </div>
                </li>
              </ul>
            )}
          </li>
         
        </ul>
        <ScrollLink to='form'smooth={true} duration={500}>
            <button className='navBtn'>Express Interest</button>
        </ScrollLink>
       
      </nav>

      
    </>
  );
}

export default Navbar;