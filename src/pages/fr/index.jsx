import React from "react";
import { Helmet } from "react-helmet";

import "../../styles/global.css";

import { content } from "../../content/languages";
import intakeInfo from "../../content/intake";

import Intro from "../../components/Intro";
import About from "../../components/About";
import Things from "../../components/Things";
import Projects from "../../components/Projects";
import Contact from "../../components/Contact";

const IndexPage = function (props) {
  let { language, setLanguage } = props;
  setLanguage("french");
  let languageToUse = content.french;

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
      <Intro language={language} languageToUse={languageToUse} />
      <About language={language} languageToUse={languageToUse} />
      <Things language={language} languageToUse={languageToUse} />
      <Projects language={language} languageToUse={languageToUse} />
      <Contact language={language} languageToUse={languageToUse} />
    </div>
  );
};

export default IndexPage;
