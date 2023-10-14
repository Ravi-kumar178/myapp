import React, { useRef } from 'react'
import { useState } from 'react'
import "./PreviousSpeaker.css"
import "./PreviousDelegates.css"

import image1 from "../assets/hee2/Malathy-Iyer.jpg"
import image2 from "../assets/hee2/annona-Dutt.jpg"
import image3 from "../assets/hee2/Mr.-Shahid.jpg"
import image4 from "../assets/hee2/Mr Ramesh Kumar[1040].jpg"
import image5 from "../assets/hee2/Anjali Kumari[1047].jpg"
import image6 from "../assets/hee2/preetu-nair.jpg"
import image7 from "../assets/hee2/Anjali Kumari[1047].jpg"
import image8 from "../assets/hee2/Afsha-Yasmeen.jpg"
import image9 from "../assets/hee2/Anjali Kumari[1047].jpg"
import image10 from "../assets/hee2/Thomas Abraham,[1045].jpg"
import image11 from "../assets/hee2/Tarun Bhardwaj[1044].jpg"
import image12 from "../assets/hee2/Mr Swayam Prakash,[1043].jpg"
import image13 from "../assets/hee2/Mr Abhishek Bajpaee[1046].jpg"
import image14 from "../assets/hee2/Anjali Kumari[1047].jpg"
import image15 from "../assets/hee2/Ashutosh-Yadav.jpg"
import image16 from "../assets/hee2/Anjali Kumari[1047].jpg"
import image17 from "../assets/hee2/Mr Dhirendra Pratap Singh,[1041].jpg"
import image18 from "../assets/hee2/Dhananjay-Kumar.jpg"
import image19 from "../assets/hee2/Anjali Kumari[1047].jpg"
import image20 from "../assets/hee2/Kalyani-Sharma.jpg"
import image21 from "../assets/hee2/Anjali Kumari[1047].jpg"
import image22 from "../assets/hee2/Anjali Kumari[1047].jpg"
import image23 from "../assets/hee2/Anjali Kumari[1047].jpg"
import image24 from "../assets/hee2/Anjali Kumari[1047].jpg"
import image25 from "../assets/hee2/Payal-Banerjee.jpg"
import image26 from "../assets/hee2/Mr-Durgesh-Nandan-Jha.jpg"
import image27 from "../assets/hee2/Anjali Kumari[1047].jpg"
import image28 from "../assets/hee2/Ms-Soma.jpg"
import image29 from "../assets/hee2/Anjali Kumari[1047].jpg"
import image30 from "../assets/hee2/Anjali Kumari[1047].jpg"



