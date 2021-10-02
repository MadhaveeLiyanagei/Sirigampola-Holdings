import React, { Component } from "react";
import ProductService from "../services/ProductService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

class UpdateProductComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productID: this.props.match.params.productID,
      productName: "",
      productDetails: "",
      productImage: "",
      productPrice: "",

      productNameError: "",
      productDetailsError: "",
      productPriceError: "",
    };

    this.changeProductNameHandler = this.changeProductNameHandler.bind(this);
    this.changeProductDetailsHandler =
      this.changeProductDetailsHandler.bind(this);
    this.changeProductImageHandler = this.changeProductImageHandler.bind(this);
    this.changeProductPriceHandler = this.changeProductPriceHandler.bind(this);
    this.updateProduct = this.updateProduct.bind(this);
  }

  componentDidMount() {
    ProductService.getProductByID(this.state.productID).then((res) => {
      let product = res.data;
      this.setState({
        productName: product.productName,
        productDetails: product.productDetails,
        productImage: product.productImage,
        productPrice: product.productPrice,
      });
    });
  }

  notify() {
    toast.success("Product updated successfully!", {
      position: toast.POSITION.TOP_CENTER,
    });
  }

  notify1() {
    toast.error("Product did not update!", {
      position: toast.POSITION.TOP_CENTER,
    });
  }

  validate = () => {
    let productNameError = "";
    let productDetailsError = "";

    let productPriceError = "";

    if (!this.state.productName) {
      productNameError = "Product Name is required";
    }
    if (!this.state.productDetails) {
      productDetailsError = "Product Details are required";
    }

    if (!this.state.productPrice) {
      productPriceError = "Price of the product level is required";
    }
    if (productNameError || productDetailsError || productPriceError) {
      this.setState({
        productNameError,
        productDetailsError,
        productPriceError,
      });
      return false;
    }

    return true;
  };

  updateProduct = (e) => {
    e.preventDefault();

    let product = {
      productName: this.state.productName,
      productDetails: this.state.productDetails,
      productImage: this.state.productImage,
      productPrice: this.state.productPrice,
    };
    const isValid = this.validate();
    if (isValid) {
      console.log("product => " + JSON.stringify(product));

      ProductService.updateProduct(product, this.state.productID).then(
        (res) => {
          this.notify();
          this.props.history.push("/product");
        }
      );
    }
  };

  changeProductNameHandler = (event) => {
    this.setState({ productName: event.target.value });
  };

  changeProductDetailsHandler = (event) => {
    this.setState({ productDetails: event.target.value });
  };

  changeProductImageHandler = (event) => {
    this.setState({ productImage: event.target.value });
  };

  changeProductPriceHandler = (event) => {
    this.setState({ productPrice: event.target.value });
  };

  cancel() {
    this.notify1();
    this.props.history.push("/product");
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center"><u>Update Product</u></h3>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label><b>Product Name:</b> </label>
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
                    <label><b>Product Details : </b></label>
                    <input
                      placeholder="Product Details"
                      name="productDetails"
                      className="form-control"
                      value={this.state.productDetails}
                      onChange={this.changeProductDetailsHandler}
                    /><br></br>
                    <div style={{ fontSize: 12, color: "red" }}>
                      {this.state.productDetailsError}{" "}
                    </div>
                  </div>

                  <div className="form-group">
                    <label><b>Product Image: </b></label>
                    <input
                      placeholder="Image"
                      name="productImage"
                      className="form-control"
                      value={this.state.productImage}
                      onChange={this.changeProductImageHandler}
                    /><br></br>
                  </div>

                  <div className="form-group">
                    <label><b>Price:</b> </label>
                    <input
                      placeholder="Price"
                      name="productPrice"
                      className="form-control"
                      value={this.state.productPrice}
                      onChange={this.changeProductPriceHandler}
                    /><br></br>
                    <div style={{ fontSize: 12, color: "red" }}>
                      {this.state.productPriceError}{" "}
                    </div>
                  </div><br></br>
                  <table className="invntry_tbl_header">
                    <tbody>
                      <th>
                        <center>
                          <button
                            className="btn_blue"
                            onClick={this.updateProduct}
                            >
                            Update
                          </button>
                        </center>
                      </th>
                      <th>
                        <center>
                          <button
                            className="btn_red"
                            onClick={this.cancel.bind(this)}
                            >
                            Cancel
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

export default UpdateProductComponent;
