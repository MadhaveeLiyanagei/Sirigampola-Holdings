import React from 'react';
import '../App.css'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'
import Cards from '../components/Cards';
import EmployeeNavBar from '../components/EmployeeNavBar';

function Home(){
    return(
        <>
        
            <EmployeeNavBar />
        
            <HeroSection/>
           
        </>

    );
}
 
export default Home;