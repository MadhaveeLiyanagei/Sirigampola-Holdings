import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter  as Router, Switch, Route} from 'react-router-dom';
import ReactDOM from 'react-dom';
import './App.css';
import Home from './pages/Home';
import ListInventoryComponent from './components/ListInventoryComponent';
import CreateInventoryComponent from './components/CreateInventoryComponent';
import UpdateInventoryComponent from './components/UpdateInventoryComponent';
import ViewInventoryComponent from './components/ViewInventoryComponent';


function App() {
  return (
    <>
    
    <Router> 
      <Navbar/>
      <div className = "container"> 
      <Switch> 
            <Route path = "/" exact component = {ListInventoryComponent}></Route>
            <Route path = "/inventory" component = {ListInventoryComponent}></Route>
            <Route path = "/add-inventory" component = {CreateInventoryComponent}></Route>
            <Route path = "/view-inventory/:inventoryID" component = {ViewInventoryComponent}></Route>
            <Route path = "/update-inventory/:inventoryID" component = {UpdateInventoryComponent}></Route> 
       
      </Switch>
      </div>
      <Footer/>
      </Router>
    </>
  );
}

export default App;
