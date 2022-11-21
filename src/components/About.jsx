import React from "react";

import "../styles/About.css";

const About = () => {
  return (
    <div className="about">
      <h3>01. About Me</h3>
      <p>
        Hello! My name is <span className="pink"> Rianne </span>and I like
        writing codes and solving problems.
      </p>
      <p>
        I started coding in the first lock down, starting out with HTML and CSS.{" "}
      </p>
      <p>The main technologies I work with:</p>
      <div className="skills-lists">
        <ul className="skills-list">
          <li>&#10003; JavaScript</li>
          <li>&#10003; React</li>
          <li>&#10003; Gatsby</li>
        </ul>
        <ul className="skills-list">
          <li>&#10003; Contentful</li>
          <li>&#10003; GitHub</li>
          <li>&#10003; Google Analytics and Search Consol</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
