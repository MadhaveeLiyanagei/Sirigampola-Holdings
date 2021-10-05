import React, { Component } from "react";
import EmployeeLeavesService from "../services/EmployeeLeavesService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
export default class CreateEmployeeLeavesComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employeeID: "",
      date: "",
      reason: "",

      employeeIDError: "",
      dateError: "",
      reasonError: "",
    };

    this.changeEmployeeIDHandler = this.changeEmployeeIDHandler.bind(this);
    this.changeDateHandler = this.changeDateHandler.bind(this);
    this.changeReasonHandler = this.changeReasonHandler.bind(this);
    this.saveEmployeeLeaves = this.saveEmployeeLeaves.bind(this);
  }

  notify() {
    toast.success("Leave successfully added!", {
      position: toast.POSITION.TOP_CENTER,
    });
  }

  notify1() {
    toast.error("Request for leave cancelled!", {
      position: toast.POSITION.TOP_CENTER,
    });
  }
  validate = () => {
    let employeeIDError = "";
    let dateError = "";
    let reasonError = "";

    if (!this.state.employeeID) {
      employeeIDError = "Employee ID is required";
    }
    if (!this.state.date) {
      dateError = "Date is required";
    }
    if (!this.state.reason) {
      reasonError = "A reason is required";
    }

    if (employeeIDError || dateError || reasonError) {
      this.setState({ employeeIDError, dateError, reasonError });
      return false;
    }

    return true;
  };

  saveEmployeeLeaves = (e) => {
    e.preventDefault();

    let employeeLeaves = {
      employeeID: this.state.employeeID,
      date: this.state.date,
      reason: this.state.reason,
    };

    const isValid = this.validate();
    if (isValid) {
      console.log("employeeLeaves => " + JSON.stringify(employeeLeaves));

      EmployeeLeavesService.createEmployeeLeaves(employeeLeaves).then((res) => {
        this.notify();
        this.props.history.push("/");
      });
    }
  };

  changeEmployeeIDHandler = (event) => {
    this.setState({ employeeID: event.target.value });
  };

  changeDateHandler = (event) => {
    this.setState({ date: event.target.value });
  };

  changeReasonHandler = (event) => {
    this.setState({ reason: event.target.value });
  };

  cancel() {
    this.notify();
    this.props.history.push("/");
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">
                <br></br>
                <u>
                  <b>Employee Leave Form</b>
                </u>
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
                      onChange={this.changeEmployeeIDHandler}
                    />
                    <div style={{ fontSize: 12, color: "red" }}>
                      {this.state.employeeIDError}{" "}
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
                      onChange={this.changeDateHandler}
                    />
                    <div style={{ fontSize: 12, color: "red" }}>
                      {this.state.dateError}{" "}
                    </div>
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
                      onChange={this.changeReasonHandler}
                    />
                    <div style={{ fontSize: 12, color: "red" }}>
                      {this.state.reasonError}{" "}
                    </div>
                  </div>
                  <br></br>
                  <table className="invntry_tbl_header">
                    <tbody>
                      <th>
                        <center>
                          <button
                            className="btn_green"
                            onClick={this.saveNotice}
                          >
                            Save
                          </button>
                        </center>
                      </th>
                      <th>
                        <center>
                          <button
                            className="btn_red"
                            onClick={this.cancel.bind(this)}
                          >
                            Cancel
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
