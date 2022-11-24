import React, { useEffect } from "react";

import "../styles/Intro.css";

import { Link } from "gatsby";

const Intro = () => {
  useEffect(() => {
    let slideElement1 = document.getElementById("slide-element-1");

    const timer = setTimeout(() => {
      slideElement1.classList.add("opaque");
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="intro" id="slide-element-1">
      <div className="header-placeholder" />
      <p className="roboto">Hi! My name is</p>
      <h2 className="white">Rianne Streef.</h2>
      <h1>I build things for the web.</h1>
      <p>
        I'm Rianne, a freelance web developer from Val Thorens and I create{" "}
        <span className="pink">
          responsive websites and mobile applications.{" "}
        </span>
        I like development, tech, and unicorns.
      </p>
      <div className="action-buttons">
        <Link to="#things" className="button">
          Check out my projects
        </Link>
        <Link to="#contact" className="button">
          Let's talk!
        </Link>
      </div>
    </div>
  );
};

export default Intro;
