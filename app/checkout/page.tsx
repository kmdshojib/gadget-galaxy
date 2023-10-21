"use client";
import { Elements, CardElement, PaymentElement } from "@stripe/react-stripe-js";

import { loadStripe } from "@stripe/stripe-js";
import React from "react";

const stripe = loadStripe(`${process.env.stripe_key}`);
const Checkout = () => {
  const options = {
    clientSecret: `{{${process.env.stripe_secretkey}}}`,
  };
  const clientSecret ={clientSecret:`{{${process.env.stripe_secretkey}}}`}
  return (
    <div>
      <Elements stripe={stripe} options={clientSecret}>
      <form>
          <div>
            {/* <PaymentElement /> */}
 
            <button type="button" className="pay-button">
              Checkout
            </button>
          </div>
        </form>
      </Elements>
    </div>
  );
};

export default Checkout;
