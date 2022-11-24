import React, { useEffect } from "react";
import { Link } from "gatsby";

import "../styles/Header.css";

import logo from "../images/icon.png";

const Header = () => {
  useEffect(() => {
    const nav = document.getElementById("nav");
    const scrollUp = "scroll-up";
    const scrollDown = "scroll-down";
    let lastScroll = 0;
    let currentScroll = 0;

    console.log(currentScroll);
    console.log("currentScroll");
    window.addEventListener("scroll", () => {
      currentScroll = window.pageYOffset;
      if (currentScroll <= 100) {
        nav.classList.remove(scrollUp);
        return;
      }

      if (currentScroll > lastScroll && !nav.classList.contains(scrollDown)) {
        nav.classList.remove(scrollUp);
        nav.classList.add(scrollDown);
      } else if (
        currentScroll < lastScroll &&
        nav.classList.contains(scrollDown)
      ) {
        nav.classList.remove(scrollDown);
        nav.classList.add(scrollUp);
      }
      lastScroll = currentScroll;
    });
  });

  return (
    <div className="header scroll-up" id="nav">
      <img src={logo} alt="unicorn logo" className="header-logo" />
      <div className="nav-bar">
        <ul className="nav-links">
          <li className="nav-link">
            <Link to="/#about"> 01. About</Link>
          </li>
          <li className="nav-link">
            <Link to="/#things"> 02. Work</Link>
          </li>
          <li className="nav-link">
            <Link to="/#contact"> 03. Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
