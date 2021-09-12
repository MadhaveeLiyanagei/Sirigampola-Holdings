import React, { Component } from 'react'
import EmployeeLeavesService from '../services/EmployeeLeavesService';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

export default class CreateEmployeeLeavesComponent extends Component {
    constructor(props){
        super(props)

        this.state = {

            employeeID: '',
            date: '',
            reason: '',
            
        }

        this.changeEmployeeIDHandler = this.changeEmployeeIDHandler.bind(this);
        this.changeDateHandler = this.changeDateHandler.bind(this);
        this.changeReasonHandler = this.changeReasonHandler.bind(this);
        this.saveEmployeeLeaves = this.saveEmployeeLeaves.bind(this);
    }

    notify(){
        toast.warn('Leave requested!', {position: toast.POSITION.TOP_CENTER})
    }
 
    notify1(){
        toast.error('Leave request cancelled!', {position: toast.POSITION.TOP_CENTER})
    }


    saveEmployeeLeaves = (e)=>{
        e.preventDefault();

        let employeeLeaves = {employeeID: this.state.employeeID, date: this.state.date, reason: this.state.reason};

       
        console.log('employeeLeaves => ' + JSON.stringify(employeeLeaves));

        EmployeeLeavesService.createEmployeeLeaves(employeeLeaves).then(res =>{
                this.notify();
                this.props.history.push('/');
        });
        
    }

    changeEmployeeIDHandler = (event) =>{
       this.setState({employeeID: event.target.value});
    }
    
    changeDateHandler = (event) =>{
        this.setState({date: event.target.value});
     }

     changeReasonHandler = (event) =>{
        this.setState({reason: event.target.value});
     }

     cancel(){
         this.notify1();
         this.props.history.push('/');
     }



    render() {
        return (
            <div>
                <div className = "container">
                    <div className="row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                             <h3 className="text-center">Employee Leave Form</h3>
                               <div className = "card-body">
                                   <form>
                                        <div className="form-group">
                                            <label>Employee ID: </label>
                                            <input placeholder="Employee ID" name="employeeID" className="form-control" value={this.state.employeeID} onChange={this.changeEmployeeIDHandler}/>
                                            
                                        </div>

                                        <div className="form-group">
                                            <label>Date: </label>
                                            <input placeholder="Date" name="date" className="form-control" value={this.state.date} onChange={this.changeDateHandler}/>
                                            
                                        </div>

                                        <div className="form-group">
                                            <label>Reason: </label>
                                            <input placeholder="Reason" name="reason" className="form-control" value={this.state.reason} onChange={this.changeReasonHandler}/>
                                            
                                        </div>


                                        <button className="btn btn-success" onClick={this.saveEmployeeLeaves}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                     </form>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
