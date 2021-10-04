import React, { Component } from "react";
import InventoryService from "../services/InventoryService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

class UpdateInventoryComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inventoryID: this.props.match.params.inventoryID,

      productID: "",
      productName: "",
      quantity: "",
      reOrder: "",
      costPrice: "",

      productIDError: "",
      productNameError: "",
      quantityError: "",
      reOrderError: "",
      costPriceError: "",
    };

    this.changeProductIDHandler = this.changeProductIDHandler.bind(this);
    this.changeProductNameHandler = this.changeProductNameHandler.bind(this);
    this.changeQuantityHandler = this.changeQuantityHandler.bind(this);
    this.changeReOrderHandler = this.changeReOrderHandler.bind(this);
    this.changeCostPriceHandler = this.changeCostPriceHandler.bind(this);
    this.updateInventory = this.updateInventory.bind(this);
  }

  notify() {
    toast.success("Updated successfully!", {
      position: toast.POSITION.TOP_CENTER,
    });
  }

  notify1() {
    toast.error("updation cancelled", { position: toast.POSITION.TOP_CENTER });
  }

  warning() {
    if (
      this.state.quantity == this.state.reOrder ||
      this.state.quantity < this.state.reOrder
    ) {
      toast.warn("Item is below or equal to the re-order level!", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  }

  validate = () => {
    let productIDError = "";
    let productNameError = "";
    let quantityError = "";
    let reOrderError = "";
    let costPriceError = "";

    if (!this.state.productID) {
      productIDError = "Product ID is required";
    }
    if (!this.state.productName) {
      productNameError = "Product Name is required";
    }
    if (!this.state.quantity) {
      quantityError = "Quantity is required";
    }
    if (!this.state.reOrder) {
      reOrderError = "Re-Order level is required";
    }
    if (!this.state.costPrice) {
      costPriceError = "Cost Price is required";
    }
    if (
      productIDError ||
      productNameError ||
      quantityError ||
      reOrderError ||
      costPriceError
    ) {
      this.setState({
        productIDError,
        productNameError,
        quantityError,
        reOrderError,
        costPriceError,
      });
      return false;
    }

    return true;
  };

  componentDidMount() {
    InventoryService.getInventoryByID(this.state.inventoryID).then((res) => {
      let inventory = res.data;
      this.setState({
        productID: inventory.productID,
        productName: inventory.productName,
        quantity: inventory.quantity,
        reOrder: inventory.reOrder,
        costPrice: inventory.costPrice,
      });
    });
  }

  updateInventory = (e) => {
    e.preventDefault();

    let inventory = {
      productID: this.state.productID,
      productName: this.state.productName,
      quantity: this.state.quantity,
      reOrder: this.state.reOrder,
      costPrice: this.state.costPrice,
    };
    const isValid = this.validate();
    if (isValid) {
      console.log("inventory => " + JSON.stringify(inventory));

      InventoryService.updateInventory(inventory, this.state.inventoryID).then(
        (res) => {
          this.notify();
          this.warning();
          this.props.history.push("/inventory");
        }
      );
    }
  };

  changeProductIDHandler = (event) => {
    this.setState({ productID: event.target.value });
  };

  changeProductNameHandler = (event) => {
    this.setState({ productName: event.target.value });
  };

  changeQuantityHandler = (event) => {
    this.setState({ quantity: event.target.value });
  };

  changeReOrderHandler = (event) => {
    this.setState({ reOrder: event.target.value });
  };

  changeCostPriceHandler = (event) => {
    this.setState({ costPrice: event.target.value });
  };

  cancel() {
    this.notify1();
    this.props.history.push("/inventory");
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
            <br></br><br></br>
              <h3 className="text-center"><u>Update Inventory</u></h3>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label><b>Product ID: </b></label>
                    <input
                      placeholder="Product ID"
                      name="productID"
                      className="form-control"
                      value={this.state.productID}
                      onChange={this.changeProductIDHandler}
                    /><br></br>
                    <div style={{ fontSize: 12, color: "red" }}>
                      {this.state.productIDError}{" "}
                    </div>
                  </div>

                  <div className="form-group">
                    <label><b>Product Name: </b></label>
                    <input
                      placeholder="Product Name"
                      name="productName"
                      className="form-control"
                      value={this.state.productName}
                      onChange={this.changeProductNameHandler}
                    /><br></br>
                    <div style={{ fontSize: 12, color: "red" }}>
                      {this.state.productNameError}{" "}
                    </div>
                  </div>

                  <div className="form-group">
                    <label><b>Quantity:</b> </label>
                    <input
                      placeholder="Quantity"
                      name="quantity"
                      className="form-control"
                      value={this.state.quantity}
                      onChange={this.changeQuantityHandler}
                    /><br></br>
                    <div style={{ fontSize: 12, color: "red" }}>
                      {this.state.quantityError}{" "}
                    </div>
                  </div>

                  <div className="form-group">
                    <label><b>Re-Order Level:</b> </label>
                    <input
                      placeholder="Re-Order Level"
                      name="reOrder"
                      className="form-control"
                      value={this.state.reOrder}
                      onChange={this.changeReOrderHandler}
                    /><br></br>
                    <div style={{ fontSize: 12, color: "red" }}>
                      {this.state.reOrderError}{" "}
                    </div>
                  </div>

                  <div className="form-group">
                    <label><b>Cost Price: </b></label>
                    <input
                      placeholder="Cost Price"
                      name="costPrice"
                      className="form-control"
                      value={this.state.costPrice}
                      onChange={this.changeCostPriceHandler}
                    /><br></br>
                    <div style={{ fontSize: 12, color: "red" }}>
                      {this.state.costPriceError}{" "}
                    </div>
                  </div><br></br>
                  <table className="invntry_tbl_header">
                    <tbody>
                      <th>
                        <center>
                          <button
                            className="btn_update_update"
                            onClick={this.updateInventory}
                          >
                            <b>Update</b>
                          </button>
                        </center>
                      </th>
                      <th>
                        <center>
                          <button
                            className="btn_cancel_cancel"
                            onClick={this.cancel.bind(this)}
                          >
                            <b>Cancel</b>
                          </button>
                        </center>
                      </th>
                    </tbody>
                  </table>
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