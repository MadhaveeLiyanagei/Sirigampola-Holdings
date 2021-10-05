import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import 'react-toastify/dist/ReactToastify.css';
import {toast} from 'react-toastify';
import SoloAlert from 'soloalert';

toast.configure()

class CreateEmployeeComponent extends Component {

    constructor(props){
        super(props)
        this.state = {
            //step2
            employeeid: this.props.match.params.employeeid,
            employeename: '',
            employeeemail: '',
            employeephone: '',
            employeeusername:'',
            employeepassword:'',
            employeeaddress:'',
            employeenameError: '',
            employeeemailError: '',
            employeephoneError: '',
            employeeusernameError:'',
            employeepasswordError:'',
            employeeaddressError:'',


         }
         this.ChangenameHandler = this.ChangenameHandler.bind(this);
         this.ChangeemailHandler = this.ChangeemailHandler.bind(this);
         this.ChangephoneHandler = this.ChangephoneHandler.bind(this);
         this.ChangeuserNameHandler = this.ChangeuserNameHandler.bind(this);
         this.ChangepasswordHandler = this.ChangepasswordHandler.bind(this);
         this.ChangeaddressHandler = this.ChangeaddressHandler.bind(this);
         this. saveOrupdateEmployee = this.saveOrupdateEmployee .bind(this);
        }
        //step3
        componentDidMount(){

             //step 4
             if(this.state.employeeid === '_add'){
                return
             }else{EmployeeService.getEmployeeId(this.state.employeeid).then((res) => {
                let employee  = res.data;
                this.setState({employeename:employee .employeename,
                    employeeemail:employee .employeeemail,
                    employeephone: employee.employeephone,
                    employeeusername: employee.employeeusername,
                    employeepassword: employee.employeepassword,
                    employeeaddress: employee.employeeaddress    
              });
  
            });
        }

        }

        notify(){        
            toast.warn('Employee Details Added Successfully!', {position: toast.POSITION.TOP_CENTER, autoClose: 2000})    
         }    
             notify1(){        
                 toast.warn('Employee Details Updated Successfully!', {position: toast.POSITION.TOP_CENTER, autoClose: 2000})    
             }
 

        
                 validate = () =>{       
             let employeeusernameError='';        
                let employeeemailError = '';        
                let employeeaddressError = '';        
                let employeephoneError='';        
                let  employeenameError = ''; 
                let  employeepasswordError='';       
                if(!this.state.employeeusername){            
                    employeeusernameError= "Please fill out this field";       
             }        
            if(!this.state.employeeemail){  
                employeeemailError = "Please fill out this field"; 
        }      
            if(!this.state.employeeaddress){            
                  employeeaddressError = "Please fill out this field";        
        }        
            if(!this.state.employeephone){            
                employeephoneError = "Please fill out this field";        
            }        
            if(!this.state.employeename){            
                employeenameError = "Please fill out this field";        
        }    
        if(!this.state.employeepassword){            
            employeepasswordError= "Please fill out this field";        
       }
              
            if(employeeusernameError||employeeemailError ||employeeaddressError ||employeephoneError ||employeenameError  ||employeepasswordError ){            
            this.setState({employeeusernameError,employeeemailError ,employeeaddressError ,employeephoneError , employeenameError  , employeepasswordError});           
             return false;        
        }        
            return true;    
         }



        

        saveOrupdateEmployee = (e) =>{
            e.preventDefault();
            let employee = {employeename: this.state.employeeusername, employeeemail: this.state.employeeemail, employeephone: this.state.employeephone, employeeusername: this.state.employeeusername, employeepassword: this.state.employeepassword, employeeaddress: this.state.employeeaddress};
            const isValid = this.validate();
            if(isValid){
            console.log('employee =>'+JSON.stringify(employee));

            //step 5
        if(this.state.employeeid === '_add'){
            EmployeeService.createEmployee(employee).then(res =>{
                this.notify();
                this.props.history.push('/Employee');
            }).catch(error=> {alert("This profile is  not Available")});
       
            
        } else{
            EmployeeService.updateEmployee(employee, this.state.employeeid).then( res => {
                this.notify1();
                this.props.history.push('/Employee');
            }).catch(error=> {alert("This profile is not Available")});

        }
            }
        

    }
        ChangenameHandler= (event) =>{
            this.setState({employeename: event.target.value});    
        } 
        ChangeemailHandler= (event) =>{
            this.setState({employeeemail: event.target.value});    
        }
         ChangephoneHandler= (event) =>{
            this.setState({employeephone: event.target.value});    
        }
        ChangeuserNameHandler= (event) =>{
            this.setState({employeeusername: event.target.value});    
        }
        ChangepasswordHandler= (event) =>{
            this.setState({employeepassword: event.target.value});    
        }
        ChangeaddressHandler= (event) =>{
            this.setState({employeeaddress: event.target.value});    
        }
        cancel(){
            this.props.history.push('/Employee');
        }

        getTitle(){
            if(this.state.employeeid === '_add' ){
                return <h3 className="text-center">Add Employee</h3>
            }else{
              return  <h3 className="text-center">Update Employee</h3>
            }
        }
    render() {
        return (
            <div>
                 <br></br>
               <div className = "container">
                   <div className = "row">
                   <div className = "card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }  
                           <div className = "card-body">
                              <form>
                                  <div className = "form-group">
                                      <label>Name: </label> 
                                      <input placeholder="Name" name="employeename" className="form-control"
                                         value = {this.state.employeename} onChange={this.ChangenameHandler}/>
                                         <div style={{fontSize: 12, color: "red"}}>{this.state.employeenameError }</div>
                                        
                                   </div>
                                   <div className = "form-group">
                                      <label>Email: </label> 
                                      <input placeholder="email" name="employeeemail" className="form-control"
                                         value = {this.state.employeeemail} onChange={this.ChangeemailHandler}/>
                                         <div style={{fontSize: 12, color: "red"}}>{this.state.employeeemailError }</div>
                                     </div>

                                     <div className = "form-group">
                                      <label>Phone number: </label> 
                                      <input placeholder="phone number" name="employeephone" className="form-control"
                                         value = {this.state.employeephone} onChange={this.ChangephoneHandler}/>
                                         <div style={{fontSize: 12, color: "red"}}>{this.state.employeephoneError }</div>
                                         
                                   </div> 

                                   <div className = "form-group">
                                      <label>User Name: </label> 
                                      <input placeholder="User Name" name="employeeusername" className="form-control"
                                         value = {this.state.employeeusername} onChange={this.ChangeuserNameHandler}/>
                                         <div style={{fontSize: 12, color: "red"}}>{this.state.employeeusernameError}</div>
                                         
                                   </div> 
                                   <div className = "form-group">
                                      <label>Password: </label> 
                                      <input placeholder="Password" name="employeepassword" className="form-control"
                                         value = {this.state.employeepassword} onChange={this.ChangepasswordHandler}/>
                                         <div style={{fontSize: 12, color: "red"}}>{this.state.employeepasswordError }</div>
                                         
                                   </div>

                                   <div className = "form-group">
                                      <label>Address: </label> 
                                      <input placeholder="Address" name="employeeaddress" className="form-control"
                                         value = {this.state.employeeaddress} onChange={this.ChangeaddressHandler}/>
                                         <div style={{fontSize: 12, color: "red"}}>{this.state.employeeaddressError}</div>
                                        
                                   </div>
                                   <br></br>
                                   <button className="btn btn-success" onClick={this.saveOrupdateEmployee}>Save</button>
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

export default CreateEmployeeComponent;