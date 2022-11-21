import React, { useState } from "react";

import Header from "./Header";
import Footer from "./Footer";

import line from "../images/line-vertical.png";

const Layout = ({ children }) => {
  let [language, setLanguage] = useState("english");

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

      <a className="mail-link-vertical" href="mailto:contact@riannestreef.com">
        contact@riannestreef.com{" "}
        <img className="line-image-vertical" src={line} alt="" />
      </a>

      <Footer language={language} />
    </div>
  );
};

export default Layout;
