import React, { Component } from 'react';
import InventoryService from '../services/InventoryService';
import Pdf from 'react-to-pdf'

const ref = React.createRef();

class InventoryReport extends Component {


    constructor(props) {
        super(props)

        this.state = {
            inventory: []
        }

    }

    componentDidMount() {
        InventoryService.getInventory().then((res) => {
            this.setState({ inventory: res.data });
        }
        );
    }



    render() {


        return (
            <>
                <div className="Post" ref={ref}>

                    <div style={{ marginLeft: 20 }}>
                        <h2 style={{ marginLeft: 300 }}>Inventory</h2>

                        <br></br>
                        <div className="row">
                            <table className="table table-striped table bordered">

                                <thead>
                                    <tr>
                                        <th>Product ID</th>
                                        <th>Product Name</th>
                                        <th>Quantity</th>
                                        <th>Re-Order Level</th>
                                        <th>Cost Price</th>

                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        this.state.inventory.map(
                                            inventory =>
                                                <tr key={inventory.inventoryID}>
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

                </div>
                < Pdf targetRef={ref} filename="InventoryListReport.pdf">
                    {({ toPdf }) => <button className="button-report" onClick={toPdf}> Generate</button>}
                </Pdf>
            </>

        );
    }

}

export default InventoryReport;
