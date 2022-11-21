import React from "react";

import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="header-placeholder" />

      <h3>04. Let's talk!</h3>

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
            <label htmlFor="name">Name:</label> <br />
            <input
              className="input"
              type="text"
              id="name"
              name="name"
              required
            />
          </p>
          <p className="form-items">
            <label htmlFor="email">Email:</label> <br />
            <input
              className="input"
              type="email"
              id="email"
              name="email"
              required
            />
          </p>
          <p className="form-items">
            <label htmlFor="message">Message:</label> <br />
            <textarea id="message" name="message" rows="8" required></textarea>
          </p>
          <div className="center-button-container">
            <button className="button" type="submit" value="Submit message">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
