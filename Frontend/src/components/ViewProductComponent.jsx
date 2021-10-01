import React, { Component } from "react";
import ProductService from "../services/ProductService";
import Pdf from "react-to-pdf";

const ref = React.createRef();

class ViewProductComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productID: this.props.match.params.productID,

      product: [],
    };
  }

  componentDidMount() {
    ProductService.getProductByID(this.state.productID).then((res) => {
      this.setState({ product: res.data });
    });
  }

  render() {
    return (
      <>
        <div className="react-pdf__Page__canvas_Single_ViewI">
          <div className="Post" ref={ref}>
            <div>
              <br></br>
              <div className="card col-md-6 offset-md-3">
                <h3 className="text-center"> View Product Details</h3>
                <div className="card-body">
                  <div className="row">
                    <label>
                      <b>Product Name:</b>{" "}
                    </label>
                    <div>{this.state.product.productName}</div>
                  </div>
                  <br></br>
                  <br></br>
                  <div className="row">
                    <label>
                      <b>Product Details: </b>
                    </label>
                    <div>{this.state.product.productDetails}</div>
                  </div>
                  <br></br>
                  <br></br>
                  <div className="row">
                    <label>
                      <b>Image: </b>
                    </label>
                    <div>{this.state.product.productImage}</div>
                  </div>
                  <br></br>
                  <br></br>
                  <div className="row">
                    <label>
                      <b>Price: </b>
                    </label>
                    <div>{this.state.product.productPrice}</div>
                  </div>
                  <br></br>
                  <br></br>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Pdf targetRef={ref} filename="ProductReport.pdf">
          {({ toPdf }) => <button onClick={toPdf}> Generate Report</button>}
        </Pdf>
      </>
    );
  }
}

export default ViewProductComponent;
