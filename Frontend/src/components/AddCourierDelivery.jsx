import React, { Component } from 'react'

import DeliveryService from '../services/DeliveryService';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();



//Delivery delivery

class AddCourierDeliveryComponent extends Component {
    constructor(props) {
        super(props)

           this.state ={

            id: this.props.match.params.id,
            order_name: '',
            order_address: '',
            order_phone_number: '',
            order_courier_name:'',

            order_courierNameError: '',


           }
           this.changeAddressHandler = this.changeAddressHandler.bind(this);
           this.changeNameHandler = this.changeNameHandler.bind(this);
           this.changePhoneHandler = this.changePhoneHandler.bind(this);
           this.updateDelivery =this.updateDelivery.bind(this);


        }

        notify() {
            toast.success("Added A New Courier Successfully!", {
              position: toast.POSITION.TOP_CENTER,
            });
          }
        
          notify1() {
            toast.error("Adding cancelled", { position: toast.POSITION.TOP_CENTER });
          }


          validate = () =>{

            let order_courierNameError='';
       
           
           
    
            if(!this.state.order_courier_name){
    
                order_courierNameError = "Please fill out this field";
    
            }
    
         
    
           
          
    
            if(order_courierNameError ){
    
                this.setState({order_courierNameError});
    
                return false;
    
            }
    
    
    
            return true;
    
     
    
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
                        const isValid = this.validate() ;
                        if(isValid){
                        console.log('delivery => ' + JSON.stringify(delivery));
                        console.log('id => ' + JSON.stringify(this.state.id));
                        DeliveryService.updateDelivery (delivery, this.state.id).then( res => {
                            this.notify();
                        this.props.history.push('/delivery');
                        });
                    }

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
            this.notify1();
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
                                            <label> Courier       : </label> 
                                            <br></br>
                                            <input placeholder="Courier name" name="courier name" className="form-control" 
                                                value={this.state.order_courier_name} onChange={this.changeCourierHandler}/>
                                                <div style={{fontSize: 12, color:"red"}}>{this.state.order_courierNameError} </div>
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





export default AddCourierDeliveryComponent