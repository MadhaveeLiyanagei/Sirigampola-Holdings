import React, { Component } from 'react';
import InventoryService from '../services/InventoryService';

class ListInventoryComponent extends Component {

    constructor(props){
        super(props)

        this.state = {

            inventory: []
        }

        this.addInventory = this.addInventory.bind(this);
        this.editInventory = this.editInventory.bind(this);
        this.deleteInventory = this.deleteInventory.bind(this);
    }

    viewInventory(inventoryID){
      this.props.history.push(`/view-inventory/${inventoryID}`);
    }

    editInventory(inventoryID){
        this.props.history.push(`/update-inventory/${inventoryID}`);
    }

    deleteInventory(inventoryID){
        //rest api
        InventoryService.deleteInventory(inventoryID).then(res =>{
            this.setState({inventory: this.state.inventory.filter(inventory => inventory.inventoryID !== inventoryID)});
        });
    }

    componentDidMount(){
       InventoryService.getInventory().then((res) => {
             this.setState({ inventory : res.data});
        }
       );
    }

    addInventory(){
        this.props.history.push('/add-inventory');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Inventory</h2>
                <div className = "row">
                    <button className = "btn btn-primary" onClick={this.addInventory}>Add Inventory</button>
                </div>
                 <div className = "row">
                   <table className="table table-striped table bordered">

                      <thead>
                        <tr>
                          <th>Product ID</th>
                          <th>Product Name</th>
                          <th>Quantity</th>
                          <th>Re-Order Level</th>
                          <th>Cost Price</th>
                          <th></th>
                          <th></th>
                        </tr>
                      </thead>

                      <tbody>
                          {
                              this.state.inventory.map(
                                  inventory =>
                                  <tr key = {inventory.inventoryID}>
                                      <td>{inventory.productID}</td>
                                      <td>{inventory.productName}</td>
                                      <td>{inventory.quantity}</td>
                                      <td>{inventory.reOrder}</td>
                                      <td>{inventory.costPrice}</td>
                                      <td>
                                          <button onClick = { () => this.editInventory(inventory.inventoryID)} className= "btn btn-info">Update</button>
                                      </td>
                                      <td>
                                          <button onClick = { () => this.deleteInventory(inventory.inventoryID)} className= "btn btn-danger">Delete</button>
                                      </td>
                                      <td>
                                          <button onClick = { () => this.viewInventory(inventory.inventoryID)} className= "btn btn-info">View</button>
                                      </td>
                                      
                                     
                                  </tr>
                              )
                          }
                      </tbody>

                    </table>
                 </div>


            </div>
        );
    }
}

export default ListInventoryComponent;