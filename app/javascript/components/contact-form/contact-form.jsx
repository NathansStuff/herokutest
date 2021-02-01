import React from 'react';
import './contact-form.scss';

const ContactForm = () => {
  return (
    <div className='contact-wrapper'>
      <div className='contact-top'>
        <h3>Contact Us</h3>
        <h3>X</h3>
      </div>
      <div className='contact-form'>
        <form>
          <div className='contact-body'>
            <div className='contact-field'>
              <input name='name' placeholder='Name' />
            </div>
            <div className='contact-field'>
              <input type='email' name='email' placeholder='email' />
            </div>
            <div className='contact-field'>
            <textarea row='30' cols='100' name='message' placeholder='Please write your message here' />
            </div>
          </div>
          <div className='contact-footer'>
            <div>
              <p>Socials</p>
            </div>
            <div>
              <button type='submit'>Send</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
