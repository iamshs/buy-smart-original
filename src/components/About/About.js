import React from 'react';
import AboutBg from '../AboutBg/AboutBg';
import AboutDetails from '../AboutDetails/AboutDetails';
import AboutFollow from '../AboutFollow/AboutFollow';
import AboutTeam from '../AboutTeam/AboutTeam';
import Service from '../Service/Service';




const About = () => {
    return (
       <>
       <AboutBg ></AboutBg>
       <AboutDetails />
       <AboutTeam />
       <AboutFollow />
       <Service />
       </>
    );
};

export default About;