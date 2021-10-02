import React, { Component } from 'react';
import SupplierService from '../services/SupplierService';

class ViewSupplierComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            supplierid: this.props.match.params.supplierid,
            supplier: {}

        }
    }
    
    componentDidMount(){
        SupplierService.getSupplierId(this.state.supplierid).then( res => {
            this.setState({supplier: res.data});

        })
    }

    render() {
        return (
            <div>
               <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center">View Supplier Details</h3>
                    <div className = "card-body">

                        <div className = "row">
                        
                            <label>Supplier Name: {this.state.supplier.suppliername}</label>
                           
                        </div>
                        <div className = "row">
                            <label>Supplier Email: {this.state.supplier.supplieremail}</label>
                       
                      </div>
                      <div className = "row">
                            <label>Supplier Phone Number: {this.state.supplier.supplierphone}</label>
                        
                      </div>
                      <div className = "row">
                            <label>Supplier User Name: {this.state.supplier.supplieruserName}</label>
                        
                      </div>
                      <div className = "row">
                            <label>Supplier Password: {this.state.supplier.supplierpassword}</label>
                        
                      </div>
                      <div className = "row">
                            <label>Supplier Address: {this.state.supplier.supplieraddress}</label>
                        
                      </div>
                     </div>
                </div> 
            </div>
        );
    }
}

export default ViewSupplierComponent;