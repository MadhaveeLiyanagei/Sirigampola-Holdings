import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter  as Router, Switch, Route} from 'react-router-dom';
import ReactDOM from 'react-dom';
import './App.css';
import './components/Footer.css'
import ListCourierComponent from './components/ListCourierComponent';
import CreateCourierComponent from './components/CreateCourierComponent';
import UpdateCourierComponent from './components/UpdateCourierComponent';
import ViewCourierComponent from './components/ViewCourierComponent';
import Footer from './components/Footer';

function App() {
  return (
    <div>
        <Router>
              <Navbar />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListCourierComponent}></Route>
                          <Route path = "/courier" component = {ListCourierComponent}></Route>
                          <Route path = "/add-courier" component = {CreateCourierComponent}></Route>
                          <Route path = "/update-courier/:id" component = {UpdateCourierComponent}></Route> 
                          <Route path = "/view-courier/:id" component = {ViewCourierComponent}></Route> 
                         
                    </Switch>
                </div>
              <Footer/>
        </Router>
    </div>
  );
}

export default App;


