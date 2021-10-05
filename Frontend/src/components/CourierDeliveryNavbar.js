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

      <NavLink to="/AdminHome" activeClassName="active">
        Leave
      </NavLink>

    </div>
  );
}

export default CourierDeliveryNavbar;
