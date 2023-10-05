import React, { useEffect } from "react";

import "../styles/Contact.css";

const Contact = (props) => {
  let { languageToUse } = props;

  useEffect(() => {
    window.addEventListener("scroll", scrollImages);
    let slideElementContact = document.getElementById("contact");

    function scrollImages() {
      let scrollY = window.innerHeight;
      let positionElementContact = slideElementContact.getBoundingClientRect();

      if (positionElementContact.y < scrollY - 100) {
        slideElementContact.classList.add("slide-up");
      }
    }
  }, []);
  return (
    <div className="contact" id="contact">
      <div className="header-placeholder" />

      <h3>{languageToUse.contactTitle}</h3>

      <div className="form-container">
        <form
          className="contact-form"
          name="contact"
          method="post"
          data-netlify="true"
          action="/success"
          netlify-honeypot="bot-field"
        >
          <input
            className="contact-input"
            type="hidden"
            name="contact"
            value="contact"
          />
          <p className="hidden">
            <label>
              Don’t fill this out if you’re human: <input name="bot-field" />
            </label>
          </p>
          <input type="hidden" name="form-name" value="contact" />
          <p className="form-items">
            <label htmlFor="name">{languageToUse.name}</label> <br />
            <input
              className="input"
              type="text"
              id="name"
              name="name"
              required
            />
          </p>
          <p className="form-items">
            <label htmlFor="email">{languageToUse.email}</label> <br />
            <input
              className="input"
              type="email"
              id="email"
              name="email"
              required
            />
          </p>
          <p className="form-items">
            <label htmlFor="message">{languageToUse.message}</label> <br />
            <textarea id="message" name="message" rows="8" required></textarea>
          </p>
          <div className="center-button-container">
            <button className="button" type="submit" value="Submit message">
              {languageToUse.send}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
