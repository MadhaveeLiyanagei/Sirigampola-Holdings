import React, { Component } from 'react';
import InventoryService from '../services/InventoryService';

class ListInventoryComponent extends Component {

    constructor(props){
        super(props)

        this.state = {

            inventory: []
        }

        this.addInventory = this.addInventory.bind(this);

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
                          <th>Inventory ID</th>
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
                                      <td>{inventory.inventoryID}</td>
                                      <td>{inventory.productID}</td>
                                      <td>{inventory.productName}</td>
                                      <td>{inventory.quantity}</td>
                                      <td>{inventory.reOrder}</td>
                                      <td>{inventory.costPrice}</td>
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