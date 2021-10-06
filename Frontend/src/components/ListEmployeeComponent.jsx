import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import SoloAlert from 'soloalert';
import AdminEmployeeSideBar from './AdminEmployeeSideBar';
import AdminNavbar from "./AdminNavbar";
import './HeaderUser.css';

class ListEmployeeComponent extends Component {

    constructor (props){
        super(props)

            this.state = {

                employee: [],
                searchId:''
             
            }

            this.addEmployee = this.addEmployee.bind(this);
            this.editEmployee = this.editEmployee.bind(this);
            this.deleteEmployee = this.deleteEmployee.bind(this);
        } 

        deleteEmployee(employeeid){
            SoloAlert.confirm({

                title: "Confirm Delete",
                body: "Are you sure",
                theme: "dark",
                useTransparency: true,
                onOk: async function () {
    
                    try {EmployeeService.deleteEmployee(employeeid)
                        await this.setState({
                            employee : this.State.employee.filter(employee => employee.employeeid !== employeeid)
                        });
                   
                
                         SoloAlert.alert({
                             title: "Welcome!",
                             body: "Deletion is successful",
                             icon: "success",
                             theme: "dark",
                             useTransparency: true,
                             onOk: function () {
                                 window.location = "/Employee"
                             },
     
                         });
     
                     } catch (err) {
                         SoloAlert.alert({
                             title: "Welcome!",
                             body: "Deletion is successful",
                             icon: "success",
                             theme: "dark",
                             useTransparency: true,
                             onOk: function () {
                                 window.location = "/Employee"
                             },
     
                         });
                     }
                 },
                 onCancel: function () {
                     SoloAlert.alert({
                         title: "Oops!",
                         body: "You canceled delete request",
                         icon: "warning",
                         theme: "dark",
                         useTransparency: true,
                         onOk: function () {
     
                         },
     
                     });
                 },
     
             })
     
     
         }
             
           
        //view employee

         viewEmployee(employeeid){
             this.props.history.push(`/view-employee/${employeeid}`);
         }
         
            //edit employee
        editEmployee(employeeid){
            this.props.history.push(`/update-employee/${employeeid}`);

        }

        
        componentDidMount(){
            EmployeeService.getEmployee().then((res)=>{
                this.setState({employee: res.data});
            })

         }
          //add employee
         addEmployee(){
            this.props.history.push('/add-employee');
        }

        searchEmployeeName(event){

            this.setState({ searchId: event.target.value.substr(0,
    
                20)});
            }



    render() {

        let filterName = this.state.employee.filter((

            employee)=>{

                return employee.employeename.toLowerCase().indexOf(this.state.searchId.toLowerCase())!==-1;

            }

        );

        return (
            <div>
                 <>
            <AdminNavbar />
          </>
                
                 <div className="container">
                <div class="topnav" >
                <a class="active" href="http://localhost:3000/profile">Buyer</a>
                     <a class="active" href="http://localhost:3000/Employee">Employee</a>
                     <a class="active" href="http://localhost:3000/Supplier">Supplier</a>
        </div>

               <h2 className="text-center">Employee List</h2> 
              
               <button className="btn btn-primary" onClick={this.addEmployee}>Add Employee</button> 
               <div className = "form-group col-md-4">

                 <input type="text" class="form-control" style={{marginLeft:0}} placeholder="Enter Employee Name" value={this.state.searchId} onChange={this.searchEmployeeName.bind(this)}/>

                </div> 
              
               <div className = "row">
                    
                    <table  className = "table table-striped table-bordered">
                    <thead>
                            <tr>
                                <th> Employee Name</th>
                                <th> Employee email</th>
                                <th> Employee phone</th>
                                <th> Employee userName</th>
                                <th> Employee password</th>
                                <th> Employee address</th>
                                <th> Actions</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                filterName.map(

                                    employee=>
                                //this.state.employee.map(
                                    //employee =>
                                    <tr key = {employee.employeeid}>
                                        <td>{employee.employeename} </td>
                                        <td>{employee.employeeemail} </td>
                                        <td>{employee.employeephone} </td>
                                        <td>{employee.employeeusername}</td>
                                        <td>{employee.employeepassword}</td>
                                        <td>{employee.employeeaddress}</td>


                                        <td>
                                        <button onClick={() => this.editEmployee(employee.employeeid)} className="button-up"><b>Update</b></button>
                                        <button style={{marginLeft: "10px"}} onClick={()=> this.deleteEmployee(employee.employeeid)} className="button-dele">Delete</button>
                                        <button style={{marginLeft: "10px"}} onClick={()=> this.viewEmployee(employee.employeeid)} className="button-view">View</button>
                                        </td>

                                     </tr>   
                                )
                            }
                        </tbody>

                        

                        </table>
                
                </div>
                <button className="btn btn-primary" onClick={this.addBuyer}>Employee Details report</button>
                </div>
            </div>
        );
    }
}

export default ListEmployeeComponent;