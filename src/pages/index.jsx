import React from "react";
import { Helmet } from "react-helmet";

import "../styles/global.css";

import Layout from "../components/Layout";
import Intro from "../components/Intro";
import About from "../components/About";
import Things from "../components/Things";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const IndexPage = function (props) {
  let { language, setLanguage } = props;

  return (
    <div>
      <Helmet>
        <title>Rianne Streef || Web Developer</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <link rel="canonical" href="" />
      </Helmet>
      <Layout>
        <Intro />
        <About />
        <Things />
        <Projects />
        <Contact />
      </Layout>
    </div>
  );
};

export default IndexPage;
