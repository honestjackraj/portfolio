import React from 'react'
 import "../container/PJT.css"
 import ecomers from "../asset/ecomers.jpg"

const PJT = () => {
  return (

    
    <div id='pjt'>
   
                    <div className='ptj-all'>
                <h1 className="ptj-head-1">PRORJECT</h1>
                <br/>
                <span className="ptj-head-2">Most recent work</span>
                </div>

<div className="container text-center pjc-sec-box">
  <div className="row">
    <div className="col">
    <img src={ecomers} alt="" className="portfolio__img"/>
    </div>


    
    <div className="col">
  


    <h2 className="portfolio__title">Ecommerce website</h2>
                                <p className="portfolio__description">
                                This Website name is DREAMS. Ecommerce website This website Authentication and Authorization front-end and back-end done. Responsive websites are designed to fit screen sizes such as desktop only. this site front-end only home and profile pages in progress. if you want check just click Demo Button.
                                   
                                </p><br/>
                                <p>ReactJS , Nodejs , Express , MongoDB</p>
                                <br/>
                                <div className='pjc-3b'>
                                <a href="" target="_blank" className="glow-on-hover pjt-bn">
                                    Live
                                    <i className="uil uil-arrow-right button__icon"></i>
                                </a>
                                <a href="" target="_blank" className="glow-on-hover pjt-bn">
                                    Client
                                    <i className="uil uil-arrow-right button__icon"></i>
                                </a>
                                <a href="" target="_blank" className="glow-on-hover pjt-bn">
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

export default PJT
