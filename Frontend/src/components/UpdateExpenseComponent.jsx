import React, { Component } from 'react';
import ExpenseService from '../services/ExpenseService';

class UpdateExpenseComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            expenseID: this.props.match.params.expenseID,
            transaction: '',
            paymentTo: '',
            date: '',
            expenseCategory: '',
            description: '',
            amount: ''
        }
         
        this.updateExpense = this.updateExpense.bind(this);
    }

    componentDidMount(){
        ExpenseService.getExpenseById(this.state.expenseID).then( (res) =>{
            let expense =  res.data;
            this.setState({transaction: expense.transaction, 
                paymentTo: expense.paymentTo, 
                date: expense.date, 
                expenseCategory: expense.expenseCategory, 
                description: expense.description, 
                amount: expense.amount
            });
        });
    }
    updateExpense = (e) => {
        e.preventDefault();
        let expense = {transaction: this.state.transaction, paymentTo: this.state.paymentTo, date: this.state.date, expenseCategory: this.state.expenseCategory, description: this.state.description, amount: this.state.amount};
        console.log('expense => ' + JSON.stringify(expense));
        ExpenseService.updateExpense(expense, this.state.expenseID).then( res => {
            this.props.history.push('/Expense');
        });
    }

    

    changeTransactionHandler= (event) => {
        this.setState({transaction: event.target.value});
    }
    changePaymentToHandler= (event) => {
        this.setState({paymentTo: event.target.value});
    }
    changeDateHandler= (event) => {
        this.setState({date: event.target.value});
    }
    changeExpenseCategoryHandler= (event) => {
        this.setState({expenseCategory: event.target.value});
    }
    changeDescriptionHandler= (event) => {
        this.setState({description: event.target.value});
    }
    changeAmountHandler= (event) => {
        this.setState({amount: event.target.value});
    }

    cancel(){
        this.props.history.push('/Expense');
    }


    render() {
        return (
            <div>
                 <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update Expense</h3>
                               <div className="card-body">
                                   <form>
                                       <div className = "form-group">
                                           <label> Transaction :</label>
                                           <input placeholder="Transaction" name="transaction" className="form-control"
                                                value={this.state.transaction} onChange={this.changeTransactionHandler}/>
                                       </div>
                                       <div className = "form-group">
                                           <label> Payment To :</label>
                                           <input placeholder="Payment To" name="paymentTo" className="form-control"
                                                value={this.state.paymentTo} onChange={this.changePaymentToHandler}/>
                                       </div>
                                       <div className = "form-group">
                                           <label> Date :</label>
                                           <input placeholder="Date" name="date" className="form-control"
                                                value={this.state.date} onChange={this.changeDateHandler}/>
                                       </div>
                                       <div className = "form-group">
                                           <label> Expense Category :</label>
                                           <input placeholder="Expense Category" name="expenseCategory" className="form-control"
                                                value={this.state.expenseCategory} onChange={this.changeExpenseCategoryHandler}/>
                                       </div>
                                       <div className = "form-group">
                                           <label> Description :</label>
                                           <input placeholder="Description" name="description" className="form-control"
                                                value={this.state.description} onChange={this.changeDescriptionHandler}/>
                                       </div>
                                       <div className = "form-group">
                                           <label> Amount :</label>
                                           <input placeholder="Amount" name="amount" className="form-control"
                                                value={this.state.amount} onChange={this.changeAmountHandler}/>
                                       </div>
                                        <br></br>
                                       <button className="btn btn-success" onClick={this.updateExpense}>Save</button>
                                       <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                   </form>
                               </div>
                        </div>
                    </div>
                 </div>
            </div>
        )
    }
}

export default UpdateExpenseComponent;