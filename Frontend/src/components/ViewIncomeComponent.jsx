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
                <div className = "card col-md-6 offset-md-3" style={{backgroundColor:"#afeeee"}}>
                    <h3 className = "text-center"> View Income Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> <b>Transaction : </b>  { this.state.income.transaction }</label> 

                        </div>
                        <br></br>
                        <div className = "row">
                            <label> <b>Payment From : </b> { this.state.income.paymentFrom }</label> 

                        </div>
                        <br></br>
                        <div className = "row">
                            <label> <b>Date : </b>   { this.state.income.date } </label>
                
                        </div>
                        <br></br>
                        <div className = "row">
                            <label> <b>Income Category : </b> { this.state.income.incomeCategory } </label>
                             
                        </div>
                        <br></br>
                        <div className = "row">
                            <label> <b>Description : </b> { this.state.income.description } </label>
                             
                        </div>
                        <br></br>
                        <div className = "row">
                            <label> <b> Amount :</b> { this.state.income.amount } </label>
                            
                        </div>
                        
                        <br></br>
                         
                    <button className="btn btn-danger" style={{marginLeft: "4px"}} onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Back</button>
                    </div>
                     
                </div>
            </div>
        )
    }
}

export default ViewIncomeComponent