import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
     <center>
      <table className="footertable"> <center>
        <tbody>
          <th className="footertablerow">
            <div class="footer-logo">
              <Link to="/" className="social-logo">
                <img class="logo" src="./images/shlogo.png" alt="" />
                SIRIGAMPOLA HOLDINGS
              </Link>
            </div>
          </th>
          <th style={{width:"180px"}}></th>

          <th className="footertablerow1">
            <small class="website-rights">SIRIGAMPOLA HOLDINGS ©️ 2021</small>
          </th>

          <th style={{width:"180px"}}></th>


          <th className="footertablerow1"><tr>Contact us</tr>
            <section class="social-media">
              <div class="social-media-wrap">
                <div class="social-icons">
                  <Link
                    class="social-icon-link facebook"
                    to="/"
                    target="_blank"
                    aria-label="Facebook"
                  >
                    <a href="https://www.facebook.com/SirigampolaHoldings">
                      {" "}
                      <i class="fab fa-facebook-f" />{" "}
                    </a>
                  </Link>
                  <Link
                    class="social-icon-link instagram"
                    to="/"
                    target="_blank"
                    aria-label="Instagram"
                  >
                    <a href="https://www.instagram.com/brave_apparels/">
                      {" "}
                      <i class="fab fa-instagram" />
                    </a>
                  </Link>
                  <Link
                    class="social-icon-link youtube"
                    to="/"
                    target="_blank"
                    aria-label="Youtube"
                  >
                    <i class="fab fa-youtube" />
                  </Link>
                  <Link
                    class="social-icon-link twitter"
                    to="/"
                    target="_blank"
                    aria-label="Twitter"
                  >
                    <a href="https://www.linkedin.com/company/sirigampola/">
                      <i class="fab fa-linkedin" />
                    </a>
                  </Link>
                </div>
              </div>
            </section>
          </th>
        </tbody></center>
      </table></center>
    </div>
  );
}

export default Footer;
