import React from "react";

import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-links"></div>
      <p className="footer-text">
        Build by Rianne Streef<sup> © </sup> - Logo design by{" "}
        <a
          href="https://www.claireturner-design.com"
          target="_blank"
          without
          rel="noreferrer"
        >
          Claire Turner
        </a>
      </p>
    </div>
  );
};

export default Footer;
