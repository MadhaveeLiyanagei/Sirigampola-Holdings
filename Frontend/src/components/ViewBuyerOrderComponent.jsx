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
                <div className="card col-md-6 offset-md-3" >
                    <h3 className="text-center">View Delivery Details</h3>
                    <div className="card-body" style={{background:" rgb(197, 207, 209)"} }>
                        <center>
                        <div className="row" style={{marginTop:40}}>
                            <label className="setFontSizeThree" >UserName :{this.state.BuyerOrders.username} </label> 
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
                            <label className="setFontSizeThree" >Address :{this.state.BuyerOrders.address}</label>                           
                        </div>

                        <div className="row">
                            <label className="setFontSizeThree">Email :{this.state.BuyerOrders.email}</label>
                        </div>

                        <div className="row">
                            <label className="setFontSizeThree">Contact :{this.state.BuyerOrders.contact}</label>                          
                        </div>

                        <div className="row">
                            <label className="setFontSizeThree">Date :{this.state.BuyerOrders.date}</label>
                            
                        </div>
                        </center>

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
