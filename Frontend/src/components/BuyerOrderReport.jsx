import React, { Component } from 'react';
import BuyerOrdersService from '../services/BuyerOrdersService'
import Pdf from 'react-to-pdf'
const ref = React.createRef();

class BuyerOrderReport extends Component {

    constructor(props) {
        super(props)

        this.state = {
            BuyerOrders: [],
            searchId:''
        }

    }

    componentDidMount() {
        BuyerOrdersService.getBuyerOrders().then((res) => {
            this.setState({ BuyerOrders: res.data });

        });
    }

    render() {
        
        return (
            <>
            <div>
            <div className="Post" ref={ref}>
           
            <div className>
                <div className="container">
                    
                <h2 className="text-center">Buyer Orders</h2>        
                <br></br>
                <div className="row">
                <center>
                    <table style={{width:700}} className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>User Name</th>
                                <th>Address</th>
                                <th>Email Address</th>
                                <th>Contact</th>
                                <th>Date</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                //filterUsername.map(
                                 //   BuyerOrders=>
                                this.state.BuyerOrders.map(
                                    BuyerOrders =>
                                        <tr key={BuyerOrders.id}>
                                            <td>{BuyerOrders.username}</td>
                                            <td>{BuyerOrders.address}</td>
                                            <td>{BuyerOrders.email}</td>
                                            <td>{BuyerOrders.contact}</td>
                                            <td>{BuyerOrders.date}</td>                                          
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                    </center>
                </div>
               
                </div>
            </div>
            </div>
            </div>
                
                <Pdf targetRef={ref} filename="BuyerOrder.pdf">
                    {({ toPdf }) => <button  className ="button-report" onClick={toPdf} > Generate Report</button>}
                </Pdf>

            </>

            
        );
    }
}

export default BuyerOrderReport;