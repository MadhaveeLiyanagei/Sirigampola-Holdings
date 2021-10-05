import React, { Component } from 'react';
import BuyerService from '../services/BuyerService';
import 'react-toastify/dist/ReactToastify.css';
import {toast} from 'react-toastify';


toast.configure()
class CreateBuyerComponent extends Component {
           constructor(props){
               super(props)

               this.state = {
                       id: this.props.match.params.id,
                       name: '',
                       email: '',
                       phone: '',
                       userName: '',
                       password: '',
                       address: '',
                       nameError: '',
                       emailError: '',
                       PhoneError: '',
                       userNameError: '',
                       passwordError:'',
                       addressError: '',
                       buyeremailvError: '',
                       buyercontacvError:''
               }
               this.ChangenameHandler = this.ChangenameHandler.bind(this);
               this. saveOrupdateBuyer = this. saveOrupdateBuyer.bind(this);
               this.ChangeemailHandler = this.ChangeemailHandler.bind(this);
               this.ChangephoneHandler = this.ChangephoneHandler.bind(this);
               this.ChangeuserNameHandler = this.ChangeuserNameHandler.bind(this);
               this.ChangepasswordHandler = this.ChangepasswordHandler.bind(this);
               this.ChangeaddressHandler = this.ChangeaddressHandler.bind(this);
           }

           componentDidMount(){

            //step 4
            if(this.state.id === '_add'){
                return
            } else{
                BuyerService.getBuyerId(this.state.id).then((res) => {
                    let buyer = res.data;
                    this.setState({name: buyer.name,
                            email: buyer.email,
                            phone: buyer.phone,
                            userName: buyer.userName,
                            password: buyer.password,
                            address: buyer.address    
                  });
      
                });
            }
            
        }

       
       notify(){        
           toast.warn('Buyer Details Added Successfully!', {position: toast.POSITION.TOP_CENTER, autoClose: 2000})    
        }    
            notify1(){        
                toast.warn('Buyer Details Updated Successfully!', {position: toast.POSITION.TOP_CENTER, autoClose: 2000})    
            }


       
         validate = () =>{       
             let userNameError='';        
                let emailError = '';        
                let addressError = '';        
                let phoneError ='';        
                let  nameError = ''; 
                let  passwordError='';       
                if(!this.state.userName){            
                userNameError = "Please fill out this field";       
             }        
            if(!this.state.email){  
            emailError = "Please fill out this field"; 
        }      
            if(!this.state.address){            
            addressError = "Please fill out this field";        
        }        
            if(!this.state.phone){            
                phoneError = "Please fill out this field";        
            }        
            if(!this.state.name){            
                nameError = "Please fill out this field";        
        }    
        if(!this.state.password){            
            passwordError= "Please fill out this field";        
       }
              
            if(userNameError || emailError || addressError || phoneError || nameError||passwordError ){            
            this.setState({userNameError,emailError,addressError, phoneError, nameError , passwordError});           
             return false;        
        }        
            return true;    
         }

        emailValidation() {
            let buyeremailvError='';
    
            const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            if (!this.state.email || regex.test(this.state.email) === false) {
                this.setState({
                    buyeremailvError: "You should enter a valid E-mail!"
                });
                return false;
            }
            return true;
        }
        
        contactNumberValidation(){

            if(this.state.phone.length>10 || this.state.phone.length<10){
    
                this.setState({
    
                    buyercontacvError: "You should enter a valid Contact Number!"
    
                });
    
                return false;
    
            }
    
            return true;
    
        }

  

           saveOrupdateBuyer = (e) => {
               e.preventDefault();

               let buyer = {name: this.state.name, email: this.state.email, phone: this.state.phone, userName: this.state.userName, password: this.state.password, address: this.state.address};
               const isValid = this.validate() && this.emailValidation() && this.contactNumberValidation();
               if(isValid){
               console.log('buyer =>'+JSON.stringify(buyer));
                
               //step 5
               if(this.state.id === '_add'){
                BuyerService.createBuyer(buyer).then(res =>{
                    this.notify();
                    this.props.history.push('/Home');
 
                }).catch(error=> {alert("This profile is  not Available")});
                
            } else{  
                BuyerService.updateBuyer(buyer, this.state.id).then( res => {
                    this.notify1();
                    this.props.history.push('/profile');
                }).catch(error=> {alert("This profile is not Available")});
               
            }
        }
           }

          ChangenameHandler= (event) =>{
              this.setState({name: event.target.value});    
          }
          ChangeemailHandler= (event) =>{
            this.setState({email: event.target.value});    
        }
         ChangephoneHandler= (event) =>{
            this.setState({phone: event.target.value});    
        }
        ChangeuserNameHandler= (event) =>{
            this.setState({userName: event.target.value});    
        }
        ChangepasswordHandler= (event) =>{
            this.setState({password: event.target.value});    
        }
        ChangeaddressHandler= (event) =>{
            this.setState({address: event.target.value});    
        }
        cancel(){
            this.props.history.push('/');
        }

        getTitle(){
            if(this.state.id === '_add' ){
                return <h3 className="text-center">Add Buyer</h3>
            }else{
              return  <h3 className="text-center">Update Buyer</h3>
            }
        }

    render() {
        return (
            <div>
                <br></br>
                <div className = "container">
                    <div className ="row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                            <div className = "card-body">
                                <form>
                                   <div className = "form-group">
                                      <label>Name: </label> 
                                      <input placeholder="Name" name="name" className="form-control"
                                         value = {this.state.name} onChange={this.ChangenameHandler}/>
                                         <div style={{fontSize: 12, color: "red"}}>{this.state.nameError}</div>
                                   </div>
                                   <div className = "form-group">
                                      <label>Email: </label> 
                                      <input placeholder="xxx@gmail.com" name="email" className="form-control"
                                         value = {this.state.email} onChange={this.ChangeemailHandler}/>
                                         <div style={{fontSize: 12, color: "red"}}>{this.state.emailError}</div>
                                         <div style={{ fontSize: 14, color: "red" }}>{this.state.buyeremailvError}</div>                                        

                                   </div>
                                   <div className = "form-group">
                                      <label>Phone number: </label> 
                                      <input placeholder="phone number" name="phone" className="form-control"
                                         value = {this.state.phone} onChange={this.ChangephoneHandler}/>
                                         <div style={{fontSize: 12, color: "red"}}>{this.state.PhoneError}</div>
                                         <div style={{ fontSize: 14, color: "red" }}>{this.state.buyercontacvError}</div>
                                   </div>
                                   <div className = "form-group">
                                      <label>User Name: </label> 
                                      <input placeholder="User Name" name="userName" className="form-control"
                                         value = {this.state.userName} onChange={this.ChangeuserNameHandler}/>
                                         <div style={{fontSize: 12, color: "red"}}>{this.state.userNameError}</div>
                                   </div>
                                   <div className = "form-group">
                                      <label>Password: </label> 
                                      <input placeholder="Password" name="password" className="form-control"
                                         value = {this.state.password} onChange={this.ChangepasswordHandler}/>
                                         <div style={{fontSize: 12, color: "red"}}>{this.state.passwordError}</div>
                                   </div>
                                   <div className = "form-group">
                                      <label>Address: </label> 
                                      <input placeholder="Address" name="address" className="form-control"
                                         value = {this.state.address} onChange={this.ChangeaddressHandler}/>
                                         <div style={{fontSize: 12, color: "red"}}>{this.state.addressError}</div>
                                   </div>
                                    <br></br>
                                   <button className="btn btn-success" onClick={this. saveOrupdateBuyer}>Save</button>
                                   <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default CreateBuyerComponent;