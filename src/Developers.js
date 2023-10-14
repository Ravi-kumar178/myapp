import React from 'react';
import './App.css';
import Hero from './Component/Hero';
import Overview from './Component/Overview';
import Agenda from './Component/Agenda';
import Gallery from './Component/Gallery';
import Partners from './Component/Partners';
import PreviousSpeaker from './Component/PreviousSpeaker';
import PreviousDelegates from './Component/PreviousDelegates';
import PastAssociates from './Component/PreviousAssociates';
import Contactus from './Component/Contactus';
import About from './Component/About';
import Footer from './Component/Footer';

export default function Developers() {
  return(

   <div className='overflow'>
     <Hero/>
     <Overview/>
     <Agenda/>
     <Gallery/>
     <Partners/>
     <PreviousSpeaker/>
     <PreviousDelegates/>
     <PastAssociates/>
     <Contactus/>
     <About/>
     <Footer/>
   </div>

  );
}
