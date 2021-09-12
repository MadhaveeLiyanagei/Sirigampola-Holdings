import React from 'react';
import AdminNavbar from './components/AdminNavbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ReactDOM from 'react-dom';
import './App.css';
//import {BrowserRouter as Router, Route, Switch}from 'react-router-dom';
import AdminHome from './pages/AdminHome';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import Footer from './components/Footer';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import ListEmployeeLeavesComponent from './components/ListEmployeeLeavesComponent';
import CreateEmployeeLeavesComponent from './components/CreateEmployeeLeavesComponent';
import UpdateEmployeeLeavesComponent from './components/UpdateEmployeeLeavesComponent';
import ViewEmployeeLeavesComponent from './components/ViewEmployeeLeavesComponent';

function App() {
  return (

    <div>
     
        <Router>
          <AdminNavbar/>
            <div className = "container">
              <Switch>
                <Route path = '/' exact component = {AdminHome} />
                <Route path = '/Employee'component = {ListEmployeeComponent} /> 
                <Route path = '/add-employee'component = {CreateEmployeeComponent} /> 
                <Route path = '/employeeLeaves'component = {ListEmployeeLeavesComponent} /> 
                <Route path = '/add-employeeLeaves'component = {CreateEmployeeLeavesComponent} /> 
                <Route path = '/update-employeeLeaves/:leaveNumber'component = {UpdateEmployeeLeavesComponent} />
                <Route path = '/view-employeeLeaves/:leaveNumber'component = {ViewEmployeeLeavesComponent} />

              </Switch>
            </div>
            <Footer/>
        </Router>
      
    </div>
    
  );
}

export default App;
