import React from 'react';
import AdminNavbar from './components/AdminNavbar';
import Footer from './components/Footer';
import { BrowserRouter  as Router, Switch, Route} from 'react-router-dom';
import ReactDOM from 'react-dom';
import './App.css';
import AdminHome from './pages/AdminHome';
import ListIncomeComponent from './components/ListIncomeComponent';
import CreateIncomeComponent from './components/CreateIncomeComponent';
import UpdateIncomeComponent from './components/UpdateIncomeComponent';
import ViewIncomeComponent from './components/ViewIncomeComponent';

import ListExpenseComponent from './components/ListExpenseComponent';
import CreateExpenseComponent from './components/CreateExpenseComponent';
import UpdateExpenseComponent from './components/UpdateExpenseComponent';
import ViewExpenseComponent from './components/ViewExpenseComponent';
import IncomeReport from './components/IncomeReport';
import ExpenseReport from './components/ExpenseReport';
import ListTaxComponent from './components/ListTaxComponent';
import CreateTaxComponent from './components/CreateTaxComponent';
import ViewTaxComponent from './components/ViewTaxComponent';
import TaxReport from './components/TaxReport';
import ListChartComponent from './components/ListChartComponent';
import ChartReport from './components/ChartReport';
 
function App() {
  return (
      
    <div>
        
      <>
    <Router>
         
        <AdminNavbar/>
         
      <Switch>
        <Route path = '/' exact component = {AdminHome} />
        <Route path = '/Finance' component = {ListIncomeComponent} />
        <Route path = '/Expense' component = {ListExpenseComponent} /> 
        <Route path = '/Tax' component = {ListTaxComponent} /> 
        <Route path = "/Chart" component = {ListChartComponent} /> 
        <Route path = "/IncomeReport" component = {IncomeReport} />  
        <Route path = "/ExpenseReport" component = {ExpenseReport} />  
        <Route path = "/TaxReport" component = {TaxReport} /> 
        <Route path = "/ChartReport" component = {ChartReport} /> 
           
         
        // step 1
        <Route path = '/add-income/:incomeID' component = {CreateIncomeComponent} />  
       {/* <Route path = '/update-income/:incomeID' component = {UpdateIncomeComponent} /> */}  
       <Route path = '/view-income/:incomeID' component = {ViewIncomeComponent} /> 

       // step 1
        <Route path = '/add-expense/:expenseID' component = {CreateExpenseComponent} />  
       {/* <Route path = '/update-expense/:expenseID' component = {UpdateExpenseComponent} /> */}  
       <Route path = '/view-expense/:expenseID' component = {ViewExpenseComponent} /> 

       // step 1
        <Route path = '/add-tax/:taxID' component = {CreateTaxComponent} />  
       {/* <Route path = '/update-tax/:taxID' component = {UpdateTaxComponent} /> */}  
        <Route path = '/view-tax/:taxID' component = {ViewTaxComponent} />  
         
      </Switch>
      {/* <Footer/>*/}
       </Router>
       </>
</div>
  );
}

export default App;
