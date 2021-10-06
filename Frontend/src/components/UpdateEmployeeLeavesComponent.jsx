import React, { Component } from "react";
import EmployeeLeavesService from "../services/EmployeeLeavesService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminEmployeeSideBar from "./AdminEmployeeSideBar";
import AdminNavbar from "./AdminNavbar";

class UpdateEmployeeLeavesComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      leaveNumber: this.props.match.params.leaveNumber,
      employeeID: "",
      adminID: "",
      date: "",
      reason: "",
      status: "",
      statusError: "",
      adminIDError: "",
      isInEditMode: true,
    };

    this.changeAdminIDHandler = this.changeAdminIDHandler.bind(this);
    this.changeStatusHandler = this.changeStatusHandler.bind(this);
    this.updateEmployeeLeaves = this.updateEmployeeLeaves.bind(this);
  }

  notify() {
    toast.success("Updated successfully!", {
      position: toast.POSITION.TOP_CENTER,
    });
  }

  notify1() {
    toast.error("Updation cancelled!", { position: toast.POSITION.TOP_CENTER });
  }

  changeEditMode = () => {
    this.setState({
      isInEditMode: !this.state.isInEditMode,
    });
  };

  validate = () => {
    let adminIDError = "";
    let statusError = "";
    

    if (!this.state.adminID) {
      adminIDError = "Admin ID is required";
    }
    if (!this.state.status) {
      statusError = "Status is required";
    }
    
    

    if (adminIDError || statusError ) {
      this.setState({ adminIDError, statusError});
      return false;
    }

    return true;
  };

  componentDidMount() {
    EmployeeLeavesService.getEmployeeLeavesByLeaveNumber(
      this.state.leaveNumber
    ).then((res) => {
      let employeeLeaves = res.data;
      this.setState({
        employeeID: employeeLeaves.employeeID,
        adminID: employeeLeaves.adminID,
        date: employeeLeaves.date,
        reason: employeeLeaves.reason,
        status: employeeLeaves.status,
      });
    });
  }

  updateEmployeeLeaves = (e) => {
    e.preventDefault();

    let employeeLeaves = {
      adminID: this.state.adminID,
      status: this.state.status,
    };
    const isValid = this.validate();
    if (isValid) {
      console.log("employeeLeaves => " + JSON.stringify(employeeLeaves));
        EmployeeLeavesService.updateEmployeeLeaves( employeeLeaves, this.state.leaveNumber).then((res) => {
             this.notify();
             this.props.history.push("/employeeLeaves");
            }
            );
          }
        };
       

  changeAdminIDHandler = (event) => {
    this.setState({ adminID: event.target.value });
  };

  changeStatusHandler = (event) => {
    this.setState({ status: event.target.value });
  };

  cancel() {
    this.notify1();
    this.props.history.push("/employeeLeaves");
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
          <>
            <AdminNavbar />
            <AdminEmployeeSideBar />
          </>
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">
                <br></br>
                <u>Update Employee Leaves</u>
              </h3>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <br></br>
                    <label>
                      <b>Employee ID: </b>
                    </label>
                    <input
                      placeholder="Employee ID"
                      name="employeeID"
                      className="form-control"
                      value={this.state.employeeID}
                      onChange={this.isInEditMode}
                    />
                  </div>

                  <div className="form-group">
                    <br></br>
                    <label>
                      <b>Admin ID: </b>
                    </label>
                    <input
                      placeholder="Admin ID"
                      name="adminID"
                      className="form-control"
                      value={this.state.adminID}
                      onChange={this.changeAdminIDHandler}
                    />
                    <div style={{ fontSize: 12, color: "red" }}>
                      {this.state.adminIDError}{" "}
                    </div>
                  </div>

                  <div className="form-group">
                    <br></br>
                    <label>
                      <b>Date: </b>
                    </label>
                    <input
                      placeholder="Date"
                      name="date"
                      className="form-control"
                      value={this.state.date}
                      onChange={this.isInEditMode}
                    />
                  </div>

                  <div className="form-group">
                    <br></br>
                    <label>
                      <b>Reason: </b>
                    </label>
                    <input
                      placeholder="Reason"
                      name="reason"
                      className="form-control"
                      value={this.state.reason}
                      onChange={this.isInEditMode}
                    />
                    
                  </div>

                  <div className="form-group">
                    <br></br>
                    <label>
                      <b>Status: </b>
                    </label>
                    <input
                      placeholder="Status"
                      name="status"
                      className="form-control"
                      value={this.state.status}
                      onChange={this.changeStatusHandler}
                    />
                    <div style={{ fontSize: 12, color: "red" }}>
                      {this.state.statusError}{" "}
                    </div>
                  </div>
                  <br></br>
                  <br></br>

                  <table className="invntry_tbl_header">
                    <tbody>
                      <th>
                        <center>
                          <button
                            className="btn_update_update"
                            onClick={this.updateEmployeeLeaves}
                          >
                            <b>Update</b>
                          </button>
                        </center>
                      </th>
                      <th>
                        <center>
                          <button
                            className="btn_cancel_cancel"
                            onClick={this.cancel.bind(this)}
                          >
                            <b>Cancel</b>
                          </button>
                        </center>
                      </th>
                    </tbody>
                  </table>
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
