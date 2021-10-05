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
                                <th style={tableStyle}>User Name</th>
                                <th style={tableStyle}>Address</th>
                                <th style={tableStyle}>Email Address</th>
                                <th style={tableStyle}>Contact</th>
                                <th style={tableStyle}>Date</th>
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
                                            <td style={tableStyle}>{BuyerOrders.address}</td>
                                            <td style={tableStyle}>{BuyerOrders.email}</td>
                                            <td style={tableStyle}>{BuyerOrders.contact}</td>
                                            <td style={tableStyle}>{BuyerOrders.date}</td>                                          
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