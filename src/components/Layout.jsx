import React, { useState } from "react";
import { Link } from "gatsby";

import Header from "./Header";
import Footer from "./Footer";

import house from "../images/house.png";
import insta from "../images/instagram.png";
import github from "../images/github-pink.png";
import line from "../images/line-vertical.png";

const Layout = ({ children }) => {
  let [language, setLanguage] = useState("english");

  function storageEN() {
    sessionStorage.setItem("language", "english");
  }

  const childrenWithProps = React.Children.map(children, (child) =>
    React.cloneElement(child, {
      language,
      setLanguage,
    })
  );
  return (
    <div className="layout">
      <Header language={language} setLanguage={setLanguage} />
      <section className="main">{childrenWithProps}</section>
      <div className="social-link-vertical">
        <a
          href="https://www.vts-webdesign.com"
          target="_blank"
          rel="noreferrer"
        >
          <img className="social-link" src={house} alt="" />
        </a>
        <a
          href="https://www.instagram.com/vtswebdesign/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="social-link" src={insta} alt="" />
        </a>
        <a
          href="https://www.github.com/RianneStreef"
          target="_blank"
          rel="noreferrer"
        >
          <img className="social-link" src={github} alt="" />
        </a>
        <img className="line-image-vertical" src={line} alt="" />
      </div>
      <div className="language">
        {language === "english" ? (
          <Link to="/fr">FR</Link>
        ) : (
          <Link to="/" onClick={() => storageEN()}>
            EN
          </Link>
        )}
      </div>
      <a className="mail-link-vertical" href="mailto:contact@riannestreef.com">
        contact@riannestreef.com{" "}
        <img className="line-image-vertical" src={line} alt="" />
      </a>

      <Footer language={language} />
    </div>
  );
};

export default Layout;
