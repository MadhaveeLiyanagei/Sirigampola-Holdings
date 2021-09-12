import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

class ListEmployeeComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            employees: []

        }
        this.ViewEmployeeLeaves = this.ViewEmployeeLeaves.bind(this);
    }

    componentDidMount(){
        EmployeeService.getEmployees().then((res) =>{
            this.setState({employees:res.data});
        });
    }

    ViewEmployeeLeaves(){

        this.props.history.push('/employeeLeaves');

    }

    render() {
        return (
            <div>
                <h2 className="text-center">Employees List</h2><br/><br/>
                <div className = "row">
                    <button className = "btn-btn-primary" onClick={this.ViewEmployeeLeaves}>Employee Leaves</button>
                </div>
                
                
                
                
                <div className = "row">
                    <center>
                    <table className = "table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th><center>Employee First Name</center></th>
                                <th><center>Employee Last Name</center></th>
                                <th><center>Employee Email Address</center></th>
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