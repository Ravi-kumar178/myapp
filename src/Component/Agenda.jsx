import React from 'react'
import "./Agenda.css"
import img from "../assets/the-importance-of-setting-a-meeting-agenda-1000x600.webp"
/* import image8 from "../assets/Collage[797].png"; */

import { BiRightArrowAlt } from "react-icons/bi";

function Agenda() {

    const style = { color: ["#8c70fc"], fontsize: "5em" };

  return (

   
 <div id='agenda' className=''>

  {/* <img src={img} className='agendaImg'></img>

        <div className='agendaHeading'>
            <div className='agendaSecondDiv'></div>
            <h1 className=''>Agenda</h1>
            <div className='agendaSecondDiv'></div>
        </div>


      <div className='track'>Track 1</div> 
  
       <div className='trackDiv'>
            <h1 className='trackTime'>08:30 - 09:30 Hrs</h1>
            <h1 className='trackHead'>Registration</h1>
            <button className='register'>Register Now</button>
        </div>

        <div className='trackSecondDiv'>
            <h1 className='trackTime'>09:30 - 10:10 Hrs</h1>
            <h1 className='trackSecondHead'>Tb Elimination - Where Are We?</h1>
        </div>

        <div className='trackSecondDiv'>
            <h1 className='trackTime'>10:15 - 10:55 Hrs</h1>
            <h1 className='trackFourthHead'>AI in Healthcare - Navigating Ethical Issues</h1>
        </div>

        <div className='trackSecondDiv'>
            <h1 className='trackTime'>10:55 - 11:20 Hrs</h1>
            <h1 className='trackFifthHead'>Medicine and Meditation: Bridging the Gap</h1>
        </div>

        <div className='trackSecondDiv'>
            <h1 className='trackTime'>11:25 - 12:05 Hrs</h1>
            <div>
            <h1 className='trackSixthHead'>Deciphering NMC Guidelines:</h1>
            <h1 className='trackSixthHead'>Challenges and Solutions.</h1>
            </div>

            
        </div>

        <div className='trackSecondDiv'>
            <h1 className='trackTime'>12:10 - 12:30 Hrs</h1>
            <div>
            <h1 className='trackSeventhHead'>HealthTech:</h1>
            <h1 className='trackSeventhHead'>Revolutionizing Disease Management.</h1>
            </div>


        </div>

        <div className='trackSecondDiv'>
            <h1 className='trackTime'>12:35 - 01:05 Hrs</h1>
            <h1 className='trackEigthHead'>A Holistic Approach to Anti-aging.</h1>
        </div>

        <div className='trackSecondDiv'>
            <h1 className='trackTime'>01:10 - 01:50 Hrs</h1>

            <div>
                <h1 className='trackNinthHead'>New-age Digital Therapeutics:</h1>
                <h1 className='trackNinthHead'>Shaping the Future of Healthcare.</h1>
            </div>
  
        </div>

        <div className='trackSecondDiv'>
            <h1 className='trackTime'>01:55 - 02:30 Hrs</h1>
            <h1 className='trackThirteenHead'>The A, B, C, and D of Cardiovascular Health</h1>
        </div>

        <div className='trackSecondDiv'>
            <h1 className='trackTime'>02:45 - 03:10 Hrs</h1>
            <div>
              <h1 className='trackTwilthHead'>Post-Covid Era Hygiene Practices:</h1>
              <h1 className='trackTwilthHead'>Unveiling the Essentials</h1>
            </div>
           
        </div>

        <div className='trackSecondDiv'>
            <h1 className='trackTime'>03:15 - 04:00 Hrs</h1>
            
            <h1 className='trackEleventhHead'>Nutrition Myths Debunked:</h1>
     
        </div>
  */}

      <div className='agendaHeading2'>
            <div className='agendaSecondDiv'></div>
            <h1 className=''>Agenda</h1>
            <div className='agendaSecondDiv'></div>
        </div>  

    
 <table border="1" className='tab'>

        <tbody>
            <tr>
                <td className='col1'>08:30 - 09:30 Hrs</td>
                <td className='col2'>Registration</td>
            </tr>
            <tr>
                <td className='col1'>09:30 - 10:10 Hrs</td>
                <td className='col2'>Tb Elimination - Where Are We?</td>
            </tr>
            <tr>
                <td className='col1'>10:15 - 10:55 Hrs</td>
                <td className='col2'>AI in Healthcare - Navigating Ethical Issues</td>
            </tr>

            <tr>
                <td className='col1'>10:55 - 11:20 Hrs</td>
                <td className='col2'>Medicine and Meditation: Bridging the Gap</td>
            </tr>
            <tr>
                <td className='col1'>11:25 - 12:05 Hrs</td>
                <td className='col2'>Deciphering NMC Guidelines:Challenges and Solutions.</td>
            </tr>
            <tr>
                <td className='col1'>12:10 - 12:30 Hrs</td>
                <td className='col2'>HealthTech:Revolutionizing Disease Management.</td>
            </tr>
            <tr>
                <td className='col1'>12:35 - 01:05 Hrs</td>
                <td className='col2'>A Holistic Approach to Anti-aging.</td>
            </tr>
            <tr>
                <td className='col1'>01:10 - 01:50 Hrs</td>
                <td className='col2'>New-age Digital Therapeutics:</td>
            </tr>
            <tr>
                <td className='col1'>01:55 - 02:30 Hrs</td>
                <td className='col2'>The A, B, C, and D of Cardiovascular Health</td>
            </tr>
            <tr>
                <td className='col1'>02:45 - 03:10 Hrs</td>
                <td className='col2'>Post-Covid Era Hygiene Practices:Unveiling the Essentials</td>
            </tr>
            <tr>
                <td className='col1'>03:15 - 04:00 Hrs</td>
                <td className='col2'>
                    <p>Nutrition Myths Debunked:</p>
                    <div className='colInsideDiv'>

                    <p className='col3'>- Artificial Sweeteners: The Truth Revealed</p>
                    <p className='col3'>- Intermittent Fasting: Fact or Fad?</p>
                    <p className='col3'>- Diabetes Remission: A Comprehensive Guide</p>

                    </div>
                </td>
            </tr>
        </tbody>
    </table>
 
</div>


    
    

  )
}

export default Agenda