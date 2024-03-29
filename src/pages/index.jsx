import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import { Link } from "gatsby";

import "../styles/global.css";

import { content } from "../content/languages";
import intakeInfo from "../content/intake";

import Intro from "../components/Intro";
import About from "../components/About";
import Things from "../components/Things";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

import ReactGA from "react-ga4";
import CookieConsent, {
  getCookieConsentValue,
  Cookies,
} from "react-cookie-consent";

const IndexPage = function (props) {
  let { language, setLanguage } = props;
  let languageToUse = content.english;

  const [popUpFR, setPopUpFR] = useState(false);
  const [firstRender, setFirstRender] = useState(true);

  const initGA = (id) => {
    // if (process.env.NODE_ENV === "production") {
    console.log("InitGA");
    ReactGA.initialize(id);
    //}
  };

  const handleAcceptCookie = () => {
    initGA("G-SF8YF645KY");
  };

  const handleDeclineCookie = () => {
    Cookies.remove("_ga");
    Cookies.remove("_gat");
    Cookies.remove("_gid");
  };

  useEffect(() => {
    const isConsent = getCookieConsentValue();

    if (isConsent === "true") {
      handleAcceptCookie();
    }
    setLanguage("english");
    let countryCode = "";

    if (window.navigator.language === "fr") {
      setLanguage("french");
      window.location.href = "./fr/";
    }

    let languageInStorage = sessionStorage.getItem("language");
    let renderInStorage = JSON.parse(sessionStorage.getItem("firstRender"));

    if (renderInStorage === false) setFirstRender(renderInStorage);

    if (languageInStorage === "french") {
      setLanguage("french");
      window.location.href = "./fr/";
    }

    function proposeFR() {
      if (firstRender !== false) {
        setPopUpFR(true);
      }
    }

    if (firstRender === true) {
      var requestOptions = {
        method: "GET",
      };

      fetch(
        "https://api.geoapify.com/v1/ipinfo?&apiKey=fc83c402de874a349d862264c7e3701a",
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => (countryCode = result.country.iso_code))
        .then((result) => console.log(countryCode))
        .then((result) => {
          if (countryCode === "FR") {
            proposeFR();
          }
        })
        .catch((error) => console.log("error", error));
    }
  }, [firstRender, setLanguage]);

  function acceptFR() {
    setPopUpFR(false);
    setFirstRender(false);
    sessionStorage.setItem("firstRender", false);
    setLanguage("french");
    sessionStorage.setItem("language", "french");
  }

  function rejectFR() {
    setPopUpFR(false);
    setFirstRender(false);
    setLanguage("english");

    sessionStorage.setItem("firstRender", false);
    sessionStorage.setItem("language", "english");
  }

  return (
    <div>
      <Helmet
        htmlAttributes={{
          lang: "en",
        }}
      >
        <title>Rianne Streef || Web Developer</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content={languageToUse.metaDescription} />
        <meta name="keywords" content={languageToUse.metaKeywords} />
        <link rel="canonical" href={intakeInfo.domainName} />
      </Helmet>
      <CookieConsent
        enableDeclineButton
        onAccept={handleAcceptCookie}
        onDecline={handleDeclineCookie}
        buttonText={languageToUse.cookieAccept}
        declineButtonText={languageToUse.cookieDecline}
      >
        <p className="cookie-text-header">{languageToUse.cookieHeader}</p>
        <p className="cookie-text">{languageToUse.cookieText}</p>
      </CookieConsent>

      {!firstRender ? (
        <div />
      ) : popUpFR ? (
        <div className="pop-up-french">
          <p>
            You seem to be in France, would you like to be directed to my French
            page?
          </p>
          <Link to="/fr/" onClick={() => acceptFR()} className="button">
            YES
          </Link>
          <button onClick={() => rejectFR()} className="button">
            NO
          </button>
        </div>
      ) : null}

      <Intro language={language} languageToUse={languageToUse} />
      <About language={language} languageToUse={languageToUse} />
      <Things language={language} languageToUse={languageToUse} />
      <Projects language={language} languageToUse={languageToUse} />
      <Contact language={language} languageToUse={languageToUse} />
    </div>
  );
};

export default IndexPage;
