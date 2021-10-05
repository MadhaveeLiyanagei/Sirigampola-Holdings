import React, { Component } from 'react'; 
import IncomeService from '../services/IncomeService';
import './HeaderFinance.css';
import SoloAlert from 'soloalert'
import {Link } from "react-router-dom";


class ListTaxComponent extends Component {
   constructor(props) {
       super(props)

       this.state = {
              incomes: [],
              searchId:''
               
       }
        
       }

    componentDidMount(){
        IncomeService.getIncomes().then((res) => {
                this.setState({ incomes: res.data});
        });
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
                     <a href="http://localhost:3000/Finance">Income</a>
                     <a href="http://localhost:3000/Expense">Expense</a>
                     <a href="http://localhost:3000/Tax">Tax Rates</a>
                     <a class="active" href="http://localhost:3000/Chart">Reports & Graphs</a>
        </div> 
      

                <h2 className="text-center">Reports & Charts</h2>
                   
                     
                    <br></br>
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
                 <Link to="/IncomeReport"><button className="btn btn-success">Generate Report  </button> </Link>

                   
                </div>  


                 
                
                 
            </div>

            

            
        )
    }
}

export default ListTaxComponent