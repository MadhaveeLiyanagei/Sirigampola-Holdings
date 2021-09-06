import React, { Component } from 'react'
import BuyerOrdersService from '../services/BuyerOrdersService'


class ListBuyerOrdersComponent extends Component {

    constructor(props){
        super(props)

        this.state={
            BuyerOrders:[]
        }
        
    }
    
    componentDidMount(){
        BuyerOrdersService.getBuyerOrders().then((res) => {
            this.setState({BuyerOrders: res.data});

        });
    }
    
    
    render() {
        return (
            <div>

                <h2 className = "text-center">Buyer Orders</h2>
                <div className = "row">
                    <button className="btn btn-primary" onClick = {this.addBuyerOrders}>Checkout</button>

                </div>
                <div className = "row">
                    <table className = "table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>User Name</th>
                                <th>Address</th>
                                <th>Email Address</th>
                                <th>Contact</th>
                                <th>Date</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.BuyerOrders.map(
                                    BuyerOrders =>
                                    <tr key ={BuyerOrders.id}>
                                        <td>{BuyerOrders.username}</td>
                                        <td>{BuyerOrders.address}</td>
                                        <td>{BuyerOrders.email}</td>
                                        <td>{BuyerOrders.contact}</td>
                                        <td>{BuyerOrders.date}</td>
                                        
                                 </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                
            </div>
        )
    }
}

export default  ListBuyerOrdersComponent 

