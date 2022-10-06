import React from 'react'
import { Form } from 'react-router-dom'
import "./Qualification.css"
import guvi from "../asset/guvi.jpg"
import svcclg from "../asset/svcclg.jpg"

const Qualification = () => {
  return (
    <div>

<section class="qualification section">
                <h2 class="section__title1">Qualification</h2>
                <span class="section__subtitle">My personal journey</span>

                <div class="qualification__container container">
                    <div class="qualification__tabs">
                        <div class="qualification__button button--flex qualification__active" data-target="#education">
                            <i class="uil uil-graduation-cap qualification__icon"></i>
                            Education
                        </div>

                                         
                    </div>

                 <div className='qultion'>  
                    
   <span class="qualification__rounder"></span>
      {/* <span class="qualification__line"></span>  */}
        <div class="home-qualification-div2">
            <div class="home-qulification1">Full Stack Developer</div>
            <div class="home-qulification2">GUVI Geek Network Private Limited-Chennai, 2022</div>
            </div>
            <img class="que-imge" src={guvi}/>

       
   <span class="qualification__rounder"></span>
      {/* <span class="qualification__line"></span>  */}
        <div class="home-qualification-div2">
            <div class="home-qulification1">Bachelor Of Engineering[ECE]</div>
            <div class="home-qulification2">Saraswati Vellu college of Engineering-VELLORE, 2013-2017</div>
            </div>
            <img class="que-imge" src={svcclg}/>

       
        </div> 
       

                    
                </div>
            </section>
            
    </div>
  )
}

export default Qualification
