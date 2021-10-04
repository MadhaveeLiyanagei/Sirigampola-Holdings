import React, { Component } from 'react';
import IncomeService from '../services/IncomeService';

class UpdateIncomeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            incomeID: this.props.match.params.incomeID,
            transaction: '',
            paymentFrom: '',
            date: '',
            incomeCategory: '',
            description: '',
            amount: ''
        }
         
        this.updateIncome = this.updateIncome.bind(this);
    }

    componentDidMount(){
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
    updateIncome = (e) => {
        e.preventDefault();
        let income = {transaction: this.state.transaction, paymentFrom: this.state.paymentFrom, date: this.state.date, incomeCategory: this.state.incomeCategory, description: this.state.description, amount: this.state.amount};
        console.log('income => ' + JSON.stringify(income));
        IncomeService.updateIncome(income, this.state.incomeID).then( res => {
            this.props.history.push('/Finance');
        });
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


    render() {
        return (
            <div>
                 <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update Income</h3>
                               <div className="card-body">
                                   <form>
                                       <div className = "form-group">
                                           <label> Transaction :</label>
                                           <input placeholder="Transaction" name="transaction" className="form-control"
                                                value={this.state.transaction} onChange={this.changeTransactionHandler}/>
                                       </div>
                                       <div className = "form-group">
                                           <label> Payment From :</label>
                                           <input placeholder="Payment From" name="paymentFrom" className="form-control"
                                                value={this.state.paymentFrom} onChange={this.changePaymentFromHandler}/>
                                       </div>
                                       <div className = "form-group">
                                           <label> Date :</label>
                                           <input placeholder="Date" name="date" className="form-control"
                                                value={this.state.date} onChange={this.changeDateHandler}/>
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
                                       </div>
                                        <br></br>
                                       <button className="btn btn-success" onClick={this.updateIncome}>Save</button>
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

export default UpdateIncomeComponent;