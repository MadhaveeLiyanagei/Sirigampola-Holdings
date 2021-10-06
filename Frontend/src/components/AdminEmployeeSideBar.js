import React from "react";
import { NavLink } from "react-router-dom";
import "./AdminEmployeeSideBar.css";

/*implementation of AdminEmployeeSideBar*/
function AdminEmployeeSideBar() {
  return (
    <div class="topnav">
      <NavLink to="/Employee" activeClassName="active">
        Employees
      </NavLink>

      <NavLink to="/adNotices" activeClassName="active">
        Notices
      </NavLink>

      <NavLink to="/employeeLeaves" activeClassName="active">
        Leaves
      </NavLink>

      <a href="https://mysliit-my.sharepoint.com/:x:/g/personal/it20252304_my_sliit_lk/Ee5Ofp5ZrJpPuSHHEKK8aXoBzzNGakeqhjr_xXXoFWmvzg?e=4sPaEV">
        Attendance
      </a>
      
      <a href="https://mysliit-my.sharepoint.com/:x:/g/personal/it20252304_my_sliit_lk/EZESOUBugetKhawZxjaDSTgBLNQPqbJKnM2Z5g1_rlKkyQ?e=B6Feir">
        Payroll
      </a>
    </div>
  );
}

export default AdminEmployeeSideBar;
