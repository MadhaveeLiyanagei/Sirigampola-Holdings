import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter  as Router, Switch, Route} from 'react-router-dom';
import ReactDOM from 'react-dom';
import './App.css';
import Home from './pages/Home';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path = '/' exact component = {Home} /> 
      </Switch>
      </Router>
    </>
  );
}

export default App;
