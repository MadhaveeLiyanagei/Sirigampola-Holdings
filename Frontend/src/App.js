import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter  as Router, Switch, Route} from 'react-router-dom';
import ReactDOM from 'react-dom';
import './App.css';
import Home from './pages/Home';

import ListProductComponent from './components/ListProductComponent';
import CreateProductComponent from './components/CreateProductComponent';
import UpdateProductComponent from './components/UpdateProductComponent';
import ViewProductComponent from './components/ViewProductComponent';

function App() {
  return (
    <>
    
    <Router> 
      <Navbar/>
      <div className = "container"> 
      <Switch> 
            <Route path = '/' exact component = {Home} /> 
            
            <Route path = "/product" component = {ListProductComponent}></Route>
            <Route path = "/add-product" component = {CreateProductComponent}></Route>  
            <Route path = "/update-product/:productID" component = {UpdateProductComponent}></Route>
            <Route path = "/view-product/:productID" component = {ViewProductComponent}></Route>
      </Switch>
      </div>
      <Footer/>
      </Router>
    </>
  );
}

export default App;
