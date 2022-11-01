import React from 'react';
import bgAbout from '../../assets/about.jpg'
import './AboutBg.css'
const AboutBg = () => {
    return (
        <div className='bg-about flex justify-center items-center'
         style={{ backgroundImage: `url(${bgAbout})` }}>
         <h1 className='lg:text-7xl text-4xl font-bold text-white py-64'>About Us</h1>
         
        </div>
    );
};

export default AboutBg;