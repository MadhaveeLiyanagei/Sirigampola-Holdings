import React from 'react'
import '../App.css'
import { Button } from './Button';
import './HeroSection.css';


function HeroSection() {
    return (
        
        
        <div className = 'hero-container'>
        <video src = "/videos/importexport.mp4" autoPlay loop muted/>
        
            <h1>WELCOME</h1>
            <p>What are you waiting for?</p>
            <div className = "hero-btns">
                <Button className='btns' buttonStyle='btn--outline'
                buttonSize ='btn--large'>CONTACT US</Button>

                <Button className='btns' buttonStyle='btn--primary'
                buttonSize ='btn--large'><i className ='far fa-play-circle'/></Button>
            </div>
        </div>
       
    );
}

export default HeroSection
