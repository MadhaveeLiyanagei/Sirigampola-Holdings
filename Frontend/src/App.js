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
import product_card from './data/productData';
import Routes from './Routes/Routes';
import MainContent from './components/mainContent';
import AddtoListForum from './AddtoList/AddtoListForum';
import ListSupplierOrder from './components/ListSupplierOrder';

function App() {

  // const { item } = product_card;
  // const [cartItem, setCartItem] = useState([]);

  // const handleAddProduct = (product) =>{
  //   const ProductExist = cartItem.find((item) => item.id === product.id);
  //   if(ProductExist){
  //     setCartItem(cartItem.map((item) => item.id === product.id ?
  //     {...ProductExist, quantity: ProductExist.quantity+1}: item));
  //   } else{
  //     setCartItem([...cartItem, { ...product, quantity: 1 }]);
  //   }
  // };

  const {productItem} = product_card;
  const [cartItem, setCartItem] = useState([]);

  const handleAddProduct = (product) =>{
    const ProductExist = cartItem.find((item) => item.id === product.id);
    if(ProductExist){
      setCartItem(cartItem.map((item) => item.id === product.id ?
      {...ProductExist, quantity: ProductExist.quantity+1}: item)
      );
    } else{
      setCartItem([...cartItem, {...product, quantity: 1 }]);
    }
  };

  const handleRemoveProduct = (product) => {
    const ProductExist = cartItem.find((item) => item.id === product.id);
    if(ProductExist.quantity === 1){
      setCartItem(cartItem.filter((item) => item.id !== product.id));
    } else {
      setCartItem(
        cartItem.map((item) => item.id === product.id ? {...ProductExist, quantity: ProductExist.quantity - 1}
        : item)
      )
    }
  }

  const handleCartClearence = () => {
    setCartItem([]);
  }

  return (

    <div>
      <Router>
        <Navbar/>
        <HeaderComponent cartItem={cartItem}></HeaderComponent>
            <div className="container">
              <Switch>
                <Route path = "/" exact component = {Home} ></Route>
                <Route path = "/createorder" component = {ListCreateOrder} ></Route>
                <Route path = "/add-order" component = {AddOrderComponent} ></Route>
                <Route path = "/update-order/:id" component = {UpdateOrderComponent} ></Route>
                <Route path = "/view-order/:id" component = {ViewOrderComponent} ></Route>
                <Route path = "/report-order" component = {SupplierOrderReport} ></Route>
                <Route path = "/add-to-list" component = {AddtoListForum} ></Route>
                <Route path = "/supplierorder" component = {ListSupplierOrder} ></Route>
              </Switch>
            </div>

            <div className="product_container">
              
            {/* <Routes productItem={productItem} cartItem={cartItem} handleAddProduct={handleAddProduct}></Routes> */}

            {/* <Route path = "/product-home" component = {mainContent} exact>
                    <MainContent productItem={productItem}  />
            </Route> */}
                
                <Route path = "/product-home" component = {mainContent} exact>
                    <MainContent productItem={productItem} handleAddProduct={handleAddProduct} />
                </Route>
                <Route path = "/cart" component = {Cart} exact>
                    <Cart cartItem={cartItem} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleCartClearence={handleCartClearence}/>
                </Route>

            </div>
            <Footer/>
      </Router>
    </div>

    
  );
}

export default App;
