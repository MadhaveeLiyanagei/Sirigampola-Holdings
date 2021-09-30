import React, { Component } from 'react';
import CreateOrderService from '../services/CreateOrderService';


class AddOrderComponent extends Component {

    constructor(props){
        super(props)

        this.state = {

            orderno: '',
            productName: '',
            productPrice: '',
            quantity: ''
            
        }

        this.changeOrderNoHandler = this.changeOrderNoHandler.bind(this);
        this.changeProductNameHandler = this.changeProductNameHandler.bind(this);
        this.changeProductPriceHandler = this.changeProductPriceHandler.bind(this);
        this.changeQuantityHandler = this.changeQuantityHandler.bind(this);
        this.saveOrder = this.saveOrder.bind(this);

    }

    saveOrder = (e) =>{
        e.preventDefault();

        let order = {orderno: this.state.orderno, productName: this.state.productName, productPrice: this.state.productPrice, quantity: this.state.quantity};
        console.log('order =>' + JSON.stringify(order));

        CreateOrderService.addOrder(order).then(res =>{
                //this.notify();
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
                <div className = "container" >
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                        <br/>
                            <h3 className="text-center">ADMIN ADD ORDER</h3>
                            <div className="card-body">

                                <form>
                                    <div className = "form-group">
                                        <label>Order No:</label>
                                        <input placeholder = "Order Number" name="orderno" className="form-control" 
                                        value={this.state.orderno} onChange={this.changeOrderNoHandler}/>
                                    </div>
                                    <br/>
                                    <div className = "form-group">
                                        <label>Product Name:</label>
                                        <input placeholder = "Product Name" name="productName" className="form-control" 
                                        value={this.state.productName} onChange={this.changeProductNameHandler}/>
                                    </div>
                                    <br/>
                                    <div className = "form-group">
                                        <label>Product Price:</label>
                                        <input placeholder = "Product Price" name="productPrice" className="form-control" 
                                        value={this.state.productPrice} onChange={this.changeProductPriceHandler}/>
                                    </div>
                                    <br/>
                                    <div className = "form-group">
                                        <label>Quantity:</label>
                                        <input placeholder = "Quantity" name="quantity" className="form-control" 
                                        value={this.state.quantity} onChange={this.changeQuantityHandler}/>
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
                
            </div>
        );
    }
}

export default AddOrderComponent;