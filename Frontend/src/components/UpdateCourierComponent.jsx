import React, { Component } from 'react'
import CourierService from '../services/CourierService';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();



class UpdateCourierComponent extends Component {
    constructor(props) {
        super(props)

           this.state ={

            id: this.props.match.params.id,
            name: '',
            address: '',
            phone_number: '',
            email:'',

            nameError: '',
            addressError: '',
            phone_numberError: '',
            emailError:'',
            emailvError: '',
            contactvError:'',

           }
           this.changeAddressHandler = this.changeAddressHandler.bind(this);
           this.changeNameHandler = this.changeNameHandler.bind(this);
           this.updateCourier =this.updateCourier.bind(this);

        }

        notify() {
            toast.success("Updated successfully!", {
              position: toast.POSITION.TOP_CENTER,
            });
          }
        
          notify1() {
            toast.error("updation cancelled", { position: toast.POSITION.TOP_CENTER });
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
        emailValidation() {
            let emailvError='';
    
            const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            if (!this.state.email || regex.test(this.state.email) === false) {
                this.setState({
                    emailvError: "You should enter a valid E-mail!"
                });
                return false;
            }
            return true;
        }

        contactNumberValidation(){
            if(this.state.phone_number.length>10 || this.state.phone_number.length<10){
                this.setState({
                    contactvError: "You should enter a valid Contact Number!"
                });
                return false;
            }
            return true;
        }
       


        
    componentDidMount(){
        CourierService.getCourierById(this.state.id).then( (res) =>{
            let courier = res.data;
            this.setState({name: courier.name,
                address: courier.address,
                phone_number : courier.phone_number,
                email : courier.email
            
            });
        });
    
    
                      }

       updateCourier = (e) => {
            e.preventDefault();
            let courier = {name: this.state.name, address: this.state.address, phone_number: this.state.phone_number, email: this.state.email};
            const isValid = this.validate()  && this.emailValidation() && this.contactNumberValidation();
            if(isValid){
            console.log('courier => ' + JSON.stringify(courier));
            console.log('id => ' + JSON.stringify(this.state.id));
            CourierService.updateCourier(courier, this.state.id).then( res => {
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
                          <center> <h3 > Update Courier Services </h3> </center>
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
                                                 <div style={{ fontSize: 14, color: "red" }}>{this.state.contactvError}</div> 
                                                <div style={{fontSize: 12, color:"red"}}>{this.state.phone_numberError} </div>

                                        </div>    
                                       
                                        <div className = "form-group">
                                            <label>Email Address        : </label>
                                            <br></br>
                                            <input placeholder="Email Address" name="email" className="form-control" 
                                                value={this.state.email} onChange={this.changeEmailHandler}/>
                                                <div style={{ fontSize: 14, color: "red" }}>{this.state.emailvError}</div>
                                                <div style={{fontSize: 12, color:"red"}}>{this.state.emailError} </div>
                                        </div>    
                                        <br></br>
                                            <table className="invntry_tbl_header">
                    <tbody>
                      <th>
                        <center>
                         
                        <button  className="btn_red" onClick={this.updateCourier}>Update</button>
                                       
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


    /*
    <button  className="btn_red" onClick={this.updateCourier}>Update</button>
                                        <button  className="btn btn-danger" onClick={this.cancel.bind(this)} >Cancel</button>
                                       */





export default UpdateCourierComponent