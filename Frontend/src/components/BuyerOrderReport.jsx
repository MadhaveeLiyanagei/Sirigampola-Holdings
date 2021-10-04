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
        var tableStyle = {

            border: "0.5px solid black",
      
          };
        return (
            <>
            <div className="rGenerate">
            <div className="Post" ref={ref}>
           
            <div className>
                <div className="container">
                    
                <h2 className="text-center">Monthly Orders Report</h2>        
                <br></br>
                <div className="row">
                <center>
                    <table className="report">
                        <thead>
                            <tr style={tableStyle}>
                                <th style={tableStyle}><center>User Name</center></th>
                                <th style={tableStyle}><center>Address</center></th>
                                <th style={tableStyle}><center>Email Address</center></th>
                                <th style={tableStyle}><center>Contact</center></th>
                                <th style={tableStyle}><center>Date</center></th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                //filterUsername.map(
                                 //   BuyerOrders=>
                                this.state.BuyerOrders.map(
                                    BuyerOrders =>
                                        <tr key={BuyerOrders.id}>
                                            <td style={tableStyle}>{BuyerOrders.username}</td>
                                            <td style={tableStyle}><center>{BuyerOrders.address}</center></td>
                                            <td style={tableStyle}><center>{BuyerOrders.email}</center></td>
                                            <td style={tableStyle}><center>{BuyerOrders.contact}</center></td>
                                            <td style={tableStyle}><center>{BuyerOrders.date}</center></td>                                          
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