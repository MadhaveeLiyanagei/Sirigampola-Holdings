import React from 'react';
import AdminNavbar from './components/AdminNavbar';
import { BrowserRouter  as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ListBuyerComponent from './components/ListBuyerComponent';
import CreateBuyerComponent from './components/CreateBuyerComponent';
import UpdateBuyerComponents from './components/UpdateBuyerComponents';
import ViewBuyerComponent from './components/ViewBuyerComponent';
import BuyerReport from './components/BuyerReport';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import ListSupplierComponent from './components/ListSupplierComponent';
import Footer from './components/Footer';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import CreateSupplierComponent from './components/CreateSupplierComponent';
import UpdateSupplierComponent from './components/UpdateSupplierComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
import ViewSupplierComponent from './components/ViewSupplierComponent';
import EmployeeReport from './components/EmployeeReport';
import SupplierReport from './components/SupplierReport';
import Login from './components/Login/Login';
import AdminHome from './pages/AdminHome';
import Register from './components/Register';




function App() {
  return (
        
    <>
    <Router>
   
     
      <Switch> 
        <Route path = '/' exact component = {Login} />
        <Route path = '/Home'  component = {Home} />
        <Route path = '/AdminHome'  component = {AdminHome} />  

        <Route path = '/Register'  component = {Register} />  


        <Route path = '/profile'  component = {ListBuyerComponent}/>
        <Route path = '/add-buyer/:id'  component = {CreateBuyerComponent}/>
        <Route path = '/view-buyer/:id'  component = {ViewBuyerComponent}/>
        {/*Route path = '/update-buyer/:id'  component = {UpdateBuyerComponents}*/}
        <Route path = '/buyerreport'  component = {BuyerReport}/>

        <Route path = '/Employee'  component = {ListEmployeeComponent}/>
        <Route path = '/add-employee/:employeeid'  component = {CreateEmployeeComponent}/>
        <Route path = '/view-employee/:employeeid'  component = {ViewEmployeeComponent}/>
        {/*Route path = '/update-employee/:employeeid'  component = {UpdateEmployeeComponent}*/}
        <Route path = '/employeereport'  component = {EmployeeReport}/>

        <Route path = '/Supplier'  component = {ListSupplierComponent}/>
        <Route path = '/add-supplier/:supplierid'  component = {CreateSupplierComponent}/>
        <Route path = '/view-supplier/:supplierid'  component = {ViewSupplierComponent}/>
        {/*Route path = '/update-supplier/:supplierid'  component = {UpdateSupplierComponent}*/}
        <Route path = '/supplierreport'  component = {SupplierReport}/>
        
      </Switch>
     
      <Footer/>
      </Router>
    </>
  );
}

export default App;
