import React, { Component } from 'react';
import BuyerService from '../services/BuyerService';
import AdminNavbar from './AdminNavbar';

import './HeaderUser.css';

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
                <AdminNavbar/>
                <div class="topnav" >
                     <a class="active" href="http://localhost:3000/profile">Buyer</a>
                     <a class="active" href="http://localhost:3000/Employee">Employee</a>
                     <a class="active" href="http://localhost:3000/Supplier">Supplier</a>
  
                    
        </div>
                <br></br>
                <div className = "card col-md-6 offset-md-3"  style ={{height:550}}>
                <br></br>
                    <h3 className = "text-center">View Buyer Details</h3>
                    <div className = "card-body">

                    <br></br>
                    <br></br>
                    <br></br>
                        <div className = "row">
                        
                            <label>Buyer Name:{this.state.buyer.name}</label>
                           
                        </div>
                        <br></br>
                        <div className = "row">
                            <label>Buyer Email:{this.state.buyer.email}</label>
                       
                      </div>
                      <br></br>
                      <div className = "row">
                            <label>Buyer Phone Number:{this.state.buyer.phone}</label>
                        
                      </div>
                      <br></br>
                      <div className = "row">
                            <label>Buyer User Name:{this.state.buyer.userName}</label>
                        
                      </div>
                      <br></br>
                      <div className = "row">
                            <label>Buyer Password:{this.state.buyer.password}</label>
                        
                      </div>
                      <br></br>
                      <div className = "row">
                            <label>Buyer Address:{this.state.buyer.address}</label>
                        
                      </div>
                     </div>
                </div>
            </div>
        );
    }
}

export default ViewBuyerComponent;