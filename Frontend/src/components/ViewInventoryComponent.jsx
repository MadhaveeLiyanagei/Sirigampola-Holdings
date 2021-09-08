import React, { Component } from 'react';
import InventoryService from '../services/InventoryService';

class ViewInventoryComponent extends Component {

    constructor(props){
        super(props)

            this.state = {
                inventoryID: this.props.match.params.inventoryID,
                
                inventory: []
            }
        
    }

    componentDidMount(){
        InventoryService.getInventoryByID(this.state.inventoryID).then(res =>{
            this.setState({inventory: res.data});
        });
    }


    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className="text-center"> View Inventory Details</h3>
                    <div className ="card-body">
                        <div className="row">
                            <label>Product ID: </label>
                            <div>{this.state.inventory.productID}</div>
                        </div> 
                        <br></br>
                        <br></br>
                        <div className="row">
                            <label>Product Name: </label>
                            <div>{this.state.inventory.productName}</div>
                        </div>
                        <br></br>
                        <br></br>
                        <div className="row">
                            <label>Quantity: </label>
                            <div>{this.state.inventory.quantity}</div>
                        </div>
                        <br></br>
                        <br></br>
                        <div className="row">
                            <label>Re-Order Level: </label>
                            <div>{this.state.inventory.reOrder}</div>
                        </div>
                        <br></br>
                        <br></br>
                        <div className="row">
                            <label>Cost Price: </label>
                            <div>{this.state.inventory.costPrice}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewInventoryComponent;