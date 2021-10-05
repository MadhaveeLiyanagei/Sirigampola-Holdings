import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import AdminNavbar from './AdminNavbar';
import './HeaderUser.css';

class ViewEmployeeComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            employeeid: this.props.match.params.employeeid,
            employee: {}

        }
    }
    
    componentDidMount(){
        EmployeeService.getEmployeeId(this.state.employeeid).then( res => {
            this.setState({employee: res.data});

        })
    }

    render() {
        return (
            <div>
                 <AdminNavbar/>
                 <div class="topnav" >
                     <a class="active" href="http://localhost:3000/profile">Buyer</a>
                     <a class="active" href="http://localhost:3000/Employee">Employee</a>
                     <a class="active" href="http://localhost:3000/Supplier">Supplier</a>
  
                    
        </div>
                <br></br>
                <div className = "card col-md-6 offset-md-3" style ={{height:550}}>
                <br></br>
                    <h3 className = "text-center">View Employee Details</h3>
                    <div className = "card-body">
                    <br></br>
                    <br></br>
                    <br></br>
                        <div className = "row">
                        
                            <label>Employee Name: {this.state.employee.employeename}</label>
                           
                        </div>
                        <br></br>
                        <div className = "row">
                            <label>Employee Email: {this.state.employee.employeeemail}</label>
                       
                      </div>
                      <br></br>
                      <div className = "row">
                            <label>Employee Phone Number: {this.state.employee.employeephone}</label>
                        
                      </div>
                      <br></br>
                      <div className = "row">
                            <label>Employee User Name: {this.state.employee.employeeuserName}</label>
                        
                      </div>
                      <br></br>
                      <div className = "row">
                            <label>Employee Password: {this.state.employee.employeepassword}</label>
                        
                      </div>
                      <br></br>
                      <div className = "row">
                            <label>Employee Address: {this.state.employee.employeeaddress}</label>
                        
                      </div>
                     </div>
                </div>
            </div>
        );
    }
}

export default ViewEmployeeComponent;