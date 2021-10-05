import React, { Component } from 'react'; 
import IncomeService from '../services/IncomeService';
import ExpenseService from '../services/ExpenseService';
import {Link } from "react-router-dom";
import { PieChart, Pie, Tooltip } from "recharts";
import Pdf from 'react-to-pdf'
const ref = React.createRef();

 

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
            <>

            <div className="rGenerate">

            <div className="Post" ref={ref}></div>
            <div>
                <br></br>
                  <div className="container">  

                <h2 className="text-center">Income VS Expense</h2>
                <br></br>

                
                <div style={{backgroundColor:"#c0c0c0"}}>
                <h3 className="text-center">Overall Report</h3>
                  <div style={{display:"flex"}} > 
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
                    
                    </div>

                 <div> 
                     
                      <div className="col-md-4" style={{marginRight:"2px",width: "32rem"}}>
                        <div className="card text-white bg-dark mb-3" style={{marginRight:"2px"}}>
                           <Link to="/Finance" className="btn btn-primary"> Income Summary</Link>
                            <h4>Total Income : 
                                <span className="float-end">{ItotalPrice}</span>    
                            </h4>
                             
                             
                        </div>
                        </div> 

                         
                      <div>
                      
                        <div className="card text-white bg-dark mb-3" style={{width: "32rem"}}>
                           <Link to="/Expense" className="btn btn-primary"> Expense Summary</Link>
                            <h4>Total  Expense  : 
                                <span className="float-end">{EtotalPrice}</span>
                                 
                            </h4>
                            
                             
                        </div>
                        </div>  


                        <div>
                      
                      <div className="card text-white bg-dark mb-3"  style={{width: "32rem"}}>
                         <Link to="#" className="btn btn-danger"> Profit</Link>
                          <h4>Income - Expense  : 
                              <span className="float-end">{ItotalPrice-EtotalPrice}</span>
                               
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

                    </div>
                    
                    <br></br>
                     


                 <br></br>
                    <div className = "form-group col-md-4">
                    </div>
                

                   
                </div>  


                 
                
                 
            </div>


            
            

                

                <Pdf targetRef={ref} filename="FinalReport.pdf">

                    {({ toPdf }) => <button  className ="button-report" onClick={toPdf} > Generate Report</button>}

                </Pdf>

               </div>

            </>

            

            
        )
    }


    
}

export default ListTaxComponent