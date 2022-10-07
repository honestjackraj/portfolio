import React from 'react'
import './Footer.css'
import wave from "../image/wave.png"
import Fgit from "../asset/Fgit.png"
import Finsta from "../asset/Finsta.jpg"
import Flinkdin from "../asset/Flinkdin.png"


const Footer = () => {
  return (
    <> 
    <div  className=' contaniner' >
    {/* <div class="scrollup">
     <a href="#" class="scrollup" id="scroll-top">
     <i class="uil uil-arrow-up scrollup__icon"></i>

        </a>
        </div> */}

        <div  className='container footer-all'>

        <div className='footer-all'>
        <img className="foot-wave-yellow" src={wave}
            alt="no image"/>
   </div>
   <div className='F-icon-3-foot' >
   <p  className='F-icon-p-para'></p>
   
   <p  className='foot-para'> If you are interested in my profile just click and follow Me or Hire Me</p>

   <a href='https://github.com/honestjackraj'>
                     <div className='F-icon-3-foot1'>
                   <img src={Fgit}  alt="img"/>
                    </div>
                    </a> 
                    <a href='https://www.linkedin.com/feed/'>
                    <div className='F-icon-3-foot2'>
                    <img src={Finsta}  alt="img"/>
                    </div>
                    </a>
                    <a href='https://www.linkedin.com/feed/'>
                    <div className='F-icon-3-foot3'>
                    <img src={Flinkdin}  alt="img"/>
                    </div>
                    </a>
        </div>
        </div>



  
           
        
  








        </div>
      
    </>
  )
}

export default Footer
