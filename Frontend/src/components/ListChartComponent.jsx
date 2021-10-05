import React, { Component } from 'react'; 
import IncomeService from '../services/IncomeService';
import ExpenseService from '../services/ExpenseService';
import './HeaderFinance.css';
import SoloAlert from 'soloalert'
import {Link } from "react-router-dom";
import { PieChart, Pie, Tooltip } from "recharts";

 

class ListTaxComponent extends Component {
   constructor(props) {
       super(props)

       this.state = {
              incomes: [],
              searchId:'',
              expenses: []
               
               
       }
        
       }

    componentDidMount(){
        IncomeService.getIncomes().then((res) => {
                this.setState({ incomes: res.data});
        });
        ExpenseService.getExpenses().then((res) => {
            this.setState({ expenses: res.data});
    });
         
}

 


    render() {

        let filterIncome = this.state.incomes.filter((

            incomes)=>{

                return incomes.transaction.toLowerCase().indexOf(this.state.searchId.toLowerCase())!==-1;

                    

            }

        );

        var ItotalPrice = 0;
         this.state.incomes.map(
          income =>
          ItotalPrice += income.amount, 
          income => 
          income.amount++ ) 

        
          let filterExpense = this.state.expenses.filter((

            expenses)=>{

                return expenses.transaction.toLowerCase().indexOf(this.state.searchId.toLowerCase())!==-1;

                    

            }

        );

        var EtotalPrice = 0;
         this.state.expenses.map(
          expense =>
          EtotalPrice += expense.amount, 
          expense => 
          expense.amount++ ) 

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
      

                <h2 className="text-center">Income VS Expense</h2>
                <br></br>
                <h3 className="text-center">Overall Report</h3>
                
                <PieChart width={400} height={400} radius={50}>
 
                 <Pie
                     dataKey="value"
                     isAnimationActive={true}
                     data={[
                     { name: "Income", value: ItotalPrice},
                     { name: "Expense", value: EtotalPrice},
                      ]}
      
                     fill="#000080"
      
                    label
                     />

                    {/* Display the tooltips */}
                    <Tooltip />
                    </PieChart>

                 <div style={{display:"flex"}} > 
                     
                      <div className="col-md-4" style={{marginRight:"2px"}}>
                        <div className="card text-white bg-dark mb-3" style={{marginRight:"2px"}}>
                           <Link to="/Finance" className="btn btn-primary"> Income Summary</Link>
                            <h4>Total Income : 
                                <span className="float-end">{ItotalPrice}</span>    
                            </h4>
                             
                             
                        </div>
                        </div> 

                         
                      <div style={{marginLeft:"44px"}}>
                      
                        <div className="card text-white bg-dark mb-3" style={{width: "25rem"}}>
                           <Link to="/Expense" className="btn btn-primary"> Expense Summary</Link>
                            <h4>Total  Expense  : 
                                <span className="float-end">{EtotalPrice}</span>
                                 
                            </h4>
                            
                             
                        </div>
                        </div>  

                         
               
                 </div>      
                    <div className = "form-group col-md-4">
                     
                    {/*<PieChart margin="4px 2px" radius={40} align="center"
                data={[
                   { title: 'Income', value: ItotalPrice, color: '#c71585' },
                   { title: 'Expense', value: EtotalPrice, color: '#4682b4' },

                     ]}
                    />; */}
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
                        <div className="card card-body mt-3" style={{backgroundColor:"#00ff7f"}}>
                        
                        <br></br>
                            <h4>Sub Total : 
                                <span className="float-end">{ItotalPrice}</span>
                            </h4>
                            
                            <h4>Total Income : 
                                <span className="float-end">{ItotalPrice}</span>
                                 
                            </h4>
                            <hr />
                             
                        </div>
                        </div>  

                        
                                 

                </div>
                  


                 <br></br>
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
                                             
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                        <div className="col-md-8"></div> 
                      <div className="col-md-4">
                        <div className="card card-body mt-3" style={{backgroundColor:"#00ff7f"}}>
                            <h4>Sub Total : 
                                <span className="float-end">{EtotalPrice}</span>
                            </h4>
                            
                            <h4>Total Expense: 
                                <span className="float-end">{EtotalPrice}</span>
                                 
                            </h4>
                            <hr />
                             
                        </div>
                        </div>  

                </div>

                <Link to="/ExpenseReport"><button className="btn btn-success">Generate Report  </button> </Link>

                   
                </div>  


                 
                
                 
            </div>

            

            
        )
    }


    
}

export default ListTaxComponent