import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import 'react-toastify/dist/ReactToastify.css';
import {toast} from 'react-toastify';
import SoloAlert from 'soloalert';
import AdminEmployeeSideBar from './AdminEmployeeSideBar';
import AdminNavbar from "./AdminNavbar";

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
         this.saveEmployee = this.saveEmployee.bind(this);
        }

       

        notify(){        
            toast.success('Employee Details Added Successfully!', {position: toast.POSITION.TOP_CENTER, autoClose: 2000})    
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



        

        saveEmployee = (e) =>{
            e.preventDefault();
            let employee = {employeename: this.state.employeeusername, 
                employeeemail: this.state.employeeemail, 
                employeephone: this.state.employeephone, 
                employeeusername: this.state.employeeusername, 
                employeepassword: this.state.employeepassword, 
                employeeaddress: this.state.employeeaddress};
            const isValid = this.validate();

            if(isValid){
            console.log('employee =>'+JSON.stringify(employee));
              EmployeeService.createEmployee(employee).then((res) => {
                       this.notify();
            
                       this.props.history.push("/employee");
      });
        
        
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


        

    render() {
        return (
            <div>
                 <>
            <AdminNavbar />
            <AdminEmployeeSideBar />
          </>
                 <br></br>
               <div className = "container">
                   <div className = "row">
                   <div className = "card col-md-6 offset-md-3 offset-md-3">
                   <h3 className="text-center"><u>Add Employee</u></h3>
                           <div className = "card-body">
                              <form>
                                  <div className = "form-group">
                                      <label>Name: </label> 
                                      <input placeholder="Name" name="employeename" className="form-control"
                                         value = {this.state.employeename} onChange={this.ChangenameHandler}/>
                                        
                                   </div>
                                   <div className = "form-group">
                                      <label>Email: </label> 
                                      <input placeholder="email" name="employeeemail" className="form-control"
                                         value = {this.state.employeeemail} onChange={this.ChangeemailHandler}/>
                                     </div>

                                     <div className = "form-group">
                                      <label>Phone number: </label> 
                                      <input placeholder="phone number" name="employeephone" className="form-control"
                                         value = {this.state.employeephone} onChange={this.ChangephoneHandler}/>
                                         
                                   </div> 

                                   <div className = "form-group">
                                      <label>User Name: </label> 
                                      <input placeholder="User Name" name="employeeusername" className="form-control"
                                         value = {this.state.employeeusername} onChange={this.ChangeuserNameHandler}/>
                                         
                                   </div> 
                                   <div className = "form-group">
                                      <label>Password: </label> 
                                      <input placeholder="Password" name="employeepassword" className="form-control"
                                         value = {this.state.employeepassword} onChange={this.ChangepasswordHandler}/>
                                         
                                   </div>

                                   <div className = "form-group">
                                      <label>Address: </label> 
                                      <input placeholder="Address" name="employeeaddress" className="form-control"
                                         value = {this.state.employeeaddress} onChange={this.ChangeaddressHandler}/>
                                        
                                   </div>
                                   <br></br>
                                   <button className="btn btn-success" onClick={this.saveEmployee}>Save</button>
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