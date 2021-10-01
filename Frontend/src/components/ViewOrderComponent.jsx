import React, { Component } from 'react';
import CreateOrderService from '../services/CreateOrderService';

class ViewOrderComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            order: {}

        }
    } 


    componentDidMount()
    {
         CreateOrderService.getOrderById(this.state.id).then( res => {
                this.setState({order: res.data});
         });
    }

    render() {
        return (
            <div>
                <div className = "card col-md-6 offset-md-3 offset-md-3">
                        <br/>
                            <h3 className="text-center">VIEW ORDER</h3>
                            <div className="card-body">
                                <div className = "row">
                                    <label>Order No: </label> <div>{ this.state.order.orderno }</div>
                                </div> 
                                <br/>
                                <div className = "row">
                                    <label>Product Name: </label> <div>{ this.state.order.productName }</div>
                                </div> 
                                <br/>
                                <div className = "row">
                                    <label>Product Price: </label> <div>{ this.state.order.productPrice }</div>
                                </div> 
                                <br/>
                                <div className = "row">
                                    <label>Quantity: </label> <div>{ this.state.order.quantity }</div>
                                </div> 
                            </div>
                </div>
                
            </div>
        );
    }
}

export default ViewOrderComponent;