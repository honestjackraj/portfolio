import React, { useRef } from 'react'
import "../container/Cont.css"
import emailjs from "emailjs-com"


const Cont = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_v8zf9di', 'template_h7678tn', form.current, 'Ea0xkVZLR4Z6lYXWS')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };



return (
 <div id='cont'>
<div className='cont-all'>


<div className="container login-container " >
						<div className="row login-row ">

<h2 className="section__title CONT-titel">Contact Me</h2>
    <span className="section__subtitle CONT-titel2">Get in touch</span>
    <br/>
    <br/>







    <div className='container '>
    <div className='row  '>
        <div className='col  log-cont' >

                        <div className="contact__information">
                            <i className="uil uil-phone contact__icon"></i>
                            <div>
                                <h3 className="contact__title">Call Me</h3>
                                <span className="contact__subtitle">984-151-7648</span>
                            </div>
                        </div>

                        <div className="contact__information">
                            <i className="uil uil-envelope contact__icon"></i>
                            <div>
                                <h3 className="contact__title">Email</h3>
                                <span className="contact__subtitle">honestjack2@email@email.com</span>
                            </div>
                        </div>

                        <div className="contact__information">
                            <i className="uil uil-map-marker contact__icon"></i>
                            <div>
                                <h3 className="contact__title">Location</h3>
                                <span className="contact__subtitle">VELLORE-Tamilnadu</span>
                            </div>
                        </div>
     
     


        </div>
        <div className='col'>
             
                    
        <div className=" col login-form">
              <form ref={form} onSubmit={sendEmail} className="contact__form grid" >
                        <div className="contact__inputs grid">
                            <div className="contact__content">
                               
                                <input type="text"  name="name" className="contact__input" required placeholder="Name"/>
                            </div>
                            <div className="contact__content">
                               
                                <input type="email"  name="email" className="contact__input" required placeholder="Email"/>
                            </div>
                        </div>
                        <div className="contact__content">
                            
                            <input type="number"  name="number"className="contact__input" required placeholder="Phone number"/>
                        </div>
                        <div >
                            
                            <textarea name="message" id="" cols="0" rows="" className="contact__input contanct-massg" required placeholder="Message"></textarea>
                        </div>
                        
                        <div>
                            <button type="submit" className="button glow-on-hover cont-bn">
                                Send Message
                                <i className="uil uil-message button__icon"></i>
                            </button>
                        </div>
                    </form>
              </div>
                 
                    </div>

                </div>

    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Cont
