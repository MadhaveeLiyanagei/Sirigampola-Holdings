import React, { Component } from 'react';
import SupplierOrderService from '../services/SupplierOrderService';

// toast.configure()
class AddSupplierComponent extends Component {

    constructor(props){
        super(props)

        this.state = {

            supplierName: '',
            companyName: '',
            companyAddress: '',
            supplierContact: '',
            companyEmail: '',
            description: '',

            supplierNameError: '',
            companyNameError: '',
            companyAddressError: '',
            supplierContactError: '',
            companyEmailError: '',
            descriptionError: ''
            
        }

    }

    saveSupplierOrder = (e) =>{
        e.preventDefault();
        let order = {supplierName: this.state.supplierName, companyName: this.state.companyName, companyAddress: this.state.companyAddress,
            supplierContact: this.state.supplierContact, companyEmail: this.state.companyEmail, description: this.state.description};
        //const isValid = this.validate();
        //if(isValid){
        console.log('order =>' + JSON.stringify(order));

            SupplierOrderService.addSupplierOrder(order).then(res =>{
                    //this.notify();
                    this.props.history.push('/supplierorder');
            });
        //}
    }

    render() {
        return (
            <div>
                <div className = "row" style={{marginTop:"100px" }}></div>

                <div className = "container" >
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                        <br/>
                            <h3 className="text-center">CHECKOUT FORUM</h3>
                            <div className="card-body">

                                <form>
                                    <div className = "form-group">
                                        <label>Supplier Name:</label>
                                        <input placeholder = "Supplier Name" name="supplierName" className="form-control" 
                                        value={this.state.supplierName}/>
                                        {/* <div style={{fontSize: 12, color: "red"}}>{this.state.orderNoError}</div> */}
                                    </div>
                                    <br/>
                                    <div className = "form-group">
                                        <label>Company Name:</label>
                                        <input placeholder = "Company Name" name="companyName" className="form-control" 
                                        value={this.state.companyName}/>
                                        {/* <div style={{fontSize: 12, color: "red"}}>{this.state.productNameError}</div> */}
                                    </div>
                                    <br/>
                                    <div className = "form-group">
                                        <label>Company Address:</label>
                                        <input placeholder = "Company Address" name="companyAddress" className="form-control" 
                                        value={this.state.companyAddress}/>
                                        {/* <div style={{fontSize: 12, color: "red"}}>{this.state.productProceError}</div> */}
                                    </div>
                                    <br/>
                                    <div className = "form-group">
                                        <label>Supplier Contact:</label>
                                        <input placeholder = "Supplier Contact" name="supplierContact" className="form-control" 
                                        value={this.state.supplierContact}/>
                                        {/* <div style={{fontSize: 12, color: "red"}}>{this.state.quantityError}</div> */}
                                    </div>

                                    <br/>
                                    <div className = "form-group">
                                        <label>Company Email:</label>
                                        <input placeholder = "Company Email" name="companyEmail" className="form-control" 
                                        value={this.state.companyEmail}/>
                                        {/* <div style={{fontSize: 12, color: "red"}}>{this.state.quantityError}</div> */}
                                    </div>

                                    <br/>
                                    <div className = "form-group">
                                        <label>Description:</label>
                                        <input placeholder = "Description" name="description" className="form-control" style={{height: "100px"}}
                                        value={this.state.description}/>
                                        {/* <div style={{fontSize: 12, color: "red"}}>{this.state.quantityError}</div> */}
                                    </div>

                                    
                                    <br/>
                                    <button className="btn btn-success" onClick={this.saveSupplierOrder}> SAVE </button>
                                    <button className="btn btn-danger" style={{marginLeft: "10px"}}> CANCEL </button>
                                    <br/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className = "row" style={{marginBottom:"200px" }}></div>
                
            </div>
        );
    }
}

export default AddSupplierComponent;