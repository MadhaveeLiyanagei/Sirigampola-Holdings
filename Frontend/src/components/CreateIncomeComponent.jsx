import React, { Component } from 'react';
import IncomeService from '../services/IncomeService';
import 'react-toastify/dist/ReactToastify.css';
import {toast} from 'react-toastify';

toast.configure()
class CreateIncomeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            incomeID: this.props.match.params.incomeID,
            transaction: '',
            paymentFrom: '',
            date: '',
            incomeCategory: '',
            description: '',
            amount: '',
            transactionError: '',
            paymentFromError: '',
            dateError: '',
            amountError: ''

        }
        
         
        this.saveOrUpdateIncome = this.saveOrdUpdateIncome.bind(this);

    }

    
    //step 3
    componentDidMount(){

        //step 4
        if(this.state.incomeID == -1) {
            return
        }else {
            IncomeService.getIncomeById(this.state.incomeID).then( (res) =>{
                let income =  res.data;
                this.setState({transaction: income.transaction, 
                    paymentFrom: income.paymentFrom, 
                    date: income.date, 
                    incomeCategory: income.incomeCategory, 
                    description: income.description, 
                    amount: income.amount
                });
            });
        }  
    }

    notify(){

        toast.warn('Income Added Successfully!', {position: toast.POSITION.TOP_CENTER, autoClose: 2000})

    }

    notify1(){

        toast.warn('Income Updated Successfully!', {position: toast.POSITION.TOP_CENTER, autoClose: 2000})
    }


    validate = () =>{

        let transactionError='';
        let paymentFromError = '';
        let dateError = '';
        let amountError ='';

       
        if(!this.state.transaction){
            transactionError = "Please fill out this field";
        }

        if(!this.state.paymentFrom){
            paymentFromError = "Please fill out this field";
        }

        if(!this.state.date){
            dateError = "Please fill out this field";
        }

        if(!this.state.amount){
            amountError = "Please fill out this field";
        }

         
        if(transactionError || paymentFromError || dateError || amountError){

            this.setState({transactionError,paymentFromError,dateError,amountError});

            return false;

        }
        return true;
    }

    saveOrdUpdateIncome = (e) => {
        e.preventDefault();
        let income = {transaction: this.state.transaction, paymentFrom: this.state.paymentFrom, date: this.state.date, incomeCategory: this.state.incomeCategory, description: this.state.description, amount: this.state.amount};
        const isValid = this.validate();
        if(isValid){
        console.log('income => ' + JSON.stringify(income));

        //step 5
        if(this.state.incomeID == -1) {
            IncomeService.createIncome(income).then(res =>{
                this.notify();
                this.props.history.push('/Finance');
            }).catch(error=> {alert("Income Not Available")});
        }else {  
            IncomeService.updateIncome(income, this.state.incomeID).then( res => {
                this.notify1();
                this.props.history.push('/Finance');
            }).catch(error=> {alert("Income Not Available")});        
        }  
    }    
    }

    changeTransactionHandler= (event) => {
        this.setState({transaction: event.target.value});
    }
    changePaymentFromHandler= (event) => {
        this.setState({paymentFrom: event.target.value});
    }
    changeDateHandler= (event) => {
        this.setState({date: event.target.value});
    }
    changeIncomeCategoryHandler= (event) => {
        this.setState({incomeCategory: event.target.value});
    }
    changeDescriptionHandler= (event) => {
        this.setState({description: event.target.value});
    }
    changeAmountHandler= (event) => {
        this.setState({amount: event.target.value});
    }

    cancel(){
        this.props.history.push('/Finance');
    }

    getTitle(){
        if(this.state.incomeID == -1){
            return <h3 className="text-center">Add Income</h3>
        }else{
            return <h3 className="text-center">Update Income</h3>
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
                                           <label> Payment From :</label>
                                           <input placeholder="Payment From" name="paymentFrom" className="form-control"
                                                value={this.state.paymentFrom} onChange={this.changePaymentFromHandler}/>
                                                <div style={{fontSize: 12, color: "red"}}>{this.state.paymentFromError}</div>
                                       </div>
                                       <div className = "form-group">
                                           <label> Date :</label>
                                           <input placeholder="Date" name="date" type="date" className="form-control"
                                                value={this.state.date} onChange={this.changeDateHandler}/>
                                                <div style={{fontSize: 12, color: "red"}}>{this.state.dateError}</div>
                                       </div>
                                       <div className = "form-group">
                                           <label> Income Category :</label>
                                          <input placeholder="Income Category" name="incomeCategory" className="form-control" 
                                               value={this.state.incomeCategory} onChange={this.changeIncomeCategoryHandler}/>
                                                  
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
                                       <button className="btn btn-success" onClick={this.saveOrUpdateIncome}>Save</button>
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

export default CreateIncomeComponent;

