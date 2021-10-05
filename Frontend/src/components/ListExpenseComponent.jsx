import React, { Component } from 'react';
import ExpenseService from '../services/ExpenseService';
import { Button } from './Button';
import './HeaderFinance.css';
import SoloAlert from 'soloalert'
import {Link } from "react-router-dom";

class ListExpenseComponent extends Component {
   constructor(props) {
       super(props)

       this.state = {
              expenses: [],
              searchId:''
       }
       this.addExpense = this.addExpense.bind(this);
       this.editExpense = this.editExpense.bind(this);
       this.deleteExpense = this.deleteExpense.bind(this);
       }

       deleteExpense(expenseID) {


        SoloAlert.confirm({

            title: "Confirm Delete",
            body: "Are you sure ?",
            theme: "dark",
            useTransparency: true,
            onOk: async function () {

                try {
                    ExpenseService.deleteExpense(expenseID)
                   await this.setState({
                        expenses: this.state.expenses.filter(expense => expense.expenseID !== expenseID)
                    });


                    SoloAlert.alert({
                        title: "Welcome!",
                        body: "Deletion is successful",
                        icon: "success",
                        theme: "dark",
                        useTransparency: true,
                        onOk: function () {
                            window.location = "/Expense"
                        },

                    });

                } catch (err) {
                    SoloAlert.alert({
                        title: "Welcome!",
                        body: "Deletion is successful",
                        icon: "success",
                        theme: "dark",
                        useTransparency: true,
                        onOk: function () {
                            window.location = "/Expense"
                        },

                    });
                }
            },
            onCancel: function () {
                SoloAlert.alert({
                    title: "Oops!",
                    body: "You canceled delete request",
                    icon: "warning",
                    theme: "dark",
                    useTransparency: true,
                    onOk: function () {

                    },

                });
            },

        })
    }

    viewExpense(expenseID){
        this.props.history.push(`/view-expense/${expenseID}`);
    }

    editExpense(expenseID){
        this.props.history.push(`/add-expense/${expenseID}`);
    }

    addExpense(){
        this.props.history.push('/add-expense/-1');
    }

    componentDidMount(){
        ExpenseService.getExpenses().then((res) => {
                this.setState({ expenses: res.data});
        });
}

    searchTransaction(event){

    this.setState({ searchId: event.target.value.substr(0,

        20)});

    }


    render() {
        let filterExpense = this.state.expenses.filter((

            expenses)=>{

                return expenses.transaction.toLowerCase().indexOf(this.state.searchId.toLowerCase())!==-1;

                    

            }

        );

        var totalPrice = 0;
         this.state.expenses.map(
          expense =>
          totalPrice += expense.amount, 
          expense => 
          expense.amount++ ) 

        return ( 
            <div>
                <br></br>
             <div className="container">  
                 
                 <div class="topnav" >
                     <a href="http://localhost:3000/Finance">Income</a>
                     <a class="active" href="http://localhost:3000/Expense">Expense</a>
                     <a href="http://localhost:3000/Tax">Tax Rates</a>
                     <a href="http://localhost:3000/Chart">Reports & Graphs</a>
        </div> 
          

                <h2 className="text-center">History of Expenses</h2>
                  <div id="outer">
                  <div class="inner">  <button className="btn btn-primary" onClick={this.addExpense}>+ New Transaction</button> </div>
                  <div class="inner">  <input type="text" class="form-control" style={{marginLeft:0}} placeholder="Search Transaction" value={this.state.searchId} onChange={this.searchTransaction.bind(this)}/></div>
                  </div>
                    <div className = "form-group col-md-4">

                    </div>
                
                <div className ="row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                    <tr>
                                        <th>Transaction</th>
                                        <th>Payment To</th>
                                        <th>Date</th>
                                        <th>Category</th>
                                        <th>Description</th>
                                        <th>Amount</th>
                                      {/*  <th>Actions</th> */}
                                      {/*  <th>***********Actions************</th> */}
                                           <th>Actions : Update / Delete / View</th> 
                                    </tr>
                            </thead>

                            <tbody>
                                {
                                     filterExpense.map(
                                    //ishani
                                        expense=>
                                    //this.state.expenses.map(
                                        //expense =>
                                        <tr key = {expense.expenseID}>
                                            <td> {expense.transaction}</td>
                                            <td> {expense.paymentTo}</td>
                                            <td> {expense.date}</td>
                                            <td> {expense.expenseCategory}</td>
                                            <td> {expense.description}</td>
                                            <td> {expense.amount}</td>
                                             
                                            <td>
                                               <button onClick={ () => this.editExpense(expense.expenseID)} className="button-up">Update </button>
                                               <button style={{marginLeft: "4px"}} onClick={ () => this.deleteExpense(expense.expenseID)} className="button-dele">Delete </button>
                                               <button style={{marginLeft: "4px"}} onClick={ () => this.viewExpense(expense.expenseID)} className="button-view">View </button>
                                            </td>

                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                        <div className="col-md-8"></div> 
                      <div className="col-md-4">
                        <div className="card card-body mt-3">
                            <h4>Sub Total : 
                                <span className="float-end">{totalPrice}</span>
                            </h4>
                            
                            <h4>Grand Total : 
                                <span className="float-end">{totalPrice}</span>
                                 
                            </h4>
                            <hr />
                            <Link to="/ReportGraph" className="btn btn-primary"> Summary</Link>
                        </div>
                        </div>  

                </div>

                <Link to="/ExpenseReport"><button className="btn btn-success">Generate Report  </button> </Link>
                 </div>  
                 
            </div>
        )
    }
}

export default ListExpenseComponent