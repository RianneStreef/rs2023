import React from "react";

import "../styles/Things.css";

import thing1 from "../images/projectZenith.jpg";
import thing2 from "../images/projectPraly.jpg";

import github from "../images/github.png";
import link from "../images/link.png";

const Things = () => {
  return (
    <div className="things" id="things">
      <h3>02. Some cool things I've made</h3>
      <div className="thing">
        <img
          src={thing1}
          alt="website Les Lodges de Praly"
          className="thing-image"
        />
        <div className="thing-text thing-text-1">
          <p>Featured project</p>
          <h4>Zenith Ski Shop</h4>

          <div className="thing-description">
            <p>
              A website for a Bed & Breakfast located in France. The site shows
              all the necessary information and has a reservation system linked
              to it.
            </p>
          </div>
          <p className="teck-list">Gatsby - React - JavaScript</p>

          <div className="project-links">
            <a href="https://github.com/RianneStreef">
              <img src={github} alt="github-link" className="project-link" />
            </a>
            <a href="https://www.leslodgesdepraly.fr" target="blank">
              <img src={link} alt="website-link" className="project-link" />
            </a>
          </div>
        </div>
      </div>
      <div className="thing thing-reverse">
        <img
          src={thing2}
          alt="website Zenith Ski Shop"
          className="thing-image"
        />
        <div className="thing-text-reverse thing-text-2">
          <p>Featured project</p>
          <h4>Les Lodges de Praly</h4>

          <div className="thing-description thing-description-reverse">
            <p>
              A website for a Bed & Breakfast located in France. The site shows
              all the necessary information and has a reservation system linked
              to it.
            </p>
          </div>
          <p className="teck-list">Gatsby - Contentful - Smoobu</p>

          <div className="project-links">
            <a href="https://github.com/RianneStreef">
              <img src={github} alt="github-link" className="project-link" />
            </a>
            <a href="https://www.zenith-skishop.com" target="blank">
              <img src={link} alt="website-link" className="project-link" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Things;
