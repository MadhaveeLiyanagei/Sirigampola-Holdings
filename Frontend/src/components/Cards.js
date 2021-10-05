import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Admin Panel</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/inventory.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Inventory Management'
              path='/inventory'
            />
            <CardItem
              src='images/product.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Product Management'
              path='/product'
            />

            <CardItem
              src='images/employee.png'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Employee Management'
              path='/Employee'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/Order.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Order Management'
              path='/Orders'
            />
            <CardItem
              src='images/finance.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Finance Management'
              path='/products'
            />
            <CardItem
              src='images/Distribution.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Distribution Management'
              path='/courier'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;