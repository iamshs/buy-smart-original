import React from 'react';
import contactBg from '../../../assets/contact.jpg'
import './ContactBg.css'

const ContactBg = () => {
    return (
        <div  className='contact-bg flex justify-center items-center'
         style={{ backgroundImage: `url(${contactBg})` }} >

            <h1 className='text-6xl text-white font-bold'>Contact Us</h1>
            
        </div>
    );
};

export default ContactBg;