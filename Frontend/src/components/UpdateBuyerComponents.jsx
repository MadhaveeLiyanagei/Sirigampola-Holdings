import React, { Component } from 'react';
import BuyerService from '../services/BuyerService';

class UpdateBuyerComponents extends Component {
    constructor(props){
        super(props)

        this.state = {
                id: this.props.match.params.id,
                name: '',
                email: '',
                phone: '',
                userName: '',
                password: '',
                address: ''
        }
        this.ChangenameHandler = this.ChangenameHandler.bind(this);
        this.updateBuyer = this.updateBuyer.bind(this);
    }
    
      componentDidMount(){
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

    updateBuyer = (e) => {
        e.preventDefault();

        let buyer = {name: this.state.name, email: this.state.email, phone: this.state.phone, userName: this.state.userName, password: this.state.password, address: this.state.address};
        console.log('buyer =>'+JSON.stringify(buyer));
        BuyerService.updateBuyer(buyer, this.state.id).then( res => {
            this.props.history.push('/profile');
        });

        
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
     this.props.history.push('/profile');
 }

render() {
 return (
     <div>
         <div className = "container">
             <div className ="row">
                 <div className = "card col-md-6 offset-md-3 offset-md-3">
                     <h3 className="text-center">Update Buyer</h3>
                     <div className = "card-body">
                         <form>
                            <div className = "form-group">
                               <label>Name: </label> 
                               <input placeholder="Name" name="name" className="form-control"
                                  value = {this.state.name} onChange={this.ChangenameHandler}/>
                            </div>
                            <div className = "form-group">
                               <label>Email: </label> 
                               <input placeholder="email" name="email" className="form-control"
                                  value = {this.state.email} onChange={this.ChangeemailHandler}/>
                            </div>
                            <div className = "form-group">
                               <label>Phone number: </label> 
                               <input placeholder="phone number" name="phone" className="form-control"
                                  value = {this.state.phone} onChange={this.ChangephoneHandler}/>
                            </div>
                            <div className = "form-group">
                               <label>User Name: </label> 
                               <input placeholder="User Name" name="userName" className="form-control"
                                  value = {this.state.userName} onChange={this.ChangeuserNameHandler}/>
                            </div>
                            <div className = "form-group">
                               <label>Password: </label> 
                               <input placeholder="Password" name="password" className="form-control"
                                  value = {this.state.password} onChange={this.ChangepasswordHandler}/>
                            </div>
                            <div className = "form-group">
                               <label>Address: </label> 
                               <input placeholder="Address" name="address" className="form-control"
                                  value = {this.state.address} onChange={this.ChangeaddressHandler}/>
                            </div>
                              

                            <button className="btn btn-success" onClick={this.updateBuyer}>Save</button>
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

export default UpdateBuyerComponents;