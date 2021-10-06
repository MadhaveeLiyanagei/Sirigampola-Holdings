import React,{useState} from "react";
import AdminNavbar from "./components/AdminNavbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import "./App.css";
import data from "./components/back-cart/Data"
//import './AdminEmployeeSideBar.css';
//import {BrowserRouter as Router, Route, Switch}from 'react-router-dom';
import AdminHome from "./pages/AdminHome";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import Footer from "./components/Footer";
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
import ListInventoryComponent from "./components/ListInventoryComponent";
import CreateInventoryComponent from "./components/CreateInventoryComponent";
import UpdateInventoryComponent from "./components/UpdateInventoryComponent";
import ViewInventoryComponent from "./components/ViewInventoryComponent";
import ListProductComponent from "./components/ListProductComponent";
import CreateProductComponent from "./components/CreateProductComponent";
import UpdateProductComponent from "./components/UpdateProductComponent";
import ViewProductComponent from "./components/ViewProductComponent";
import EmployeeLeavesReport from "./components/EmployeeLeavesReport";
import ParticleBackground from "./ParticleBackground";
import ProductReport from "./components/ProductReport";
import InventoryReport from "./components/InventoryReport";
import AboutUs from "./pages/AboutUs";
import Login from './components/Login/Login';
import Home from "./pages/Home";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import { Navbar } from "react-bootstrap";
import Routes from "./components/front-cart/Routes/Routes"

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
    <div className="bgclr">
             

      <Router>
        <Navbar cartItems={cartItems}/>
        <div className="container">
          <Switch>
          
            <Route path="/" exact component={Login} />
            <Route path="/Employee" component={ListEmployeeComponent} />

            <Route path="/AdminHome" component={AdminHome} />
            <Route path="/add-employee" component={CreateEmployeeComponent} />
            <Route
              path="/employeeLeaves"
              component={ListEmployeeLeavesComponent}
            />
            <Route
              path="/add-employeeLeaves"
              component={CreateEmployeeLeavesComponent}
            />
            <Route
              path="/update-employeeLeaves/:leaveNumber"
              component={UpdateEmployeeLeavesComponent}
            />
            <Route
              path="/view-employeeLeaves/:leaveNumber"
              component={ViewEmployeeLeavesComponent}
            />
            <Route path="/adNotices" component={ListNoticesComponent} />
            <Route path="/add-adNotices" component={CreateNoticesComponent} />
            <Route
              path="/update-adNotices/:id"
              component={UpdateNoticeComponent}
            />
            <Route
              path="/view-adNotices/:id"
              component={ViewNoticesComponent}
            />
            <Route path="/inventory" component={ListInventoryComponent}></Route>
            <Route path="/productreport" component={ProductReport}></Route>
            <Route
              path="/add-inventory"
              component={CreateInventoryComponent}
            ></Route>
            <Route
              path="/update-inventory/:inventoryID"
              component={UpdateInventoryComponent}
            ></Route>
            <Route
              path="/view-inventory/:inventoryID"
              component={ViewInventoryComponent}
            ></Route>
            <Route path="/product" component={ListProductComponent}></Route>
            <Route
              path="/add-product"
              component={CreateProductComponent}
            ></Route>
            <Route
              path="/update-product/:productID"
              component={UpdateProductComponent}
            ></Route>
            <Route
              path="/view-product/:productID"
              component={ViewProductComponent}
            ></Route>
            <Route path="/leavegen" component={EmployeeLeavesReport}></Route>
            <Route path="/inventoryreport" component={InventoryReport}></Route>

            <Routes 
        productItems={productItems} 
        cartItems= {cartItems} 
        handleAddProduct = {handleAddProduct}
        handleRemoveProduct= {handleRemoveProduct}
        handleCartClearance = {handleCartClearance}
        
        />
          </Switch>


        </div>
        <Footer />
      </Router>
    </div>  

          


  );
}

export default App;
