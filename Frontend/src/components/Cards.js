import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
	 
<div class= "destination">
<div class="containerCard">

    <div div class = "cardM">
		  <div class="imgboxM">
        <CardItem
              src='images/Macbook.jpg'
            />
		    </div>
		    <div class="contentM">
			  <h2> Mac Book </h2>

			  <p> LKR 300000
			  </p>
			
		  </div>
      </div>
      <div class = "cardM">
		    <div class="imgboxM">
			  <CardItem
              src='images/iron.jpg'
            />
		    </div>
		  
		  <div class="contentM">
			  <h2>Clothing Iron </h2>

			  <p></p>
			
		    </div>
      </div>

      <div class = "cardM">
		    <div class="imgboxM">
			  <CardItem
              src='images/Spareparts.jpg'
            />
		    </div>
		  
		  <div class="contentM">
			  <h2> Clothing Iron </h2>

			  <p></p>
			
		    </div>
      </div>

      <div class = "cardM">
		    <div class="imgboxM">
			  <CardItem
              src='images/hp3.jpg'
            />
		    </div>
		    <div class="contentM">
			  <h2> Beats Headphone </h2>

			  <p></p>
			
		    </div>
      </div>

      <div class = "cardM">
		    <div class="imgboxM">
			  <CardItem
              src='images/Camera.jpg'
            />
		    </div>
		  
		    <div class="contentM">
			  <h2> Camera </h2>

			  <p></p>
			
		    </div>
      </div>

      <div class = "cardM">
		    <div class="imgboxM">
			  <CardItem
              src='images/ironnew.jpg'
            />
		    </div>
		  
		    <div class="contentM">
			  <h2> Straightening Iron </h2>

			  <p></p>
			
		    </div>
      </div>



      </div>
  </div>
	 

  );
 
}

export default Cards;
