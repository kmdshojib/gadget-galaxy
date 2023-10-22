"use client";
import { Elements, CardElement } from "@stripe/react-stripe-js";

import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CheckoutForm from "../Components/checkoutform/CheckoutForm";

const stripe = loadStripe(`${process.env.stripe_key}`);
const Checkout: React.FC = () => {
  const [clientSecret, setClientSecret] = useState("");
  useEffect(() => {
    console.log("Setting client secret");
    // const axios =
    fetch("http://localhost:5000/api/v1/laptop/payment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ price: 100 }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        console.log("Setting client secret");
        return res.json();
      })
      .then((data) => setClientSecret(data.clientSecret))
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const options = {
    clientSecret,
  };
  return (
    <div>
      {clientSecret && (
        <Elements options={options} stripe={stripe}>
          <CheckoutForm clientSecret={clientSecret} />
        </Elements>
      )}
    </div>
  );
};

export default Checkout;
