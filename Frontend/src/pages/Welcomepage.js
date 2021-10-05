import React from 'react';
import '../App.css'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'
import Cards from '../components/Cards';
import Navbar from '../components/Navbar';
import WelcomeNavbar from '../components/WelcomeNavbar';

function Welcomepage(){
    return(
        <>
           <WelcomeNavbar/>
            <HeroSection/>
           

        </>

    );
}
 
export default Welcomepage;