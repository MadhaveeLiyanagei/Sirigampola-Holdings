import React from 'react'
import '../App.css'
import { Button } from './Button';
import './AboutUsSection.css';
import './HeroSection.css';
import './Cards.css';
import CardItem from './CardItem';


function AboutUsSection2() {
    return (
       
        <div className='cards'>
      
        
            <div className="about-us__ttl ">
                <h1>What is Sirigampola Holdings?</h1>
            </div>
            <div className="about-us__info">
            <p>Sirigampola Holdings is a digital B2B marketplace aiming to be a comprehensive international trade hub for Small and Medium - sized Enterprises (SMEs) and their counterparts.
                Empowered by our proprietary blockchain technology, Export Portal prioritizes security, transparency, cost-effectiveness, and ease-of-use. Thus, our partners can confidently trade, network, and communicate with other verified companies and experts from all over the world. With Export Portal, SMEs have an exponential growth opportunity – not just geographically, but within their verticals as well.</p>
            </div>
            <div className="img">
                  <img src="./images/about-us.jpg" alt="logo" />
                  </div>
           <div className= "about-us__heading">
           <div className="about-us__ttl ">
                <p>Why Choose Sirigampola Holdings?</p>
               </div>
               
            <p>We have many benefits and exclusive features to offer our users <br></br>
                 more about why Sirigampola Holdings is the international B2B trade platform for you!</p>
            
               <div>

               </div>
               </div> 

               <div>
                   <table><tbody><td>
                       <th>


                           </th>
                           <th>
                               
                           </th>
                           
                    </td></tbody></table>
               </div>
  
  
          
      </div>
       
    );
}

export default AboutUsSection2
