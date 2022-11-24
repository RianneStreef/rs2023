import React, { useEffect } from "react";

import "../styles/About.css";

const About = () => {
  useEffect(() => {
    window.addEventListener("scroll", scrollImages);
    let slideElementAbout = document.getElementById("about");

    function scrollImages() {
      let scrollY = window.innerHeight;
      let positionElementAbout = slideElementAbout.getBoundingClientRect();

      if (positionElementAbout.y < scrollY - 100) {
        slideElementAbout.classList.add("slide-up");
      }
    }
  }, []);
  return (
    <div className="about" id="about">
      <div className="header-placeholder" />
      <h3>01. About Me</h3>
      <p>
        Hello! My name is <span className="pink"> Rianne </span>and I like
        writing codes and solving problems.
      </p>
      <p>
        I started coding in the first lock down, starting out with HTML and CSS.
        Soon after I decided to do a course on{" "}
        <span className="pink">web development</span>. Now, I create websites as
        a <span className="pink">freelancer</span>, and eager to learn loads
        more!
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
          <li>&#10003; Google Analytics and Search Console</li>
        </ul>
      </div>
      <div className="header-placeholder" />
    </div>
  );
};

export default About;
