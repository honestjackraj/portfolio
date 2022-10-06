import React from 'react'
import "./Intro.css"
// import { Link } from 'react-router-dom';
import Github from "../image/github.png"
import Linkedin from "../image/linkedin.png"
import Instagram from "../image/instagram.png"
import mylogo from "../image/mylogo.png"


const Intro = () => {
    return (
        <div id='home' className='intro'>
            <div className='i-left'>
                <div className='i-name'>
                    <span>Hy! I Am</span>
                    <span>HonestRaj</span>
                    <span className='intro-fullstack-fsd'>Full Stack Developer</span>
                    <span className='intro-fullstack'> FullStack Developer with high level
                        of experience in web designing and development, producting the Quality work
                    </span>
                </div>
                <br/>
                <a href='#about'>
                 <button
                 className='glow-on-hover'>Hire Me
                 </button>
                 </a>
                 <div className='i-icons'>
                    <a href='https://github.com/honestjackraj'>
                    <img src={Github}  alt="img"/>
                    </a>
                    <a href='https://www.linkedin.com/feed/'>
                    <img src={Linkedin}  alt="img"/>
                    </a>
                    <a href='https://www.linkedin.com/feed/'>
                    <img src={Instagram}  alt="img"/>
                    </a>  
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
            
                <img src={mylogo} alt=''/>
               

        

            </div>

        </div>
    )
}


export default Intro
