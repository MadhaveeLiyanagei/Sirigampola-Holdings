import React, { Component } from 'react';
import CreateOrderService from '../services/CreateOrderService';
//import {ToastContainer, toast, Zoom, Bounce} from 'react-toastify';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// toast.configure()
class AddtoListForum extends Component {

    constructor(props){
        super(props)

        this.state = {

            // orderno: '',
            // productName: '',
            // productPrice: '',
            // quantity: '',
            // orderNoError: '',
            // productNameError: '',
            // productProceError: '',
            // quantityError: ''
            
        }

    }

    //validation start----------------------------------------------------------------------------------------------------------------------------------------

    // notify(){
    //     toast.success('Order Added Successfully!', {
    //         position: "top-center",
    //         autoClose: 5000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //         })
    // }
 
    // notifyCancel(){
    //     toast.error('Order Canceled Successfully!', {
    //         position: "top-center",
    //         autoClose: 5000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //         })
    // }
 
    
    //  validate = () =>{
    //      let orderNoError = '';
    //      let productNameError = '';
    //      let productProceError = '';
    //      let quantityError = '';
 
    //      if(!this.state.orderno){
    //         orderNoError="Order No is required";
    //      }
    //      if(!this.state.productName){
    //         productNameError="Product Name is required";
    //      }
    //      if(!this.state.productPrice){
    //         productProceError="Product Price is required";
    //     }
    //      if(!this.state.quantity){
    //         quantityError="Quantity is required";
    //      }
         
    //      if(orderNoError||productNameError||productProceError||quantityError){
    //          this.setState({orderNoError, productNameError, productProceError, quantityError});
    //          return false;
    //      }
 
    //      return true;
 
    //  }

    //validation End ---------------------------------------------------------------------------

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
                                        <label>Order No:</label>
                                        <input placeholder = "Order Number" name="orderno" className="form-control" 
                                        value={this.state.orderno}/>
                                        {/* <div style={{fontSize: 12, color: "red"}}>{this.state.orderNoError}</div> */}
                                    </div>
                                    <br/>
                                    <div className = "form-group">
                                        <label>Seller Name:</label>
                                        <input placeholder = "Product Name" name="productName" className="form-control" 
                                        value={this.state.productName}/>
                                        {/* <div style={{fontSize: 12, color: "red"}}>{this.state.productNameError}</div> */}
                                    </div>
                                    <br/>
                                    <div className = "form-group">
                                        <label>Product Price:</label>
                                        <input placeholder = "Product Price" name="productPrice" className="form-control" 
                                        value={this.state.productPrice}/>
                                        {/* <div style={{fontSize: 12, color: "red"}}>{this.state.productProceError}</div> */}
                                    </div>
                                    <br/>
                                    <div className = "form-group">
                                        <label>Quantity:</label>
                                        <input placeholder = "Quantity" name="quantity" className="form-control" 
                                        value={this.state.quantity}/>
                                        {/* <div style={{fontSize: 12, color: "red"}}>{this.state.quantityError}</div> */}
                                    </div>

                                    
                                    <br/>
                                    <button className="btn btn-success" > SAVE </button>
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

export default AddtoListForum;