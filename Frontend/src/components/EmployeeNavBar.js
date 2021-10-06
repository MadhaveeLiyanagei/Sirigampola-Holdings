import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css";

function EmployeeNavBar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener("resize", showButton);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div class="footer-logo">
            <Link to="/home" className="navbar-logo" onClick={closeMobileMenu}>
              <img class="logo" src="./images/shlogo.png" alt="" /><b> SIRIGAMPOLA
              HOLDINGS</b>
            </Link>
          </div>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/add-employeeLeaves"
                className="nav-links"
                onClick={closeMobileMenu}
              >
               Leaves
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/employeeViewNotice"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Notices
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/Profile"
                className="nav-links"
                onClick={closeMobileMenu}
              >
               Profile
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/aboutUs"
                className="nav-links"
                onClick={closeMobileMenu}
              >
               About Us
              </Link>
            </li>

           

          </ul>
          {button && <Button buttonStyle="btn--outline"> SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default EmployeeNavBar;


/*<li className="nav-item">
<Link
  to="/inventory"
  className="nav-links"
  onClick={closeMobileMenu}
>
  Delivery
</Link>
</li>*/
