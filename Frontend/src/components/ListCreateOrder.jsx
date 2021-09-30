import React, { Component } from 'react';
import CreateOrderService from '../services/CreateOrderService';

class ListCreateOrder extends Component {

    constructor(props){
        super(props)

        this.state = {
            createorder: []
        }

        this.addOrder = this.addOrder.bind(this);
        this.editOrder = this.editOrder.bind(this);
        this.deleteOrder = this.deleteOrder.bind(this);
    }

    viewOrder(id){
        this.props.history.push(`/view-order/${id}`);
    }

    deleteOrder(id)
    {
        CreateOrderService.deleteOrder(id).then( res => {
            this.setState({createorder: this.state.createorder.filter(order => order.id !== id)});

        });
    }

    editOrder(id){
        this.props.history.push(`/update-order/${id}`);
    }

    addOrder()
    {
        this.props.history.push('/add-order');
    }

    componentDidMount()
    {
        CreateOrderService.getOrders().then((res) => {

            this.setState({ createorder: res.data});
        });
    }

    render() {
        return (
            <div>
                <br/>
                <h2 className="text-center">ORDERS</h2>
                <br/>
                <div className = "row">
                    <table className = "table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th style={{ textAlign: "center" }}> Order NO </th>
                                <th style={{ textAlign: "center" }}> Product Name </th>
                                <th style={{ textAlign: "center" }}> Product Price </th>
                                <th style={{ textAlign: "center" }}> Quantity </th>
                                <th style={{ textAlign: "center" }}> Actions </th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.createorder.map(
                                    order =>
                                    <tr key = {order.id}>
                                        <td>{order.orderno}</td>
                                        <td>{order.productName}</td>
                                        <td>{order.productPrice}</td>
                                        <td>{order.quantity}</td>
                                        <td>
                                            <button style={{marginLeft: "85px"}} onClick = { () => this.editOrder(order.id)} className="btn btn-info"> Update </button>
                                            <button style={{marginLeft: "20px"}} onClick = { () => this.deleteOrder(order.id)} className="btn btn-danger"> Delete </button>
                                            <button style={{marginLeft: "20px"}} onClick = { () => this.viewOrder(order.id)} className="btn btn-warning"> View </button>
                                        </td>
                                    </tr>
                                )
                            }

                        </tbody>

                    </table>
                        <div className="container">
                            <div className = "row" style={{marginLeft: "1050px"}}>
                                <button className="btn btn-primary" onClick={this.addOrder}> Create Order </button>
                            </div>
                        </div>
                </div>
            </div>
        );
    }
}

export default ListCreateOrder;