import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter  as Router, Switch, Route} from 'react-router-dom';
import ReactDOM from 'react-dom';
import './App.css';
import './components/Footer.css'
import ListCourierComponent from './components/ListCourierComponent';
import ListDeliveryComponent from './components/ListDeliveryComponent';
import CreateCourierComponent from './components/CreateCourierComponent';
import UpdateCourierComponent from './components/UpdateCourierComponent';
import ViewCourierComponent from './components/ViewCourierComponent';
import CreateDeliveryComponent from './components/CreateDeliveryComponent';
import UpdateDeliveryComponent from './components/UpdateDeliveryComponent';
import ViewDeliveryComponent from './components/ViewDeliveryComponent';
import AddCourierDelivery from './components/AddCourierDelivery';
import Home from'./pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div>
        <Router>
              <Navbar />

                <div className="container">
                
                    <Switch> 
                          
                          <Route path = "/" exact component = {ListCourierComponent}></Route>
                          <Route path = "/courier" component = {ListCourierComponent}></Route>
                          <Route path = "/delivery" component = {ListDeliveryComponent}></Route>
                          <Route path = "/add-courier" component = {CreateCourierComponent}></Route>
                          <Route path = "/add-delivery" component = {CreateDeliveryComponent}></Route>
                          <Route path = "/update-courier/:id" component = {UpdateCourierComponent}></Route> 
                          <Route path = "/courier-delivery/:id" component = {AddCourierDelivery}></Route> 
                          <Route path = "/update-delivery/:id" component = {UpdateDeliveryComponent}></Route> 
                          <Route path = "/view-courier/:id" component = {ViewCourierComponent}></Route> 
                          <Route path = "/view-delivery/:id" component = {ViewDeliveryComponent}></Route> 
                          <Route path = "/home" component = {Home}></Route> 
                          
                    </Switch>
                    
                </div>
              <Footer/>
        </Router>
    </div>
  );
}

export default App;


