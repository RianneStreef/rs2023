import React, { useEffect } from "react";

import "../styles/Intro.css";

import { Link } from "gatsby";

const Intro = (props) => {
  let { language, languageToUse } = props;

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
      <p className="roboto">{languageToUse.intro1}</p>
      <h2 className="white">Rianne Streef.</h2>
      <h1>{languageToUse.intro2}</h1>
      <p>
        {languageToUse.intro3}
        <span className="pink">{languageToUse.intro4}</span>
        {languageToUse.intro5}
      </p>
      <div className="action-buttons">
        <Link to="#things" className="button">
          {languageToUse.intro6}
        </Link>
        <Link to="#contact" className="button">
          {languageToUse.intro7}
        </Link>
      </div>
    </div>
  );
};

export default Intro;
