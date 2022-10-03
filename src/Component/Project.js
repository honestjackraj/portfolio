 import React from 'react'
 import "./Project.css"
 
 const Project = () => {
   return (
     <div>
        <div className="portfolio section" id="portfolio"/>
                <h2 className="section__title">Portfolio</h2>
                <span className="section__subtitle">Most recent work</span>

                <div >
                    <div >
                        <div className="portfolio__content grid swiper-slide">
                            <img src="port1.jpg" alt="" className="portfolio__img"/>
    
                            <div className="portfolio__data">
                                <h3 className="portfolio__title">CRUD APP</h3>
                                <p className="portfolio__description">
                                    Developed an CRUD Application , Tie Tac Tac Game and Form Validation. 
                                    The Application has necessary features like create,delete,read and update the details
                                   
                                </p><br/>
                                <p>ReactJS , Nodejs , Express , MongoDB</p>
                                <br/>
                                <a href="https://rococo-vacherin-33bbb4.netlify.app" target="_blank" className="button button--flex button--small portfolio__button">
                                    Live
                                    <i className="uil uil-arrow-right button__icon"></i>
                                </a>
                                <a href="https://github.com/vigneshraaj19/newapp1" target="_blank" className="button button--flex button--small portfolio__button">
                                    Client
                                    <i className="uil uil-arrow-right button__icon"></i>
                                </a>
                                <a href="https://github.com/vigneshraaj19/node" target="_blank" className="button button--flex button--small portfolio__button">
                                    Server
                                    <i className="uil uil-arrow-right button__icon"></i>
                                </a>
                            </div>
                            
                        </div>
                        
   
                            </div>
                        </div>
                        </div>
             

                    
              
            
 
   )
 }
 
 export default Project
 