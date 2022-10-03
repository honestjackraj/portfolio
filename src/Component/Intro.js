import React from 'react'
import "./Intro.css"
import { Link } from "react-router-dom";

// import  Floatingdiv  from '../Component/Floatingdiv'

import Github from "../image/github.png"
import Linkedin from "../image/linkedin.png"
import Instagram from "../image/instagram.png"
import Vector1 from "../image/Vector1.png"
import Vector2 from "../image/Vector2.png"
import Myimg from "../image/myimg.png"
// import  Crown from "../image/crown.png"


const Intro = () => {
    return (
        <div className='intro'>
            <div className='i-left'>
                <div className='i-name'>
                    <span>Hy! I Am</span>
                    <span>Honest Raj</span>
                    <span> FullStack Developer with high level
                        of experience in web designing and development, producting the Quality work
                    </span>
                </div>
                 <button
                 className='i-button'>Hire Me
                 </button>
                 <div className='i-icons'>
                    <a href=''>
                    <img src={Github}  alt="img"/>
                    </a>
                    <img src={Linkedin}  alt="img"/>
                    <img src={Instagram}  alt="img"/>
                    
                 </div>


                 <div>
               

               <div class="home__scroll">
                         <a href="#about" class="home__scroll-button button--flex">
                             <i class="uil uil-mouse-alt home__scroll-mouse"></i>
                             <span class="home__scroll-name">Scroll down</span>
                             <i class="uil uil-arrow-down home__scroll-arrow"></i>
                         </a>
                     </div>
               
 
 
 
               </div>


            </div>
            <div className='i-right'>
            
                <img src={Vector1} alt=''/>
                <img src={Vector2}alt=''/>
                <img src={Myimg} alt=''/>

        

            </div>

        </div>
    )
}


export default Intro
