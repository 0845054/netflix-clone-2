import React from "react";
import NavBar from "../navBar/NavBar";
import Hero from "../../assets/Hero.png";
import Popcorn from "../../assets/Popcorn.png";

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
      <div className="hero2-container">
        <img src={Popcorn} alt="missing" />
        <div className="hero2-info">
          <p style={{ fontSize: 20, fontWeight: 600, margin: 0 }}>
            The Netflix you love for just $6.99.
          </p>
          <p style={{ fontSize: 18, fontWeight: 400, margin: 0 }}>
            Get the standard with ads plan.
          </p>
          <a href="" className="hero2-link">
            Learn More {">"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Landing;
