 import React from 'react'
 import "./Project.css"
 import ecomers from "../asset/ecomers.jpg"
 
 const Project = () => {
   return (
    <>

<section class="portfolio section" id="portfolio">
                <h2 class="section__title">Portfolio</h2>
                <span class="section__subtitle">Most recent work</span>
                 <br/>
                 <br/>
                <div >
                    <div >
                        <div class="portfolio__content grid swiper-slide ">
                            <img src={ecomers} alt="" class="portfolio__img"/>
    
                            <div class="portfolio__data">
                                <h3 class="portfolio__title">Ecommerce website</h3>
                                <p class="portfolio__description">
                                This Website name is DREAMS. Ecommerce website This website Authentication and Authorization front-end and back-end done. Responsive websites are designed to fit screen sizes such as desktop only. this site front-end only home and profile pages in progress. if you want check just click Demo Button.
                                   
                                </p><br/>
                                <p>ReactJS , Nodejs , Express , MongoDB</p>
                                <br/>
                                <a href="" target="_blank" class="glow-on-hover">
                                    Live
                                    <i class="uil uil-arrow-right button__icon"></i>
                                </a>
                                <a href="" target="_blank" class="glow-on-hover">
                                    Client
                                    <i class="uil uil-arrow-right button__icon"></i>
                                </a>
                                <a href="" target="_blank" class="glow-on-hover">
                                    Server
                                    <i class="uil uil-arrow-right button__icon"></i>
                                </a>
                            </div>
                            
                        </div>
                        
    
                        
                    </div>

                    
                </div>
            </section>
    </>
            
 
   )
 }
 
 export default Project
 