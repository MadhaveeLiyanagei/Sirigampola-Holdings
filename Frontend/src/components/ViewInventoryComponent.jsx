import React, { Component } from 'react';
import InventoryService from '../services/InventoryService';


/*View all the details of a single record*/

class ViewInventoryComponent extends Component {

    constructor(props){
        super(props)

            this.state = {
                inventoryID: this.props.match.params.inventoryID,
                
                inventory: []
            }

            this.addRequestOrder = this.addRequestOrder.bind(this);
        
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
                            <label><b>Product ID:</b> </label>
                            <div>{this.state.inventory.productID}</div>
                        </div> 
                        <br></br>
                        <br></br>
                        <div className="row">
                            <label><b>Product Name: </b></label>
                            <div>{this.state.inventory.productName}</div>
                        </div>
                        <br></br>
                        <br></br>
                        <div className="row">
                            <label><b>Quantity: </b></label>
                            <div>{this.state.inventory.quantity}</div>
                        </div>
                        <br></br>
                        <br></br>
                        <div className="row">
                            <label><b>Re-Order Level: </b></label>
                            <div>{this.state.inventory.reOrder}</div>
                        </div>
                        <br></br>
                        <br></br>
                        <div className="row">
                            <label><b>Cost Price:</b></label>
                            <div>{this.state.inventory.costPrice}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default ViewInventoryComponent;