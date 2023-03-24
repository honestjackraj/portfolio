import React from 'react'
 import "../container/PJT.css"
 import ecomers from "../asset/ecomers.jpg"
 import Weather from "../image/weather.png"


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
  


    <h2 className="portfolio__title">Ecommerce Website</h2>
                                <p className="portfolio__description">
                                This Website name is DREAMS. Ecommerce website This website Authentication and Authorization front-end and back-end done. Responsive websites are designed to fit screen sizes such as desktop only. this site front-end only home and profile pages in progress. if you want check just click Demo Button.
                                   
                                </p><br/>
                                <p>ReactJS , Nodejs , Express , MongoDB</p>
                                <br/>
                                <div className='pjc-3b'>
                                <a href="https://dream-of-style-frontendf.onrender.com/" target="_blank" rel= "noreferrer" className="glow-on-hover pjt-bn">
                                    Live
                                    <i className="uil uil-arrow-right button__icon"></i>
                                </a>
                                <a href="https://github.com/honestjackraj/shoping-Frontend" target="_blank" rel= "noreferrer" className="glow-on-hover pjt-bn">
                                    Client
                                    <i className="uil uil-arrow-right button__icon"></i>
                                </a>
                                <a href="https://github.com/honestjackraj/shoping-Backend" target="_blank" rel= "noreferrer" className="glow-on-hover pjt-bn">
                                    Server
                                    <i className="uil uil-arrow-right button__icon"></i>
                                </a>
                                </div>








    </div>
  </div>
  </div> 





{/* weatherApp */}


<div className="container text-center pjc-sec-box">
  <div className="row">
    <div className="col">
    <img src={Weather} alt="" className="portfolio__img"/>
    </div>


    
    <div className="col">
  


    <h2 className="portfolio__title">WeatherApp</h2>
                                <p className="portfolio__description">
                                This Website name is WeatherApp website This website Authentication and Authorization front-end done.  please visit laptop its not a mobile Responsive websites are designed to fit screen sizes such as desktop only. this site front-end in progress. if you want check just click Demo Button.
                                   
                                </p><br/>
                                <p>HTML , CSS, jAVASCRIPT </p>
                                <br/>
                                <div className='pjc-3b'>
                                <a href="https://weatherapp-paz9.onrender.com/" target="_blank" rel= "noreferrer" className="glow-on-hover pjt-bn">
                                    Live
                                    <i className="uil uil-arrow-right button__icon"></i>
                                </a>
                                <a href="https://github.com/honestjackraj/weather-app" target="_blank" rel= "noreferrer" className="glow-on-hover pjt-bn">
                                    Client
                                    <i className="uil uil-arrow-right button__icon"></i>
                                </a>
                                <a href="https://github.com/honestjackraj/shoping-Backend" target="_blank" rel= "noreferrer" className="glow-on-hover pjt-bn">
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
