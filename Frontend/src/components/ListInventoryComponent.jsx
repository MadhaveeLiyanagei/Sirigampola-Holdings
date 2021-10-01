import React, { Component } from 'react';
import InventoryService from '../services/InventoryService';
import SoloAlert from 'soloalert'

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

        SoloAlert.confirm({

            title: "Confirm Delete",
            body: "Are you sure",
            theme: "dark",
            useTransparency: true,
            onOk: async function () {

                try {
                    InventoryService.deleteInventory(inventoryID)
                   await this.setState({
                        inventory: this.state.inventory.filter(inventory => inventory.inventoryID !== inventoryID)
                    });


                    SoloAlert.alert({
                        title: "Welcome!",
                        body: "Deletion successful",
                        icon: "success",
                        theme: "dark",
                        useTransparency: true,
                        onOk: function () {
                            window.location = "/inventory"
                        },

                    });

                } catch (err) {
                    SoloAlert.alert({
                        title: "Welcome!",
                        body: "Deletion successful",
                        icon: "success",
                        theme: "dark",
                        useTransparency: true,
                        onOk: function () {
                            window.location = "/inventory"
                        },

                    });
                }
            },
            onCancel: function () {
                SoloAlert.alert({
                    title: "Oops!",
                    body: "You canceled delete request",
                    icon: "warning",
                    theme: "dark",
                    useTransparency: true,
                    onOk: function () {

                    },

                });
            },

        })

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
                    <button className = "button" onClick={this.addInventory}>Add Inventory</button>
                </div>
                    <br></br>
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
                                          <button onClick = { () => this.editInventory(inventory.inventoryID)} className= "button-up">Update</button>
                                      </td>
                                      <td>
                                          <button onClick = { () => this.deleteInventory(inventory.inventoryID)} className= "button-dele">Delete</button>
                                      </td>
                                      <td>
                                          <button onClick = { () => this.viewInventory(inventory.inventoryID)} className= "button-view">View</button>
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