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
import ListProductComponent from './components/ListProductComponent';
import CreateProductComponent from './components/CreateProductComponent';
import UpdateProductComponent from './components/UpdateProductComponent';
import ViewProductComponent from './components/ViewProductComponent';
import InventoryReport from './components/InventoryReport';
import ProductReport from './components/ProductReport';

function App() {
  return (
    <>
    
    <Router> 
      <Navbar/>
      <div className = "container"> 
      <Switch> 
            <Route path = '/' exact component = {Home} /> 
            <Route path = "/inventory" component = {ListInventoryComponent}></Route>
            <Route path = "/add-inventory" component = {CreateInventoryComponent}></Route>
            <Route path = "/view-inventory/:inventoryID" component = {ViewInventoryComponent}></Route>
            <Route path = "/update-inventory/:inventoryID" component = {UpdateInventoryComponent}></Route>
            <Route path = "/product" component = {ListProductComponent}></Route>
            <Route path = "/add-product" component = {CreateProductComponent}></Route> 
            <Route path = "/view-product/:productID" component = {ViewProductComponent}></Route>
            <Route path = "/update-product/:productID" component = {UpdateProductComponent}></Route>
            <Route path = "/inventoryreport" component = {InventoryReport}></Route>
            <Route path = "/productreport" component = {ProductReport}></Route>
            
      </Switch>
      </div>
      <Footer/>
      </Router>
    </>
  );
}


export default App;
