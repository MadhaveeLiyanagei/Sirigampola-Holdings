import React, { Component } from 'react';
import ExpenseService from '../services/ExpenseService';
import 'react-toastify/dist/ReactToastify.css';
import {toast} from 'react-toastify';

toast.configure()
class CreateExpenseComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            expenseID: this.props.match.params.expenseID,
            transaction: '',
            paymentTo: '',
            date: '',
            expenseCategory: '',
            description: '',
            amount: '',
            transactionError: '',
            paymentToError: '',
            dateError: '',
            amountError: ''
        }
         
        this.saveOrUpdateExpense = this.saveOrdUpdateExpense.bind(this);
    }
    //step 3
    componentDidMount(){

        //step 4
        if(this.state.expenseID == -1) {
            return
        }else {
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
    }

    notify(){

        toast.warn('Expense Added Successfully!', {position: toast.POSITION.TOP_CENTER, autoClose: 2000})

    }

    notify1(){

        toast.warn('Expense Updated Successfully!', {position: toast.POSITION.TOP_CENTER, autoClose: 2000})
    }

    validate = () =>{

        let transactionError='';
        let paymentToError = '';
        let dateError = '';
        let amountError ='';

       
        if(!this.state.transaction){
            transactionError = "Please fill out this field";
        }

        if(!this.state.paymentTo){
            paymentToError = "Please fill out this field";
        }

        if(!this.state.date){
            dateError = "Please fill out this field";
        }

        if(!this.state.amount){
            amountError = "Please fill out this field";
        }

         
        if(transactionError || paymentToError || dateError || amountError){

            this.setState({transactionError,paymentToError,dateError,amountError});

            return false;

        }
        return true;
    }



    saveOrdUpdateExpense = (e) => {
        e.preventDefault();
        let expense = {transaction: this.state.transaction, paymentTo: this.state.paymentTo, date: this.state.date, expenseCategory: this.state.expenseCategory, description: this.state.description, amount: this.state.amount};
        const isValid = this.validate();
        if(isValid){
        console.log('expense => ' + JSON.stringify(expense));

        //step 5
        if(this.state.expenseID == -1) {
            ExpenseService.createExpense(expense).then(res =>{
                this.notify();
                this.props.history.push('/Expense');
            }).catch(error=> {alert("Expense Not Available")});
        }else {  
            ExpenseService.updateExpense(expense, this.state.expenseID).then( res => {
                this.notify1();
                this.props.history.push('/Expense');
            }).catch(error=> {alert("Income Not Available")});        
        } 
    }     
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

    getTitle(){
        if(this.state.expenseID == -1){
            return <h3 className="text-center">Add Expense</h3>
        }else{
            return <h3 className="text-center">Update Expense</h3>
        }
    }

    render() {
        return (
            <div>
                 <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                             
                               <div className="card-body">
                                   <form>
                                       <div className = "form-group">
                                           <label> Transaction :</label>
                                           <input placeholder="Transaction" name="transaction" className="form-control"
                                                value={this.state.transaction} onChange={this.changeTransactionHandler}/>
                                              <div style={{fontSize: 12, color: "red"}}>{this.state.transactionError}</div>
                                       </div>
                                       <div className = "form-group">
                                           <label> Payment To :</label>
                                           <input placeholder="Payment To" name="paymentTo" className="form-control"
                                                value={this.state.paymentTo} onChange={this.changePaymentToHandler}/>
                                                <div style={{fontSize: 12, color: "red"}}>{this.state.paymentToError}</div>
                                       </div>
                                       <div className = "form-group">
                                           <label> Date :</label>
                                           <input placeholder="Date" name="date" type="date" className="form-control"
                                                value={this.state.date} onChange={this.changeDateHandler}/>
                                                <div style={{fontSize: 12, color: "red"}}>{this.state.dateError}</div>
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
                                                <div style={{fontSize: 12, color: "red"}}>{this.state.amountError}</div>
                                       </div>
                                        <br></br>
                                       <button className="btn btn-success" onClick={this.saveOrUpdateExpense}>Save</button>
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

export default CreateExpenseComponent;