import React, { Component } from 'react';
import SupplierOrderService from '../services/SupplierOrderService';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

        this.changeSupplierNameHandler = this.changeSupplierNameHandler.bind(this);
        this.changeCompanyNameHandler = this.changeCompanyNameHandler.bind(this);
        this.changeCompanyAddressHandler = this.changeCompanyAddressHandler.bind(this);
        this.changeSupplierContactHandler = this.changeSupplierContactHandler.bind(this);
        this.changeCompanyEmailHandler = this.changeCompanyEmailHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);

        this.saveOrder = this.saveOrder.bind(this);

    }

    //validation start----------------------------------------------------------------------------------------------------------------------------------------

    notify(){
        toast.success('Order Added Successfully!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            })
    }
 
    notifyCancel(){
        toast.error('Order Canceled Successfully!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            })
    }
 
    
     validate = () =>{

         let supplierNameError = '';
         let companyNameError = '';
         let companyAddressError = '';
         let supplierContactError = '';
         let companyEmailError = '';
         let descriptionError = '';
 
         if(!this.state.supplierName){
            supplierNameError="Supplier Name is required";
         }
         if(!this.state.companyName){
            companyNameError="Company Name is required";
         }
         if(!this.state.companyAddress){
            companyAddressError="Company Address is required";
        }
         if(!this.state.supplierContact){
            supplierContactError="Supplier Contact Number is required";
         }

         if(!this.state.companyEmail){
            companyEmailError="Company Email is required";
         }

         if(!this.state.description){
            descriptionError="Description is required";
         }
         
         if(supplierNameError||companyNameError||companyAddressError||supplierContactError||companyEmailError||descriptionError){
             this.setState({supplierNameError, companyNameError, companyAddressError, supplierContactError, companyEmailError, descriptionError});
             return false;
         }
 
         return true;
 
     }

    //validation End ---------------------------------------------------------------------------


    saveOrder = (e) =>{
        e.preventDefault();
        let order = {supplierName: this.state.supplierName, companyName: this.state.companyName, companyAddress: this.state.companyAddress,
            supplierContact: this.state.supplierContact, companyEmail: this.state.companyEmail, description: this.state.description};
        const isValid = this.validate();
        if(isValid){
        console.log('order =>' + JSON.stringify(order));

            SupplierOrderService.addSupplierOrder(order).then(res =>{
                    this.notify();
                    this.props.history.push('/supplierorder');
            });
        }
    }

    changeSupplierNameHandler = (event) =>{
        this.setState({supplierName: event.target.value});
    }

    changeCompanyNameHandler = (event) =>{
        this.setState({companyName: event.target.value});
    }

    changeCompanyAddressHandler = (event) =>{
        this.setState({companyAddress: event.target.value});
    } 

    changeSupplierContactHandler = (event) =>{
        this.setState({supplierContact: event.target.value});
    } 

    changeCompanyEmailHandler = (event) =>{
        this.setState({companyEmail: event.target.value});
    } 

    changeDescriptionHandler = (event) =>{
        this.setState({description: event.target.value});
    } 

    cancel(){
        this.notifyCancel();
        this.props.history.push('/product-home');
    }

    render() {
        return (
            <div>
                <div className = "row" style={{marginTop:"100px" }}></div>

                <div className = "container" >
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                        <br/>
                            <h3 className="text-center">SUPPLIER ORDERS</h3>
                            <div className="card-body">

                                <form>
                                    <div className = "form-group">
                                        <label>Supplier Name:</label>
                                        <input placeholder = "Supplier Name" name="supplierName" className="form-control" 
                                        value={this.state.supplierName} onChange={this.changeSupplierNameHandler}/>
                                    </div>
                                    <br/>
                                    <div className = "form-group">
                                        <label>Company Name:</label>
                                        <input placeholder = "Company Name" name="companyName" className="form-control" 
                                        value={this.state.companyName} onChange={this.changeCompanyNameHandler}/>
                                    </div>
                                    <br/>
                                    <div className = "form-group">
                                        <label>Company Address:</label>
                                        <input placeholder = "Company Address" name="companyAddress" className="form-control" 
                                        value={this.state.companyAddress} onChange={this.changeCompanyAddressHandler}/>
                                    </div>
                                    <br/>
                                    <div className = "form-group">
                                        <label>Supplier Contact:</label>
                                        <input placeholder = "Supplier Contact" name="supplierContact" className="form-control" 
                                        value={this.state.supplierContact} onChange={this.changeSupplierContactHandler}/>
                                    </div>
                                    <br/>
                                    <div className = "form-group">
                                        <label>Company Email:</label>
                                        <input placeholder = "Company Email" name="companyEmail" className="form-control" 
                                        value={this.state.companyEmail} onChange={this.changeCompanyEmailHandler}/>
                                    </div>
                                    <br/>
                                    <div className = "form-group">
                                        <label>Description:</label>
                                        <input placeholder = "Description" name="description" className="form-control" style={{height: "100px"}}
                                        value={this.state.description} onChange={this.changeDescriptionHandler}/>
                                    </div>

                                    
                                    <br/>
                                    <button className="btn btn-success" onClick={this.saveOrder}> SAVE </button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}> CANCEL </button>
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