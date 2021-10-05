import React, { Component } from 'react'
import ExpenseService from '../services/ExpenseService'

class ViewExpenseComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            expenseID: this.props.match.params.expenseID,
            expense : {}
        }
    }

    componentDidMount(){
        ExpenseService.getExpenseById(this.state.expenseID).then( res => {
            this.setState({expense: res.data});
        })
    }

    cancel(){
        this.props.history.push('/Expense');
    }

    render() {
        return (
            <div>
                <br></br>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Expense Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Transaction :   { this.state.expense.transaction }</label> 

                        </div>
                        <div className = "row">
                            <label> Payment To :  { this.state.expense.paymentTo }</label> 

                        </div>
                        <div className = "row">
                            <label> Date :   { this.state.expense.date } </label>
                
                        </div>
                        <div className = "row">
                            <label> Expense Category : { this.state.expense.expenseCategory } </label>
                             
                        </div>
                        <div className = "row">
                            <label> Description : { this.state.expense.description } </label>
                             
                        </div>
                        <div className = "row">
                            <label> Amount : { this.state.expense.amount } </label>
                            
                        </div>
                        
                        <br></br>
                         
                    <button className="btn btn-danger" style={{marginLeft: "4px"}} onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Back</button>
                    </div>
                     
                </div>
            </div>
        )
    }
}

export default ViewExpenseComponent