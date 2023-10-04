import React, { useState } from "react";
import { Link } from "gatsby";
// import CookieConsent from "react-cookie-consent";
// import { useCookies } from "react-cookie";
// import ReactGA from "react-ga";

import Header from "./Header";
import Footer from "./Footer";

import house from "../images/house.png";
import insta from "../images/instagram.png";
import github from "../images/github-pink.png";
import line from "../images/line-vertical.png";

const Layout = ({ children }) => {
  let [language, setLanguage] = useState("english");
  // const [cookies, setCookie] = useCookies(["cookieConsent"]);
  // ReactGA.initialize("G-SF8YF645KY");

  function storageEN() {
    sessionStorage.setItem("language", "english");
  }

  function storageFR() {
    sessionStorage.setItem("language", "french");
  }

  const childrenWithProps = React.Children.map(children, (child) =>
    React.cloneElement(child, {
      language,
      setLanguage,
    })
  );

  // useEffect(() => {
  //   if (cookies.cookieConsent === "true") {
  //     // Set up cookies here
  //   }
  // }, [cookies]);

  return (
    <>
      {/* <ReactGA> */}
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
            <Link to="/fr" onClick={() => storageFR()}>
              FR
            </Link>
          ) : (
            <Link to="/" onClick={() => storageEN()}>
              EN
            </Link>
          )}
        </div>
        <a
          className="mail-link-vertical"
          href="mailto:contact@riannestreef.com"
        >
          contact@riannestreef.com{" "}
          <img className="line-image-vertical" src={line} alt="" />
        </a>

        <Footer language={language} />
        {/* <CookieConsent
            onAccept={() => setCookie("cookieConsent", "true", { path: "/" })}
          >
            This website uses cookies to enhance the user experience.
          </CookieConsent> */}
      </div>
      {/* </ReactGA> */}
    </>
  );
};

export default Layout;
