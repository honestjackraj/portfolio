import React, { useRef } from 'react'
import "./Contact.css";
import emailjs from "emailjs-com"


const Contact = () => {
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
    <>
    <h2 class="section__title">Contact Me</h2>
    <span class="section__subtitle">Get in touch</span>
    <br/>
    <br/>
    <div className='container'>
   
        <div className='row'>
              <div className='col'> 
              <div>
                        <div class="contact__information">
                            <i class="uil uil-phone contact__icon"></i>
                            <div>
                                <h3 class="contact__title">Call Me</h3>
                                <span class="contact__subtitle">984-151-7648</span>
                            </div>
                        </div>

                        <div class="contact__information">
                            <i class="uil uil-envelope contact__icon"></i>
                            <div>
                                <h3 class="contact__title">Email</h3>
                                <span class="contact__subtitle">honest@email@email.com</span>
                            </div>
                        </div>

                        <div class="contact__information">
                            <i class="uil uil-map-marker contact__icon"></i>
                            <div>
                                <h3 class="contact__title">Location</h3>
                                <span class="contact__subtitle">Chennai-Tamilnadu</span>
                            </div>
                        </div>
                    </div>

              </div>
              <div className='col'>
              <form ref={form} onSubmit={sendEmail} class="contact__form grid" >
                        <div class="contact__inputs grid">
                            <div class="contact__content">
                               
                                <input type="text"  name="name" class="contact__input" required placeholder="Name"/>
                            </div>
                            <div class="contact__content">
                               
                                <input type="email"  name="email" class="contact__input" required placeholder="Email"/>
                            </div>
                        </div>
                        {/* <div class="contact__content">
                            
                            <input type="number"  name="phone number"class="contact__input" required placeholder="Phone number"/>
                        </div> */}
                        <div class="contact__content">
                            
                            <textarea name="details" id="" cols="0" rows="" class="contact__input" required placeholder="Message"></textarea>
                        </div>
                        
                        <div>
                            <button type="submit" class="button button--flex">
                                Send Message
                                <i class="uil uil-message button__icon"></i>
                            </button>
                        </div>
                    </form>
              </div>
        </div>


       
    </div>
    </>
  )
}

export default Contact



// function  Contact()  {
 

//   return (
//     <form ref={form} onSubmit={sendEmail}>
//       <label>Name</label>
//       <input type="text" name="user_name" />
//       <label>Email</label>
//       <input type="email" name="user_email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
//   );
// };
// export default Contact