import React, { Component } from 'react'
import CourierService from '../services/CourierService';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

toast.configure();
class CreateCourierComponent extends Component {
    constructor(props) {
        super(props)

           this.state ={

     
            name: '',
            address: '',
            phone_number: '',
            email:'',


            nameError: '',
            addressError: '',
            phone_numberError: '',
            emailError:'',

           }
           this.changeAddressHandler = this.changeAddressHandler.bind(this);
           this.changeNameHandler = this.changeNameHandler.bind(this);
           this.SaveCourier =this.SaveCourier.bind(this);

        }

        notify(){
            toast.success('added successfully!', 
            {position: toast.POSITION.TOP_CENTER})
        }
     
        notify1(){
            toast.error('adding cancelled', 
            {position: toast.POSITION.TOP_CENTER})
        }

        validate = () =>{

            let nameError='';
            let addressError = '';
            let phone_numberError = '';
            let emailError ='';
           
    
            if(!this.state.name){
    
                nameError = "Please fill out this field";
    
            }
    
            if(!this.state.address){
    
                addressError = "Please fill out this field";
    
            }
    
            if(!this.state.phone_number){
    
                phone_numberError = "Please fill out this field";
    
            }
    
            if(!this.state.email){
    
                emailError = "Please fill out this field";
    
            }
    
          
    
            if(nameError || addressError || phone_numberError || emailError ){
    
                this.setState({nameError,addressError,phone_numberError,emailError});
    
                return false;
    
            }
    
    
    
            return true;
    
     
    
        }


       SaveCourier = (e) => {
            e.preventDefault();
            let courier = {name: this.state.name, address: this.state.address, phone_number: this.state.phone_number, email: this.state.email};

            const isValid = this.validate();
            if(isValid){
            console.log('courier => ' + JSON.stringify(courier));


            CourierService.createCourier(courier).then(res =>{
                this.notify();
                this.props.history.push('/courier');
            });


        }

            
            


       }

        changeNameHandler= (event) => {
            this.setState({name: event.target.value})
        }

        changeAddressHandler= (event) => {
            this.setState({address: event.target.value})
        }
        changePhoneHandler= (event) => {
            this.setState({phone_number: event.target.value})
        }

        changeEmailHandler= (event) => {
            this.setState({email: event.target.value})
        }

        cancel(){
            this.notify1();
            this.props.history.push('/courier');
        }
        

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                          <center> <h3 > Add Courier Services </h3> </center>
                                <div className = "card-body">
                                    <form>
                                    <div className = "form-group">
                                            <label> Courier Service Name: </label>
                                            <br></br>
                                            <input placeholder="Courier Name" name="name" className="form-control" 
                                                value={this.state.name} onChange={this.changeNameHandler}/>
                                                <div style={{fontSize: 12, color:"red"}}>{this.state.nameError} </div>
                                        </div>

                                    <div className = "form-group">
                                            <label> Address             : </label>
                                            <br></br>
                                            <input placeholder="Address" name="address" className="form-control" 
                                                value={this.state.address} onChange={this.changeAddressHandler}/>
                                                <div style={{fontSize: 12, color:"red"}}>{this.state.addressError} </div>
                                        </div>    
                                       
                                        <div className = "form-group">
                                            <label> Phone Number        : </label> 
                                            <br></br>
                                            <input placeholder="Phone Number" name="phone_number" className="form-control" 
                                                value={this.state.phone_number} onChange={this.changePhoneHandler}/>
                                                <div style={{fontSize: 12, color:"red"}}>{this.state.phone_numberError} </div>
                                        </div>    
                                       
                                        <div className = "form-group">
                                            <label>Email Address        : </label>
                                            <br></br>
                                            <input placeholder="Email Address" name="email" className="form-control" 
                                                value={this.state.email} onChange={this.changeEmailHandler}/>
                                                <div style={{fontSize: 12, color:"red"}}>{this.state.emailError} </div>
                                        </div>    
                                        

                                        <br></br>
                                            <table className="invntry_tbl_header">
                    <tbody>
                      <th>
                        <center>
                         
                        <button className="btn_red" onClick={this.SaveCourier}>Save</button>
                                       
                        </center>
                      </th>
                      <th>
                        <center>
                        <button className="btn_green" onClick={this.cancel.bind(this)}>Cancel</button>

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

export default CreateCourierComponent