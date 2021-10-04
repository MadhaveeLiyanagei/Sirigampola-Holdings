import React, { Component } from "react";
import InventoryService from "../services/InventoryService";
import Pdf from "react-to-pdf";

const ref = React.createRef();

class InventoryReport extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inventory: [],
    };
  }

  componentDidMount() {
    InventoryService.getInventory().then((res) => {
      this.setState({ inventory: res.data });
    });
  }

  render() {
    return (
      <>
<div className="react-pdf__Page__canvas_Single_View3">
        <div className="Post" ref={ref}>
          <div style={{ marginLeft: 20 }}><br></br><br></br>
            <h2 style={{ marginLeft: 300 }}><u>Inventory Report</u></h2><br></br>
            <br></br>
            <div className="row">
              <table className="table table-striped table bordered">
                <thead>
                  <tr>
                    <th><center>Product ID</center></th>
                    <th><center>Product Name</center></th>
                    <th><center>Quantity</center></th>
                    <th><center>Re-Order Level</center></th>
                    <th><center>Cost Price</center></th>
                  </tr>
                </thead>

                <tbody>
                  {this.state.inventory.map((inventory) => (
                    <tr key={inventory.inventoryID}>
                      <td><center>{inventory.productID}</center></td>
                      <td><center>{inventory.productName}</center></td>
                      <td><center>{inventory.quantity}</center></td>
                      <td><center>{inventory.reOrder}</center></td>
                      <td><center>{inventory.costPrice}</center></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Pdf targetRef={ref} filename="InventoryReport.pdf">
          {({ toPdf }) => (
            <button className="button-report2" onClick={toPdf}>
              {" "}
              Generate Report
            </button>
          )}
        </Pdf>
        </div>
      </>
    );
  }
}

export default InventoryReport;
