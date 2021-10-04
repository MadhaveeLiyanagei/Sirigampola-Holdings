import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'
import AdminEmployeeSideBar from './AdminEmployeeSideBar'

class ListEmployeeComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            employees: []

        }
    }

    componentDidMount(){
        EmployeeService.getEmployees().then((res) =>{
            this.setState({employees:res.data});
        });
    }

    

    render() {

        return (
            
            <div className="row">
                <>
                <AdminEmployeeSideBar/>
                </>
                <h2 className="text-center"><br></br><b><u>Employees List</u></b></h2><br/><br/>
                <div></div>
    
                <div className = "row">
                
                
                    <center><br></br>
                    <table className = "table table-striped table-bordered" >
                        <thead>
                            <tr>
                                
                                <th><center>Employee First Name</center></th>
                                <th><center>Employee Last Name</center></th>
                                <th><center>Employee NIC Number</center></th>
                                <th><center>Employee Email</center></th>
                                <th><center>Employee Department</center></th>
                                <th><center>Employee Type</center></th>
                                <th><center>Actions</center></th>
                            </tr>
                        </thead>

                            <tbody>
                                {
                                    this.state.employees.map(
                                        employees =>
                                        <tr key = {employees.id}>
                                            <td>{employees.firstName}</td>
                                            <td>{employees.lastName}</td>
                                            <td>{employees.emailId}</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                    </table>
                    </center>

                </div>
            </div>
            
        )
    }
}


export default ListEmployeeComponent