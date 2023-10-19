"use client";
import { Elements, CardElement, PaymentElement } from "@stripe/react-stripe-js";

import { loadStripe } from "@stripe/stripe-js";
import React from "react";

const Checkout = () => {
  const stripe = loadStripe(`${process.env.stripe_key}`);

  return (
    <div>
      <Elements stripe={stripe}>
        <form>
          <div>
            {/* <PaymentElement /> */}
            <CardElement
              className="card"
              options={{
                style: {
                  base: {
                    fontSize: "16px",
                    color: "#424770",
                    "::placeholder": {
                      color: "#aab7c4",
                    },
                  },
                  invalid: {
                    color: "#9e2146",
                  },
                },
              }}
            />
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
