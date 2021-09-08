import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter  as Router, Switch, Route} from 'react-router-dom';
import ReactDOM from 'react-dom';
import './App.css';
import Home from './pages/Home';
import ListBuyerOrdersComponent from './components/ListBuyerOrdersComponent';
import CreateBuyerOrdersComponent from './components/CreateBuyerOrdersComponent';
import UpdateBuyerOrdersComponent from './components/UpdateBuyerOrdersComponent';


function App() {
  return (
    <>
  
    <Router>

      <Navbar/>
      <Switch> 

        <Route path = '/' exact component = {Home} ></Route>
        <Route path = '/Orders' component ={ListBuyerOrdersComponent}></Route>
        {/*step 1*/}
        <Route path = '/checkout/:id' component = {CreateBuyerOrdersComponent} ></Route>
        {/*<Route path = '/update/:id' component = {UpdateBuyerOrdersComponent}></Route>*/}

      </Switch>
      </Router>
      
    </>
  );
}

export default App;
