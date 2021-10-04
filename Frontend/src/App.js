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
import Sidebar from './components/Sidebar';
import AdminHome from './components/AdminHome';
import ListInventoryComponent from './components/ListInventoryComponent';
import CreateInventoryComponent from './components/CreateInventoryComponent';
import UpdateInventoryComponent from './components/UpdateInventoryComponent';
import ViewInventoryComponent from './components/ViewInventoryComponent';
import InventoryReport from './components/InventoryReport';
import CreateEmployeeComponent from "./components/CreateEmployeeComponent";
import ListEmployeeLeavesComponent from "./components/ListEmployeeLeavesComponent";
import CreateEmployeeLeavesComponent from "./components/CreateEmployeeLeavesComponent";
import UpdateEmployeeLeavesComponent from "./components/UpdateEmployeeLeavesComponent";
import ViewEmployeeLeavesComponent from "./components/ViewEmployeeLeavesComponent";
import ListNoticesComponent from "./components/ListNoticesComponent";
import CreateNoticesComponent from "./components/CreateNoticesComponent";
import UpdateNoticeComponent from "./components/UpdateNoticeComponent";
import ViewNoticesComponent from "./components/ViewNoticesComponent";
import AdminEmployeeSideBar from "./components/AdminEmployeeSideBar";
import EmployeeLeavesReport from "./components/EmployeeLeavesReport";


import 'react-toastify/dist/ReactToastify.css';

toast.configure()
function App() {

  const {productItems}= data;
  const [cartItems, setCartItems] =useState([]);

  const handleAddProduct = (product) =>{
    const ProductExist = cartItems.find((item)=> item.id === product.id);
      if(ProductExist){
        if(ProductExist.quantity>=20){
          toast.warn('Order level exceeded!', {position: toast.POSITION.TOP_CENTER, autoClose: 2000})

        }
        else{setCartItems(       
        cartItems.map((item) =>        
        item.id === product.id 
        ?{...ProductExist, quantity: ProductExist.quantity + 1}
        : item
        )
        );
      }}
      else{
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
      {/*<Route path = '/' exact component = {Sidebar} />*/}
      {/*  <Route path = '/' exact component = {auth} />*/}
        <Route path = '/' exact component = {Login} />
        <Route path = "/Home" exact component = {Home} />
        <Route path = "/AdminHome" exact component = {AdminHome} />
        <Route path = "/buyerordersreport" component = {BuyerOrderReport}></Route>
        {/*<Route path = '/login' exact component = {Login} /> */}
        <Route path = "/Orders" component = {ListBuyerOrdersComponent}></Route>
        {/*step 1 */}
        <Route path = "/checkout/:id" component = {CreateBuyerOrdersComponent}></Route>
        <Route path = "/view-buyerorder/:id" component = {ViewBuyerOrderComponent}></Route>
        <Route path="/inventory" component={ListInventoryComponent}></Route>
        <Route path="/add-inventory" component={CreateInventoryComponent}></Route>
        <Route path="/view-inventory/:inventoryID" component={ViewInventoryComponent}></Route>
        <Route path="/update-inventory/:inventoryID" component={UpdateInventoryComponent}></Route>
        <Route path="/inventoryreport" component={InventoryReport}></Route>
        <Route path="/employeeLeaves" component={ListEmployeeLeavesComponent}/>
        <Route path="/add-employeeLeaves" component={CreateEmployeeLeavesComponent}/>
        <Route path="/update-employeeLeaves/:leaveNumber" component={UpdateEmployeeLeavesComponent}/>
        <Route path="/view-employeeLeaves/:leaveNumber" component={ViewEmployeeLeavesComponent}/>
        <Route path="/adNotices" component={ListNoticesComponent} />
        <Route path="/add-adNotices" component={CreateNoticesComponent} />
        <Route path="/update-adNotices/:id" component={UpdateNoticeComponent}/>
        <Route path="/view-adNotices/:id"component={ViewNoticesComponent}/>
        <Route path="/leavegen" component={EmployeeLeavesReport}></Route>

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
