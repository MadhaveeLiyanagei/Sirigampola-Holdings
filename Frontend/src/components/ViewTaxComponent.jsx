import React, { Component } from 'react'
import TaxService from '../services/TaxService'

class ViewTaxComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            taxID: this.props.match.params.taxID,
            tax : {}
        }
    }

    componentDidMount(){
        TaxService.getTaxById(this.state.taxID).then( res => {
            this.setState({tax: res.data});
        })
    }

    cancel(){
        this.props.history.push('/Tax');
    }

    render() {
        return (
            <div>
                <br></br>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Tax Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> ProductID :   { this.state.tax.productID }</label> 

                        </div>
                        <div className = "row">
                            <label> Country code :  { this.state.tax.countryCode }</label> 

                        </div>
                        <div className = "row">
                            <label> Pre-tax price :   { this.state.tax.preTaxPrice } </label>
                
                        </div>
                        <div className = "row">
                            <label> Tax rate : { this.state.tax.taxRate } </label>
                             
                        </div>
                        <div className = "row">
                            <label> Sub total : { this.state.tax.subTotal } </label>
                             
                        </div>
                        <div className = "row">
                            <label> VAT : { this.state.tax.vat } </label>
                            
                        </div>

                         
                        <div className = "row">
                            <label> Total price : { this.state.tax.totalPrice } </label>
                            
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

export default ViewTaxComponent