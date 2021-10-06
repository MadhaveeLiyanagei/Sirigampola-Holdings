import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";
import Pdf from "react-to-pdf";
import AdminEmployeeSideBar from "./AdminEmployeeSideBar";
import AdminNavbar from "./AdminNavbar";

const ref = React.createRef();
class EmployeeReport extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employee: [],

      searchId: "",
    };
  }

  componentDidMount() {
    EmployeeService.getEmployee().then((res) => {
      this.setState({ employee: res.data });
    });
  }

  render() {
    let filterName = this.state.employee.filter((employee) => {
      return (
        employee.employeename
          .toLowerCase()
          .indexOf(this.state.searchId.toLowerCase()) !== -1
      );
    });

    return (
      <>
        <div>
          <>
            <AdminNavbar />
            <AdminEmployeeSideBar />
          </>

          <div className="Post" ref={ref}>
            <div>
              <div className="container">
                <h2 className="text-center">Employee List</h2>

                <div className="row">
                  <table className="table table-striped table-bordered">
                    <thead>
                      <tr>
                        <th> Employee Name</th>
                        <th> Employee email</th>
                        <th> Employee phone</th>
                        <th> Employee userName</th>
                        <th> Employee password</th>
                        <th> Employee address</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filterName.map((employee) => (
                        //this.state.employee.map(
                        //employee =>
                        <tr key={employee.employeeid}>
                          <td>{employee.employeename} </td>
                          <td>{employee.employeeemail} </td>
                          <td>{employee.employeephone} </td>
                          <td>{employee.employeeusername}</td>
                          <td>{employee.employeepassword}</td>
                          <td>{employee.employeeaddress}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Pdf targetRef={ref} filename="EmployeeDetails.pdf">
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

export default EmployeeReport;
