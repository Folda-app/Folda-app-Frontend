import React from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import FaqDetails from '../Components/FaqDetails';
function Faqs(props) {
    return (
        <div>
            <NavBar/>
            <FaqDetails/>
            <Footer/>
        </div>
    );
}

export default Faqs;