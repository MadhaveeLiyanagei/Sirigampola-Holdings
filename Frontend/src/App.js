import React from 'react';
import AdminNavbar from './components/AdminNavbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ReactDOM from 'react-dom';
import './App.css';
//import {BrowserRouter as Router, Route, Switch}from 'react-router-dom';
import AdminHome from './pages/AdminHome';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import Footer from './components/Footer';

function App() {
  return (

    <div>
      <>
        <Router>
          <AdminNavbar/>
          <Switch>
            <Route path = '/' exact component = {AdminHome} />
            <Route path = '/Employee'component = {ListEmployeeComponent} /> 
          </Switch>
          <Footer/>
        </Router>
      </>
    </div>
    
  );
}

export default App;
