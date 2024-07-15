import React from "react";
import Logo from "../../assets/Logo.png";
import "./NavBar.css";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <div className="navbar-container">
      <img src={Logo} width={148} height={40} />
      <span className="navbar-right-container">
        <select className="language-select">
          <option className="language-option">English</option>
          <option className="language-option">Chinese</option>
          <option className="language-option">Japanese</option>
          <option className="language-option">Korean</option>
        </select>
        <button className="app-red-btn navbar-sigin-btn">Sign In</button>
      </span>
    </div>
  );
};

export default NavBar;
