import React, { Component } from 'react';
import IncomeService from '../services/IncomeService';
import Pdf from 'react-to-pdf'
const ref = React.createRef();

class IncomeReport extends Component {
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
 
 
         return ( 
            <>

            <div>

            <div className="Post" ref={ref}>
             
             <div>
                 
                 <br></br>
                   <div className="container">  
                  
                  <div class="topnav" >
                      <a class="active" href="http://localhost:3000/Finance">Income</a>
                      <a href="http://localhost:3000/Expense">Expense</a>
                      <a href="#contact">Tax Rates</a>
                      <a href="#about">Reports & Graphs</a>
         </div> 
       
 
                 <h2 className="text-center">History of Assets</h2>
                    
                      
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
                                       {/*  <th>Actions</th> */}
                                       {/*  <th>***********Actions************</th> */}
                                           
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
 
                 </div>
                 </div>   
                  
             </div>

             
             </div>

                

                <Pdf targetRef={ref} filename="Income.pdf">

                    {({ toPdf }) => <button  className ="button-report" onClick={toPdf} > Generate Report</button>}

                </Pdf>

               </div>

            </>
         )
     }
 }
 
 export default IncomeReport
