import React, { useRef } from 'react'
import { useState } from 'react'
import "./PreviousSpeaker.css"

import image1 from "../assets/hee1/Dr. Harshvardhan.jpg"
import image2 from "../assets/hee1/Murli Manohar Joshi.jpg"
import image3 from "../assets/hee1/Mansukh Mandacviya.jpg"
import image4 from "../assets/hee1/Bharti_Pravin_Pawar[903].jpg"
import image5 from "../assets/hee1/Dr. Ghulam Nabi Azad.jpg"
import image6 from "..//assets/hee1/Dr. Chandrakant Pandav.jpg"
import image7 from "../assets/hee1/R Shankar.jpg"
import image8 from "../assets/hee1/Dr Annop Mishra.jpg"
import image9 from "../assets/hee1/Dr. Ashok Seth.jpg"
import image10 from "../assets/hee1/CHARLAKOLA-LAXMA-REDDY.jpg"
import image11 from "../assets/hee1/Mohsin Wali.jpg"
import image12 from "../assets/hee1/Dr. Harit Chaturvedi.jpg"
import image13 from "../assets/hee1/Shashank Joshi.jpg"
import image14 from "../assets/hee1/Lothar Pirc.jpg"
import image15 from "../assets/hee1/Dinesh-C-Sharma-02.jpg"
import image16 from "../assets/hee1/K G Suresh.jpg"
import image17 from "../assets/hee1/Sudarshan Jain.jpg"
import image18 from "../assets/hee1/Dr. VS Bedi.jpg"
import image19 from "../assets/hee1/Dr. DS Rana.png"
import image20 from "../assets/hee1/Bishow_Parajuli.jpg"
import image21 from "../assets/hee1/Dr. Berna.jpg"
import image22 from "../assets/hee1/arjun khandare.jpg"
import image23 from "../assets/hee1/Suneeti Toteja.jpg"
import image24 from "../assets/hee1/Meera Mishra.jpg"
import image25 from "../assets/hee1/rebeca lopez.jpg"
import image26 from "../assets/hee1/Chef-Sanjeev-Kapoor-1x1.jpg"



