import React from "react";

import "../styles/Header.css";

import logo from "../images/icon.png";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="unicorn logo" className="header-logo" />
      <div className="nav-bar">
        <ul className="nav-links">
          <li className="nav-link">01. About me</li>
          <li className="nav-link">02. Work</li>
          <li className="nav-link">03. Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