function PreviousDelegates() {

    const [showMore, setShowMore] = useState(false);

    const targetSectionRef = useRef(null);

    function ScrollToSection(){
      targetSectionRef.current.scrollIntoView({behavior:"auto"});
    }

    function onViewMore(){
      setShowMore(true);
    }

    function onShowLess(){
      setShowMore(false);
    }

    function onClickHandler(){
      onShowLess();
      ScrollToSection();
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
       image26,
       image27 
    ]; */
  
/*     const visibleImages = showMore ? images : images.slice(0, 6); */

    return (
      <div id='previousdelegates' className='firstDelegates'>
  
        <div ref={targetSectionRef} className='agendaHeading3'>
              <div className='agendaSecondDiv'></div>
              <h1 className=''>Previous Key Delegates</h1>
              <div className='agendaSecondDiv'></div>
          </div>
        
      <div className="gallery">
        {
          !showMore?
           (
            <div className='delegatesFourCardFirstDiv'>

              <div className='delegatesFourCardSecondDiv'>

                  <div className="delegatesFourCardThirdDiv w-[23%] h-[450px]  imagee2 rounded-md mx-auto relative group">
                     <img src={image1} className="delegatesprevCardImage w-[76%] mx-auto mt-2  group-hover:opacity-80 h-[230px] imgee" ></img>
                    <div className="delegatesFourCardFourDiv flex flex-col  left-2  ml-[50px] space-y-3">
                      <h1 className="delegatesFourCardHeading absolute text-[#1c1e56]  font-bold text-center text-xl bottom-[145px] left-[30px] mt-2 z-5">Malathy Iyer</h1>
                      <p className="delegatesFourCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[70px] text-center z-15 ">Health Editor,</p>
                      <p className="delegatesFourCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[95px] text-center z-15 ">The Times of India-</p>
                      <p className="delegatesFourCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[95px] text-center z-15 ">Mumbai with</p>
                      <p className="delegatesFourCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[95px] text-center z-15 ">"Excellence in Health Journalism"</p>
                    </div>
                   </div>

                   <div className="delegatesFourCardThirdDiv  w-[23%] h-[450px]  imagee2 rounded-md mx-auto relative group">
                     <img src={image2} className="delegatesprevCardImage w-[76%] mx-auto mt-2  group-hover:opacity-80 h-[230px] imgee" ></img>
                    <div className="delegatesFourCardFourDiv flex flex-col  left-2  ml-[50px] space-y-3">
                      <h1 className="delegatesFourCardHeading absolute text-[#1c1e56]  font-bold text-center text-xl bottom-[145px] left-[75px] mt-2 z-5">Annona Dutt</h1>
                      <p className="delegatesFourCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[110px] text-center z-15 ">Senior Correspondent,</p>
                      <p className="delegatesFourCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[95px] text-center z-15 ">Hindustan Times,</p>
                      <p className="delegatesFourCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[95px] text-center z-15 ">Delhi</p>
                    </div>
                      
                   </div>

                   <div className="delegatesFourCardThirdDiv w-[22%] h-[450px]  imagee2 rounded-md mx-auto relative group">
                     <img src={image3} className="delegatesprevCardImage w-[76%] mx-auto mt-2  group-hover:opacity-80 h-[230px] imgee" ></img>
                    <div className="delegatesFourCardFourDiv flex flex-col  left-2  ml-[50px] space-y-3">
                    <h1 className="delegatesFourCardHeading absolute text-[#1c1e56]  font-bold text-center text-xl bottom-[145px] left-[70px] mt-2 z-5">Shahid Akhter</h1>
                      <p className="delegatesFourCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[105px] text-center z-15 ">Health Editor,</p>
                      <p className="delegatesFourCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[115px] text-center z-15 ">ET Healthworld,</p>
                      <p className="delegatesFourCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[95px] text-center z-15 ">Delhi</p>
                
                    </div>
                      
                   </div>

                   <div className="delegatesFourCardThirdDiv w-[23%] h-[450px] translate-x-1 imagee2 rounded-md mx-auto relative group">
                     <img src={image4} className="delegatesprevCardImage w-[76%] mx-auto mt-2  group-hover:opacity-80 h-[230px] imgee" ></img>
                    <div className="delegatesFourCardFourDiv flex flex-col  left-2  ml-[50px] space-y-3">
                    <h1 className="delegatesFourCardHeading absolute text-[#1c1e56]  font-bold text-center text-xl bottom-[145px] left-[70px] mt-2 z-5">Ms. Rajneesh Anand</h1>
                      <p className="delegatesFourCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[75px] text-center z-15 ">Senior Chief Content Writer,</p>
                      <p className="delegatesFourCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[95px] text-center z-15 ">Prabhat Khabar,</p>
                      <p className="delegatesFourCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[95px] text-center z-15 ">Ranchi</p>
                    </div>
                      
                   </div>

              </div>

            </div>
           )
           :
           (

            <div className='delegatesFourCardFirstDiv'>

              <div className='delegatesrEightCardSecondDiv'>

                  <div className="delegatesEightCardThirdDiv w-[23%] h-[450px]  imagee2 rounded-md mx-auto relative group">
                     <img src={image1} className="delegatesprevCardImage w-[76%] mx-auto mt-2  group-hover:opacity-80 h-[230px] imgee" ></img>
                    <div className="EightCardFourthDiv flex flex-col  left-2  ml-[50px] space-y-3">
                      <h1 className="delegatesEightCardHeading absolute text-[#1c1e56]  font-bold text-center text-xl bottom-[145px] left-[30px] mt-2 z-5">Malathy Iyer</h1>
                      <p className="delegatesEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[70px] text-center z-15 ">Health Editor,</p>
                      <p className="delegatesEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[95px] text-center z-15 ">The Times of India-</p>
                      <p className="delegatesEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[95px] text-center z-15 ">Mumbai with</p>
                      <p className="delegatesEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[95px] text-center z-15 ">"Excellence in Health Journalism"</p>
                    </div>
                   </div>

                   <div className="delegatesEightCardThirdDiv w-[23%] h-[450px]  imagee2 rounded-md mx-auto relative group">
                     <img src={image2} className="delegatesprevCardImage w-[76%] mx-auto mt-2  group-hover:opacity-80 h-[230px] imgee" ></img>
                    <div className="EightCardFourthDiv flex flex-col  left-2  ml-[50px] space-y-3">
                      <h1 className="delegatesEightCardHeading absolute text-[#1c1e56]  font-bold text-center text-xl bottom-[145px] left-[75px] mt-2 z-5">Annona Dutt</h1>
                      <p className="delegatesEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[110px] text-center z-15 ">Senior Correspondent,</p>
                      <p className="delegatesEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[95px] text-center z-15 ">Hindustan Times,</p>
                      <p className="delegatesEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[95px] text-center z-15 ">Delhi</p>
                    </div>
                      
                   </div>

                   <div className="delegatesEightCardThirdDiv w-[22%] h-[450px]  imagee2 rounded-md mx-auto relative group">
                     <img src={image3} className="delegatesprevCardImage w-[76%] mx-auto mt-2  group-hover:opacity-80 h-[230px] imgee" ></img>
                    <div className="EightCardFourthDiv flex flex-col  left-2  ml-[50px] space-y-3">
                    <h1 className="delegatesEightCardHeading absolute text-[#1c1e56]  font-bold text-center text-xl bottom-[145px] left-[70px] mt-2 z-5">Shahid Akhter</h1>
                      <p className="delegatesEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[105px] text-center z-15 ">Health Editor,</p>
                      <p className="delegatesEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[115px] text-center z-15 ">ET Healthworld,</p>
                      <p className="delegatesEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[95px] text-center z-15 ">Delhi</p>
                
                    </div>
                      
                   </div>

                   <div className="delegatesEightCardThirdDiv w-[23%] h-[450px] translate-x-1 imagee2 rounded-md mx-auto relative group">
                     <img src={image4} className="delegatesprevCardImage w-[76%] mx-auto mt-2  group-hover:opacity-80 h-[230px] imgee" ></img>
                    <div className="EightCardFourthDiv flex flex-col  left-2  ml-[50px] space-y-3">
                    <h1 className="delegatesEightCardHeading absolute text-[#1c1e56]  font-bold text-center text-xl bottom-[145px] left-[70px] mt-2 z-5">Ms. Rajneesh Anand</h1>
                      <p className="delegatesEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[75px] text-center z-15 ">Senior Chief Content Writer,</p>
                      <p className="delegatesEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[95px] text-center z-15 ">Prabhat Khabar,</p>
                      <p className="delegatesEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[95px] text-center z-15 ">Ranchi</p>
                    </div>
                      
                   </div>

                   <div className="delegatesEightCardThirdDiv w-[23%] h-[450px]  imagee2 rounded-md mx-auto relative group">
                     <img src={image5} className="delegatesprevCardImage w-[76%] mx-auto mt-2  group-hover:opacity-80 h-[230px] imgee" ></img>
                    <div className="EightCardFourthDiv flex flex-col  left-2  ml-[50px] space-y-3">
                      <h1 className="delegatesEightCardHeading absolute text-[#1c1e56]  font-bold text-center text-xl bottom-[145px] left-[30px] mt-2 z-5">Malikarjun Reddy</h1>
                      <p className="delegatesEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[70px] text-center z-15 ">Health Correspondent,</p>
                      <p className="delegatesEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[95px] text-center z-15 ">Sakshi with</p>
                      <p className="delegatesEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[95px] text-center z-15 ">"Excellence in Health Journalism"</p>
                    </div>
                   </div>

                   <div className="delegatesEightCardThirdDiv w-[23%] h-[450px]  imagee2 rounded-md mx-auto relative group">
                     <img src={image6} className="delegatesprevCardImage w-[76%] mx-auto mt-2  group-hover:opacity-80 h-[230px] imgee" ></img>
                    <div className="EightCardFourthDiv flex flex-col  left-2  ml-[50px] space-y-3">
                      <h1 className="delegatesEightCardHeading absolute text-[#1c1e56]  font-bold text-center text-xl bottom-[145px] left-[75px] mt-2 z-5">Preetu Nair</h1>
                      <p className="delegatesEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[110px] text-center z-15 ">Metro Editor,</p>
                      <p className="delegatesEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[95px] text-center z-15 ">The Times of India,</p>
                      <p className="delegatesEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[95px] text-center z-15 ">Kazikode</p>
                    </div>
                      
                   </div>

                   <div className="delegatesEightCardThirdDiv w-[22%] h-[450px]  imagee2 rounded-md mx-auto relative group">
                     <img src={image7} className="delegatesprevCardImage w-[76%] mx-auto mt-2  group-hover:opacity-80 h-[230px] imgee" ></img>
                    <div className="EightCardFourthDiv flex flex-col  left-2  ml-[50px] space-y-3">
                    <h1 className="delegatesEightCardHeading absolute text-[#1c1e56]  font-bold text-center text-xl bottom-[145px] left-[70px] mt-2 z-5">Sai Gopal</h1>
                      <p className="delegatesEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[105px] text-center z-15 ">Health Principal,</p>
                      <p className="delegatesEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[115px] text-center z-15 ">Reporter,</p>
                      <p className="delegatesEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[95px] text-center z-15 ">Telangana Today,</p>
                      <p className="delegatesEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[95px] text-center z-15 ">Hyderabad</p>
                    </div>
                      
                   </div>

                   <div className="delegatesEightCardThirdDiv w-[23%] h-[450px] translate-x-1 imagee2 rounded-md mx-auto relative group">
                     <img src={image8} className="delegatesprevCardImage w-[76%] mx-auto mt-2  group-hover:opacity-80 h-[230px] imgee" ></img>
                    <div className="EightCardFourthDiv flex flex-col  left-2  ml-[50px] space-y-3">
                    <h1 className="delegatesEightCardHeading absolute text-[#1c1e56]  font-bold text-center text-xl bottom-[145px] left-[70px] mt-2 z-5">Afshan Yasmeen</h1>
                      <p className="delegatesEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[75px] text-center z-15 ">The Hindu,</p>
                      <p className="delegatesEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[95px] text-center z-15 ">Senior Assistant Editor,</p>
                      <p className="delegatesEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[95px] text-center z-15 ">Banglore</p>
                    </div>
                      
                   </div>

                   <div className="delegatesEightCardThirdDiv w-[23%] h-[450px]  imagee2 rounded-md mx-auto relative group">
                     <img src={image9} className="delegatesprevCardImage w-[76%] mx-auto mt-2  group-hover:opacity-80 h-[230px] imgee" ></img>
                    <div className="EightCardFourthDiv flex flex-col  left-2  ml-[50px] space-y-3">
                      <h1 className="delegatesEightCardHeading absolute text-[#1c1e56]  font-bold text-center text-xl bottom-[145px] left-[30px] mt-2 z-5">Vishwanath Pilla</h1>
                      <p className="delegatesEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[70px] text-center z-15 ">Principal Correspondent,</p>
                      <p className="delegatesEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[95px] text-center z-15 ">Money Control,</p>
                      <p className="delegatesEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[95px] text-center z-15 ">Mumbai</p>

                    </div>
                   </div>

                   <div className="delegatesEightCardThirdDiv w-[23%] h-[450px]  imagee2 rounded-md mx-auto relative group">
                     <img src={image10} className="delegatesprevCardImage w-[76%] mx-auto mt-2  group-hover:opacity-80 h-[230px] imgee" ></img>
                    <div className="EightCardFourthDiv flex flex-col  left-2  ml-[50px] space-y-3">
                      <h1 className="delegatesEightCardHeading absolute text-[#1c1e56]  font-bold text-center text-xl bottom-[145px] left-[75px] mt-2 z-5">Thomas Abraham</h1>
                      <p className="delegatesEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[110px] text-center z-15 ">Associate Editor,</p>
                      <p className="delegatesEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[95px] text-center z-15 ">Hindu Business Line,</p>
                      <p className="delegatesEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[95px] text-center z-15 ">Chennai</p>
                    </div>
                      
                   </div>

                   <div className="delegatesEightCardThirdDiv w-[22%] h-[450px]  imagee2 rounded-md mx-auto relative group">
                     <img src={image11} className="delegatesprevCardImage w-[76%] mx-auto mt-2  group-hover:opacity-80 h-[230px] imgee" ></img>
                    <div className="EightCardFourthDiv flex flex-col  left-2  ml-[50px] space-y-3">
                    <h1 className="delegatesEightCardHeading absolute text-[#1c1e56]  font-bold text-center text-xl bottom-[145px] left-[70px] mt-2 z-5">Tarun Bhardwaj</h1>
                      <p className="delegatesEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[105px] text-center z-15 ">Assisstant Editor,</p>
                      <p className="delegatesEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[115px] text-center z-15 ">Financial Express</p>

                
                    </div>
                      
                   </div>

                   <div className="delegatesEightCardThirdDiv w-[23%] h-[450px] translate-x-1 imagee2 rounded-md mx-auto relative group">
                     <img src={image12} className="delegatesprevCardImage w-[76%] mx-auto mt-2  group-hover:opacity-80 h-[230px] imgee" ></img>
                    <div className="EightCardFourthDiv flex flex-col  left-2  ml-[50px] space-y-3">
                    <h1 className="delegatesEightCardHeading absolute text-[#1c1e56]  font-bold text-center text-xl bottom-[145px] left-[70px] mt-2 z-5">Mr. Swayam Prakash</h1>
                      <p className="delegatesEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[75px] text-center z-15 ">Editor,</p>
                      <p className="delegatesEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[95px] text-center z-15 ">Zee News,</p>
                      <p className="delegatesEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[95px] text-center z-15 ">Bihar,Jharkhand</p>
                    </div>
                      
                   </div>

                   <div className="delegatesEightCardThirdDiv w-[23%] h-[450px]  imagee2 rounded-md mx-auto relative group">
                     <img src={image13} className="delegatesprevCardImage w-[76%] mx-auto mt-2  group-hover:opacity-80 h-[230px] imgee" ></img>
                    <div className="EightCardFourthDiv flex flex-col  left-2  ml-[50px] space-y-3">
                      <h1 className="delegatesEightCardHeading absolute text-[#1c1e56]  font-bold text-center text-xl bottom-[145px] left-[30px] mt-2 z-5">Mr. Abhishek Bajpaee</h1>
                      <p className="delegatesEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[70px] text-center z-15 ">Sr. Sub Editor,</p>
                      <p className="delegatesEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[95px] text-center z-15 ">Dainik Bhaskar</p>
                      <p className="delegatesEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[95px] text-center z-15 ">Dehradun</p>

                    </div>
                   </div>

                  
                   <div className="delegatesEightCardThirdDiv w-[22%] h-[450px]  imagee2 rounded-md mx-auto relative group">
                     <img src={image14} className="delegatesprevCardImage w-[76%] mx-auto mt-2  group-hover:opacity-80 h-[230px] imgee" ></img>
                    <div className="EightCardFourthDiv flex flex-col  left-2  ml-[50px] space-y-3">
                    <h1 className="delegatesEightCardHeading absolute text-[#1c1e56]  font-bold text-center text-xl bottom-[145px] left-[70px] mt-2 z-5">Rahul Anand</h1>
                      <p className="delegatesEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[105px] text-center z-15 ">Health Editor,</p>
                      <p className="delegatesEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[115px] text-center z-15 ">NBT with</p>
                      <p className="delegatesEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[95px] text-center z-15 ">"Excellence in Health Journalism"</p>
                
                    </div>
                      
                   </div>

                   <div className="delegatesEightCardThirdDiv w-[23%] h-[450px] translate-x-1 imagee2 rounded-md mx-auto relative group">
                     <img src={image15} className="delegatesprevCardImage w-[76%] mx-auto mt-2  group-hover:opacity-80 h-[230px] imgee" ></img>
                    <div className="EightCardFourthDiv flex flex-col  left-2  ml-[50px] space-y-3">
                    <h1 className="delegatesEightCardHeading absolute text-[#1c1e56]  font-bold text-center text-xl bottom-[145px] left-[70px] mt-2 z-5">Mr. Ashutosh Yadav</h1>
                      <p className="delegatesEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[75px] text-center z-15 ">Reporter/Sub Editor,</p>
                      <p className="delegatesEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[95px] text-center z-15 ">Dainik Jagran,</p>
                      <p className="delegatesEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[95px] text-center z-15 ">Ghaziabad</p>
                    </div>
                      
                   </div>

                   <div className="delegatesEightCardThirdDiv w-[23%] h-[450px]  imagee2 rounded-md mx-auto relative group">
                     <img src={image16} className="delegatesprevCardImage w-[76%] mx-auto mt-2  group-hover:opacity-80 h-[230px] imgee" ></img>
                    <div className="EightCardFourthDiv flex flex-col  left-2  ml-[50px] space-y-3">
                      <h1 className="delegatesEightCardHeading absolute text-[#1c1e56]  font-bold text-center text-xl bottom-[145px] left-[30px] mt-2 z-5">Vivek Shukla</h1>
                      <p className="delegatesEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[70px] text-center z-15 ">Deputy Chief Sub Editor,</p>
                      <p className="delegatesEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[95px] text-center z-15 ">Dainik Jagran,</p>
                      <p className="delegatesEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[95px] text-center z-15 ">Kanpur</p>
                    </div>
                   </div>

                   <div className="delegatesEightCardThirdDiv w-[23%] h-[450px]  imagee2 rounded-md mx-auto relative group">
                     <img src={image17} className="delegatesprevCardImage w-[76%] mx-auto mt-2  group-hover:opacity-80 h-[230px] imgee" ></img>
                    <div className="EightCardFourthDiv flex flex-col  left-2  ml-[50px] space-y-3">
                      <h1 className="delegatesEightCardHeading absolute text-[#1c1e56]  font-bold text-center text-xl bottom-[145px] left-[75px] mt-2 z-5">Mr. Dhirendra Pratap Singh,</h1>
                      <p className="delegatesEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[110px] text-center z-15 ">Editor,</p>
                      <p className="delegatesEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[95px] text-center z-15 ">Swatantra Wartha,</p>
                      <p className="delegatesEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[95px] text-center z-15 ">Hyderabad</p>
                    </div>
                      
                   </div>

                   <div className="delegatesEightCardThirdDiv w-[22%] h-[450px]  imagee2 rounded-md mx-auto relative group">
                     <img src={image18} className="delegatesprevCardImage w-[76%] mx-auto mt-2  group-hover:opacity-80 h-[230px] imgee" ></img>
                    <div className="EightCardFourthDiv flex flex-col  left-2  ml-[50px] space-y-3">
                    <h1 className="delegatesEightCardHeading absolute text-[#1c1e56]  font-bold text-center text-xl bottom-[145px] left-[70px] mt-2 z-5">Dhananjay Kumar</h1>
                      <p className="delegatesEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[105px] text-center z-15 ">Managing Editor,</p>
                      <p className="delegatesEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[115px] text-center z-15 ">Medicare News with,</p>
                      <p className="delegatesEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[95px] text-center z-15 ">"Excellence in Health Journalism"</p>
                
                    </div>
                      
                   </div>

                   <div className="delegatesEightCardThirdDiv w-[23%] h-[450px] translate-x-1 imagee2 rounded-md mx-auto relative group">
                     <img src={image19} className="delegatesprevCardImage w-[76%] mx-auto mt-2  group-hover:opacity-80 h-[230px] imgee" ></img>
                    <div className="EightCardFourthDiv flex flex-col  left-2  ml-[50px] space-y-3">
                    <h1 className="delegatesEightCardHeading absolute text-[#1c1e56]  font-bold text-center text-xl bottom-[145px] left-[70px] mt-2 z-5">Vivek Roy Chowdhary</h1>
                      <p className="delegatesEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[75px] text-center z-15 ">Editor,</p>
                      <p className="delegatesEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[95px] text-center z-15 ">Express Pharma with,</p>
                      <p className="delegatesEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[95px] text-center z-15 ">"Excellence in Health Journalism"</p>
                    </div>
                      
                   </div>

                   <div className="delegatesEightCardThirdDiv w-[23%] h-[450px]  imagee2 rounded-md mx-auto relative group">
                     <img src={image20} className="delegatesprevCardImage w-[76%] mx-auto mt-2  group-hover:opacity-80 h-[230px] imgee" ></img>
                    <div className="EightCardFourthDiv flex flex-col  left-2  ml-[50px] space-y-3">
                      <h1 className="delegatesEightCardHeading absolute text-[#1c1e56]  font-bold text-center text-xl bottom-[145px] left-[30px] mt-2 z-5">Kalyani Sharma</h1>
                      <p className="delegatesEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[70px] text-center z-15 ">Reporter,</p>
                      <p className="delegatesEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[95px] text-center z-15 ">BioSpectrum,</p>
                      <p className="delegatesEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[95px] text-center z-15 ">Delhi</p>

                    </div>
                   </div>

                   <div className="delegatesEightCardThirdDiv w-[23%] h-[450px]  imagee2 rounded-md mx-auto relative group">
                     <img src={image21} className="delegatesprevCardImage w-[76%] mx-auto mt-2  group-hover:opacity-80 h-[230px] imgee" ></img>
                    <div className="EightCardFourthDiv flex flex-col  left-2  ml-[50px] space-y-3">
                      <h1 className="delegatesEightCardHeading absolute text-[#1c1e56]  font-bold text-center text-xl bottom-[145px] left-[75px] mt-2 z-5">Biju CP</h1>
                      <p className="delegatesEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[110px] text-center z-15 ">Chief Sub-Editor,</p>
                      <p className="delegatesEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[95px] text-center z-15 ">Mathrubhumi honoured with</p>
                      <p className="delegatesEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[95px] text-center z-15 ">"Excellence in Promoting Ethical Health Journalism"</p>
                    </div>
                      
                   </div>

                   <div className="delegatesEightCardThirdDiv w-[22%] h-[450px]  imagee2 rounded-md mx-auto relative group">
                     <img src={image22} className="delegatesprevCardImage w-[76%] mx-auto mt-2  group-hover:opacity-80 h-[230px] imgee" ></img>
                    <div className="EightCardFourthDiv flex flex-col  left-2  ml-[50px] space-y-3">
                    <h1 className="delegatesEightCardHeading absolute text-[#1c1e56]  font-bold text-center text-xl bottom-[145px] left-[70px] mt-2 z-5">Dr. Sumit Ghoshal</h1>
                      <p className="delegatesEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[105px] text-center z-15 ">Senior Health Journalist,</p>
                      <p className="delegatesEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[115px] text-center z-15 ">Managing Editor-</p>
                      <p className="delegatesEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[95px] text-center z-15 ">Healthcare Executive</p>
                      <p className="delegatesEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[95px] text-center z-15 ">honoured with</p>
                      <p className="delegatesEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[95px] text-center z-15 ">"Excellence in Promiting Ethical Health Journalism"</p>
                    </div>
                      
                   </div>

                   <div className="delegatesEightCardThirdDiv w-[23%] h-[450px] translate-x-1 imagee2 rounded-md mx-auto relative group">
                     <img src={image23} className="delegatesprevCardImage w-[76%] mx-auto mt-2  group-hover:opacity-80 h-[230px] imgee" ></img>
                    <div className="EightCardFourthDiv flex flex-col  left-2  ml-[50px] space-y-3">
                    <h1 className="delegatesEightCardHeading absolute text-[#1c1e56]  font-bold text-center text-xl bottom-[145px] left-[70px] mt-2 z-5">Vikas Vaidya</h1>
                      <p className="delegatesEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[75px] text-center z-15 ">Principal Correspondent,</p>
                      <p className="delegatesEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[95px] text-center z-15 ">The Hitvada</p>
                      <p className="delegatesEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[95px] text-center z-15 ">honoured with</p>
                      <p className="delegatesEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[95px] text-center z-15 ">"Excellence in promoting Ethical Health Journalism</p>
                    </div>
                      
                   </div>

                   <div className="delegatesEightCardThirdDiv w-[23%] h-[450px] translate-x-1 imagee2 rounded-md mx-auto relative group">
                     <img src={image24} className="delegatesprevCardImage w-[76%] mx-auto mt-2  group-hover:opacity-80 h-[230px] imgee" ></img>
                    <div className="EightCardFourthDiv flex flex-col  left-2  ml-[50px] space-y-3">
                    <h1 className="delegatesEightCardHeading absolute text-[#1c1e56]  font-bold text-center text-xl bottom-[145px] left-[70px] mt-2 z-5">Ms. Rupali Mukherjee</h1>
                      <p className="delegatesEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[75px] text-center z-15 ">Senior Assistant Editor,</p>
                      <p className="delegatesEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[95px] text-center z-15 ">The Times of India</p>

                    </div>
                      
                   </div>

                   <div className="delegatesEightCardThirdDiv w-[23%] h-[450px]  imagee2 rounded-md mx-auto relative group">
                     <img src={image25} className="delegatesprevCardImage w-[76%] mx-auto mt-2  group-hover:opacity-80 h-[230px] imgee" ></img>
                    <div className="EightCardFourthDiv flex flex-col  left-2  ml-[50px] space-y-3">
                      <h1 className="delegatesEightCardHeading absolute text-[#1c1e56]  font-bold text-center text-xl bottom-[145px] left-[30px] mt-2 z-5">Ms. Payal Banerjee</h1>
                      <p className="delegatesEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[70px] text-center z-15 ">Assistant Editor,</p>
                      <p className="delegatesEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[95px] text-center z-15 ">PTI</p>
                    </div>
                   </div>

                   <div className="delegatesEightCardThirdDiv w-[23%] h-[450px]  imagee2 rounded-md mx-auto relative group">
                     <img src={image26} className="delegatesprevCardImage w-[76%] mx-auto mt-2  group-hover:opacity-80 h-[230px] imgee" ></img>
                    <div className="EightCardFourthDiv flex flex-col  left-2  ml-[50px] space-y-3">
                      <h1 className="delegatesEightCardHeading absolute text-[#1c1e56]  font-bold text-center text-xl bottom-[145px] left-[75px] mt-2 z-5">Mr. Durgesh Nandan Jha</h1>
                      <p className="delegatesEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[110px] text-center z-15 ">Senior Assistant Editor,</p>
                      <p className="delegatesEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[95px] text-center z-15 ">PTI</p>
                    </div>
                      
                   </div>

                   <div className="delegatesEightCardThirdDiv w-[22%] h-[450px]  imagee2 rounded-md mx-auto relative group">
                     <img src={image27} className="delegatesprevCardImage w-[76%] mx-auto mt-2  group-hover:opacity-80 h-[230px] imgee" ></img>
                    <div className="EightCardFourthDiv flex flex-col  left-2  ml-[50px] space-y-3">
                    <h1 className="delegatesEightCardHeading absolute text-[#1c1e56]  font-bold text-center text-xl bottom-[145px] left-[70px] mt-2 z-5">Ms. Pushpa Narayan</h1>
                      <p className="delegatesEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[105px] text-center z-15 ">Senior Editor,</p>
                      <p className="delegatesEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[115px] text-center z-15 ">Times of India</p>
                    </div>
                      
                   </div>

                   <div className="delegatesEightCardThirdDiv w-[23%] h-[450px] translate-x-1 imagee2 rounded-md mx-auto relative group">
                     <img src={image28} className="delegatesprevCardImage w-[76%] mx-auto mt-2  group-hover:opacity-80 h-[230px] imgee" ></img>
                    <div className="EightCardFourthDiv flex flex-col  left-2  ml-[50px] space-y-3">
                    <h1 className="delegatesEightCardHeading absolute text-[#1c1e56]  font-bold text-center text-xl bottom-[145px] left-[70px] mt-2 z-5">Ms. Soma Mukhpadhyay</h1>
                      <p className="delegatesEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[75px] text-center z-15 ">Chief Reporter,</p>
                      <p className="delegatesEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[95px] text-center z-15 ">Kolkata,</p>
                      <p className="delegatesEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[95px] text-center z-15 ">ABP Group</p>
                    </div>
                      
                   </div>

                   <div className="delegatesEightCardThirdDiv w-[23%] h-[450px] translate-x-1 imagee2 rounded-md mx-auto relative group">
                     <img src={image29} className="delegatesprevCardImage w-[76%] mx-auto mt-2  group-hover:opacity-80 h-[230px] imgee" ></img>
                    <div className="EightCardFourthDiv flex flex-col  left-2  ml-[50px] space-y-3">
                    <h1 className="delegatesEightCardHeading absolute text-[#1c1e56]  font-bold text-center text-xl bottom-[145px] left-[70px] mt-2 z-5">Ms. Sanchita Sharma</h1>
                      <p className="delegatesEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[75px] text-center z-15 ">Health & Science Editor,</p>
                      <p className="delegatesEightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[95px] text-center z-15 ">Hindustan Times</p>
                    </div>
                      
                   </div>

               </div>

            </div>

       )
        }

      </div>
        <div className='galleryDiv'>
           {!showMore && <button className='btnClass'  onClick={onViewMore}>View More</button>}
           {showMore && <button className='btnClass' onClick={onClickHandler}>Show Less</button>}
        </div>
     
      </div>
    );
}

export default PreviousDelegates