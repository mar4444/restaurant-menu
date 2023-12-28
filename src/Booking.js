import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Footer from './Footerr';

export const Booking = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_x0f0mxi', 'template_7ta9a1s', form.current, 'u3pY8-qmO9_VKGacF')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="book">
        <div className="reserve">
                <h3>Reserve a table</h3>
        </div>
        <div className="formm">
            <form ref={form} onSubmit={sendEmail}>
                <div className="flex-input">
                    <label>Name</label>
                    <input type="text" name="from_name" />
                </div>
                <br />
                <div className="flex-input">
                    <label>Email</label>
                    <input type="email" name="user_email" />
                </div>
                <br />
                <div className="flex-input">
                    <label>Message</label>
                    <textarea name="message" />
                </div>
                <br />
                <input className='btnn' type="submit" value="Send" />
            </form>
        </div>
        <Footer />
    </div>
    
  );
};

export default Booking;