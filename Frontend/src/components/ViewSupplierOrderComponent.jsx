import React, { Component } from 'react';
import SupplierOrderService from '../services/SupplierOrderService';


class ViewSupplierOrderComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            order: {},
            Items: []

        }

        this.goBack = this.goBack.bind(this);
    } 

    goBack()
    {
        this.props.history.push('/supplierorder');
    }

    componentDidMount()
    {
         SupplierOrderService.getSupplierOrderById(this.state.id).then( res => {
                this.setState({order: res.data});
         });
    }

    render() {
        return (
            <div>
                <div className = "row" style={{marginTop:"100px" }}></div>

                <div className="container">
                    <div className = "row" style={{width: "100px"}}>
                        <button className="btn btn-success"  onClick={() => this.goBack()}> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"/>
                        </svg> BACK </button>
                        
                    </div>
                </div>

                <div className = "card col-md-6 offset-md-3 offset-md-3">
                        <br/>
                            <h3 className="text-center">VIEW ORDER</h3>
                            <div className="card-body">
                                <div className = "row">
                                    <label>Supplier Name: </label> <div>{ this.state.order.supplierName}</div>
                                </div> 
                                <br/>
                                <div className = "row">
                                    <label>Company Name: </label> <div>{ this.state.order.companyName}</div>
                                </div> 
                                <br/>
                                <div className = "row">
                                    <label>Company Address: </label> <div>{ this.state.order.companyAddress}</div>
                                </div> 
                                <br/>
                                <div className = "row">
                                    <label>Supplier Contact: </label> <div>{ this.state.order.supplierContact}</div>
                                </div> 
                                <br/>
                                <div className = "row">
                                    <label>Company Email: </label> <div>{ this.state.order.companyEmail}</div>
                                </div> 
                                <br/>
                                <div className = "row">
                                    <label>Description: </label> <div>{ this.state.order.description}</div>
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

                <div className = "row" style={{marginBottom:"100px" }}></div>
                
            </div>
        );
    }
}

export default ViewSupplierOrderComponent;