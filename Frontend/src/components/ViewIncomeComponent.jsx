import React, { Component } from 'react'
import IncomeService from '../services/IncomeService'

class ViewIncomeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            incomeID: this.props.match.params.incomeID,
            income : {}
        }
    }

    componentDidMount(){
        IncomeService.getIncomeById(this.state.incomeID).then( res => {
            this.setState({income: res.data});
        })
    }

    cancel(){
        this.props.history.push('/Finance');
    }

    render() {
        return (
            <div>
                <br></br>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Income Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Transaction :   { this.state.income.transaction }</label> 

                        </div>
                        <div className = "row">
                            <label> Payment From :  { this.state.income.paymentFrom }</label> 

                        </div>
                        <div className = "row">
                            <label> Date :   { this.state.income.date } </label>
                
                        </div>
                        <div className = "row">
                            <label> Income Category : { this.state.income.incomeCategory } </label>
                             
                        </div>
                        <div className = "row">
                            <label> Description : { this.state.income.description } </label>
                             
                        </div>
                        <div className = "row">
                            <label> Amount : { this.state.income.amount } </label>
                            
                        </div>
                        
                        <br></br>
                        <button className="btn btn-info" style={{marginLeft: "4px"}}>Generate Report </button>
                    <button className="btn btn-danger" style={{marginLeft: "4px"}} onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Back</button>
                    </div>
                     
                </div>
            </div>
        )
    }
}

export default ViewIncomeComponent