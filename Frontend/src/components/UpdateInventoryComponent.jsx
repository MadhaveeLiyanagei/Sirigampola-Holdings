import React, { Component } from 'react';
import InventoryService from '../services/InventoryService';

class UpdateInventoryComponent extends Component {

    constructor(props){
        super(props)

        this.state = {

            inventoryID: this.props.match.params.inventoryID,

            productID: '',
            productName: '',
            quantity: '',
            reOrder: '',
            costPrice: '',

        }

        this.changeProductIDHandler = this.changeProductIDHandler.bind(this);
        this.changeProductNameHandler = this.changeProductNameHandler.bind(this);
        this.changeQuantityHandler = this.changeQuantityHandler.bind(this);
        this.changeReOrderHandler = this.changeReOrderHandler.bind(this);
        this.changeCostPriceHandler = this.changeCostPriceHandler.bind(this);
        this.updateInventory = this.updateInventory.bind(this);
    }

    componentDidMount(){
       InventoryService.getInventoryByID(this.state.inventoryID).then((res) =>{

        let inventory = res.data;
        this.setState({ productID: inventory.productID,
            productName: inventory.productName,
            quantity: inventory.quantity,
            reOrder: inventory.reOrder,
            costPrice: inventory.costPrice

        });
       });

    }

    updateInventory = (e)=>{
        e.preventDefault();

        let inventory = {productID: this.state.productID, productName: this.state.productName, quantity: this.state.quantity, reOrder: this.state.reOrder, costPrice: this.state.costPrice};
        console.log('inventory => ' + JSON.stringify(inventory));

        InventoryService.updateInventory(inventory, this.state.inventoryID).then(res => {
               this.props.history.push('/inventory');
        });
    }

    changeProductIDHandler = (event) =>{
       this.setState({productID: event.target.value});
    }
    
    changeProductNameHandler = (event) =>{
        this.setState({productName: event.target.value});
     }

     changeQuantityHandler = (event) =>{
        this.setState({quantity: event.target.value});
     }

     changeReOrderHandler = (event) =>{
        this.setState({reOrder: event.target.value});
     }

     changeCostPriceHandler = (event) =>{
        this.setState({costPrice: event.target.value});
     }

     cancel(){
        this.props.history.push('/inventory');
     }

    render() {
        return (
            <div>
                <div className = "container">
                    <div className="row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                             <h3 className="text-center">Update Inventory</h3>
                               <div className = "card-body">
                                   <form>
                                        <div className="form-group">
                                            <label>Product ID: </label>
                                            <input placeholder="Product ID" name="productID" className="form-control" value={this.state.productID} onChange={this.changeProductIDHandler}/>
                                        </div>

                                        <div className="form-group">
                                            <label>Product Name: </label>
                                            <input placeholder="Product Name" name="productName" className="form-control" value={this.state.productName} onChange={this.changeProductNameHandler}/>
                                        </div>

                                        <div className="form-group">
                                            <label>Quantity: </label>
                                            <input placeholder="Quantity" name="quantity" className="form-control" value={this.state.quantity} onChange={this.changeQuantityHandler}/>
                                        </div>

                                        <div className="form-group">
                                            <label>Re-Order Level: </label>
                                            <input placeholder="Re-Order Level" name="reOrder" className="form-control" value={this.state.reOrder} onChange={this.changeReOrderHandler}/>
                                        </div>

                                        <div className="form-group">
                                            <label>Cost Price: </label>
                                            <input placeholder="Cost Price" name="costPrice" className="form-control" value={this.state.costPrice} onChange={this.changeCostPriceHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateInventory}>Update</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                     </form>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UpdateInventoryComponent;