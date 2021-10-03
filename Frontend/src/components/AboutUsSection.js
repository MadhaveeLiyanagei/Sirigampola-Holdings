import React from 'react'
import '../App.css'
import { Button } from './Button';
import './AboutUsSection.css';
import './HeroSection.css';


function AboutUsSection() {
    return (
       
            <div >
        
               <div>
                  <center><img src="./images/about_us_logo.png" alt="logo" /></center> 
                   </div> 


            <div className="about_us_what">
                <p>What is Sirigampola Holdings?</p>
            </div>
            <div className="about_color">
            <p>Sirigampola Holdings is a digital B2B marketplace aiming to be a comprehensive international trade hub for Small and Medium - sized Enterprises (SMEs) and their counterparts.
                Empowered by our proprietary blockchain technology, Export Portal prioritizes security, transparency, cost-effectiveness, and ease-of-use. Thus, our partners can confidently trade, network, and communicate with other verified companies and experts from all over the world. With Export Portal, SMEs have an exponential growth opportunity – not just geographically, but within their verticals as well.</p>
            </div>

         


        </div>
       
    );
}

export default AboutUsSection
