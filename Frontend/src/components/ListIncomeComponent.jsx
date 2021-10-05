import React, { Component } from 'react';
import IncomeService from '../services/IncomeService';
import { Button } from './Button';
import './HeaderFinance.css';
import SoloAlert from 'soloalert'
import {Link } from "react-router-dom";



class ListIncomeComponent extends Component {
   constructor(props) {
       super(props)

       this.state = {
              incomes: [],
              searchId:''
               
       }
       this.addIncome = this.addIncome.bind(this);
       this.editIncome = this.editIncome.bind(this);
       this.deleteIncome = this.deleteIncome.bind(this);
       }


       deleteIncome(incomeID) {
           
        SoloAlert.confirm({

            title: "Confirm Delete",
            body: "Are you sure ?",
            theme: "dark",
            useTransparency: true,
            onOk: async function () {

                try {
                    IncomeService.deleteIncome(incomeID)
                   await this.setState({
                        incomes: this.state.incomes.filter(income => income.incomeID !== incomeID)
                    });


                    SoloAlert.alert({
                        title: "Welcome!",
                        body: "Deletion is successful",
                        icon: "success",
                        theme: "dark",
                        useTransparency: true,
                        onOk: function () {
                            window.location = "/Finance"
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
                            window.location = "/Finance"
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

    viewIncome(incomeID){
        this.props.history.push(`/view-income/${incomeID}`);
    }

    editIncome(incomeID){
        this.props.history.push(`/add-income/${incomeID}`);
    }

    addIncome(){
        this.props.history.push('/add-income/-1');
    }


    componentDidMount(){
        IncomeService.getIncomes().then((res) => {
                this.setState({ incomes: res.data});
        });
}

searchTransaction(event){

    this.setState({ searchId: event.target.value.substr(0,

        20)});

    }


    render() {

        let filterIncome = this.state.incomes.filter((

            incomes)=>{

                return incomes.transaction.toLowerCase().indexOf(this.state.searchId.toLowerCase())!==-1;

                    

            }

        );

        var totalPrice = 0;
         this.state.incomes.map(
          income =>
          totalPrice += income.amount, 
          income => 
          income.amount++ ) 

        return ( 
            <div>
                <br></br>
                  <div className="container">  
                 
                 <div class="topnav" >
                     <a class="active" href="http://localhost:3000/Finance">Income</a>
                     <a href="http://localhost:3000/Expense">Expense</a>
                     <a href="http://localhost:3000/Tax">Tax Rates</a>
                     <a href="http://localhost:3000/Chart">Reports & Graphs</a>
        </div> 
      

                <h2 className="text-center">History of Assets</h2>
                   
                    <div id="outer">
                    <div class="inner"> <button className="buttonAdd" onClick={this.addIncome}>+ New Transaction</button> </div>
                    <div class="inner" style={{marginLeft:"750px"}}> <input type="text" class="form-control" style={{marginLeft:0}} placeholder="Search Transaction" value={this.state.searchId} onChange={this.searchTransaction.bind(this)}/> </div>
                    </div>


                    <div className = "form-group col-md-4">
                    </div>
                <div className ="row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                    <tr>
                                        <th>Transaction</th>
                                        <th>Payment From</th>
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
                                     filterIncome.map(

                                        income=>
                                    //this.state.incomes.map(
                                       // income =>
                                        
                                        <tr key = {income.incomeID}>
                                            <td> {income.transaction}</td>
                                            <td> {income.paymentFrom}</td>
                                            <td> {income.date}</td>
                                            <td> {income.incomeCategory}</td>
                                            <td> {income.description}</td>
                                            <td> {income.amount}</td>
                                            <td>
                                               <button onClick={ () => this.editIncome(income.incomeID)} className="button-up">Update </button>
                                               <button style={{marginLeft: "4px"}} onClick={ () => this.deleteIncome(income.incomeID)} className="button-dele">Delete </button>
                                               <button style={{marginLeft: "4px"}} onClick={ () => this.viewIncome(income.incomeID)} className="button-view">View </button>
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
                            <Link to="/Chart" className="btn btn-primary"> Summary</Link>
                        </div>
                        </div>  

                        
                                 

                </div>
                 <Link to="/IncomeReport"><button className="buttonG">Generate Report  </button> </Link>

                   
                </div>  


                 
                
                 
            </div>

            

            
        )
    }
}

export default ListIncomeComponent