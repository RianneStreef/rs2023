import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import "../../styles/global.css";

import { content } from "../../content/languages";
import intakeInfo from "../../content/intake";

import Intro from "../../components/Intro";
import About from "../../components/About";
import Things from "../../components/Things";
import Projects from "../../components/Projects";
import Contact from "../../components/Contact";

import ReactGA from "react-ga4";
import CookieConsent, {
  getCookieConsentValue,
  Cookies,
} from "react-cookie-consent";

const IndexPage = function (props) {
  let { language, setLanguage } = props;
  let languageToUse = content.french;

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

    setLanguage("french");
  });

  return (
    <div>
      <Helmet
        htmlAttributes={{
          lang: "fr",
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
      <Intro language={language} languageToUse={languageToUse} />
      <About language={language} languageToUse={languageToUse} />
      <Things language={language} languageToUse={languageToUse} />
      <Projects language={language} languageToUse={languageToUse} />
      <Contact language={language} languageToUse={languageToUse} />
    </div>
  );
};

export default IndexPage;
