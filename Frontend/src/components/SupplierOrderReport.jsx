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

        this.goBack = this.goBack.bind(this);
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
            <div className = "row" style={{marginTop:"100px" }}></div>
            <div>
            <div className="Post" ref={ref}>

            <div className="container">
                <div className = "row" style={{width: "100px"}}>
                    <button className="btn btn-success"  onClick={() => this.goBack()}> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"/>
                    </svg> BACK </button>
                    
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
                    <Pdf targetRef={ref} filename="SupplierOrder.pdf">
                        {({ toPdf }) => <button  className="btn btn-dark" onClick={toPdf} > Generate Report</button>}
                    </Pdf>
                </div>


                <div className = "row" style={{marginBottom:"200px" }}></div>
                </>
        );
        
    }
}

export default SupplierOrderReport;