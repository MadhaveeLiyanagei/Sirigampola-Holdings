import React, { Component } from 'react';
import CreateOrderService from '../services/CreateOrderService';
import Pdf from 'react-to-pdf'
const ref = React.createRef();

class SupplierOrderReport extends Component {

    constructor(props){
        super(props)

        this.state = {
            createorder: [],
            searchId:''
        }
    }

    goBack()
    {
        this.props.history.push('/createorder');
    }

    componentDidMount()
    {
        CreateOrderService.getOrders().then((res) => {

            this.setState({ createorder: res.data});
        });
    }

    render() {

        return (
            <>
            <div>
            <div className="Post" ref={ref}>

            <div className="container">
                <div className = "row" style={{width: "100px"}}>
                    <button className="btn btn-primary" onClick={this.goBack}> BACK </button>
                    <i class="bi bi-arrow-return-left"></i>
                </div>
            </div>

            <div>
                <br/>
                <h2 className="text-center">MONTHLY REPORT</h2>

                <br/>
                <div className = "row">
                    <table className = "table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th style={{ textAlign: "center" }}> Order NO </th>
                                <th style={{ textAlign: "center" }}> Product Name </th>
                                <th style={{ textAlign: "center" }}> Product Price </th>
                                <th style={{ textAlign: "center" }}> Quantity </th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                //filterProductname.map(
                                    //order =>
                                this.state.createorder.map(
                                    order =>
                                    <tr key = {order.id}>
                                        <td>{order.orderno}</td>
                                        <td>{order.productName}</td>
                                        <td>{order.productPrice}</td>
                                        <td>{order.quantity}</td>
                                    </tr>

                                )
                            }



                        </tbody>

                    </table>
                </div>
            </div>

            </div>

                </div>

                <div className = "row" style={{marginTop: "10px" }}>
                    <Pdf targetRef={ref} filename="BuyerOrder.pdf">
                        {({ toPdf }) => <button  className="btn btn-dark" onClick={toPdf} > Generate Report</button>}
                    </Pdf>
                </div>

                </>
        );
        
    }
}

export default SupplierOrderReport;