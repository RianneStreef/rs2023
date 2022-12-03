import React from "react";

import "../styles/Footer.css";

import { content } from "../content/languages";

const Footer = (props) => {
  let languageToUse = "";
  let { language } = props;

  language === "french"
    ? (languageToUse = content.french)
    : (languageToUse = content.english);

  return (
    <div className="footer">
      <div className="footer-links"></div>
      <p className="footer-text">
        {languageToUse.copyright} Rianne Streef<sup> © </sup> -{" "}
        {languageToUse.logo}
        <a
          href="https://www.claireturner-design.com"
          target="_blank"
          rel="noreferrer"
        >
          Claire Turner
        </a>
      </p>
    </div>
  );
};

export default Footer;
