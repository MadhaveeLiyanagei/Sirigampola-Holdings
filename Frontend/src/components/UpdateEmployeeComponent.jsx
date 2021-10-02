import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';


class UpdateEmployeeComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            employeeid: this.props.match.params.employeeid,
            employeename: '',
            employeeemail: '',
            employeephone: '',
            employeeusername:'',
            employeepassword:'',
            employeeaddress:''


         }
         this.ChangenameHandler = this.ChangenameHandler.bind(this);
         this. updateEmployee = this.updateEmployee .bind(this);
        }

        componentDidMount(){
            EmployeeService.getEmployeeById(this.state.employeeid).then((res) => {
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

        updateEmployee = (e) =>{
            e.preventDefault();
            let employee = {employeename: this.state.employeeusername, employeeemail: this.state.employeeemail, employeephone: this.state.employeephone, employeeusername: this.state.employeeusername, employeepassword: this.state.employeepassword, employeeaddress: this.state.employeeaddress};
            console.log('employee =>'+JSON.stringify(employee));

            EmployeeService.updateEmployee(employee, this.state.employeeid).then( res => {
                this.props.history.push('/Employee');
            });
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
               <div className = "container">
                   <div className = "row">
                   <div className = "card col-md-6 offset-md-3 offset-md-3">
                    <h3 className ="text-center">Update Employee</h3>   
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
                                   <button className="btn btn-success" onClick={this. updateEmployee}>Save</button>
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

export default UpdateEmployeeComponent;