import React, { Component } from 'react';
import CreateOrderService from '../services/CreateOrderService';


class ListCreateOrder extends Component {

    constructor(props){
        super(props)

        this.state = {
            createorder: [],
            searchId:''
        }

        this.addOrder = this.addOrder.bind(this);
        this.editOrder = this.editOrder.bind(this);
        this.deleteOrder = this.deleteOrder.bind(this);
    }

    generateOrderReport(){
        this.props.history.push('/report-order');
    }

    searchProductName(event){
        this.setState({ searchId: event.target.value.substr(0,20)});
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

        let filterProductname = this.state.createorder.filter((
            order)=>{
                return order.productName.toLowerCase().indexOf(this.state.searchId.toLowerCase())!==-1;
            }
        );

        return (
            <div>
                <br/>
                <h2 className="text-center">ORDERS</h2>
                <br/>
                <br/>

                {/* search bar */}
                {/* <div className = "form-group col-md-4">
                    <input type="text" class="form-control" style={{marginLeft:0}} placeholder="Enter Product Name" value={this.state.searchId} onChange={this.searchProductName.bind(this)}/>
                </div> */}

                <div class="input-group">
                    <div class="form-outline">
                        <input id="search-input" type="search" style={{width: "500px"}} placeholder="Enter Product Name" id="form1" class="form-control" value={this.state.searchId} onChange={this.searchProductName.bind(this)}/>
                    </div>
                    <button id="search-button" type="button" class="btn btn-primary" style={{width: "50px"}}>
                        <i class="fas fa-search"></i>
                    </button>
                </div>

                <div className="container">
                            <div className = "row" style={{marginLeft: "1050px"}}>
                                <button className="btn btn-primary" onClick={this.addOrder}> Create Order </button>
                            </div>
                </div>

                <br/>
                <div className = "row">
                    <table className = "table table-striped table-bordered table-hover">

                        <thead>
                            <tr class="table-dark">
                                <th style={{ textAlign: "center" }}> Order NO </th>
                                <th style={{ textAlign: "center" }}> Product Name </th>
                                <th style={{ textAlign: "center" }}> Product Price </th>
                                <th style={{ textAlign: "center" }}> Quantity </th>
                                <th style={{ textAlign: "center" }}> Actions </th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                filterProductname.map(
                                    order =>
                                //this.state.createorder.map(
                                    //order =>
                                    <tr key = {order.id} >
                                        <td >{order.orderno}</td>
                                        <td>{order.productName}</td>
                                        <td>{order.productPrice}</td>
                                        <td>{order.quantity}</td>
                                        <td class="table-secondary">
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
                            <div className = "row" style={{marginLeft: "1050px",marginTop: "10px" }}>
                                <button className="btn btn-secondary"  onClick={() => this.generateOrderReport()}> Generate Report </button>
                            </div>
                        </div>
                </div>
            </div>
        );
    }
}

export default ListCreateOrder;