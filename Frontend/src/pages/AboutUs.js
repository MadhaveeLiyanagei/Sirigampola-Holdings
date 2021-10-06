import React from 'react';
import "../App.css";
import AboutUsSection from '../components/AboutUsSection';
import AboutUsSection1 from '../components/AboutUsSection1';
import AboutUsSection2 from '../components/AboutUsSection2';
import EmployeeNavBar from "../components/EmployeeNavBar";



function AboutUs(){
    return(
        <>
            <EmployeeNavBar />
            <AboutUsSection1/>
            <AboutUsSection/>
            <AboutUsSection2/>


        </>

    );
}
 
export default AboutUs;