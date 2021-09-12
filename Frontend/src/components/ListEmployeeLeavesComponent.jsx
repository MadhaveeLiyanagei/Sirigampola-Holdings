import React, { Component } from 'react'
import EmployeeLeavesService from '../services/EmployeeLeavesService';

export default class ListEmployeeLeavesComponent extends Component {
   constructor(props){
       super(props)

        this.state = {
            employeeLeaves: []
        }
    }

    viewEmployeeLeaves(leaveNumber){
        this.props.history.push(`/view-employeeLeaves/${leaveNumber}`);
      }
  
      editEmployeeLeaves(leaveNumber){
          this.props.history.push(`/update-employeeLeaves/${leaveNumber}`);
      }
  
      deleteEmployeeLeaves(leaveNumber){
          EmployeeLeavesService.deleteEmployeeLeaves(leaveNumber).then(res =>{
              this.setState({employeeLeaves: this.state.employeeLeaves.filter(employeeLeaves => employeeLeaves.leaveNumber !== leaveNumber)});
          });
      }

    componentDidMount(){
        EmployeeLeavesService.getEmployeeLeaves().then((res) =>{
            this.setState({employeeLeaves:res.data});
        });
    }
   

    render() {
        return (
            <div>
                 <h2 className="text-center"> Employee Leaves</h2>
                 <div className = "row">
                    <center>
                    <table className = "table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th><center>Employee ID</center></th>
                                <th><center>Admin ID</center></th>
                                <th><center>Date</center></th>
                                <th><center>Reason</center></th>
                                <th><center>Status</center></th>
                                <th></th>
                                <th></th>
                                <th></th>
                           </tr>
                        </thead>

                            <tbody>
                                {
                                    this.state.employeeLeaves.map(
                                        employeeLeaves =>
                                        <tr key = {employeeLeaves.leaveNumber}>
                                            <td>{employeeLeaves.employeeID}</td>
                                            <td>{employeeLeaves.adminID}</td>
                                            <td>{employeeLeaves.date}</td>
                                            <td>{employeeLeaves.reason}</td>
                                            <td>{employeeLeaves.status}</td>
                                            <td>
                                          <button onClick = { () => this.editEmployeeLeaves(employeeLeaves.leaveNumber)} className= "btn btn-info">Update</button>
                                           </td>
                                           <td>
                                          <button onClick = { () => this.deleteEmployeeLeaves(employeeLeaves.leaveNumber)} className= "btn btn-danger">Delete</button>
                                          </td>
                                          <td>
                                          <button onClick = { () => this.viewEmployeeLeaves(employeeLeaves.leaveNumber)} className= "btn btn-info">View</button>
                                         </td>
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
