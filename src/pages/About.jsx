import React from 'react';
import NavBar from '../Components/NavBar';
import AboutHero from '../Components/AboutHero';
import Footer from '../Components/Footer';
import Goal from '../Components/Goal';
import Growth from '../Components/Growth';
import Founders from '../Components/Founders';

function About(props) {
    return (
        <div>
           <NavBar/>
           <AboutHero/>
           <Goal/>
           <Growth/>
           <Founders/>
           <Footer/>
        </div>
    );
}

export default About;