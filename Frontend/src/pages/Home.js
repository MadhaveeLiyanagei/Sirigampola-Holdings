import React from 'react';
import '../App.css'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'
import Cards from '../components/Cards';

function Home(){
    return(
        <>
            <HeroSection/>
            <br></br>
            <br></br>
            <Cards/>
            <Footer/>

        </>

    );
}
 
export default Home;