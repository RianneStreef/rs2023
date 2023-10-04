// import React, { useState } from "react";
// import { Helmet } from "react-helmet";

// import "../styles/Paypal.css";

// import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

// const Paypal = () => {
//   let [amount, setAmount] = useState(0.01);
//   let [currency, setCurrency] = useState("EUR");

//   const handleInput = (event) => {
//     const newAmount = event.target.value;
//     setAmount(newAmount);
//   };

//   const handleCurrencyChange = (event) => {
//     const newCurrency = event.target.value;
//     setCurrency(newCurrency);
//   };

//   const createOrder = (data, actions) => {
//     console.log("creating order for");
//     console.log(amount);
//     console.log(currency);
//     return actions.order.create({
//       purchase_units: [
//         {
//           amount: {
//             value: amount,
//           },
//         },
//       ],
//     });
//   };

//   const [success, setSuccess] = useState(false);
//   const [error, setError] = useState(false);

//   const SCRIPT_PROVIDER_OPTIONS = {
//     "client-id": "test",
//     currency: currency,
//   };

//   console.log("SCRIPT_PROVIDER_OPTIONS");
//   console.log(SCRIPT_PROVIDER_OPTIONS);

//   const onApprove = (data, actions) => {
//     console.log("order approved");

//     return actions.order.capture().then(function (orderData) {
//       // Full available details
//       console.log(
//         "Capture result",
//         orderData,
//         JSON.stringify(orderData, null, 2)
//       );

//       setSuccess(true);
//     });
//   };

//   const onError = (err) => {
//     console.log(err);
//     setError(true);
//   };

//   function reloadPage() {
//     setSuccess(false);
//   }

//   return (
//     <>
//       <Helmet>
//         <script
//           src={`https://www.paypal.com/sdk/js?client-id=${process.env.PAYPAL_CLIENT_ID}`}
//         ></script>
//       </Helmet>
//       <div className="header-placeholder" />
//       <div className="paypal-text">
//         <div className="paypal-message">
//           {success ? (
//             <>
//               <h1>Thank you for your transaction!</h1>
//               <button onClick={reloadPage}>Back to Homepage</button>
//             </>
//           ) : (
//             <h1>Pay your invoice</h1>
//           )}
//         </div>
//       </div>
//       <div className={`paypal-amount${success ? " hidden" : ""}`}>
//         <label htmlFor="amount">
//           Amount:{" "}
//           <input
//             type="number"
//             id="amount"
//             name="amount"
//             onChange={handleInput}
//           />
//           <select onChange={handleCurrencyChange} defaultValue="EUR">
//             <option value="EUR">€</option>
//             <option value="USD">$</option>
//           </select>
//         </label>
//       </div>
//       <div id="paypal-buttons" className={`${success ? " hidden" : ""}`}>
//         <PayPalScriptProvider
//           options={SCRIPT_PROVIDER_OPTIONS}
//           forceReRender={[SCRIPT_PROVIDER_OPTIONS]}
//         >
//           <PayPalButtons
//             style={{
//               layout: "vertical",
//               color: "silver",
//               shape: "pill",
//               label: "paypal",
//             }}
//             createOrder={(data, actions) => createOrder(data, actions)}
//             onApprove={(data, actions) => onApprove(data, actions)}
//             forceReRender={[amount]}
//           />
//         </PayPalScriptProvider>
//       </div>

//       {error ? (
//         <>
//           <h2 className="error">An error occurred</h2>
//         </>
//       ) : null}
//     </>
//   );
// };

// export default Paypal;
