import React, { Component } from 'react';
import CreateOrderService from '../services/CreateOrderService';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()
class UpdateOrderComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {

            id: this.props.match.params.id,
            orderno: '',
            productName: '',
            productPrice: '',
            quantity: '',
            orderNoError: '',
            productNameError: '',
            productProceError: '',
            quantityError: ''

        }

        this.changeOrderNoHandler = this.changeOrderNoHandler.bind(this);
        this.changeProductNameHandler = this.changeProductNameHandler.bind(this);
        this.changeProductPriceHandler = this.changeProductPriceHandler.bind(this);
        this.changeQuantityHandler = this.changeQuantityHandler.bind(this);
        this.updateOrder = this.updateOrder.bind(this);
    }

     //validation start----------------------------------------------------------------------------------------------------------------------------------------

     notify(){
        toast.info('Order Updated Successfully!', {
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
         let orderNoError = '';
         let productNameError = '';
         let productProceError = '';
         let quantityError = '';
 
         if(!this.state.orderno){
            orderNoError="Order No is required";
         }
         if(!this.state.productName){
            productNameError="Product Name is required";
         }
         if(!this.state.productPrice){
            productProceError="Product Price is required";
        }
         if(!this.state.quantity){
            quantityError="Quantity is required";
         }
         
         if(orderNoError||productNameError||productProceError||quantityError){
             this.setState({orderNoError, productNameError, productProceError, quantityError});
             return false;
         }
 
         return true;
 
     }

    //validation End ---------------------------------------------------------------------------


    componentDidMount()
    {
        CreateOrderService.getOrderById(this.state.id).then( (res) => {
               let order = res.data;
               this.setState({orderno: order.orderno,
                productName: order.productName,
                productPrice: order.productPrice,
                quantity: order.quantity
               }); 
        });
    }

    updateOrder = (e) =>{
        e.preventDefault();

        let order = {orderno: this.state.orderno, productName: this.state.productName, productPrice: this.state.productPrice, quantity: this.state.quantity};
        console.log('order =>' + JSON.stringify(order));

        CreateOrderService.updateOrder(order, this.state.id).then( res => {
            this.notify();
            this.props.history.push('/createorder');
        });
    }

    changeOrderNoHandler = (event) =>{
        this.setState({orderno: event.target.value});
    }

    changeProductNameHandler = (event) =>{
        this.setState({productName: event.target.value});
    }

    changeProductPriceHandler = (event) =>{
        this.setState({productPrice: event.target.value});
    } 

    changeQuantityHandler = (event) =>{
        this.setState({quantity: event.target.value});
    } 

    cancel(){
        this.props.history.push('/createorder');
    }

    render() {
        return (
            <div>
                <div className = "row" style={{marginTop:"100px" }}></div>
                <div className = "container" >
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                        <br/>
                            <h3 className="text-center">UPDATE ORDER</h3>
                            <div className="card-body">

                                <form>
                                    <div className = "form-group">
                                        <label>Order No:</label>
                                        <input placeholder = "Order Number" name="orderno" className="form-control" value={this.state.orderno} onChange={this.changeOrderNoHandler}/>
                                        <div style={{fontSize: 12, color: "red"}}>{this.state.orderNoError}</div>
                                    </div>
                                    <br/>
                                    <div className = "form-group">
                                        <label>Product Name:</label>
                                        <input placeholder = "Product Name" name="productName" className="form-control" value={this.state.productName} onChange={this.changeProductNameHandler}/>
                                        <div style={{fontSize: 12, color: "red"}}>{this.state.productNameError}</div>
                                    </div>
                                    <br/>
                                    <div className = "form-group">
                                        <label>Product Price:</label>
                                        <input placeholder = "Product Price" name="productPrice" className="form-control" value={this.state.productPrice} onChange={this.changeProductPriceHandler}/>
                                        <div style={{fontSize: 12, color: "red"}}>{this.state.productProceError}</div>
                                    </div>
                                    <br/>
                                    <div className = "form-group">
                                        <label>Quantity:</label>
                                        <input placeholder = "Quantity" name="quantity" className="form-control" value={this.state.quantity} onChange={this.changeQuantityHandler}/>
                                        <div style={{fontSize: 12, color: "red"}}>{this.state.quantityError}</div>
                                    </div>

                                    
                                    <br/>
                                    <button className="btn btn-success" onClick={this.updateOrder}> SAVE </button>
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

export default UpdateOrderComponent;