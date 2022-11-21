import React from "react";

import "../styles/Intro.css";

import { Link } from "gatsby";

const Intro = () => {
  return (
    <div className="intro">
      <p className="roboto">Hi! My name is</p>
      <h2 className="white">Rianne Streef.</h2>
      <h1>I build things for the web.</h1>
      <p>
        I'm Rianne, a freelance web developer from Val Thorens. I create
        responsive websites and mobile applications. I like development, tech,
        and unicorns.
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
