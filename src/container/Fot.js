import React from 'react'
import { Link } from 'react-scroll'
import Fgit from "../asset/Fgit.png"
import Finsta from "../asset/Finsta.jpg"
import Flinkdin from "../asset/Flinkdin.png"
import "../container/Fot.css"

const Nav = () => {
  return (
  <>


    
 <div className='  foot-a-all'>

    <div  className=' contaniner ' >
    <div className="scrollup">
     <Link to="#" className="scrollup" id="scroll-top">
  <i className="uil uil-arrow-up scrollup__icon"></i>

        </Link>
        </div>

        <div  className='container footer-all'>

   
   <div className='F-icon-3-foot' >

   <div className='two-icon-nove'>
                    <a href='https://www.instagram.com/naan_antha_kadhayin_micham/'>
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
   
   <h1 className='foot-para-head1'> Thank you for visiting my portfolio</h1>
   <p  className='foot-para'> If you are interested in my profile just click and follow Me or Hire Me</p>
        <div className='icon-fot'>
   <a href='https://github.com/honestjackraj'>
                     <div className='F-icon-3-foot1'>
                   <img src={Fgit}  alt="img"/>
                    </div>
                    </a> 

                    <div className='foto-anima-gif'>

                    <img className="land-gif3"
                src="https://64.media.tumblr.com/a112f96ac5c2e3c20978db323b365382/tumblr_o1eo0j6JVR1rrafxzo1_1280.gifv"
                alt="no image"/>
            <img className="land-gif1"
                src="https://64.media.tumblr.com/eaeb61d5f4cf06760bf6c24f617e5182/tumblr_o1eo0j6JVR1rrafxzo5_1280.gif"
                alt="no image"/>
            <img className="land-gif2" src="https://i.pinimg.com/originals/b6/41/3d/b6413d6fcf9529c185771f190446b9c0.gif"
                alt="no image"/>
                    </div>
                   
        </div>
        </div>
        </div>



  
           
        
  








        </div>
      
        </div>
    
    
    
    </>

  )
}

export default Nav
