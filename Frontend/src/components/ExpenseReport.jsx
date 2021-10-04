import React, { Component } from 'react';
import ExpenseService from '../services/ExpenseService';
import Pdf from 'react-to-pdf'
const ref = React.createRef();

class ListExpenseComponent extends Component {
    constructor(props) {
        super(props)
 
        this.state = {
               expenses: [],
               searchId:''
        }
         
        }
 
         
     componentDidMount(){
         ExpenseService.getExpenses().then((res) => {
                 this.setState({ expenses: res.data});
         });
 }
 
      
 
     render() {
         let filterExpense = this.state.expenses.filter((
 
             expenses)=>{
 
                 return expenses.transaction.toLowerCase().indexOf(this.state.searchId.toLowerCase())!==-1;
 
                     
 
             }
 
         );
 
         return ( 
            <>

            <div>

            <div className="Post" ref={ref}>

             <div>
                 <br></br>
              <div className="container">  
                  
                  <div class="topnav" >
                      <a href="http://localhost:3000/Finance">Income</a>
                      <a class="active" href="http://localhost:3000/Expense">Expense</a>
                      <a href="#contact">Tax Rates</a>
                      <a href="#about">Reports & Graphs</a>
         </div> 
           
 
                 <h2 className="text-center">History of Expenses</h2>
                   
                      
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
                                       {/*  <th>Actions</th> */}
                                       {/*  <th>***********Actions************</th> */}
                                             
                                     </tr>
                             </thead>
 
                             <tbody>
                                 {
                                      filterExpense.map(
 
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
 
                 </div>
                  </div>  
                  
             </div>

             </div>

                

                <Pdf targetRef={ref} filename="Expense.pdf">

                    {({ toPdf }) => <button  className ="button-report" onClick={toPdf} > Generate Report</button>}

                </Pdf>

               </div>

            </>
         )
     }
 }
 
 export default ListExpenseComponent
