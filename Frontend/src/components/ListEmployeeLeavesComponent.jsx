import React, { Component } from "react";
import EmployeeLeavesService from "../services/EmployeeLeavesService";
import AdminEmployeeSideBar from "./AdminEmployeeSideBar";
import SoloAlert from "soloalert";
import ParticleBackground from "../ParticleBackground";
export default class ListEmployeeLeavesComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employeeLeaves: [],
      searchId: "",
    };

    this.generateLeavesReport = this.generateLeavesReport.bind(this);
    this.editEmployeeLeaves = this.editEmployeeLeaves.bind(this);
    this.deleteEmployeeLeaves = this.deleteEmployeeLeaves.bind(this);
  }

  viewEmployeeLeaves(leaveNumber) {
    this.props.history.push(`/view-employeeLeaves/${leaveNumber}`);
  }

  editEmployeeLeaves(leaveNumber) {
    this.props.history.push(`/update-employeeLeaves/${leaveNumber}`);
  }

  generateLeavesReport() {
    this.props.history.push(`/leavegen`);
  }

  deleteEmployeeLeaves(leaveNumber) {
    SoloAlert.confirm({
      title: "Confirm Delete",
      body: "Are you sure",
      theme: "dark",
      useTransparency: true,
      onOk: async function () {
        try {
          EmployeeLeavesService.deleteEmployeeLeaves(leaveNumber);
          await this.setState({
            employeeLeaves: this.state.employeeLeaves.filter(
              (employeeLeaves) => employeeLeaves.leaveNumber !== leaveNumber
            ),
          });

          SoloAlert.alert({
            title: "Welcome!",
            body: "Deletion successful",
            icon: "success",
            theme: "dark",
            useTransparency: true,
            onOk: function () {
              window.location = "/employeeLeaves";
            },
          });
        } catch (err) {
          SoloAlert.alert({
            title: "Welcome!",
            body: "Deletion successful",
            icon: "success",
            theme: "dark",
            useTransparency: true,
            onOk: function () {
              window.location = "/employeeLeaves";
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
          onOk: function () {},
        });
      },
    });
  }

  componentDidMount() {
    EmployeeLeavesService.getEmployeeLeaves().then((res) => {
      this.setState({ employeeLeaves: res.data });
    });
  }

  searchLeavebyName(event) {
    this.setState({ searchId: event.target.value.substr(0, 20) });
  }

  render() {
    let filterEmployeeID = this.state.employeeLeaves.filter(
      (employeeLeaves) => {
        return (
          employeeLeaves.employeeID
            .toLowerCase()
            .indexOf(this.state.searchId.toLowerCase()) !== -1
        );
      }
    );

    var tableStyle = {
      border: "0.5px solid black",
    };
    return (
      <div>
        <div className="row">
          <>
            <AdminEmployeeSideBar />
          </>
          <table className="srchbr">
            <br></br>
            <tbody>
              <th className="tblclm">Search : </th>
              <th>
                <div className="form-group col-md-4">
                  <input
                    type="text"
                    class="form-control"
                    style={{ marginLeft: 0 }}
                    placeholder="Enter employee ID"
                    value={this.state.searchId}
                    onChange={this.searchLeavebyName.bind(this)}
                  />
                </div>
              </th>
            </tbody>
          </table>

          <h2 className="text-center">
            <br></br>
            <u>Employee Leaves</u>
            <br></br>
            <br></br>
          </h2>

          <button
            className="btn_listview_report_nav"
            onClick={this.generateLeavesReport}
          >
            <b>Generate Report</b>
          </button>
          <center>
            <br></br>
            <table className="tabletxtclr" style={tableStyle}>
              <thead>
                <tr style={tableStyle}>
                  <th>
                    <center>
                      <h5>Employee ID</h5>
                    </center>
                  </th>
                  <th>
                    <center>
                      <h5>Admin ID</h5>
                    </center>
                  </th>
                  <th>
                    <center>
                      <h5>Date</h5>
                    </center>
                  </th>
                  <th>
                    <center>
                      <h5>Reason</h5>
                    </center>
                  </th>
                  <th>
                    <center>
                      <h5>Status</h5>
                    </center>
                  </th>
                  <th>
                    <center>
                      <h5>Update</h5>
                    </center>
                  </th>
                  <th>
                    <center>
                      <h5>Delete</h5>
                    </center>
                  </th>
                  <th>
                    <center>
                      <h5>View</h5>
                    </center>
                  </th>
                </tr>
              </thead>

              <tbody>
                {filterEmployeeID.map((employeeLeaves) => (
                  //this.state.employeeLeaves.map(
                  //employeeLeaves =>
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
                    <td>
                      <center>
                        <button
                          onClick={() =>
                            this.editEmployeeLeaves(employeeLeaves.leaveNumber)
                          }
                          className="button-up"
                        >
                          <b> Update</b>
                        </button>
                      </center>
                    </td>
                    <td>
                      <center>
                        <button
                          onClick={() =>
                            this.deleteEmployeeLeaves(
                              employeeLeaves.leaveNumber
                            )
                          }
                          className="button-dele"
                        >
                          <b> Delete</b>
                        </button>
                      </center>
                    </td>
                    <td>
                      <center>
                        <button
                          onClick={() =>
                            this.viewEmployeeLeaves(employeeLeaves.leaveNumber)
                          }
                          className="button-view "
                        >
                          <b> View</b>
                        </button>
                      </center>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <br></br>
          </center>
        </div>
      </div>
    );
  }
}