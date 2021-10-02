import React, { Component } from 'react'

import DeliveryService from '../services/DeliveryService';



//Delivery delivery

class UpdateCourierDeliveryComponent extends Component {
    constructor(props) {
        super(props)

           this.state ={

            id: this.props.match.params.id,
            order_name: '',
            order_address: '',
            order_phone_number: '',
            order_courier_name:''


           }
           this.changeAddressHandler = this.changeAddressHandler.bind(this);
           this.changeNameHandler = this.changeNameHandler.bind(this);
           this.changePhoneHandler = this.changePhoneHandler.bind(this);
           this.changeCourierHandler= this.changeCourierHandler.bind(this);
           this.updateDelivery =this.updateDelivery.bind(this);


        }




    componentDidMount(){
        DeliveryService.getDeliveryById(this.state.id).then( (res) =>{
            let delivery  = res.data;
            this.setState({
                order_name: delivery.order_name,
                order_address: delivery.order_address,
                order_phone_number: delivery.order_phone_number,
                order_courier_name: delivery.order_courier_name,


            });
        });

                      }

                      updateDelivery = (e) => {
                        e.preventDefault();
                        let delivery = {order_name: this.state.order_name, order_address: this.state.order_address, order_phone_number: this.state.order_phone_number, order_courier_name: this.state.order_courier_name};
                        console.log('delivery => ' + JSON.stringify(delivery));
                        console.log('id => ' + JSON.stringify(this.state.id));
                        DeliveryService.updateDelivery (delivery, this.state.id).then( res => {
                        this.props.history.push('/delivery');
                        });


       }

        changeNameHandler= (event) => {
            this.setState({order_name: event.target.value})
        }

        changeAddressHandler= (event) => {
            this.setState({ order_address: event.target.value})
        }
        changePhoneHandler= (event) => {
            this.setState({ order_phone_number: event.target.value})
        }
        changeCourierHandler= (event) => {
            this.setState({ order_courier_name: event.target.value})
        }


        cancel(){
            this.props.history.push('/delivery');
        }


    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                          <center> <h3 > Update Courier Services </h3> </center>
                                <div className = "card-body">
                                    <form>
                                    <div className = "form-group">
                                            <label> Courier Service Name: </label>
                                            <br></br>
                                            <input placeholder="Courier Name" name="name" className="form-control" 
                                                value={this.state.order_name} onChange={this.changeNameHandler}/>
                                        </div>

                                    <div className = "form-group">
                                            <label> Address             : </label>
                                            <br></br>
                                            <input placeholder="Address" name="address" className="form-control" 
                                                value={this.state.order_address} onChange={this.changeAddressHandler}/>
                                        </div>    
                                       
                                        <div className = "form-group">
                                            <label> Phone Number        : </label> 
                                            <br></br>
                                            <input placeholder="Phone Number" name="phone_number" className="form-control" 
                                                value={this.state.order_phone_number} onChange={this.changePhoneHandler}/>
                                        </div>    
                                       
                                        <div className = "form-group">
                                            <label> Courier       : </label> 
                                            <br></br>
                                            <input placeholder="Courier name" name="courier name" className="form-control" 
                                                value={this.state.order_courier_name} onChange={this.changeCourierHandler}/>
                                        </div>   



                                            <br></br>
                                            <table className="invntry_tbl_header">
                    <tbody>
                      <th>
                        <center>
                         
                        <button style={{marginLeft: "10px"}} className="btn_red" onClick={this.updateDelivery}>Add</button>
                                       
                        </center>
                      </th>
                      <th>
                        <center>
                        <button  className="btn_green" onClick={this.cancel.bind(this)} >Cancel</button>

                        </center>
                      </th>
                    </tbody>
                  </table>

                                    </form>
            </div>
                     </div>      
                         </div>
                            </div>
                                 </div>
        )

    }
}





export default UpdateCourierDeliveryComponent