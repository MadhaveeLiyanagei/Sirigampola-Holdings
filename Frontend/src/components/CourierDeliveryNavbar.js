import React from "react";
import { NavLink } from "react-router-dom";
import "./CourierDeliveryNavbar.css";



function CourierDeliveryNavbar() {
  return (

    
    <div class="topnav">
      <NavLink to="/courier" activeClassName="active">
        Courier
      </NavLink>

      <NavLink to="/delivery" activeClassName="active">
        Delivery
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

export default CourierDeliveryNavbar;
