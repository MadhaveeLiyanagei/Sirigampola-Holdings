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
              text='Add, view, update and delete notices. Accept, reject, delete and view leaves. Maintain attendance and payroll. Generate reports.'
              label='Employee Management'
              path='/Employee'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/Order.jpg'
              text='Add, view , update and delete all the buyer orders efficiently .'
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
              text='Deliver products through courier services'
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