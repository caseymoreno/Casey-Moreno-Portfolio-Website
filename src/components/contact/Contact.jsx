import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {AiOutlinePhone} from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9725saa', 'template_7ormgfv', form.current, 'dD_cMrnPESrdHjUxe')
    e.target.reset();
    alert('Message sent!');
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>casey.moreno0012@gmail.com</h5>
            <a href="mailto:casey.moreno0012@gmail.com">Send a message</a>
          </article>
          <article className='contact__option'>
            <AiOutlinePhone className='contact__option-icon'/>
            <h4>Phone</h4>
            <h5>786-856-5291</h5>
            <p>Give me a call</p>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact