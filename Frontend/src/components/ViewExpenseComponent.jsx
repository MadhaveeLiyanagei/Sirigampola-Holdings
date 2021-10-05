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
                <div className = "card col-md-6 offset-md-3" style={{backgroundColor:"#c0c0c0"}}>
                    <h3 className = "text-center"> View Expense Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> <b>Transaction :  </b> { this.state.expense.transaction }</label> 

                        </div>
                        <br></br>
                        <div className = "row">
                            <label> <b>Payment To : </b> { this.state.expense.paymentTo }</label> 

                        </div>
                        <br></br>
                        <div className = "row">
                            <label> <b>Date : </b>   { this.state.expense.date } </label>
                
                        </div>
                        <br></br>
                        <div className = "row">
                            <label> <b>Expense Category : </b>{ this.state.expense.expenseCategory } </label>
                             
                        </div>
                        <br></br>
                        <div className = "row">
                            <label> <b> Description : </b>{ this.state.expense.description } </label>
                             
                        </div>
                        <br></br>
                        <div className = "row">
                            <label><b> Amount : </b>{ this.state.expense.amount } </label>
                            
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