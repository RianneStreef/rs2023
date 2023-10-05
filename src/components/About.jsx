import React, { useEffect } from "react";

import "../styles/About.css";

const About = (props) => {
  let { languageToUse } = props;

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
      <h3>{languageToUse.aboutTitle}</h3>
      <p>
        {languageToUse.about1} <span className="pink"> Rianne </span>
        {languageToUse.about2}
      </p>
      <p>
        {languageToUse.about3}
        <span className="pink"> {languageToUse.about4}</span>
        {languageToUse.about5}
        <span className="pink"> {languageToUse.about6}</span>
        {languageToUse.about7}
      </p>
      <p>{languageToUse.about8}</p>
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
