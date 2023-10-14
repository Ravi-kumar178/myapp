import React from 'react'
import img from "../assets/dotted-shape.png"
import "./Overview.css"

function Overview() {
  return (
    <div className='overviewFirst'>
        <div>
               <h1 className='overviewFirstHead'>Overview
                  NHWIC 2023:</h1>
                <h1 className='overviewSecondHead'>Unlocking the Future</h1>
        </div>

        <p className='overviewPara'>
        The 8th National Health Writers and Influencers Convention 2023 is a premier gathering of more than 100 healthcare writers, influencers, and thought leaders. This two-day event aims to equip attendees with the latest insights and tools to navigate the ever-evolving landscape of healthcare writing. Explore cutting-edge topics, engage with industry experts, and honor the champions of rural healthcare.
        </p>

       {/* <img src={img} className='overviewImage'></img>  */}
    </div>
  )
}

export default Overview