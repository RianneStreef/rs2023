import React, { useEffect } from "react";

import "../styles/Things.css";

import thing1 from "../images/projectZenith.jpg";
import thing2 from "../images/projectPraly.jpg";

import github from "../images/github.png";
import link from "../images/link.png";

const Things = () => {
  useEffect(() => {
    window.addEventListener("scroll", scrollImages);
    let slideElement3 = document.getElementById("things");

    function scrollImages() {
      let scrollY = window.innerHeight;
      let positionElement3 = slideElement3.getBoundingClientRect();

      if (positionElement3.y < scrollY - 100) {
        slideElement3.classList.add("slide-up");
      }
    }
  }, []);
  return (
    <div className="things" id="things">
      <div className="header-placeholder" />
      <h3>02. Some cool things I've made</h3>
      <div className="thing">
        <img
          src={thing1}
          className="thing-image"
          alt="website Zenith Ski Shop"
        />
        <div className="thing-text thing-text-1">
          <p>Featured project</p>
          <h4>Zenith Ski Shop</h4>

          <div className="thing-description">
            <p>
              A website for a ski shop located in Val Thorens. The site shows
              all the necessary information and has a reservation system linked
              to it.
            </p>
          </div>
          <p className="teck-list">Gatsby - React - JavaScript</p>

          <div className="project-links">
            <a
              href="https://github.com/RianneStreef/zenith-v1-2"
              target="blank"
              rel="noreferrer"
            >
              <img src={github} alt="github-link" className="project-link" />
            </a>

            <a
              href="https://www.zenith-skishop.com"
              target="blank"
              rel="noreferrer"
            >
              <img src={link} alt="website-link" className="project-link" />
            </a>
          </div>
        </div>
      </div>
      <div className="thing thing-reverse">
        <img
          src={thing2}
          alt="website Les Lodges de Praly"
          className="thing-image"
        />
        <div className="thing-text-reverse thing-text-2">
          <p>Featured project</p>
          <h4>Les Lodges de Praly</h4>

          <div className="thing-description thing-description-reverse">
            <p>
              A website for a Bed & Breakfast located in Les
              Ollières-sur-Eyrieux , France. The site shows information on all
              the available lodgings and reservations can be made on the
              website.
            </p>
          </div>
          <p className="teck-list">Gatsby - Contentful - Smoobu</p>

          <div className="project-links">
            <a
              href="https://github.com/RianneStreef/praly-v2"
              target="blank"
              rel="noreferrer"
            >
              <img src={github} alt="github-link" className="project-link" />
            </a>
            <a
              href="https://www.leslodgesdepraly.fr"
              target="blank"
              rel="noreferrer"
            >
              <img src={link} alt="website-link" className="project-link" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Things;
