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
            <u>Employee Leaves</u>
          </h2>

          <button className="button" onClick={this.generateLeavesReport}>
            <b>Generate Report</b>
          </button>
          <center>
            <br></br>
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
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
                  <th>Update</th>
                  <th>Delete</th>
                  <th>View</th>
                </tr>
              </thead>

              <tbody>
                {filterEmployeeID.map((employeeLeaves) => (
                  //this.state.employeeLeaves.map(
                  //employeeLeaves =>
                  <tr key={employeeLeaves.leaveNumber}>
                    <td>{employeeLeaves.employeeID}</td>
                    <td>{employeeLeaves.adminID}</td>
                    <td>{employeeLeaves.date}</td>
                    <td>{employeeLeaves.reason}</td>
                    <td>{employeeLeaves.status}</td>
                    <td>
                      <button
                        onClick={() =>
                          this.editEmployeeLeaves(employeeLeaves.leaveNumber)
                        }
                        className="button-up"
                      >
                        Update
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() =>
                          this.deleteEmployeeLeaves(employeeLeaves.leaveNumber)
                        }
                        className="button-dele"
                      >
                        Delete
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() =>
                          this.viewEmployeeLeaves(employeeLeaves.leaveNumber)
                        }
                        className="button-view "
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}

              </tbody>
            </table>
            <>
            <ParticleBackground />
          </>
          </center>
        </div>
      </div>
    );
  }
}
