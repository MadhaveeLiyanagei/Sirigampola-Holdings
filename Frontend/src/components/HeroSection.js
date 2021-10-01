import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import ParticleBackground from "../ParticleBackground";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/home.mp4" autoPlay loop muted />

      <h1>WELCOME</h1>
      <table>
        <tbody>
          <th>
            <div className="hero-btns">
              <Button
                className="btns"
                buttonStyle="btn--outline"
                buttonSize="btn--large"
              >
                CONTACT US
              </Button>
            </div>
          </th>
          <th>
            <div className="hero-btns">
              <Button
                className="btns"
                buttonStyle="btn--primary"
                buttonSize="btn--large"
              >
                CONTACT US
                <i className="far fa-play-circle" />
              </Button>
            </div>
          </th>
        </tbody>
      </table>
    </div>
  );
}

export default HeroSection;
