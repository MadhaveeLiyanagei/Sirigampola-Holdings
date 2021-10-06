import React, { Component } from "react";
import ProductService from "../services/ProductService";
import Pdf from "react-to-pdf";
import AdminNavbar from "./AdminNavbar";

const ref = React.createRef();

class ListProductComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: [],
    };
  }

  componentDidMount() {
    ProductService.getProduct().then((res) => {
      this.setState({ product: res.data });
    });
  }

  render() {
    return (
      <>
       <>
            <AdminNavbar />
          </>
        <div className="Post" ref={ref}>
          <div><br></br>
            <h2 className="text-center"><b><u>Products</u></b></h2>
            <br></br>
            <div className="row">
              <table className="table table-striped table bordered">
                <thead>
                  <tr>
                    <th>Product Name</th>
                    <th>Product Details</th>
                    <th>Selling Price</th>
                    <th>Product Image</th>
                  </tr>
                </thead>

                <tbody>
                  {this.state.product.map((product) => (
                    <tr key={product.productID}>
                      <td>{product.productName}</td>
                      <td>{product.productDetails}</td>
                      <td>{product.productPrice}</td>
                      <td>{product.productImage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Pdf targetRef={ref} filename="ProductsListReport.pdf">
          {({ toPdf }) => (
            <button className="button-report" onClick={toPdf}>
              {" "}
             <b> Generate Report</b>
            </button>
          )}
        </Pdf>
      </>
    );
  }
}

export default ListProductComponent;
