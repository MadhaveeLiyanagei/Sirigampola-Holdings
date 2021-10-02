import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter  as Router, Switch, Route} from 'react-router-dom';
import ReactDOM from 'react-dom';
import './App.css';
import './App.scss';
import Home from './pages/Home';
import ListCreateOrder from './components/ListCreateOrder';
import AddOrderComponent from './components/AddOrderComponent';
import UpdateOrderComponent from './components/UpdateOrderComponent';
import ViewOrderComponent from './components/ViewOrderComponent';
import HeaderComponent from './components/HeaderComponent';
import SupplierOrderReport from './components/SupplierOrderReport';
import Footer from './components/Footer';
import mainContent from './components/mainContent';
import Cart from './Cart/Cart';
import data from './data/productData';

function App() {

  const { item } = data;
  const [cartItem, setCartItem] = useState([]);

  return (

    <div>
      <Router>
          <Navbar/>
            <div className="container">
              <Switch>
                <Route path = "/" exact component = {Home} ></Route>
                <Route path = "/createorder" component = {ListCreateOrder} ></Route>
                <Route path = "/add-order" component = {AddOrderComponent} ></Route>
                <Route path = "/update-order/:id" component = {UpdateOrderComponent} ></Route>
                <Route path = "/view-order/:id" component = {ViewOrderComponent} ></Route>
                <Route path = "/report-order" component = {SupplierOrderReport} ></Route>
                <Route path = "/cart" component = {Cart} ></Route>
                <Route item={item} cartItem={cartItem} ></Route>
              </Switch>
            </div>

            <div className="product_container">
            <Route path = "/product-home" component = {mainContent} ></Route>
            </div>
            <Footer/>
      </Router>
    </div>

    
  );
}

export default App;
