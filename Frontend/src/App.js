import React from 'react';
import AdminNavbar from './components/AdminNavbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
import ListEmployeeLeavesComponent from "./components/ListEmployeeLeavesComponent";
import CreateEmployeeLeavesComponent from "./components/CreateEmployeeLeavesComponent";
import UpdateEmployeeLeavesComponent from "./components/UpdateEmployeeLeavesComponent";
import ViewEmployeeLeavesComponent from "./components/ViewEmployeeLeavesComponent";
import ListNoticesComponent from "./components/ListNoticesComponent";
import CreateNoticesComponent from "./components/CreateNoticesComponent";
import UpdateNoticeComponent from "./components/UpdateNoticeComponent";
import ViewNoticesComponent from "./components/ViewNoticesComponent";
import EmployeeLeavesReport from './components/EmployeeLeavesReport';


function App() {
  return (
    <>

      <Router>
        <AdminNavbar/>
        <div className="container">
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path="/inventory" component={ListInventoryComponent}></Route>
            <Route path="/add-inventory" component={CreateInventoryComponent}></Route>
            <Route path="/view-inventory/:inventoryID" component={ViewInventoryComponent}></Route>
            <Route path="/update-inventory/:inventoryID" component={UpdateInventoryComponent}></Route>
            <Route path="/product" component={ListProductComponent}></Route>
            <Route path="/add-product" component={CreateProductComponent}></Route>
            <Route path="/view-product/:productID" component={ViewProductComponent}></Route>
            <Route path="/update-product/:productID" component={UpdateProductComponent}></Route>
            <Route path="/inventoryreport" component={InventoryReport}></Route>
            <Route path="/productreport" component={ProductReport}></Route>
            <Route path="/employeeLeaves"component={ListEmployeeLeavesComponent}/>
            <Route path="/add-employeeLeaves" component={CreateEmployeeLeavesComponent} />
            <Route path="/update-employeeLeaves/:leaveNumber" component={UpdateEmployeeLeavesComponent} />
            <Route path="/view-employeeLeaves/:leaveNumber" component={ViewEmployeeLeavesComponent} />
            <Route path="/adNotices" component={ListNoticesComponent} />
            <Route path="/add-adNotices" component={CreateNoticesComponent} />
            <Route path="/update-adNotices/:id" component={UpdateNoticeComponent} />
            <Route path="/view-adNotices/:id" component={ViewNoticesComponent} />
            <Route path="/leavegen" component={EmployeeLeavesReport}></Route>

          </Switch>
        </div>
        <Footer />
      </Router>
    </>
  );
}
export default App;
