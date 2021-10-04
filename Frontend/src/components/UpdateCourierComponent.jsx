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
            email:''

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
            console.log('courier => ' + JSON.stringify(courier));
            console.log('id => ' + JSON.stringify(this.state.id));
            CourierService.updateCourier(courier, this.state.id).then( res => {
                this.notify();
            this.props.history.push('/courier');
            });

            
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
                                        </div>

                                    <div className = "form-group">
                                            <label> Address             : </label>
                                            <br></br>
                                            <input placeholder="Address" name="address" className="form-control" 
                                                value={this.state.address} onChange={this.changeAddressHandler}/>
                                        </div>    
                                       
                                        <div className = "form-group">
                                            <label> Phone Number        : </label> 
                                            <br></br>
                                            <input placeholder="Phone Number" name="phone_number" className="form-control" 
                                                value={this.state.phone_number} onChange={this.changePhoneHandler}/>
                                        </div>    
                                       
                                        <div className = "form-group">
                                            <label>Email Address        : </label>
                                            <br></br>
                                            <input placeholder="Email Address" name="email" className="form-control" 
                                                value={this.state.email} onChange={this.changeEmailHandler}/>
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