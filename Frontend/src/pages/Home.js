import React from 'react';
import '../App.css'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'
import Cards from '../components/Cards';
import Navbar from '../components/Navbar';

function Home(){
    return(
        <>
         <Navbar/>
            <HeroSection/>
            <Cards/>
           

        </>

    );
}
 
export default Home;