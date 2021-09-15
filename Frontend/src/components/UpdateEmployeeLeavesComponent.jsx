import React, { Component } from 'react'
import EmployeeLeavesService from '../services/EmployeeLeavesService';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import AdminEmployeeSideBar from './AdminEmployeeSideBar'


class UpdateEmployeeLeavesComponent extends Component {

    constructor(props){
        super(props)

        this.state = {

            leaveNumber: this.props.match.params.leaveNumber,
            employeeID: '',
            adminID: '',
            date: '',
            reason: '',
            status: '',
            isInEditMode : true


        }
        
        this.changeAdminIDHandler = this.changeAdminIDHandler.bind(this);
        this.changeStatusHandler = this.changeStatusHandler.bind(this);
        this.updateEmployeeLeaves = this.updateEmployeeLeaves.bind(this);
    }

    notify(){
        toast.warn('Updated successfully!', {position: toast.POSITION.TOP_CENTER})
    }
 
    notify1(){
        toast.error('Updation cancelled!', {position: toast.POSITION.TOP_CENTER})
    }


    changeEditMode = () =>{
        this.setState({
             isInEditMode: !this.state.isInEditMode
        });
    }


    componentDidMount(){
       EmployeeLeavesService.getEmployeeLeavesByLeaveNumber(this.state.leaveNumber).then((res) =>{

        let employeeLeaves = res.data;
        this.setState({ employeeID: employeeLeaves.employeeID,
            adminID: employeeLeaves.adminID,
            date : employeeLeaves.date,
            reason: employeeLeaves.reason,
            status: employeeLeaves.status

        });
       });

    }

    updateEmployeeLeaves = (e)=>{
        e.preventDefault();

        let employeeLeaves = {adminID: this.state.adminID, status: this.state.status};
        
        console.log('employeeLeaves => ' + JSON.stringify(employeeLeaves));


        EmployeeLeavesService.updateEmployeeLeaves(employeeLeaves, this.state.leaveNumber).then(res => {
               this.notify();
               this.props.history.push('/employeeLeaves');
        });
  }

    
    changeAdminIDHandler = (event) =>{
        this.setState({adminID: event.target.value});
     }

    

     changeStatusHandler = (event) =>{
        this.setState({status: event.target.value});
     }

     cancel(){
        this.notify1();
        this.props.history.push('/employeeLeaves');
     }

    render() {
        return (
            <div>
                 <>
                <AdminEmployeeSideBar/>
                </>
    
                <div className = "container">
                    <div className="row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                             <h3 className="text-center">Update Employee Leaves</h3>
                               <div className = "card-body">
                                   <form>
                                        <div className="form-group">
                                            <label>Employee ID: </label>
                                            <input placeholder="Employee ID" name="employeeID" className="form-control" value={this.state.employeeID} onChange={this.isInEditMode}/>  
                                        </div>

                                        <div className="form-group">
                                            <label>Admin ID: </label>
                                            <input placeholder="Admin ID" name="adminID" className="form-control" value={this.state.adminID} onChange={this.changeAdminIDHandler}/>
                                            
                                        </div>

                                        <div className="form-group">
                                            <label>Date: </label>
                                            <input placeholder="Date" name="date" className="form-control" value={this.state.date} onChange={this.isInEditMode}/>
                                            
                                        </div>

                                        <div className="form-group">
                                            <label>Reason: </label>
                                            <input placeholder="Reason" name="reason" className="form-control" value={this.state.reason} onChange={this.isInEditMode}/>
                                            
                                        </div>

                                        <div className="form-group">
                                            <label>Status: </label>
                                            <input placeholder="Status" name="status" className="form-control" value={this.state.status} onChange={this.changeStatusHandler}/>
                                            
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateEmployeeLeaves}>Update</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                     </form>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



    

export default UpdateEmployeeLeavesComponent;