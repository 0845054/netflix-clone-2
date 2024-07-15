import React from "react";
import NavBar from "../navBar/NavBar";
import Hero from "../../assets/Hero.png";

import "./Landing.css";

type Props = {};

const Landing = (props: Props) => {
  return (
    <div className="landing-container">
      <NavBar />
      <div className="hero1-container">
        <img className="hero1-img" src={Hero} alt="missing"></img>
        <div className="hero1-info">
          <h1 style={{ fontSize: 48 }}>Unlimited movies, TV shows, and more</h1>
          <p style={{ fontSize: 24 }}>Watch anywhere. Cancel anytime.</p>
          <p style={{ fontSize: 20 }}>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="hero1-email-container">
            <input
              type="email"
              placeholder="Email address"
              className="email-input"
            />
            <button className="hero1-email-btn">Get Started {">"}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
