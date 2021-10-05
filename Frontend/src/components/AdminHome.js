import React from 'react';
import '../App.css'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'
import Cards from '../components/Cards';
import AdminNavbar from './AdminNavbar';

function AdminHome(){
    return(
        <>  
            <HeroSection/>
            <Cards/>
        </>

    );
}
export default AdminHome;