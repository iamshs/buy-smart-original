import React from 'react';
import ContactCard from '../ContactCard/ContactCard';
import ContactForm from '../ContactForm/ContactForm';

const ContactNo = () => {
    return (
        <div className='bg-slate-100'>

            <div className='flex flex-col items-center justify-center'>
                <h2 className='text-lg font-bold text-black pt-20'>Have any queries?</h2>
                <h1 className='text-4xl font-bold text-black mt-4'>We're here to help.​</h1>
                <div style={{ height: "0.5px" }} className='bg-black w-16 mb-12 mt-5' ></div>
            </div>

            <div>
                <ContactCard />
                <ContactForm />
            </div>
            
        </div>
    );
};

export default ContactNo;