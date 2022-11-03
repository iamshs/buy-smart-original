import React from "react";
import './ContactForm.css'

const ContactForm = () => {
  return (
    <div className=" flex lg:justify-between lg:px-10 px-5 pb-20 lg:items-center flex-col lg:flex-row ">
      <div className="text-black max-w-lg mb-6 lg:mb-0">
        <h3 className="text-md font-bold">Don't be a stranger!</h3>
        <h1 className="lg:text-4xl text-3xl font-bold mt-2 mb-8">
          You tell us. We listen.
        </h1>
        <p>
          Cras elementum finibus lacus nec lacinia. Quisque non convallis nisl,
          eu condimentum sem. Proin dignissim libero lacus, ut eleifend magna
          vehicula et. Nam mattis est sed tellus.
        </p>
      </div>
       
     <div className="max-w-xl bg-base-100 p-10">
        <input className="input-field" type={'text'} placeholder='NAME' />
        <input className="input-field" type={'text'} placeholder='SUBJECT' />
        <input className="input-field" type={'email'} placeholder='EMAIL' />
        <textarea className="input-field" placeholder="MESSAGE" rows={6} />

       <input type={'submit'} value='SEND MESSAGE' className="my-6 font-bold px-4 py-4 input-submit" />

     </div>
        
      

    </div>
  );
};

export default ContactForm;
