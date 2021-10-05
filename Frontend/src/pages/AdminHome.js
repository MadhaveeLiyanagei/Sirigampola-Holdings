import React from 'react';
import '../App.css'
import HeroSection from '../components/HeroSection'

import Cards from '../components/Cards';


function AdminHome(){
    return(
        <>
            <HeroSection/>
            <div className="container1">
            <Cards/>
            </div>
        </>

    );
}
 
export default AdminHome;