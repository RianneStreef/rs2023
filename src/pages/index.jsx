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

const IndexPage = function (props) {
  let { language, setLanguage } = props;
  let languageToUse = content.english;
  let countryCode = "";

  const [popUpFR, setPopUpFR] = useState(false);
  const [firstRender, setFirstRender] = useState(true);

  useEffect(() => {
    setLanguage("english");

    console.log(window.navigator.language);
    if (window.navigator.language === "fr") {
      setLanguage("french");
      window.location.href = "./fr/";
    }
  });

  var requestOptions = {
    method: "GET",
  };

  fetch(
    "https://api.geoapify.com/v1/ipinfo?&apiKey=fc83c402de874a349d862264c7e3701a",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => (countryCode = result.country.iso_code))
    .then((result) => {
      if (countryCode === "FR") {
        proposeFR();
      }
    })
    .catch((error) => console.log("error", error));

  function proposeFR() {
    setPopUpFR(true);
    console.log("propose FR");
  }

  function acceptFR() {
    setPopUpFR(false);
    setFirstRender(false);
  }

  function rejectFR() {
    setPopUpFR(false);
    setFirstRender(false);
  }

  return (
    <div>
      <Helmet>
        <title>Rianne Streef || Web Developer</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content={languageToUse.metaDescription} />
        <meta name="keywords" content={languageToUse.metaKeywords} />
        <link rel="canonical" href={intakeInfo.domainName} />
      </Helmet>

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
