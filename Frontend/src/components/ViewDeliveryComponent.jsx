import React, { Component } from 'react'
import DeliveryService from '../services/DeliveryService'
import Pdf from 'react-to-pdf'

const ref = React.createRef();


class ViewDeliveryComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            delivery: []
        }
    }

    componentDidMount(){
        DeliveryService.getDeliveryById(this.state.id).then( res => {
            this.setState({delivery: res.data});
        })
    }

    render() {


        return (
            <>
            <div className="react-pdf__Page__canvas_d">
                <div className="Post" ref={ref}>
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                   <u><h3 className = "text-center"> View Delivery Details</h3></u> 
                    <div className = "card-body">
                        <div className = "row">
                            <label> <b>Delivery Service Name:</b> </label>
                            <div> { this.state.delivery.order_name }</div>
                        </div>
                        <br></br>
                        <div className = "row">
                            <label> <b>Address:</b> </label>
                            <div> { this.state.delivery.order_address}</div>
                        </div>
                        <br></br>
                        <div className = "row">
                            <label><b>Phone Number:</b>  </label>
                            <div> { this.state.delivery.order_phone_number}</div>
                        </div>
                        <br></br>
                        <div className = "row">
                            <label><b>Courier Name:</b>  </label>
                            <div> { this.state.delivery.order_courier_name}</div>
                        </div>
                       
                       
                             
                    </div>
                  </div>
                </div>
            </div>
                </div>
                < Pdf targetRef={ref} filename="DeliveryInformation.pdf">

                    {({ toPdf }) => <button style = {{marginLeft:1000}}className = "button-report" onClick={toPdf}> Generate Report</button>}
                </Pdf>
            </>
        
        )
    }
}

export default ViewDeliveryComponent 
