import React, { Component } from "react";
import ProductService from "../services/ProductService";
import SoloAlert from "soloalert";
import AdminNavbar from "./AdminNavbar";

class ListProductComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: [],
      searchId: "",
    };

    this.addProduct = this.addProduct.bind(this);
    this.editProduct = this.editProduct.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
    this.generateReport = this.generateReport.bind(this);
  }

  componentDidMount() {
    ProductService.getProduct().then((res) => {
      this.setState({ product: res.data });
    });
  }

  viewProduct(productID) {
    this.props.history.push(`/view-product/${productID}`);
  }

  editProduct(productID) {
    this.props.history.push(`/update-product/${productID}`);
  }

  deleteProduct(productID) {
    SoloAlert.confirm({
      title: "Confirm Delete",
      body: "Are you sure",
      theme: "dark",
      useTransparency: true,
      onOk: async function () {
        try {
          ProductService.deleteProduct(productID);
          await this.setState({
            product: this.state.product.filter(
              (product) => product.productID !== productID
            ),
          });

          SoloAlert.alert({
            title: "Welcome!",
            body: "Deletion is successful",
            icon: "success",
            theme: "dark",
            useTransparency: true,
            onOk: function () {
              window.location = "/product";
            },
          });
        } catch (err) {
          SoloAlert.alert({
            title: "Welcome!",
            body: "Deletion is successful",
            icon: "success",
            theme: "dark",
            useTransparency: true,
            onOk: function () {
              window.location = "/product";
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

  generateReport() {
    this.props.history.push("/productreport");
  }

  addProduct() {
    this.props.history.push("/add-product");
  }

  searchProductbyName(event) {
    this.setState({ searchId: event.target.value.substr(0, 20) });
  }

  render() {
    let filterProductName = this.state.product.filter((product) => {
      return (
        product.productName
          .toLowerCase()
          .indexOf(this.state.searchId.toLowerCase()) !== -1
      );
    });

    var tableStyle = {
      border: "0.5px solid black",
    };

    return (
      <div>
         <>
            <AdminNavbar />
          </>
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
                    onChange={this.searchProductbyName.bind(this)}
                  />
                </div>
              </th>
            </tbody>
          </table>
        </div>

        <h2 className="text-center">
          <u>Products</u>
        </h2>
        <table className="invntry_tbl_header">
          <tbody>
            <th>
              <div>
                <button
                  className="btn_double_add_component"
                  onClick={this.addProduct}
                >
                  <b> Add Product</b>
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
          </tbody>
          <br></br>
          <br></br>
        </table>

        <div className="row">
          <center>
            <table className="tabletxtclr" style={tableStyle}>
              <thead>
                <tr style={tableStyle}>
                  <th>
                    <center>
                      <h5>Product Name</h5>
                    </center>
                  </th>
                  <th>
                    <center>
                      <h5>Product Details</h5>
                    </center>
                  </th>
                  <th>
                    <center>
                      <h5>Selling Price</h5>
                    </center>
                  </th>
                  <th>
                    <center>
                      <h5>Product Image</h5>
                    </center>
                  </th>
                  <th>
                    <center>
                      <h5>Update</h5>
                    </center>
                  </th>
                  <th>
                    <center>
                      <h5>Delete</h5>
                    </center>
                  </th>
                  <th>
                    <center>
                      <h5>View</h5>
                    </center>
                  </th>
                </tr>
              </thead>

              <tbody>
                {filterProductName.map((product) => (
                  //this.state.product.map(
                  //product =>
                  <tr key={product.productID}>
                    <td style={tableStyle}>
                      <center>{product.productName}</center>
                    </td>
                    <td style={tableStyle}>
                      <center>{product.productDetails}</center>
                    </td>
                    <td style={tableStyle}>
                      <center>{product.productPrice}</center>
                    </td>
                    <td style={tableStyle}>
                      <center>{product.productImage}</center>
                    </td>
                    <td>
                      <center>
                        <button
                          onClick={() => this.editProduct(product.productID)}
                          className="button-up"
                        >
                          <b>Update</b>
                        </button>
                      </center>
                    </td>
                    <td>
                      <center>
                        <button
                          onClick={() => this.deleteProduct(product.productID)}
                          className="button-dele"
                        >
                          <b>Delete</b>
                        </button>
                      </center>
                    </td>
                    <td>
                      <center>
                        <button
                          onClick={() => this.viewProduct(product.productID)}
                          className="button-view"
                        >
                          <b>View</b>
                        </button>
                      </center>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <br></br>
          </center>
        </div>
      </div>
    );
  }
}

export default ListProductComponent;
