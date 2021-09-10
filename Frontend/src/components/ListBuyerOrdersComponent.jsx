import React, { Component } from 'react';
import BuyerOrdersService from '../services/BuyerOrdersService'



class ListBuyerOrdersComponent extends Component {

    constructor(props){
        super(props)

        this.state={
            BuyerOrders:[]
        }

        this.addBuyerOrders = this.addBuyerOrders.bind(this);
        this.editBuyerOrders =this.editBuyerOrders.bind(this);
        this.deleteBuyerOrders = this.deleteBuyerOrders.bind(this);
        
    }

    deleteBuyerOrders(id){
       BuyerOrdersService.deleteBuyerOrders(id).then(res =>{
        this.setState({BuyerOrders: this.state.BuyerOrders.filter(BuyerOrders=> BuyerOrders.id !== id)});
       });

    }

    editBuyerOrders(id){
        this.props.history.push(`/checkout/${id}`);
    }

    componentDidMount(){
        BuyerOrdersService.getBuyerOrders().then((res) => {
            this.setState({BuyerOrders: res.data});

        });
    }
    
    addBuyerOrders(){
        
        this.props.history.push('/checkout/_add');
        
    }
    
    
    
    render() {
        return (
            <div>

                <h2 className = "text-center">Buyer Orders</h2>
                <div className = "row">
                    <button className="btn btn-primary" onClick = {this.addBuyerOrders}>Checkout</button>

                </div>
                <br></br>
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
                                        <td>
                                                <button onClick= {() => this.editBuyerOrders(BuyerOrders.id)} className="btn btn-info"> Update</button>
                                                <button style={{marginLeft:"10px"}} onClick= {() => this.deleteBuyerOrders(BuyerOrders.id)} className="btn btn-danger">Delete</button>
                                        </td>  
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

