import React from "react";
import { Helmet } from "react-helmet";

import { content } from "../content/languages";
import intakeInfo from "../content/intake";

const Payment = (props) => {
  let { language, setLanguage } = props;

  let languageToUse = content.english;
  return (
    <div>
      <Helmet
        htmlAttributes={{
          lang: "en",
        }}
      >
        {/* <script async src="https://js.stripe.com/v3/buy-button.js"></script> */}
        <title>Rianne Streef || Web Developer</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content={languageToUse.metaDescription} />
        <meta name="keywords" content={languageToUse.metaKeywords} />
        <link rel="canonical" href={intakeInfo.domainName} />
      </Helmet>
      <div className="header-placeholder" />
      Payment
      {/* <stripe-buy-button
        buy-button-id="'{{BUY_BUTTON_ID}}'"
        publishable-key="pk_test_oKhSR5nslBRnBZpjO6KuzZeX"
      ></stripe-buy-button> */}
    </div>
  );
};

export default Payment;
