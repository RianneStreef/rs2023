import React, { useEffect } from "react";

import "../styles/Projects.css";
import folder from "../images/folder.png";
import github from "../images/github.png";
import link from "../images/link.png";

const Projects = () => {
  useEffect(() => {
    window.addEventListener("scroll", scrollImages);

    let projectCard1 = document.getElementById("project-card-1");
    let projectCard2 = document.getElementById("project-card-2");
    let projectCard3 = document.getElementById("project-card-3");
    let projectCard4 = document.getElementById("project-card-4");
    let projectCard5 = document.getElementById("project-card-5");
    let projectCard6 = document.getElementById("project-card-6");

    function scrollImages() {
      let scrollY = window.innerHeight;
      let slideElementProjects = document.getElementById("projects");

      let positionElementProjects =
        slideElementProjects.getBoundingClientRect();

      if (positionElementProjects.y < scrollY - 100) {
        slideElementProjects.classList.add("slide-up");
      }

      let positionProjectCard1 = projectCard1.getBoundingClientRect();
      let positionProjectCard2 = projectCard2.getBoundingClientRect();
      let positionProjectCard3 = projectCard3.getBoundingClientRect();
      let positionProjectCard4 = projectCard4.getBoundingClientRect();
      let positionProjectCard5 = projectCard5.getBoundingClientRect();
      let positionProjectCard6 = projectCard6.getBoundingClientRect();

      if (positionProjectCard1.y < scrollY) {
        projectCard1.classList.add("opaque");
      }

      if (positionProjectCard2.y < scrollY - 100) {
        projectCard2.classList.add("opaque");
      }

      if (positionProjectCard3.y < scrollY - 200) {
        projectCard3.classList.add("opaque");
      }

      if (positionProjectCard4.y < scrollY - 200) {
        projectCard4.classList.add("opaque");
      }

      if (positionProjectCard5.y < scrollY - 300) {
        projectCard5.classList.add("opaque");
      }

      if (positionProjectCard6.y < scrollY - 400) {
        projectCard6.classList.add("opaque");
      }
    }
  }, []);
  return (
    <div className="projects" id="projects">
      <h3>Other interesting projects </h3>
      <div className="project-cards">
        <div className="project-card" id="project-card-1">
          <div className="project-card-header">
            <img src={folder} alt="" className="project-icon" />
            <div className="project-links">
              <a href="https://github.com/RianneStreef/ctd-v2">
                <img src={github} alt="github-link" className="project-link" />
              </a>
              <a href="https://www.claireturner-design.com" target="blank">
                <img src={link} alt="website-link" className="project-link" />
              </a>
            </div>
          </div>
          <h4>Claire Turner Design</h4>
          <p>
            My personal logo designer! Site to show available products, and to
            contact the artist for personalized items, with web shop coming
            soon..
          </p>
          <p className="teck-list">Gatsby - Contentful</p>
        </div>

        <div className="project-card" id="project-card-2">
          <div className="project-card-header">
            <img src={folder} alt="" className="project-icon" />
            <div className="project-links">
              <a href="https://github.com/RianneStreef/zen-altitude">
                <img src={github} alt="github-link" className="project-link" />
              </a>
              <a
                href="https://www.zenaltitude-lesbelleville.com"
                target="blank"
              >
                <img src={link} alt="website-link" className="project-link" />
              </a>
            </div>
          </div>
          <h4>Zen Altitude</h4>
          <p>
            Massage therapist that offers massages, facial and leg treatments at
            home or in her treatment cabin in Val Thorens. Information and
            prices of all treatments are online.
          </p>
          <p>Gatsby - React - Javascript</p>
        </div>
        <div className="project-card" id="project-card-3">
          <div className="project-card-header">
            <img src={folder} alt="" className="project-icon" />
            <div className="project-links">
              <a href="https://github.com/RianneStreef/seb-gourmet-v2">
                <img src={github} alt="github-link" className="project-link" />
              </a>
              <a href="https://www.sebgourmet-traiteur.com" target="blank">
                <img src={link} alt="website-link" className="project-link" />
              </a>
            </div>
          </div>
          <h4>Seb Gourmet</h4>
          <p>
            Catereer that uses the website for information about his products
            and easy ways to contact them.
          </p>
          <p>Gatsby - React - Javascript</p>
        </div>
        <div className="project-card" id="project-card-4">
          <div className="project-card-header">
            <img src={folder} alt="" className="project-icon" />
            <div className="project-links">
              <a href="https://github.com/RianneStreef/rendez-vous">
                <img src={github} alt="github-link" className="project-link" />
              </a>
              <a href="https://www.lerendezvousvalthorens.com" target="blank">
                <img src={link} alt="website-link" className="project-link" />
              </a>
            </div>
          </div>

          <h4>Restaurant le Rendez Vous</h4>
          <p>
            General information of the restaurant, the menu, and contact
            information can be found on this website. Additionally there are QR
            codes that link to a mobile verion of the restaurant and bar menus.
          </p>
          <p>Gatsby - React - Javascript</p>
        </div>
        <div className="project-card" id="project-card-5">
          <div className="project-card-header">
            <img src={folder} alt="" className="project-icon" />
            <div className="project-links">
              <a href="https://github.com/RianneStreef/core-move-v2">
                <img src={github} alt="github-link" className="project-link" />
              </a>
              <a href="https://www.coremove.nl" target="blank">
                <img src={link} alt="website-link" className="project-link" />
              </a>
            </div>
          </div>
          <h4>Core Move</h4>
          <p>
            Physical therapist specialized in core strenght, moms and work
            posture. Information about these specialities and prices can be
            found on this website.
          </p>
          <p>Gatsby - React - Javascript</p>
        </div>
        <div className="project-card" id="project-card-6">
          <div className="project-card-header">
            <img src={folder} alt="" className="project-icon" />
            <div className="project-links">
              <a href="https://github.com/RianneStreef/vts2022">
                <img src={github} alt="github-link" className="project-link" />
              </a>
              <a href="https://www.vts-webdesign.com" target="blank">
                <img src={link} alt="website-link" className="project-link" />
              </a>
            </div>
          </div>
          <h4>VTS Web design</h4>
          <p>
            Information about my collaboration with graphic designer Xavier
            Diaz!
          </p>
          <p>Gatsby - React - Javascript</p>
        </div>
      </div>
      <div className="header-placeholder" />
    </div>
  );
};

export default Projects;
