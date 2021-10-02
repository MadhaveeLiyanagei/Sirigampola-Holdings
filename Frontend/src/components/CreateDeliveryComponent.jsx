import React, { Component } from 'react'
import DeliveryService from '../services/DeliveryService';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


class CreateDeliveryComponent extends Component {
    constructor(props) {
        super(props)

           this.state ={

     
            order_name: '',
            order_address: '',
            order_phone_number: '',
            order_courier_name:'',
           


            order_nameError: '',
            order_addressError: '',
            order_phone_numberError: '',
            order_courier_nameError:'',
            

           }
           this.changeAddressHandler = this.changeAddressHandler.bind(this);
           this.changeNameHandler = this.changeNameHandler.bind(this);
           this.changePhoneHandler =this.changePhoneHandler.bind(this);
           
           this.SaveDelivery =this.SaveDelivery.bind(this);

        }

        notify(){
            toast.success('added successfully!', {
                position: toast.POSITION.TOP_CENTER})
        }
     
        notify1(){
            toast.error('adding cancelled', {
                position: toast.POSITION.TOP_CENTER})
        }

        validate = () =>{

            let order_nameError='';
            let order_addressError = '';
            let order_phone_numberError = '';
            let order_courier_nameError='';
           
           
    
            if(!this.state.order_name){
    
                order_nameError = "Please fill out this field";
    
            }
    
            if(!this.state.order_address){
    
                order_addressError = "Please fill out this field";
    
            }
    
            if(!this.state.order_phone_number){
    
                order_phone_numberError = "Please fill out this field";
    
            }

            if(!this.state.order_courier_name){
    
                order_courier_nameError = "Please fill out this field";
    
            }
    
           
          
    
            if(order_nameError || order_addressError || order_phone_numberError || order_courier_nameError  ){
    
                this.setState({order_nameError,order_addressError,order_phone_numberError,order_courier_nameError});
    
                return false;
    
            }
    
    
    
            return true;
    
     
    
        }


       SaveDelivery = (e) => {
            e.preventDefault();
            let delivery = {order_name: this.state.order_name, order_address: this.state.order_address, order_phone_number: this.state.order_phone_number,order_courier_name: this.state.order_courier_name};

            const isValid = this.validate();
            if(isValid){
            console.log('delivery => ' + JSON.stringify(delivery));


            DeliveryService.createDelivery(delivery).then(res =>{
                this.notify();
                this.props.history.push('/delivery');
            });


        }

            
            


       }

        changeNameHandler= (event) => {
            this.setState({order_name: event.target.value})
        }

        changeAddressHandler= (event) => {
            this.setState({order_address: event.target.value})
        }
        changePhoneHandler= (event) => {
            this.setState({order_phone_number: event.target.value})
        }
        changeCourierHandler= (event) => {
            this.setState({order_courier_name: event.target.value})
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
                          <center> <h3 > Add Delivery </h3> </center>
                                <div className = "card-body">
                                    <form>
                                    <div className = "form-group">
                                            <label> Delivery  Name: </label>
                                            <br></br>
                                            <input placeholder="Delivery Name" name="order_name" className="form-control" 
                                                value={this.state.order_name} onChange={this.changeNameHandler}/>
                                                <div style={{fontSize: 12, color:"red"}}>{this.state.order_nameError} </div>
                                        </div>

                                    <div className = "form-group">
                                            <label> Address             : </label>
                                            <br></br>
                                            <input placeholder="Address" name="address" className="form-control" 
                                                value={this.state.order_address} onChange={this.changeAddressHandler}/>
                                                <div style={{fontSize: 12, color:"red"}}>{this.state.order_addressError} </div>
                                        </div>    
                                       
                                        <div className = "form-group">
                                            <label> Phone Number        : </label> 
                                            <br></br>
                                            <input placeholder="Phone Number" name="phone_number" className="form-control" 
                                                value={this.state.order_phone_number} onChange={this.changePhoneHandler}/>
                                                <div style={{fontSize: 12, color:"red"}}>{this.state.order_phone_numberError} </div>
                                        </div>    
                                     
                                        <div className = "form-group">
                                            <label> Courier Name        : </label> 
                                            <br></br>
                                            <input placeholder="Courier Name" name="courier_name" className="form-control" 
                                                value={this.state.order_courier_name} onChange={this.changeCourierHandler}/>
                                                <div style={{fontSize: 12, color:"red"}}>{this.state.order_courier_nameError} </div>
                                        </div>    
                                        

                                        <button className="btn btn-success" onClick={this.SaveDelivery}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                       
                                    </form>
            </div>

                     </div>   

                         </div>

                            </div>

                                 </div>
           
            
        )
    }



}

export default CreateDeliveryComponent