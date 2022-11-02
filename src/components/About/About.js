import React from 'react';
import AboutBg from '../AboutBg/AboutBg';
import AboutDetails from '../AboutDetails/AboutDetails';
import AboutFollow from '../AboutFollow/AboutFollow';
import AboutTeam from '../AboutTeam/AboutTeam';




const About = () => {
    return (
       <>
       <AboutBg ></AboutBg>
       <AboutDetails />
       <AboutTeam />
       <AboutFollow />
       </>
    );
};

export default About;