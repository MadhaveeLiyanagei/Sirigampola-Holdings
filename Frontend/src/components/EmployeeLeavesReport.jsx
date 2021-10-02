import React, { Component } from "react";
import EmployeeLeavesService from "../services/EmployeeLeavesService";
import Pdf from "react-to-pdf";
import AdminEmployeeSideBar from "./AdminEmployeeSideBar";

const ref = React.createRef();

export default class ListEmployeeLeavesComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employeeLeaves: [],
    };
  }

  componentDidMount() {
    EmployeeLeavesService.getEmployeeLeaves().then((res) => {
      this.setState({ employeeLeaves: res.data });
    });
  }

  render() {
    var tableStyle = {
      border: "0.5px solid black",
    };
    return (
      <>
        <div className="row">
          <>
            <AdminEmployeeSideBar />
          </>
        </div>
        <div className="react-pdf__Page__canvas_Single_View3">
            <div style={{ backgroundImage: "url(../images/back.jpg)" }}>
              Hello World

          <div className="Post" ref={ref}>
            <div>
              <div>
                <div className="row">
                  <h2 className="text-center">
                    <br></br>
                    <br></br>
                    <u>Employee Leaves</u>
                    <br></br>
                    <br></br>
                  </h2>
                  <center>
                    <br></br>
                    <table className="tabletxtclr" style={tableStyle}>
                      <thead>
                        <tr style={tableStyle}>
                          <th>
                            <center>Employee ID</center>
                          </th>
                          <th>
                            <center>Admin ID</center>
                          </th>
                          <th>
                            <center>Date</center>
                          </th>
                          <th>
                            <center>Reason</center>
                          </th>
                          <th>
                            <center>Status</center>
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        {this.state.employeeLeaves.map((employeeLeaves) => (
                          <tr key={employeeLeaves.leaveNumber}>
                            <td style={tableStyle}>
                              <center>{employeeLeaves.employeeID}</center>
                            </td>
                            <td style={tableStyle}>
                              <center>{employeeLeaves.adminID}</center>
                            </td>
                            <td style={tableStyle}>
                              <center>{employeeLeaves.date}</center>
                            </td>
                            <td style={tableStyle}>
                              <center>{employeeLeaves.reason}</center>
                            </td>
                            <td style={tableStyle}>
                              <center>{employeeLeaves.status}</center>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </center>
                </div>
              </div>
            </div>
          </div>
          <Pdf targetRef={ref} filename="EmployeeLeaves.pdf">
            {({ toPdf }) => (
              <button className="button-report2" onClick={toPdf}>
                {" "}
                Generate Report
              </button>
            )}
          </Pdf>
        </div></div>
      </>
    );
  }
}
