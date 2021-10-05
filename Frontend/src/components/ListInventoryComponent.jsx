import React, { Component } from "react";
import InventoryService from "../services/InventoryService";
import SoloAlert from "soloalert";

class ListInventoryComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inventory: [],
      searchId: "",
    };

    this.addInventory = this.addInventory.bind(this);
    this.editInventory = this.editInventory.bind(this);
    this.deleteInventory = this.deleteInventory.bind(this);
    this.generateReport = this.generateReport.bind(this);
  }

  viewInventory(inventoryID) {
    this.props.history.push(`/view-inventory/${inventoryID}`);
  }

  editInventory(inventoryID) {
    this.props.history.push(`/update-inventory/${inventoryID}`);
  }

  deleteInventory(inventoryID) {
    SoloAlert.confirm({
      title: "Confirm Delete",
      body: "Are you sure",
      theme: "dark",
      useTransparency: true,
      onOk: async function () {
        try {
          InventoryService.deleteInventory(inventoryID);
          await this.setState({
            inventory: this.state.inventory.filter(
              (inventory) => inventory.inventoryID !== inventoryID
            ),
          });

          SoloAlert.alert({
            title: "Welcome!",
            body: "Deletion successful",
            icon: "success",
            theme: "dark",
            useTransparency: true,
            onOk: function () {
              window.location = "/inventory";
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
              window.location = "/inventory";
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
          onOk: function () {},
        });
      },
    });
  }

  componentDidMount() {
    InventoryService.getInventory().then((res) => {
      this.setState({ inventory: res.data });
    });
  }

  addInventory() {
    this.props.history.push("/add-inventory");
  }
  generateReport() {
    this.props.history.push("/inventoryreport");
  }

  searchInventorybyName(event) {
    this.setState({ searchId: event.target.value.substr(0, 20) });
  }

  render() {
    let filterProductName = this.state.inventory.filter((inventory) => {
      return (
        inventory.productName
          .toLowerCase()
          .indexOf(this.state.searchId.toLowerCase()) !== -1
      );
    });

    var tableStyle = {
      border: "0.5px solid black",
    };


    return (
      <div>
        <div className="row">
          <table className="srchbr">
            <br></br>
            <tbody>
              <th className="tblclm">Search : </th>
              <th>
                <div className="form-group col-md-4">
                  <input
                    type="text"
                    class="form-control"
                    style={{ marginLeft: 0 }}
                    placeholder="Enter Product Name"
                    value={this.state.searchId}
                    onChange={this.searchInventorybyName.bind(this)}
                  />
                </div>
              </th>
            </tbody>
          </table>

          <h2 className="text-center">
            <u>Inventory</u>
          </h2>

          <table className="invntry_tbl_header">
            <tbody>
              <th>
                <div>
                  <button className="btn_double_add_component" onClick={this.addInventory}>
                   <b> Add Inventory</b>
                  </button>
                </div>
              </th>
              <th>
                <div>
                  <button
                    className="btn_double_generate_nav"
                    onClick={this.generateReport}
                  >
                   <b> Generate Report</b>
                  </button>
                </div>
              </th>
            </tbody><br></br><br></br>
          </table>



          <div className="row">
            <center>
            <table className="tabletxtclr">
              <thead>
                <tr style={tableStyle}>
                  <th><center><h5>Product ID</h5></center></th>
                  <th><center><h5>Product Name</h5></center></th>
                  <th><center><h5>Quantity</h5></center></th>
                  <th><center><h5>Re-Order Level</h5></center></th>
                  <th><center><h5>Cost Price</h5></center></th>
                  <th><center><h5>Update</h5></center></th>
                  <th><center><h5>Delete</h5></center></th>
                  <th><center><h5>View</h5></center></th>
                </tr>
              </thead>

              <tbody>
                {filterProductName.map((inventory) => (
                  //this.state.inventory.map(
                  //inventory =>
                  <tr style={tableStyle} key={inventory.inventoryID}>
                    <td style={tableStyle}><center>{inventory.productID}</center></td>
                    <td style={tableStyle}><center>{inventory.productName}</center></td>
                    <td style={tableStyle}><center>{inventory.quantity}</center></td>
                    <td style={tableStyle}><center>{inventory.reOrder}</center></td>
                    <td style={tableStyle}><center>{inventory.costPrice}</center></td>
                    <td><center>
                      <button
                        onClick={() =>
                          this.editInventory(inventory.inventoryID)
                        }
                        className="button-up"
                      >
                        <b>Update</b>
                      </button></center>
                    </td>
                    <td><center>
                      <button
                        onClick={() =>
                          this.deleteInventory(inventory.inventoryID)
                        }
                        className="button-dele"
                      >
                        <b>Delete</b>
                      </button></center>
                    </td>
                    <td><center>
                      <button
                        onClick={() =>
                          this.viewInventory(inventory.inventoryID)
                        }
                        className="button-view"
                      >
                       <b> View</b>
                      </button></center>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <br></br>
            </center>
          </div>
        </div>
      </div>
    );
  }
}

export default ListInventoryComponent;