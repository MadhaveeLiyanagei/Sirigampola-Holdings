import React, { Component } from 'react'
import BuyerOrdersService from '../services/BuyerOrdersService'

class ViewBuyerOrderComponent extends Component {



    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            BuyerOrders: {},
            Items: []

        }
    }



    componentDidMount() {
        BuyerOrdersService.getBuyerOrdersById(this.state.id).then(res => {
            this.setState({ BuyerOrders: res.data })

        })
    }

    render() {
        return (
            <div>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center">View Delivery Details</h3>
                    <div className="card-body">
                        <div className="row">
                            <label>UserName :{this.state.BuyerOrders.username} </label> 
                            
                        </div>

                        {/* <div className = "row">
                            <label>Product Name</label>
                            <div>{ this.state.products.name }</div>
                         </div>

                         <div className = "row">
                            <label>Quantity</label>
                            <div>{ this.state.products.qty }</div>
                         </div>

                         <div className = "row">
                            <label>Price</label>
                            <div>{ this.state.products.price }</div>
                        </div>*/}

                        <div className="row">
                            <label>Address :{this.state.BuyerOrders.address}</label>                           
                        </div>

                        <div className="row">
                            <label>Email :{this.state.BuyerOrders.email}</label>
                        </div>

                        <div className="row">
                            <label>Contact :{this.state.BuyerOrders.contact}</label>                          
                        </div>

                        <div className="row">
                            <label>Date :{this.state.BuyerOrders.date}</label>
                            
                        </div>

                    </div>
                </div>
                {JSON.parse(localStorage.getItem('cartitems')).map((item) => (
                    <div key={item.id} className="cart-items-list">

                        <div className="cart-items-name">{item.name}</div>
                        <div className="cart-items-name">{item.quantity}</div>
                        <div className="cart-items-name">{item.price}</div>
                    </div>
                ))}
                <div className="cart-items-name">{localStorage.getItem('itemPrice')}</div>

            </div>

        )
    }
}

export default ViewBuyerOrderComponent
