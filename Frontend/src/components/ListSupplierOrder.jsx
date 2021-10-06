import React, { Component } from 'react';
import SupplierOrderService from '../services/SupplierOrderService';
import HeaderComponent from './HeaderComponent';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class ListSupplierOrder extends Component {

    constructor(props){
        super(props)

        this.state = {
            supplierorder: []
            
        }

        this.deleteOrder = this.deleteOrder.bind(this);
    } 

    //toast message
    notify(){
        toast.error('Order Deleted Successfully!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            })
    }

    deleteOrder(id)
    {
        SupplierOrderService.deleteSupplierOrder(id).then( res => {
            this.notify();
            this.setState({supplierorder: this.state.supplierorder.filter(order => order.id !== id)});

        });
    }

    viewOrder(id){
        this.props.history.push(`/view-supplier-order/${id}`);
    }

    componentDidMount(){
        SupplierOrderService.getSupplierOrder().then((res) => {
            this.setState({ supplierorder: res.data});
        });
    }

    render() {
        return (
            <div>
                <HeaderComponent/>
                <div className = "row" style={{marginTop:"100px" }}></div>

                <h2 className="text-center">SUPPLIER ORDERS</h2>
                <br/>
                <br/>
                <div className = "row">

                <table className = "table table-striped table-bordered table-hover" >
                    <thead>
                    <tr class="table-dark">
                        <th style={{ textAlign: "center" }}> Supplier Name </th>
                        <th style={{ textAlign: "center" }}> Company Name </th>
                        <th style={{ textAlign: "center" }}> Company Address </th>
                        <th style={{ textAlign: "center" }}> Supplier Contact </th>
                        <th style={{ textAlign: "center" }}> Company Email </th>
                        <th style={{ textAlign: "center" }}> Description </th>
                        <th style={{ textAlign: "center", width: "200px"}}> Actions </th>
                    </tr>
                    </thead>

                    <tbody>

                        {
                            this.state.supplierorder.map(
                                order =>
                                <tr key = {order.id}>
                                    <td >{order.supplierName}</td>
                                    <td>{order.companyName}</td>
                                    <td>{order.companyAddress}</td>
                                    <td>{order.supplierContact}</td>
                                    <td>{order.companyEmail}</td>
                                    <td>{order.description}</td>
                                    <td class="table-secondary">
                                            <button style={{marginLeft: "20px"}} onClick = { () => this.viewOrder(order.id)} className="btn btn-warning"> View </button>
                                            <button style={{marginLeft: "20px"}} onClick = { () => this.deleteOrder(order.id)} className="btn btn-danger"> Delete </button> 
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                </div>
                <div className = "row" style={{marginBottom:"100px" }}></div>
            </div>
        );
    }
}

export default ListSupplierOrder;