import React from 'react'
import '../App.css'
import { Button } from './Button';
import './AboutUsSection.css';
import './HeroSection.css';



function AboutUsSection1() {
    return (
        <div className = 'hero-container'>

        <video src = "/videos/exportimport.mp4" autoPlay loop muted/>
        +<br></br>
              <h1>About Us</h1>
              +<br></br>
              +<br></br>
              <p>Sirigampola Holdings</p>
              <div className = "hero-btns">
                  <Button className='btns' buttonStyle='btn--outline'
                  buttonSize ='btn--large'>CONTACT US</Button>
  
                  <Button className='btns' buttonStyle='btn--primary'
                  buttonSize ='btn--large'>CONTACT US<i className ='far fa-play-circle'/></Button>
              </div>
          </div>
    );
}

export default AboutUsSection1
