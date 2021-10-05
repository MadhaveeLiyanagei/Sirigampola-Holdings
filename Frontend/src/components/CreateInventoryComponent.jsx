import React, { Component } from "react";
import InventoryService from "../services/InventoryService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

class CreateInventoryComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
      quantityStringError: ""
    };

    this.changeProductIDHandler = this.changeProductIDHandler.bind(this);
    this.changeProductNameHandler = this.changeProductNameHandler.bind(this);
    this.changeQuantityHandler = this.changeQuantityHandler.bind(this);
    this.changeReOrderHandler = this.changeReOrderHandler.bind(this);
    this.changeCostPriceHandler = this.changeCostPriceHandler.bind(this);
    this.saveInventory = this.saveInventory.bind(this);
  }

  notify() {
    toast.success("Product added to the inventory successfully!", {
      position: toast.POSITION.TOP_CENTER,
    });
  }

  notify1() {
    toast.error("Product was not added to the inventory!", {
      position: toast.POSITION.TOP_CENTER,
    });
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
    let quantityStringError = ""

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
    {/*if (this.state.quantityStringError.includes("abc")){
      quantityStringError = "Quantity should be numeric characters";
    }*/}
    if (
      productIDError ||
      productNameError ||
      quantityError ||
      reOrderError ||
      costPriceError ||
      quantityStringError
    ) {
      this.setState({
        productIDError,
        productNameError,
        quantityError,
        reOrderError,
        costPriceError,
        quantityStringError
      });
      return false;
    }

    return true;
  };

  saveInventory = (e) => {
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

      InventoryService.createInventory(inventory).then((res) => {
        this.notify();
        this.warning();
        this.props.history.push("/inventory");
      });
    }
  };

  changeProductIDHandler = (event) => {
    this.setState({ productID: event.target.value.replace(/\D/g, "" ) });
  };

  changeProductNameHandler = (event) => {
    this.setState({ productName: event.target.value });
  };

  changeQuantityHandler = (event) => {
    this.setState({ quantity: event.target.value.replace(/\D/g, "" ) });
  };

  changeReOrderHandler = (event) => {
    this.setState({ reOrder: event.target.value.replace(/\D/g, "" ) });
  };

  changeCostPriceHandler = (event) => {
    this.setState({ costPrice: event.target.value.replace(/\D/g, "" ) });
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
              <h3 className="text-center"><u>Add Inventory</u></h3>
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
                    />
                    <div style={{ fontSize: 12, color: "red" }}>
                      {this.state.productIDError}{" "}
                    </div>
                    <br></br>
                  </div>

                  <div className="form-group">
                    <label><b>Product Name:</b> </label>
                    <input
                      placeholder="Product Name"
                      name="productName"
                      className="form-control"
                      value={this.state.productName}
                      onChange={this.changeProductNameHandler}
                    />
                    <div style={{ fontSize: 12, color: "red" }}>
                      {this.state.productNameError}{" "}
                    </div>
                    <br></br>
                  </div>

                  <div className="form-group">
                    <label><b>Quantity: </b></label>
                    <input
                      placeholder="Quantity"
                      name="quantity"
                      className="form-control"
                      value={this.state.quantity}
                      onChange={this.changeQuantityHandler}
                    />
                    <div style={{ fontSize: 12, color: "red" }}>
                      {this.state.quantityError}{" "}
                    </div>
                    
                    <br></br>
                  </div>

                  <div className="form-group">
                    <label><b>Re-Order Level:</b> </label>
                    <input
                      placeholder="Re-Order Level"
                      name="reOrder"
                      className="form-control"
                      value={this.state.reOrder}
                      onChange={this.changeReOrderHandler}
                    />
                    <div style={{ fontSize: 12, color: "red" }}>
                      {this.state.reOrderError}{" "}
                    </div>
                    <br></br>
                  </div>

                  <div className="form-group">
                    <label><b>Cost Price: </b></label>
                    <input
                      placeholder="Cost Price"
                      name="costPrice"
                      className="form-control"
                      value={this.state.costPrice}
                      onChange={this.changeCostPriceHandler}
                    />
                    <div style={{ fontSize: 12, color: "red" }}>
                      {this.state.costPriceError}{" "}
                    </div>
                  </div>
                  <br></br>
                  <table className="invntry_tbl_header">
                    <tbody>
                      <th>
                        <center>
                          <button
                            className="btn_save"
                            onClick={this.saveInventory}
                          >
                            <b>Save</b>
                          </button>
                        </center>
                      </th>
                      <th>
                        <center>
                          <button
                            className="btn_cancel_cancel"
                            onClick={this.cancel.bind(this)}
                          >
                           <b> Cancel</b>
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

export default CreateInventoryComponent;
