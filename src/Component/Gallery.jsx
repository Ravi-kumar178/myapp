import React, { useRef, useState } from 'react';
import './Gallery.css'; // Import your CSS file for styling

import image1 from "../assets/hee/Ranveer_Allahabdia2.jpg"
import image2 from "../assets/hee/dr_manoj_Das.jpg"
import image3 from "../assets/hee/Shikha_Singh.jpg"
import image4 from "../assets/hee/Dr_Manoj_yogacharya.jpg"
import image5 from "../assets/hee/Ashdin_Doctor.jpg"
import image6 from "../assets/hee/Dr.jpg"
import image7 from "../assets/hee/Urmi_Chanda1.jpg"
import image8 from "../assets/hee/Mandeep Dahiya.jpg"
import image9 from "../assets/hee/RUjuta Diwaker (1).jpg"
import image10 from "../assets/hee/Deewankar.jpg"

const Gallery = () => {
  const [showMore, setShowMore] = useState(false);

  const targetSectionRef = useRef(null);

  function ScrollToSection(){
    targetSectionRef.current.scrollIntoView({behavior:"auto"});
  }

  function onShowLess(){
    setShowMore(false);
  }

  function onClickHandler(){
    ScrollToSection()
    onShowLess();
    
  }

 /*  const images = [
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
     
  ]; */

/*   const visibleImages = showMore ? images : images.slice(0, 6); */

  return (
    <div id='delegates' className='firstGallery'>

      <div ref={targetSectionRef} className='agendaHeading'>
            <div className='agendaSecondDiv'></div>
            <h1 className='agendaPara'>TENTATIVE NEW AGE MEDIA ATTENDEES</h1>
            <div className='agendaSecondDiv'></div>
        </div>
      
    <div className="gallery">
   
        {
          !showMore ?
           (<div className='FourCardFirstDiv'>
            <div className="FourCardSecondDiv flex flex-row flex-wrap  mx-auto  ">
                  <div className="FourCardThirdDiv w-[23%] h-[450px]  imagee2 rounded-md mx-auto relative group">
                    <img src={image1} className="FourCardImage w-[76%] mx-auto mt-2  group-hover:opacity-80 h-[230px] imgee" ></img>
                   <div className="flex FourCardFourDiv flex-col  left-2  ml-[50px] space-y-3">
                     <h1 className="FourCardHeading absolute  text-[#1c1e56]  font-bold text-center text-xl bottom-[145px] left-[40px] mt-2 z-5">Dr. Ranveer Allahabadi</h1>
                     <p className="absolute FourCardFirstPara text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[60px] text-center z-15 ">Health & Fitness,</p>
                     <p className="absolute FourCardFirstPara text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[60px] text-center z-15 ">Youtuber-</p>
                     <p className="absolute FourCardFirstPara text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[90px] text-center z-15 ">Beer & Biceps</p>
     
                   </div>
                     
                  </div>

                  <div className="FourCardThirdDiv w-[23%] h-[450px]  imagee2 rounded-md mx-auto relative group">
                    <img src={image2} className="FourCardImage w-[76%] mx-auto mt-2  group-hover:opacity-80 h-[230px] imgee" ></img>
                   <div className="FourCardFourDiv flex flex-col  left-2  ml-[50px] space-y-3">
                     <h1 className="FourCardHeading absolute text-[#1c1e56]  font-bold text-center text-xl bottom-[145px] left-[80px] mt-2 z-5">Dr. Manoj Das</h1>
                     <p className="FourCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[50px] text-center z-15 ">Skin/Health & Beauty</p>
                     <p className="FourCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[50px] text-center z-15 ">Youtuber-</p>
                     <p className="FourCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[90px] text-center z-15 ">Dr. ManojDasJaipur</p>
                   </div>
                     
                  </div>

                  <div className="FourCardThirdDiv w-[22%] h-[450px]  imagee2 rounded-md mx-auto relative group">
                    <img src={image3} className="FourCardImage w-[76%] mx-auto mt-2  group-hover:opacity-80 h-[230px] imgee" ></img>
                   <div className="FourCardFourDiv flex flex-col  left-2  ml-[50px] space-y-3">
                     <h1 className="FourCardHeading absolute text-[#1c1e56]  font-bold text-center text-xl bottom-[145px] left-[65px] mt-2 z-5">Dr. Shikha Singh</h1>                  
                      <p className="FourCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[50px] text-center z-15 ">Clinical Nutritionist,</p>
                      <p className="FourCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[50px] text-center z-15 ">Youtuber-</p>
                     <p className="FourCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[90px] text-center z-15 ">Dr. Shikha Singh</p>

                   </div>
                     
                  </div>

                  <div className="FourCardThirdDiv w-[23%] h-[450px]  imagee2 rounded-md mx-auto relative group">
                    <img src={image4} className="FourCardImage w-[76%] mx-auto mt-2  group-hover:opacity-80 h-[230px] imgee" ></img>
                   <div className="FourCardFourDiv flex flex-col  left-2  ml-[50px] space-y-3">
                     <h1 className="FourCardHeading absolute text-[#1c1e56]  font-bold text-center text-xl bottom-[145px] left-[50px] mt-2 z-5">Dr. Manoj Yogacharya</h1>
                     <p className="FourCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[70px] text-center z-15 ">Yoga Specialist,</p>
                     <p className="FourCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[70px] text-center z-15 ">Youtuber-</p>
                     <p className="FourCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[85px] text-center z-15 ">Dr. Manoj Yogacharya</p>
                   </div>
                     
                  </div>

                 {/* <div className="FourCardThirdDiv w-[23%] h-[450px]  imagee2 rounded-md mx-auto relative group">
                    <img src={image5}  className="FourCardImage w-[76%] mx-auto mt-2  group-hover:opacity-80 h-[230px] imgee" ></img>
                   <div className="FourCardFourDiv flex flex-col  left-2  ml-[50px] space-y-3">
                     <h1 className="FourCardHeading absolute text-[#1c1e56]  font-bold text-center text-xl bottom-[145px] left-[60px] mt-2 z-5">Dr.Asthin Doctor</h1>
                     <p className="FourCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[50px] text-center z-15 ">Health & Lifestyle,</p>
                     <p className="FourCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[50px] text-center z-15 ">Influencer-</p>
                     <p className="FourCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[80px] text-center z-15 ">The Habit Coach</p>
                   </div>
                     
                       </div>

                       <div className="FourCardThirdDiv w-[23%] h-[450px]  imagee2 rounded-md mx-auto relative group">
                    <img src={image6} className="EightCardImage w-[76%] mx-auto mt-2  group-hover:opacity-80 h-[230px] imgee" ></img>
                   <div className="FourCardFourDiv flex flex-col  left-2  ml-[50px] space-y-3">
                     <h1 className="FourCardHeading absolute text-[#1c1e56]  font-bold text-center text-xl bottom-[145px] left-[20px] mt-2 z-5">Dr. Vikram Venkatashwaran</h1>
                     <p className="FourCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[45px] text-center z-15 ">Healthcare Influencer,</p>
                     <p className="FourCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[45px] text-center z-15 ">Podcaster-</p>
                     <p className="FourCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[100px] text-center z-15 ">Healthcare India</p>

                   </div>
                     
                       </div>
                */}
               </div>
            </div>) 
            : 
            (
            <div className='EightCardFirstDiv'>
                   <div className="EightCardSecondDiv flex flex-row flex-wrap  mx-auto  ">
                       <div className="EightCardThirdDiv w-[23%] h-[450px]  imagee2 rounded-md mx-auto relative group">
                         <img src={image1} className="EightCardImage w-[76%] mx-auto mt-2  group-hover:opacity-80 h-[230px] imgee" ></img>
                         <div className="EightCardFourthDiv flex flex-col  left-2  ml-[50px] space-y-3">
                           <h1 className="EightCardHeading absolute text-[#1c1e56]  font-bold text-center text-xl bottom-[145px] left-[40px] mt-2 z-5">Dr. Ranveer Allahabadi</h1>
                           <p className="EightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[60px] text-center z-15 ">Health & Fitness,</p>
                           <p className="EightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[60px] text-center z-15 ">Youtuber-</p>
                           <p className="EightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[90px] text-center z-15 ">Beer & Biceps</p>
                        </div>
                       </div>

                       <div className="EightCardThirdDiv w-[23%] h-[450px]  imagee2 rounded-md mx-auto relative group">
                     <img src={image2} className="EightCardImage w-[76%] mx-auto mt-2  group-hover:opacity-80 h-[230px] imgee" ></img>
                    <div className="EightCardFourthDiv flex flex-col  left-2  ml-[50px] space-y-3">
                       <h1 className="EightCardHeading absolute text-[#1c1e56]  font-bold text-center text-xl bottom-[145px] left-[80px] mt-2 z-5">Dr. Manoj Das</h1>
                       <p className="EightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[50px] text-center z-15 ">Skin/Health & Beauty,</p>
                       <p className="EightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[50px] text-center z-15 ">Youtuber-</p>
                       <p className="EightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[90px] text-center z-15 ">Dr. ManojDasJaipur</p>
                    </div>
                     
                       </div>
                
                      

                       <div className="EightCardThirdDiv w-[22%] h-[450px]  imagee2 rounded-md mx-auto relative group">
                       <img src={image3} className="EightCardImage w-[76%] mx-auto mt-2  group-hover:opacity-80 h-[230px] imgee" ></img>
                      <div className="EightCardFourthDiv flex flex-col  left-2  ml-[50px] space-y-3">
                         <h1 className="EightCardHeading absolute text-[#1c1e56]  font-bold text-center text-xl bottom-[145px] left-[65px] mt-2 z-5">Dr. Shikha Singh</h1>                  
                          <p className="EightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[50px] text-center z-15 ">Clinical Nutritionist,</p>
                          <p className="EightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[50px] text-center z-15 ">Youtuber-</p>
                          <p className="EightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[90px] text-center z-15 ">Dr. Shikha Singh</p>
                      </div>  
                       </div>

                       <div className="EightCardThirdDiv w-[23%] h-[450px]  imagee2 rounded-md mx-auto relative group">
                    <img src={image4} className="EightCardImage w-[76%] mx-auto mt-2  group-hover:opacity-80 h-[230px] imgee" ></img>
                   <div className="EightCardFourthDiv flex flex-col  left-2  ml-[50px] space-y-3">
                     <h1 className="EightCardHeading absolute text-[#1c1e56]  font-bold text-center text-xl bottom-[145px] left-[50px] mt-2 z-5">Dr. Manoj Yogacharya</h1>
                     <p className="EightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[70px] text-center z-15 ">Yoga Specialist,</p>
                     <p className="EightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[70px] text-center z-15 ">Youtuber-</p>
                     <p className="EightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[85px] text-center z-15 ">Dr. Manoj Yogacharya</p>
                   </div>
                     
                       </div>

                       <div className="EightCardThirdDiv w-[23%] h-[450px]  imagee2 rounded-md mx-auto relative group">
                    <img src={image5}  className="EightCardImage w-[76%] mx-auto mt-2  group-hover:opacity-80 h-[230px] imgee" ></img>
                   <div className="EightCardFourthDiv flex flex-col  left-2  ml-[50px] space-y-3">
                     <h1 className="EightCardHeading absolute text-[#1c1e56]  font-bold text-center text-xl bottom-[145px] left-[60px] mt-2 z-5">Dr.Asthin Doctor</h1>
                     <p className="EightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[50px] text-center z-15 ">Health & Lifestyle,</p>
                     <p className="EightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[50px] text-center z-15 ">Influencer-</p>
                     <p className="EightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[80px] text-center z-15 ">The Habit Coach</p>
                   </div>
                     
                       </div>

                       <div className="EightCardThirdDiv w-[23%] h-[450px]  imagee2 rounded-md mx-auto relative group">
                    <img src={image6} className="EightCardImage w-[76%] mx-auto mt-2  group-hover:opacity-80 h-[230px] imgee" ></img>
                   <div className="EightCardFourthDiv flex flex-col  left-2  ml-[50px] space-y-3">
                     <h1 className="EightCardHeading absolute text-[#1c1e56]  font-bold text-center text-xl bottom-[145px] left-[20px] mt-2 z-5">Dr. Vikram Venkatashwaran</h1>
                     <p className="EightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[45px] text-center z-15 ">Healthcare Influencer,</p>
                     <p className="EightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[45px] text-center z-15 ">Podcaster-</p>
                     <p className="EightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[100px] text-center z-15 ">Healthcare India</p>

                   </div>
                     
                       </div>

                       <div className="EightCardThirdDiv w-[22%] h-[450px]  imagee2 rounded-md mx-auto relative group">
                    <img src={image7} className="EightCardImage w-[76%] mx-auto mt-2  group-hover:opacity-80 h-[230px] imgee" ></img>
                   <div className="EightCardFourthDiv flex flex-col  left-2  ml-[50px] space-y-3">
                     <h1 className="EightCardHeading absolute text-[#1c1e56]  font-bold text-center text-xl bottom-[145px] left-[60px] mt-2 z-5">Ms. Urmi Chanda</h1>
                     <p className="EightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[40px] text-center z-15 ">Clinical Psychologist,</p>
                     <p className="EightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[40px] text-center z-15 ">Podcaster-</p>
                     <p className="EightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[60px] text-center z-15 ">The Doctor Happy Podcast</p>
               
                   </div>
                     
                       </div>

                       <div className="EightCardThirdDiv w-[23%] h-[450px] translate-x-1 imagee2 rounded-md mx-auto relative group">
                    <img src={image8} className="EightCardImage w-[76%] mx-auto mt-2  group-hover:opacity-80 h-[230px] imgee" ></img>
                   <div className="EightCardFourthDiv flex flex-col  left-2  ml-[50px] space-y-3">
                     <h1 className="EightCardHeading absolute text-[#1c1e56]  font-bold text-center text-xl bottom-[145px] left-[50px] mt-2 z-5">Dr. Mandeep Dahiya</h1>
                     <p className="EightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[62px] text-center z-15 ">Youtuber-</p>
                     <p className="EightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[62px] text-center z-15 ">Wellness & Health</p>
                   </div>
                     
                       </div>

                       <div className="EightCardThirdDiv w-[23%] h-[450px] translate-x-1 imagee2 rounded-md mx-auto relative group">
                    <img src={image9} className="EightCardImage w-[76%] mx-auto mt-2  group-hover:opacity-80 h-[230px] imgee" ></img>
                   <div className="EightCardFourthDiv flex flex-col  left-2  ml-[50px] space-y-3">
                     <h1 className="EightCardHeading absolute text-[#1c1e56]  font-bold text-center text-xl bottom-[145px] left-[50px] mt-2 z-5">Ms. Rujuta Diwaker</h1>
                     <p className="EightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[62px] text-center z-15 ">Nutrionist,</p>
                     <p className="EightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[62px] text-center z-15 ">Youtuber</p>
                   </div>
                     
                       </div>

                       <div className="EightCardThirdDiv w-[23%] h-[450px] translate-x-1 imagee2 rounded-md mx-auto relative group">
                    <img src={image10} className="EightCardImage w-[76%] mx-auto mt-2  group-hover:opacity-80 h-[230px] imgee" ></img>
                   <div className="EightCardFourthDiv flex flex-col  left-2  ml-[50px] space-y-3">
                     <h1 className="EightCardHeading absolute text-[#1c1e56]  font-bold text-center text-xl bottom-[145px] left-[50px] mt-2 z-5">Dr. Deewankar</h1>
                     <p className="EightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[62px] text-center z-15 ">Wellness Podcaster-</p>
                     <p className="EightCardFirstPara absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[62px] text-center z-15 ">The Habit Coach</p>
                   </div>
                     
                       </div>
                    </div>
               
            </div>
            )
        }

      </div>
      <div className='galleryDiv'>
         {!showMore && <button className='btnClass'  onClick={() => setShowMore(true)}>View More</button>}
         {showMore && <button className='btnClass' onClick={onClickHandler}>Show Less</button>}
      </div>
     
    </div>
  );
};

export default Gallery;
