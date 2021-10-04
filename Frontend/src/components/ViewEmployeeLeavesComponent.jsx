import React, { Component } from "react";
import EmployeeLeavesService from "../services/EmployeeLeavesService";
import AdminEmployeeSideBar from "./AdminEmployeeSideBar";
import Pdf from "react-to-pdf";

const ref = React.createRef();

/*View all the details of a single record*/

class ViewEmployeeLeavesComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      leaveNumber: this.props.match.params.leaveNumber,

      employeeLeaves: [],
    };
  }

  componentDidMount() {
    EmployeeLeavesService.getEmployeeLeavesByLeaveNumber(
      this.state.leaveNumber
    ).then((res) => {
      this.setState({ employeeLeaves: res.data });
    });
  }

  render() {
    return (
      <>
        <div>
          <div className="row">
            <>
              <AdminEmployeeSideBar />
            </>
          </div>
          <div className="react-pdf__Page__canvas_Single_View">
            <div className="Post" ref={ref}>
              <br></br>
              <div className="card col-md-6 offset-md-3">
                <h3 className="text-center">
                  {" "}
                  <u>View Employee leave Details </u>
                </h3>
                <div className="card-body">
                  <div className="row">
                    <label>
                      <b>Employee ID:</b>{" "}
                    </label>
                    <div>{this.state.employeeLeaves.employeeID}</div>
                  </div>
                  <br></br>
                  <br></br>
                  <div className="row">
                    <label>
                      <b>Date: </b>
                    </label>
                    <div>{this.state.employeeLeaves.date}</div>
                  </div>
                  <br></br>
                  <br></br>
                  <div className="row">
                    <label>
                      <b>Reason: </b>
                    </label>
                    <div>{this.state.employeeLeaves.reason}</div>
                  </div>
                  <br></br>
                  <br></br>
                  <div className="row">
                    <label>
                      <b>Status:</b>
                    </label>
                    <div>{this.state.employeeLeaves.status}</div>
                  </div>
                </div>
              </div>
              <br></br>
            </div>
          </div>
        </div>
        <Pdf targetRef={ref} filename="Employee Leave.pdf">
          {({ toPdf }) => (
            <button className="button-report" onClick={toPdf}>
              {" "}
              Generate Report
            </button>
          )}
        </Pdf>
      </>
    );
  }
}

export default ViewEmployeeLeavesComponent;