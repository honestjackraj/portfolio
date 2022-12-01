import React from 'react'
import mylogo from "../image/mylogo.png"
import "../container/Int.css"


import Github from "../image/github.png"
import Linkedin from "../image/linkedin.png"
import Instagram from "../image/instagram.png"
import { Link } from 'react-scroll'


const Int = () => {
    return (

        <>
        <div id='int'>
        <div className='container'>
            <div className='row'>
                <div className='col-6  int-all' >
                    
                    <div className='title intro'>
                    <span>Hy! I Am</span>
                    <br/>
                    <span>HonestRaj</span>
                    <br/>
                    <h4 >Full Stack Web Developer</h4>
                    <br/>
                    <span > FullStack Developer with high level
                        of experience in web designing and development, producting the Quality work
                    </span>

                  <div>
                    <div className='int-bot-sz'>
                  <Link  to="abt" spy={true} smooth={true} offset={-100} duration={500}>
                    <button
                        className='glow-on-hover int-bot'>Hire Me
                    </button>
                    
                </Link>
                </div>
                <div className='i-icons'>
                    <a href='https://github.com/honestjackraj'  target="_blank" rel= "noreferrer">
                        <img src={Github} alt="img" />
                    </a>
                    <a href='https://www.linkedin.com/in/honest-raj-48239816a/'  target="_blank" rel= "noreferrer">
                        <img src={Linkedin} alt="img" />
                    </a>
                    <a href='https://www.instagram.com/naan_antha_kadhayin_micham/'  target="_blank" rel= "noreferrer">
                        <img src={Instagram} alt="img" />
                    </a>
                </div>
                <div>
                  
                <div className="home__scroll">
                        <Link to="abt" spy={true} smooth={true} offset={-100} duration={500} className="home__scroll-button button--flex">
                            <i className="uil uil-mouse-alt home__scroll-mouse"></i>
                            <span className="home__scroll-name-line">Scroll down</span>
                            <i className="uil uil-arrow-down home__scroll-arrow"></i>
                        </Link>
                    </div>



                </div>


                  </div>



                    </div>
                </div>
                <div className='col ' >
                <img src={mylogo} alt='img' className='honst-img'/>
                </div>

            </div>
      </div>
      </div>
  


</>
      
    )
}

export default Int
