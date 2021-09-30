import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter  as Router, Switch, Route} from 'react-router-dom';
import ReactDOM from 'react-dom';
import './App.css';
import Home from './pages/Home';
import ListCreateOrder from './components/ListCreateOrder';
import AddOrderComponent from './components/AddOrderComponent';
import UpdateOrderComponent from './components/UpdateOrderComponent';
import ViewOrderComponent from './components/ViewOrderComponent';
import HeaderComponent from './components/HeaderComponent';

function App() {
  return (

    <div>
      <Router>
          <Navbar/>
          <HeaderComponent/>
            <div className="container">
              <Switch>
                <Route path = "/" exact component = {Home} ></Route>
                <Route path = "/createorder" component = {ListCreateOrder} ></Route>
                <Route path = "/add-order" component = {AddOrderComponent} ></Route>
                <Route path = "/update-order/:id" component = {UpdateOrderComponent} ></Route>
                <Route path = "/view-order/:id" component = {ViewOrderComponent} ></Route>
              </Switch>
            </div>
      </Router>
    </div>

    
  );
}

export default App;
