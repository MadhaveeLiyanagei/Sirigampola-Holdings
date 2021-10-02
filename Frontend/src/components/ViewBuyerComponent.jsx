import React, { Component } from 'react';
import BuyerService from '../services/BuyerService';

class ViewBuyerComponent extends Component {
        constructor(props){
            super(props)

            this.state = {
                id: this.props.match.params.id,
                buyer: {}

            }
        }
        
        componentDidMount(){
            BuyerService.getBuyerId(this.state.id).then( res => {
                this.setState({buyer: res.data});

            })
        }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center">View Buyer Details</h3>
                    <div className = "card-body">

                        <div className = "row">
                        
                            <label>Buyer Name: {this.state.buyer.name}</label>
                           
                        </div>
                        <div className = "row">
                            <label>Buyer Email: {this.state.buyer.email}</label>
                       
                      </div>
                      <div className = "row">
                            <label>Buyer Phone Number: {this.state.buyer.phone}</label>
                        
                      </div>
                      <div className = "row">
                            <label>Buyer User Name: {this.state.buyer.userName}</label>
                        
                      </div>
                      <div className = "row">
                            <label>Buyer Password: {this.state.buyer.password}</label>
                        
                      </div>
                      <div className = "row">
                            <label>Buyer Address: {this.state.buyer.address}</label>
                        
                      </div>
                     </div>
                </div>
            </div>
        );
    }
}

export default ViewBuyerComponent;