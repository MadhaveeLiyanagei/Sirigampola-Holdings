import React from 'react';
import AdminNavbar from './components/AdminNavbar';
import { BrowserRouter  as Router, Switch, Route} from 'react-router-dom';
import ReactDOM from 'react-dom';
import './App.css';
import AdminHome from './pages/AdminHome';
import ListEmployeeComponent from './components/ListEmployeeComponent';

function App() {
  return (
    <>
    <Router>
      <AdminNavbar/>
      <Switch>
        <Route path = '/' exact component = {AdminHome} />
        <Route path = '/Employee'component = {ListEmployeeComponent} /> 
      </Switch>
      </Router>
    </>
  );
}

export default App;
