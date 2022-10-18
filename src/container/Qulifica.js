import React from 'react'
import "../container/Qulifica.css"
import guvi from "../asset/guvi.jpg"
import svcclg from "../asset/svcclg.jpg"







const Qulifica = () => {
  return (
    <>
     <div className="container text-center">
  <div className="row">
    <div className="col">
<section className="Qulifi-all">
                <h2 className="section__title1">Qualification</h2>
                <span className="section__subtitle">My personal journey</span>

                <div className="qualification__container container">
                    <div className="qualification__tabs">
                        <div className="qualification__button button--flex qualification__active" data-target="#education">
                            <i className="uil uil-graduation-cap qualification__icon"></i>
                            Education
                        </div>

                                         
                    </div>

                 <div className='qultion'>  

                 <div className="home-qualification-div2">
            <div className="home-qulification1">Bachelor Of Engineering[ECE]</div>
            <div className="home-qulification2">Saraswati Vellu college of Engineering-VELLORE, 2013-2017</div>
            </div>
            <img className="que-imge" src={svcclg}/>


                    
        <div className="home-qualification-div2">
            <div className="home-qulification1">Full Stack Developer</div>
            <div className="home-qulification2">GUVI Geek Network Private Limited-Chennai, 2022</div>
            </div>
            <img className="que-imge" src={guvi}/>


            </div>      
                </div>
            </section>
            
    </div>
    </div>
    </div>
    
    
    </>
    
  )
}

export default Qulifica
