import React from 'react'
import "./Qualification.css"

const Qualification = () => {
  return (
    <div>

<section class="qualification section">
                <h2 class="section__title">Qualification</h2>
                <span class="section__subtitle">My personal journey</span>

                <div class="qualification__container container">
                    <div class="qualification__tabs">
                        <div class="qualification__button button--flex qualification__active" data-target="#education">
                            <i class="uil uil-graduation-cap qualification__icon"></i>
                            Education
                        </div>

                                         
                    </div>

                    <div class="qualification__sections"> 
                        {/* <!--=============== QUALIFICATION CONTENT 1 ===============--> */}
                        <div class="qualification__content qualification__active" data-content id="education">
                            {/* <!--=============== QUALIFICATION 1 ===============--> */}
                            <div class="qualification__data">
                                <div>
                                    <h3 class="qualification__title">10th</h3>
                                    <span class="qualification__subtitle">G.B.H.S Higher Secondary School</span>
                                    <div class="qualification__calendar">
                                        <i class="uil uil-calendar-alt"></i>
                                        2009 - 2010
                                    </div>
                                </div>
    
                                <div>
                                    <span class="qualification__rounder"></span>
                                    <span class="qualification__line"></span>
                                </div>
                            </div>
                            
                            {/* <!--=============== QUALIFICATION 2 ===============--> */}
                            <div class="qualification__data">                                 
                                <div></div>

                                <div>
                                    <span class="qualification__rounder"></span>
                                    <span class="qualification__line"></span>
                                </div>
                          
                                <div>
                                    <h3 class="qualification__title">12th</h3>
                                    <span class="qualification__subtitle">G.B.H.S Higher Secondary School</span>
                                    <div class="qualification__calendar">
                                        <i class="uil uil-calendar-alt"></i>
                                        2010 - 2012
                                    </div>
                                </div>
                                
                            </div>
    
                            {/* <!--=============== QUALIFICATION 3 ===============--> */}
                            <div class="qualification__data">
                                <div>
                                    <h3 class="qualification__title">Bachelor of Enggineering (ECE)</h3>
                                    <span class="qualification__subtitle">JSaraswathi velu college of Enggineering  </span>
                                    <div class="qualification__calendar">
                                        <i class="uil uil-calendar-alt"></i>
                                        2013 - 2017
                                    </div>
                                </div>
    
                                <div>
                                    <span class="qualification__rounder"></span>
                                    <span class="qualification__line"></span>
                                </div>
                            </div>
    
                            {/* <!--=============== QUALIFICATION 4 ===============--> */}
                            <div class="qualification__data">
                                <div></div>
                                     
                                <div class="qualification__time">
                                    <span class="qualification__rounder"></span>
                                 <span class="qualification__line"></span> 
                                </div>

                                <div>
                                    <h3 class="qualification__title">web developer(course)</h3>
                                    <span class="qualification__subtitle">fullStack developer(course)</span>
                                    <div class="qualification__calendar">
                                        <i class="uil uil-calendar-alt"></i>
                                        2022 - 2022
                                    </div>
                                </div>
                            </div>
                        </div>
    
                        
                    </div>
                </div>
            </section>
      
    </div>
  )
}

export default Qualification
