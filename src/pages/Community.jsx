import React from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import CommunityHero from '../Components/CommunityHero';
import CommunityDetails from '../Components/CommunityDetails';
import CommunityBanner from '../Components/CommunityBanner';
function Community(props) {
    return (
        <div>
            <NavBar/>
            <CommunityHero/>
            <CommunityDetails/>
            <CommunityBanner/>
            <Footer/>
        </div>
    );
}

export default Community;