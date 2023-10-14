import React from 'react';
import "./Contactus.css"

import img from "../assets/AI Image for Logos[877].jpg"
import img2 from "../assets/Shayona-Banner-Page-Banner-Contact-us.jpg"
import { FaHome } from "react-icons/fa";
import { BiChevronRight } from "react-icons/bi";
import { BsFillSendFill } from "react-icons/bs";

import img3 from "../assets/10.png"
import img4 from "../assets/11.png"
import img5 from "../assets/12.png"



import { FcManager } from "react-icons/fc";
import { MdMail } from "react-icons/md";
import { FaPencilAlt } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";


const Contactus = () => {
  return (
 <div id='contactus' className='allContactInfo'>

  <div className='bg-gray-100 contact'>

   
   <div className='relative contactDiv'>
      <img src={img2} className=' min-w-full'></img>
     {/* <div className='absolute contactHead top-20 left-8 text-white flex flex-col space-y-10 font-bold text-xl'>
       <h1 className='text-3xl contactFirstText'>Contact Us</h1>
    
       <div className='flex flex-row contactFirstDiv flex-wrap space-x-4'>

     <div className='flex flex-row contactSecondDiv flex-wrap justify-start space-x-2 hover:text-[#ff5a3c] transition-all duration-150'>
        <FaHome color='#ff5a3c' size={30} />
        <p className='mt-[5px] contactSecondText '>Home</p>
     </div>

     <BiChevronRight size={30} className='mt-[5px]'/>
     <h1 className='mt-[5px] firstContact'>Contact</h1>

       </div> 
  

  </div>*/}
   </div>

    <div className='max-w-[1250px] contactParentDiv mx-auto flex justify-between items-center flex-wrap my-[130px] flex-row'>
  
   <div className='flex flex-col contactChildrenDiv justify-center items-center space-y-8 contactBox py-16 px-28'>
      <img src={img3} height={40}></img>

     <div className=' flex flex-col contactSecondChildrenDiv space-y-4 justify-center items-center'>
     <h1 className='font-bold text-2xl contactSecondChildrenHeading text-[#04050f]'>Email Address</h1>
      <div className='text-[16px]  contactThirdChildrenDiv'>
       <p className='contactFourthChildrenDiv'>vigya@healfoundation.in</p>
       <p>healthwritersconvention@healfoundation.in</p>
     </div> 
     </div> 
      
     
  </div>

  <div className=' newChildrenDiv flex flex-col justify-center items-center space-y-8 contactBox py-16 px-28'>
      <img src={img4} height={40}></img>
      <div className=' newSecondChildrenDiv flex flex-col space-y-4 justify-center items-center'>
        <h1 className='newSecondChildrenHeading font-bold text-2xl text-[#04050f]'>Phone Number</h1>
        <div className='newThirdChildrenDiv text-[16px]'>
          <p>+91 9910819176</p>
          <p>+91 8447144492</p>
        </div>
      </div>
    </div>
  

   <div className='  newChildrenDiv flex flex-col justify-center items-center space-y-8 contactBox py-16 px-28'>
      <img src={img5} height={40}></img>
      <div className=' newSecondChildrenDiv flex flex-col space-y-4 justify-center items-center'>
       <h1 className='newSecondChildrenHeading font-bold text-2xl text-[#04050f]'>Office Address</h1>
       <div className='newThirdChildrenDiv text-[16px]'>
         <p >AIIMS Convention Centre,</p>
         <p className='newFouthChildDiv'>New Delhi</p>
       </div>
      </div>
   
   </div>

   

    </div> 


    <div id='form' className="min-h-screen contactFormFirstDiv flex justify-center items-center ">
  
      <div   className="bg-white contactFormSecondDiv p-8 rounded shadow-lg w-full">
       <h2  className="text-2xl text-[#04050f]  font-bold formHeading mb-6">Express Interest</h2>
        <form action='https://www.facebook.com'>
          <div className='grid formDiv grid-cols-2 gap-5'>
         <div className="formSecondDiv mb-4 relative">
           <label className="formFirstLabel block text-gray-600 font-medium mb-2">First Name</label>
            <input
             type="text"
             className="w-full firstInput border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
             placeholder="Your First Name"
            />

         <FcManager className='firstIco h-6 w-6 absolute top-10 right-2'/>
      </div>

      <div className="formSecondDiv mb-4 relative">
        <label className="formFirstLabel block text-gray-600 font-medium mb-2">Last Name</label>
        <input
          type="text"
          className="w-full firstInput border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
          placeholder="Your Last Name"
        />
         <FcManager className='firstIco h-6 w-6 absolute top-10 right-2'/>
      </div>

     
          </div>

          <div className='formDiv grid grid-cols-2 gap-5'>
         <div className="formSecondDiv mb-4 relative">
        <label className="formFirstLabel block text-gray-600 font-medium mb-2">Email</label>
        <input
          type="email"
          className="firstInput w-full  border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
          placeholder="Your Email"
        />
        <MdMail   className='firstIco h-6 w-6 text-[#ed9954] absolute top-10 right-2'/>
         
         </div>

         <div className="formSecondDiv mb-4 relative">
        <label className="formFirstLabel block text-gray-600 font-medium mb-2">Contact Number</label>
        <input
          type="number"
          className="firstInput w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
          placeholder="Enter your number..."
        />
         <IoIosCall className='firstIco h-6 w-6 absolute top-10 right-2 text-[#ed9954] -rotate-90'/>
         </div>

          </div>

          <div className='formFirstLabel selectdiv '>
       <label for="pet-select" className='selectLab'>Join us as:</label>

        <select name="pets" id="pet-select" className='selectInp'>
            <option value="please choose an option" className='selectSel'></option>
            <option value="dog" className='selectSel'>Speaker</option>
            <option value="cat"  >Delegate</option>
            <option value="hamster">Partner</option>
            <option value="parrot" className='sponsele'>Sponsor</option>
         </select>
          </div>
     
          <div className="messageDiv mb-4 relative">
        <label className="formFirstLabel block text-gray-600 font-medium mb-2">Message</label>
        <textarea
          className="secondInput w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
          rows="4"
          placeholder="Your Message"
        ></textarea>
        <FaPencilAlt  className='secondIco h-6 w-6 text-[#ed9954] absolute top-10 right-2'/>
          </div>
     
          <div className="mb-4 flex flex-row items-center space-x-4">
        <input type="checkbox" id="myCheckbox" class="custom-checkbox font-medium text-gray-600" />
        <label for="myCheckbox" className='custom-label block text-gray-600  font-medium mb-2'>Save my name, email, and website in this browser for the next time I comment.</label>

          </div>

          <button 
        type="submit"
        className="ml-6 mt-[20px] heroSectionButton px-6 font-normal rounded-md  text-xl py-1  flex flex-row items-center space-x-2 "
      >
        Submit
          </button>
    </form>
      </div>

      <div className='map'>
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.256055834734!2d77.29405150959123!3d28.592094275585374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce485bddcff7b%3A0x654cd4801e3f29e!2sStar%20City%20Mall%2C%20Mayur%20Place%2C%20Mayur%20Vihar%2C%20Delhi%2C%20110091!5e0!3m2!1sen!2sin!4v1696675962355!5m2!1sen!2sin" width="100%" className='mapEmb' height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div> 

    </div>

    {/*  <div className='max-w-[1150px]  w-12/13  mx-auto min-h-fit py-[30px] flex flex-wrap justify-center space-x-24  items-center '>
 
      <p className='text-3xl font-bold'>For any query: </p>


      <div className='relative'>
        <input type='email' name='email' placeholder='Email*' className='h-12 w-[300px] '/>
           <a href='mailto:bhardwajravi2025@gmail.com'>
           <div className='bg-[#ff5a3c] flex justify-center items-center h-12 w-[50px] absolute top-0 right-0'>
             <BsFillSendFill size={25} className='text-white'/>
            </div>
          </a> 
       </div>

      </div>
    */}

      
  
     </div>

        
 </div>
 
   
  );
};

export default Contactus;
