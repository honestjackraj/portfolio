import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className='servise'>

      <div className='awesome'>
        <span>My Awesome</span>
        <span >About </span>
        <p className=' about-content'>I'm a full stack web developer and desinging new features from Ideation to production,               implementaition of wireframes and design flows in my web application. I take into consideration the user experience while writing reusable and efficlebt code  I passionately combine Good design,Technology,and Innovation in all my PROJECT </p>

      </div>



      <div className='information-full'>
       <div className='left'>
       <i className='bx bxs-user'>
        <span>HonestRAj</span></i>
        <i className='bx bxs-phone'>
        <span>+91 9841 5176 48</span></i>
        <i className='bx bxs-envelope'>
        <span>honestjack2@gmail.com</span></i>
       </div>
       <div className='right'>
        
       <button className='button s-button'>Download CV <i class="uil uil-download-alt button__icon"></i></button>
        <div className='blur s-blurl' style={{ background: "#ABF1FF94" }}></div>
       </div>
      </div>


    </div>









  )
}

export default About