function PreviousSpeaker() {

    const [showMore, setShowMore] = useState(false);

      const targetSectionRef = useRef(null);

      function ScrollToSection(){
        targetSectionRef.current.scrollIntoView({ behavior: 'auto' });
      }

     function onClickShowLess(){
        setShowMore(false);
     }
 
     function onClickShowMore(){
        setShowMore(true);
     } 
  

     function onClickHandler(){
       console.log("Show less occurs?");
        onClickShowLess();
       console.log("show less occurs");
        ScrollToSection();
        console.log("scroll happens");
     }

  /*   const images = [
       image1,
       image2,
       image3,
       image4,
       image5,
       image6,
       image7,
       image8,
       image9,
       image10,
       image11,
       image12,
       image13,
       image14,
       image15,
       image16,
       image17,
       image18,
       image19,
       image20,
       image21,
       image22,
       image23,
       image24,
       image25,
       
    ]; */
  
    /* const visibleImages = showMore ? images : images.slice(0, 6); */

  return (
    <div id='previousspeakers' className='firstSpeaker'>

      <div ref={targetSectionRef} className='speakerHeading'>
          <div className='partnerSecondDiv'></div>
          <h1 className=''>Previous Key Speakers</h1>
          <div className='partnerSecondDiv'></div>
      </div>
    
       <div>
          {
            !showMore?
            (
              <div className='speakerFourCardFirstDiv'>

               <div className="speakerFourCardSecondDiv flex flex-row  mx-auto  ">
                  <div className="speakerFourCardThirdDiv w-[23%] h-[450px]  imagee2 rounded-md mx-auto relative group">
                    <img src={image1} className="speakerprevCardImage w-[76%] mx-auto mt-2  group-hover:opacity-80 h-[230px] imgee" ></img>
                   <div className="flex speakerFourCardFourDiv  flex-col  left-2  ml-[50px] space-y-3">
                     <h1 className="speakerFourCardHeading absolute text-[#1c1e56]  font-bold text-center text-xl bottom-[145px] left-[60px] mt-2 z-5">Dr. Harsh Vardhan</h1>
                     <p className="speakerFourCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[90px] text-center z-15 ">Former Minister,</p>
                     <p className="speakerFourCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[60px] text-center z-15 ">Health and Family Welfare,</p>
                     <p className="speakerFourCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[70px] text-center left-[65px]  z-15 ">Science and Technology,</p>
                     <p className="speakerFourCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[50px] left-[60px]  text-center z-15 ">Minister of Earth Sciences,</p>
                     <p className="speakerFourCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[30px] left-[70px]  text-center z-15 ">Government of India</p>
                   </div>
                     
                  </div>

                  <div className="speakerFourCardThirdDiv w-[23%] h-[450px]  imagee2 rounded-md mx-auto relative group">
                    <img src={image2} className="speakerprevCardImage w-[76%] mx-auto mt-2  group-hover:opacity-80 h-[230px] imgee" ></img>
                   <div className=" speakerFourCardFourDiv flex flex-col  left-2  ml-[50px] space-y-3">
                     <h1 className="speakerFourCardHeading absolute text-[#1c1e56]  font-bold text-center text-xl bottom-[145px] left-[20px] mt-2 z-5">Shree Murli Manohar Joshi</h1>
                     <p className="speakerFourCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[90px] text-center z-15 ">Former Minister,</p>
                     <p className="speakerFourCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[60px] text-center z-15 ">Human Resource Development,</p>
                     <p className="speakerFourCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[70px] text-center left-[65px]  z-15 ">Science and Technology,</p>
                     
                     <p className="speakerFourCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[50px] left-[70px]  text-center z-15 ">Government of India</p>
                   </div>
                     
                  </div>

                  <div className="speakerFourCardThirdDiv w-[22%] h-[450px]  imagee2 rounded-md mx-auto relative group">
                    <img src={image3} className="speakerprevCardImage w-[76%] mx-auto mt-2  group-hover:opacity-80 h-[230px] imgee" ></img>
                   <div className=" speakerFourCardFourDiv flex flex-col  left-2  ml-[50px] space-y-3">
                     <h1 className="speakerFourCardHeading absolute text-[#1c1e56]  font-bold text-center text-xl bottom-[145px] left-[30px] mt-2 z-5">Dr. Mansukh Mandaviya</h1>
                     <p className="speakerFourCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[60px] text-center z-15 ">Hon'ble Union Minister for</p>
                     <p className="speakerFourCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[60px] text-center z-15 ">Health and Family Welfare,</p>
                     <p className="speakerFourCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[70px] text-center left-[65px]  z-15 ">Chemicals and Fertilizers</p>
                     <p className="speakerFourCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[50px] left-[80px]  text-center z-15 ">Government of India</p>
                   </div>
                     
                  </div>

                  <div className="speakerFourCardThirdDiv w-[23%] h-[450px]  imagee2 rounded-md mx-auto relative group">
                    <img src={image4} className="speakerprevCardImage w-[76%] mx-auto mt-2  group-hover:opacity-80 h-[230px] imgee" ></img>
                   <div className=" speakerFourCardFourDiv flex flex-col  left-2  ml-[50px] space-y-3">
                     <h1 className="speakerFourCardHeading absolute text-[#1c1e56]  font-bold text-center text-xl bottom-[145px] left-[35px] mt-2 z-5">Dr. Bharti Pravin Pawar</h1>
                     <p className="speakerFourCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[70px] text-center z-15 ">Hon'ble Minister of State,</p>
                     <p className="speakerFourCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[65px] text-center z-15 ">Health and Family Welfare,</p>
                     <p className="speakerFourCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[70px] left-[80px]  text-center z-15 ">Government of India</p>
                   </div>
                     
                  </div>
               </div>

              </div>
            )
            :
            (
              <div className='speakerFourCardFirstDiv'>

               <div className="speakerEightCardSecondDiv flex flex-row  mx-auto  ">
                  <div className="speakerEightCardThirdDiv w-[23%] h-[450px]  imagee2 rounded-md mx-auto relative group">
                    <img src={image1} className="speakerprevCardImage w-[76%] mx-auto mt-2  group-hover:opacity-80 h-[230px] imgee" ></img>
                   <div className="EightCardFourthDiv flex flex-col  left-2  ml-[50px] space-y-3">
                     <h1 className="speakerEightCardHeading absolute text-[#1c1e56]  font-bold text-center text-xl bottom-[145px] left-[60px] mt-2 z-5">Dr. Harsh Vardhan</h1>
                     <p className="speakerEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[90px] text-center z-15 ">Former Minister,</p>
                     <p className="speakerEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[60px] text-center z-15 ">Health and Family Welfare,</p>
                     <p className="speakerEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[70px] text-center left-[65px]  z-15 ">Science and Technology,</p>
                     <p className="speakerEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[50px] left-[60px]  text-center z-15 ">Minister of Earth Sciences,</p>
                     <p className="speakerEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[30px] left-[70px]  text-center z-15 ">Government of India</p>
                   </div>
                     
                  </div>

                  <div className="speakerEightCardThirdDiv w-[23%] h-[450px]  imagee2 rounded-md mx-auto relative group">
                    <img src={image2} className="speakerprevCardImage w-[76%] mx-auto mt-2  group-hover:opacity-80 h-[230px] imgee" ></img>
                   <div className="EightCardFourthDiv flex flex-col  left-2  ml-[50px] space-y-3">
                     <h1 className="speakerEightCardHeading absolute text-[#1c1e56]  font-bold text-center text-xl bottom-[145px] left-[20px] mt-2 z-5">Shree Murli Manohar Joshi</h1>
                     <p className="speakerEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[90px] text-center z-15 ">Former Minister,</p>
                     <p className="speakerEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[60px] text-center z-15 ">Human Resource Development,</p>
                     <p className="speakerEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[70px] text-center left-[65px]  z-15 ">Science and Technology,</p>
                     
                     <p className="speakerEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[50px] left-[70px]  text-center z-15 ">Government of India</p>
                   </div>
                     
                  </div>

                  <div className="speakerEightCardThirdDiv w-[22%] h-[450px]  imagee2 rounded-md mx-auto relative group">
                    <img src={image3} className="speakerprevCardImage w-[76%] mx-auto mt-2  group-hover:opacity-80 h-[230px] imgee" ></img>
                   <div className="EightCardFourthDiv flex flex-col  left-2  ml-[50px] space-y-3">
                     <h1 className="speakerEightCardHeading absolute text-[#1c1e56]  font-bold text-center text-xl bottom-[145px] left-[30px] mt-2 z-5">Dr. Mansukh Mandaviya</h1>
                     <p className="speakerEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[60px] text-center z-15 ">Hon'ble Union Minister for</p>
                     <p className="speakerEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[60px] text-center z-15 ">Health and Family Welfare,</p>
                     <p className="speakerEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[50px] left-[80px]  text-center z-15 ">Government of India</p>
                   </div>
                     
                  </div>

                  <div className="speakerEightCardThirdDiv w-[23%] h-[450px]  imagee2 rounded-md mx-auto relative group">
                    <img src={image4} className="speakerprevCardImage w-[76%] mx-auto mt-2  group-hover:opacity-80 h-[230px] imgee" ></img>
                   <div className="EightCardFourthDiv flex flex-col  left-2  ml-[50px] space-y-3">
                     <h1 className="speakerEightCardHeading absolute text-[#1c1e56]  font-bold text-center text-xl bottom-[145px] left-[35px] mt-2 z-5">Dr. Bharti Pravin Pawar</h1>
                     <p className="speakerEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[70px] text-center z-15 ">Hon'ble Minister of State,</p>
                     <p className="speakerEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[65px] text-center z-15 ">Health and Family Welfare,</p>
                     <p className="speakerEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[70px] left-[80px]  text-center z-15 ">Government of India</p>
                   </div>
                     
                  </div>

                  <div className="speakerEightCardThirdDiv w-[23%] h-[450px]  imagee2 rounded-md mx-auto relative group">
                    <img src={image5} className="speakerprevCardImage w-[76%] mx-auto mt-2  group-hover:opacity-80 h-[230px] imgee" ></img>
                   <div className="EightCardFourthDiv  flex flex-col  left-2  ml-[50px] space-y-3">
                     <h1 className="speakerEightCardHeading absolute text-[#1c1e56]  font-bold text-center text-xl bottom-[145px] left-[30px] mt-2 z-5">Shree Ghulam Nabi Azad</h1>
                     <p className="speakerEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[90px] text-center z-15 ">Former Minister,</p>
                     <p className="speakerEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[60px] text-center z-15 ">Health and Family Welfare,</p>
                     <p className="speakerEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[70px] left-[80px]  text-center z-15 ">Government of India</p>
                   </div>
                     
                  </div>

                  <div className="speakerEightCardThirdDiv w-[23%] h-[450px]  imagee2 rounded-md mx-auto relative group">
                    <img src={image6} className="speakerprevCardImage w-[76%] mx-auto mt-2  group-hover:opacity-80 h-[230px] imgee" ></img>
                   <div className="EightCardFourthDiv flex flex-col  left-2  ml-[50px] space-y-3">
                     <h1 className="speakerEightCardHeading absolute text-[#1c1e56]  font-bold text-center text-xl bottom-[125px] left-[0px] mt-2 z-5">Dr.Chandrakant Sambhaji Pandav</h1>
                     <p className="speakerEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[100px] left-[113px] text-center z-15 ">Former HOD,</p>
                     <p className="speakerEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[80px] left-[30px] text-center z-15 ">Department of Community Medicine,</p>
                     <p className="speakerEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[60px] text-center left-[30px]  z-15 ">AIIMS,New Delhi & President,ICCIDD,</p>
                     <p className="speakerEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[40px] left-[95px]  text-center z-15 ">Iodine Man of India</p>
                     <p className="speakerEightCardFirstPara absolute text-[#1d1d20] font-semibold text-[14px] bottom-[20px] left-[80px]  text-center z-15 ">(Padma Shree Awardee)</p>
                   </div>
                     
                  </div>

                  <div className="speakerEightCardThirdDiv w-[22%] h-[450px]  imagee2 rounded-md mx-auto relative group">
                    <img src={image7} className="speakerprevCardImage w-[76%] mx-auto mt-2  group-hover:opacity-80 h-[230px] imgee" ></img>
                   <div className="EightCardFourthDiv flex flex-col  left-2  ml-[50px] space-y-3">
                     <h1 className="speakerEightCardHeading absolute text-[#1c1e56]  font-bold text-center text-xl bottom-[145px] left-[100px] mt-2 z-5">R. Shankar</h1>
                     <p className="speakerEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[110px] text-center z-15 ">Chairperson</p>
                     <p className="speakerEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[80px] text-center z-15 ">Organizing Committee,</p>
                     <p className="speakerEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[70px] text-center left-[60px]  z-15 ">Heal Health Writers Convention</p>
               
                   </div>
                     
                  </div>

                  <div className="speakerEightCardThirdDiv w-[23%] h-[450px] translate-x-1 imagee2 rounded-md mx-auto relative group">
                    <img src={image8} className="speakerprevCardImage w-[76%] mx-auto mt-2  group-hover:opacity-80 h-[230px] imgee" ></img>
                   <div className="EightCardFourthDiv flex flex-col  left-2  ml-[50px] space-y-3">
                     <h1 className="speakerEightCardHeading absolute text-[#1c1e56]  font-bold text-center text-xl bottom-[145px] left-[75px] mt-2 z-5">Dr. Anoop Mishra</h1>
                     <p className="speakerEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[120px] text-center z-15 ">Chairman</p>
                     <p className="speakerEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[70px] left-[0px] text-center z-15 ">Fortis Centre for Diabetes,Obesity and Cholestrol (C-DOC)</p>
                     <p className="speakerEightCardFirstPara absolute text-[#1d1d20] font-semibold text-[14px] bottom-[50px] left-[75px]  text-center z-15 ">(Padma Shree Awardee)</p>
                   </div>
                     
                  </div>

                  <div className="speakerEightCardThirdDiv w-[23%] h-[450px]  imagee2 rounded-md mx-auto relative group">
                    <img src={image9} className="speakerprevCardImage w-[76%] mx-auto mt-2  group-hover:opacity-80 h-[230px] imgee" ></img>
                   <div className="EightCardFourthDiv flex flex-col  left-2  ml-[50px] space-y-3">
                     <h1 className="speakerEightCardHeading absolute text-[#1c1e56]  font-bold text-center text-xl bottom-[145px] left-[80px] mt-2 z-5">Dr. Ashok Seth</h1>
                     <p className="speakerEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[115px] left-[120px] text-center z-15 ">Chairman,</p>
                     <p className="speakerEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[100px] left-[60px] text-center z-15 ">Fortis Escort Heart Institute</p>
                     <p className="speakerEightCardFirstPara absolute text-[#1d1d20] font-semibold text-[14px] bottom-[80px] left-[10px]  text-center z-15 ">(Padma Bhusan and Padma Shree Awardee)</p>
                   </div>
                     
                  </div>

                  <div className="speakerEightCardThirdDiv w-[23%] h-[450px]  imagee2 rounded-md mx-auto relative group">
                    <img src={image10} className="speakerprevCardImage w-[76%] mx-auto mt-2  group-hover:opacity-80 h-[230px] imgee" ></img>
                   <div className="EightCardFourthDiv flex flex-col  left-2  ml-[50px] space-y-3">
                     <h1 className="speakerEightCardHeading absolute text-[#1c1e56]  font-bold text-center text-xl bottom-[145px] left-[60px] mt-2 z-5">Mr. C Laxma Reddy</h1>
                     <p className="speakerEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[113px] text-center z-15 ">Health Minister,</p>
                     <p className="speakerEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[90px] text-center z-15 ">Government of Kerala</p>
                   </div>
                     
                  </div>

                  <div className="speakerEightCardThirdDiv w-[22%] h-[450px]  imagee2 rounded-md mx-auto relative group">
                    <img src={image11} className="speakerprevCardImage w-[76%] mx-auto mt-2  group-hover:opacity-80 h-[230px] imgee" ></img>
                   <div className="EightCardFourthDiv flex flex-col  left-2  ml-[50px] space-y-3">
                     <h1 className="speakerEightCardHeading absolute text-[#1c1e56]  font-bold text-center text-xl bottom-[145px] left-[70px] mt-2 z-5">Dr. Mohsin Wali</h1>
                     <p className="speakerEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[70px] text-center z-15 ">Cardiologist & Physician,</p>
                     <p className="speakerEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[80px] text-center z-15 ">Sir Gangaram Hospital</p>
                     <p className="speakerEightCardFirstPara absolute text-[#1d1d20] font-semibold text-[14px] bottom-[70px] left-[6px]  text-center z-15 ">(Padma Bhusan and Padma Shree Awardee)</p>
               
                   </div>
                     
                  </div>

                  <div className="speakerEightCardThirdDiv w-[23%] h-[450px] translate-x-1 imagee2 rounded-md mx-auto relative group">
                    <img src={image12} className="speakerprevCardImage w-[76%] mx-auto mt-2  group-hover:opacity-80 h-[230px] imgee" ></img>
                   <div className="EightCardFourthDiv flex flex-col  left-2  ml-[50px] space-y-3">
                     <h1 className="speakerEightCardHeading absolute text-[#1c1e56]  font-bold text-center text-xl bottom-[145px] left-[55px] mt-2 z-5">Dr. Harit Chaudhary</h1>
                     <p className="speakerEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[120px] text-center z-15 ">Chairman,</p>
                     <p className="speakerEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[70px] text-center z-15 ">Max Institute of Oncology</p>
                     <p className="speakerEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[70px] left-[130px] text-center z-15 ">Director,</p>
                     <p className="speakerEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[50px] left-[35px] text-center z-15 ">Surgical Oncology at Max Healthcare</p>
                   </div>
                     
                  </div>

                  <div className="speakerEightCardThirdDiv w-[23%] h-[450px]  imagee2 rounded-md mx-auto relative group">
                    <img src={image13} className="speakerprevCardImage  w-[76%] mx-auto mt-2  group-hover:opacity-80 h-[230px] imgee" ></img>
                   <div className="EightCardFourthDiv flex flex-col  left-2  ml-[50px] space-y-3">
                     <h1 className="speakerEightCardHeading absolute text-[#1c1e56]  font-bold text-center text-xl bottom-[150px] left-[50px] mt-2 z-5">Dr. Shashank R Joshi</h1>
                     <p className="speakerEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[130px] left-[100px] text-center z-15 ">Chairperson,</p>
                     <p className="speakerEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[45px] text-center z-15 ">International Diabetes Federation</p>
                     <p className="speakerEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[85px] left-[80px]  text-center z-15 ">Southeast Asia Dean,</p>
                     <p className="speakerEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[65px] left-[20px]  text-center z-15 ">Indian College of Physician Endocrinologist,</p>
                     <p className="speakerEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[25px] left-[0px]  text-center z-15 ">Lilavati Hospital, Apollo Sugar Clinic & Bhatia Hospital</p>
                     <p className="speakerEightCardFirstPara absolute text-[#1d1d20] font-semibold text-[14px] bottom-[0px] left-[70px]  text-center z-15 ">(Padma Shree Awardee)</p>
                   </div>
                     
                  </div>

                  <div className="speakerEightCardThirdDiv w-[23%] h-[450px]  imagee2 rounded-md mx-auto relative group">
                    <img src={image14} className="speakerprevCardImage w-[76%] mx-auto mt-2  group-hover:opacity-80 h-[230px] imgee" ></img>
                   <div className="EightCardFourthDiv flex flex-col  left-2  ml-[50px] space-y-3">
                     <h1 className="speakerEightCardHeading absolute text-[#1c1e56]  font-bold text-center text-xl bottom-[145px] left-[90px] mt-2 z-5">Lothar Pirc</h1>
                     <p className="speakerEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[125px] left-[90px] text-center z-15 ">Director General,</p>
                     <p className="speakerEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[105px] left-[20px] text-center z-15 ">Indian Institute of Mass Communication</p>
                   </div>
                     
                  </div>

                  <div className="speakerEightCardThirdDiv w-[22%] h-[450px]  imagee2 rounded-md mx-auto relative group">
                    <img src={image15} className="speakerprevCardImage w-[76%] mx-auto mt-2  group-hover:opacity-80 h-[230px] imgee" ></img>
                   <div className="EightCardFourthDiv flex flex-col  left-2  ml-[50px] space-y-3">
                     <h1 className="speakerEightCardHeading absolute text-[#1c1e56]  font-bold text-center text-xl bottom-[145px] left-[60px] mt-2 z-5">Dinesh C. Sharma</h1>
                     <p className="speakerEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[125px] left-[90px] text-center z-15 ">Managing Editor,</p>
                     <p className="speakerEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[105px] left-[85px] text-center z-15 ">India Science Wire</p>
                   </div>
                     
                  </div>

                  <div className="speakerEightCardThirdDiv w-[23%] h-[450px] translate-x-1 imagee2 rounded-md mx-auto relative group">
                    <img src={image16} className="speakerprevCardImage w-[76%] mx-auto mt-2  group-hover:opacity-80 h-[230px] imgee" ></img>
                   <div className="EightCardFourthDiv flex flex-col  left-2  ml-[50px] space-y-3">
                     <h1 className="speakerEightCardHeading absolute text-[#1c1e56]  font-bold text-center text-xl bottom-[145px] left-[110px] mt-2 z-5">K G Suresh</h1>
                     <p className="speakerEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[120px] left-[110px] text-center z-15 ">Director General,</p>
                     <p className="speakerEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[100px] left-[25px] text-center z-15 ">Indian Institute of Mass Communication</p>
                   </div>
                     
                  </div>

                  <div className="speakerEightCardThirdDiv w-[23%] h-[450px]  imagee2 rounded-md mx-auto relative group">
                     <img src={image17} className="speakerprevCardImage w-[76%] mx-auto mt-2  group-hover:opacity-80 h-[230px] imgee" ></img>
                    <div className="EightCardFourthDiv flex flex-col  left-2  ml-[50px] space-y-3">
                      <h1 className="speakerEightCardHeading absolute text-[#1c1e56]  font-bold text-center text-xl bottom-[145px] left-[70px] mt-2 z-5">Sudarshan Jain</h1>
                      <p className="speakerEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[115px] left-[90px] text-center z-15 ">Secretary General,</p>
                      <p className="speakerEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[95px] left-[60px] text-center z-15 ">Indian Pharmaceutical Alliance</p>
                    </div>
                      
                   </div>

                   <div className="speakerEightCardThirdDiv w-[23%] h-[450px]  imagee2 rounded-md mx-auto relative group">
                     <img src={image18} className="speakerprevCardImage w-[76%] mx-auto mt-2  group-hover:opacity-80 h-[230px] imgee" ></img>
                    <div className="EightCardFourthDiv  flex flex-col  left-2  ml-[50px] space-y-3">
                      <h1 className="speakerEightCardHeading absolute text-[#1c1e56]  font-bold text-center text-xl bottom-[145px] left-[90px] mt-2 z-5">Dr. V S Bedi</h1>
                      <p className="speakerEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[115px] left-[95px] text-center z-15 ">Vascular Surgeon</p>
                      <p className="speakerEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[95px] left-[80px] text-center z-15 ">Sir Ganga Ram Hospital</p>
                    </div>
                      
                   </div>

                   <div className="speakerEightCardThirdDiv w-[22%] h-[450px]  imagee2 rounded-md mx-auto relative group">
                     <img src={image19} className="speakerprevCardImage w-[76%] mx-auto mt-2  group-hover:opacity-80 h-[230px] imgee" ></img>
                    <div className="EightCardFourthDiv flex flex-col  left-2  ml-[50px] space-y-3">
                      <h1 className="speakerEightCardHeading absolute text-[#1c1e56]  font-bold text-center text-xl bottom-[145px] left-[100px] mt-2 z-5">R. Shankar</h1>
                      <p className="speakerEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[110px] text-center z-15 ">Chairperson</p>
                      <p className="speakerEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[80px] text-center z-15 ">Organizing Committee,</p>
                      <p className="speakerEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[70px] text-center left-[60px]  z-15 ">Heal Health Writers Convention</p>
                
                    </div>
                      
                   </div>

                   <div className="speakerEightCardThirdDiv w-[23%] h-[450px] translate-x-1 imagee2 rounded-md mx-auto relative group">
                     <img src={image20} className="speakerprevCardImage w-[76%] mx-auto mt-2  group-hover:opacity-80 h-[230px] imgee" ></img>
                    <div className="EightCardFourthDiv flex flex-col  left-2  ml-[50px] space-y-3">
                      <h1 className="speakerEightCardHeading absolute text-[#1c1e56]  font-bold text-center text-xl bottom-[145px] left-[95px] mt-2 z-5">Dr. D S Rana</h1>
                      <p className="speakerEightCardFirstPara  absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[120px] text-center z-15 ">Chairman,</p>
                      <p className="speakerEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[70px] text-center z-15 ">Department of Nephrology</p>
                      <p className="speakerEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[60px] left-[30px]  text-center z-15 ">Chairman and Board of Management,</p>
                      <p className="speakerEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[40px] left-[80px] text-center z-15 ">Sir Ganga Ram Hospital</p>
                    </div>
                      
                   </div>


                   <div className="speakerEightCardThirdDiv w-[23%] h-[450px]  imagee2 rounded-md mx-auto relative group">
                     <img src={image21} className="speakerprevCardImage w-[76%] mx-auto mt-2  group-hover:opacity-80 h-[230px] imgee" ></img>
                    <div className="EightCardFourthDiv flex flex-col  left-2  ml-[50px] space-y-3">
                      <h1 className="speakerEightCardHeading absolute text-[#1c1e56]  font-bold text-center text-xl bottom-[145px] left-[70px] mt-2 z-5">Bishow Parajuli</h1>
                      <p className="speakerEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[115px] left-[70px] text-center z-15 ">Country Director India,</p>
                      <p className="speakerEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[95px] left-[67px] text-center z-15 ">World Food Programme</p>
                    </div>
                      
                   </div>

                   <div className="speakerEightCardThirdDiv w-[23%] h-[450px]  imagee2 rounded-md mx-auto relative group">
                     <img src={image22} className="speakerprevCardImage w-[76%] mx-auto mt-2  group-hover:opacity-80 h-[230px] imgee" ></img>
                    <div className="EightCardFourthDiv flex flex-col  left-2  ml-[50px] space-y-3">
                      <h1 className="speakerEightCardHeading absolute text-[#1c1e56]  font-bold text-center text-xl bottom-[145px] left-[60px] mt-2 z-5">Dr. Berna Magnuson</h1>
                      <p className="speakerEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[115px] left-[105px] text-center z-15 ">Regulations,</p>
                      <p className="speakerEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[95px] left-[60px] text-center z-15 ">Toxicology and Nutrition Expert</p>
                    </div>
                      
                   </div>

                   <div className="speakerEightCardThirdDiv w-[22%] h-[450px]  imagee2 rounded-md mx-auto relative group">
                     <img src={image23} className="speakerprevCardImage w-[76%] mx-auto mt-2  group-hover:opacity-80 h-[230px] imgee" ></img>
                    <div className="EightCardFourthDiv flex flex-col  left-2  ml-[50px] space-y-3">
                      <h1 className="speakerEightCardHeading absolute text-[#1c1e56]  font-bold text-center text-xl bottom-[145px] left-[50px] mt-2 z-5">Dr. Arjun L Khandare</h1>
                      <p className="speakerEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[0px] text-center z-15 ">Scientist "F" and Head of Food and Drug Toxicology,</p>
                      <p className="speakerEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[70px] left-[50px] text-center z-15 ">National Institute of Nutrition</p>
                    </div>
                      
                   </div>

                   <div className="speakerEightCardThirdDiv w-[23%] h-[450px] translate-x-1 imagee2 rounded-md mx-auto relative group">
                     <img src={image24} className="speakerprevCardImage w-[76%] mx-auto mt-2  group-hover:opacity-80 h-[230px] imgee" ></img>
                    <div className="EightCardFourthDiv flex flex-col  left-2  ml-[50px] space-y-3">
                      <h1 className="speakerEightCardHeading absolute text-[#1c1e56]  font-bold text-center text-xl bottom-[145px] left-[95px] mt-2 z-5">Suneeti Toteja</h1>
                      <p className="speakerEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[140px] text-center z-15 ">Director,</p>
                      <p className="speakerEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[130px] text-center z-15 ">FSMS, FSSAI</p>
                    </div>
                      
                   </div>

                   <div className="speakerEightCardThirdDiv w-[23%] h-[450px] translate-x-1 imagee2 rounded-md mx-auto relative group">
                     <img src={image25} className="speakerprevCardImage w-[76%] mx-auto mt-2  group-hover:opacity-80 h-[230px] imgee" ></img>
                    <div className="EightCardFourthDiv flex flex-col  left-2  ml-[50px] space-y-3">
                      <h1 className="speakerEightCardHeading absolute text-[#1c1e56]  font-bold text-center text-xl bottom-[145px] left-[95px] mt-2 z-5">Meera Mishra</h1>
                      <p className="speakerEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[140px] text-center z-15 ">Country Coordinator for India,</p>
                      <p className="speakerEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[130px] text-center z-15 ">International Fund for Agricultural Development</p>
                    </div>
                      
                   </div>

                   <div className="speakerEightCardThirdDiv w-[23%] h-[450px] translate-x-1 imagee2 rounded-md mx-auto relative group">
                     <img src={image26} className="speakerprevCardImage w-[76%] mx-auto mt-2  group-hover:opacity-80 h-[230px] imgee" ></img>
                    <div className="EightCardFourthDiv flex flex-col  left-2  ml-[50px] space-y-3">
                      <h1 className="speakerEightCardHeading absolute text-[#1c1e56]  font-bold text-center text-xl bottom-[145px] left-[95px] mt-2 z-5">Dr. Rebeca LÓpez-Garcia</h1>
                      <p className="speakerEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[140px] text-center z-15 ">Toxicology and Regulations Consultants</p>
                    
                    </div>
                      
                   </div>
               </div>

              </div>
            )
          }
       </div>


        <div className='galleryDiv'>
          {!showMore && <button className='prevSpeaButt'  onClick={onClickShowMore}>View More</button>}
          {showMore && <button className='prevSpeaButt' onClick={onClickHandler}>Show Less</button>}
        </div>
   
     </div>
  )
}

export default PreviousSpeaker