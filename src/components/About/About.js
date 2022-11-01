import React from 'react';
import Header from '../Header/Header';
import './About.css'
import bgAbout from '../../assets/about.jpg'

const About = () => {
    return (
       <>
        <div className='bg-about flex justify-center items-center' style={{ backgroundImage: `url(${bgAbout})` }}>
           <Header />
            <div >
                <h1 className='text-7xl font-bold text-white'>About Us</h1>
            </div>
        </div>
       </>
    );
};

export default About;