import React, {useState} from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter  as Router, Switch, Route} from 'react-router-dom';
import ReactDOM from 'react-dom';
import './App.css';
import Home from './pages/Home';
import ListBuyerOrdersComponent from './components/ListBuyerOrdersComponent';
import CreateBuyerOrdersComponent from './components/CreateBuyerOrdersComponent';
import UpdateBuyerOrdersComponent from './components/UpdateBuyerOrdersComponent';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import data from "./components/back-cart/Data";
import Routes from "./components/front-cart/Routes/Routes";
import ViewBuyerOrderComponent from './components/ViewBuyerOrderComponent';
import Login from './components/Login/Login';
import Footer from './components/Footer';
import BuyerOrderReport from './components/BuyerOrderReport';


function App() {

  const {productItems}= data;
  const [cartItems, setCartItems] =useState([]);

  const handleAddProduct = (product) =>{
    const ProductExist = cartItems.find((item)=> item.id === product.id);
    if(ProductExist){
      setCartItems(
        cartItems.map((item) => 
        item.id === product.id 
        ?{...ProductExist, quantity: ProductExist.quantity + 1}
        : item
        )
        );
    }else{
            setCartItems([...cartItems,{...product, quantity: 1}]); 
      }
    };
  
  const handleRemoveProduct = (product) =>{
    const ProductExist = cartItems.find((item)=> item.id === product.id);
    if(ProductExist.quantity===1){
              setCartItems(cartItems.filter((item)=> item.id !== product.id))
    }else{
      setCartItems(
        cartItems.map((item) => 
        item.id === product.id 
        ? {...ProductExist, quantity: ProductExist.quantity-1} 
        : item)
      )
    }
  };

  const handleCartClearance = () =>{
    setCartItems([]);
  };
  return (
    <>
   
    <Router>
      <Navbar cartItems={cartItems}/>
    
      
      <Switch>
        {/*<Route path = '/' exact component = {auth} />*/}
        <Route path = '/' exact component = {Home} /> 
        <Route path = "/buyerordersreport" component = {BuyerOrderReport}></Route>
        {/*<Route path = '/login' exact component = {Login} /> */}
        <Route path = "/Orders" component = {ListBuyerOrdersComponent}></Route>
        {/*step 1 */}
        <Route path = "/checkout/:id" component = {CreateBuyerOrdersComponent}></Route>
        <Route path = "/view-buyerorder/:id" component = {ViewBuyerOrderComponent}></Route>
        {/*<Route path = "/update/:id" component = {UpdateBuyerOrdersComponent}></Route> */}
        
        <Routes 
        productItems={productItems} 
        cartItems= {cartItems} 
        handleAddProduct = {handleAddProduct}
        handleRemoveProduct= {handleRemoveProduct}
        handleCartClearance = {handleCartClearance}
        
        />
      </Switch>
      <Footer/>
      </Router>
    </>
  );
}

export default App;
