"use client";
import { Elements, CardElement } from "@stripe/react-stripe-js";

import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CheckoutForm from "../Components/checkoutform/CheckoutForm";
import { useAppSelector } from "../Hooks/useRedux";
import Container from "../Components/Common/Container";

const stripe = loadStripe(`${process.env.stripe_key}`);
const Checkout: React.FC = () => {
  const cart = useAppSelector((state) => state.cart);
  const [clientSecret, setClientSecret] = useState("");
  useEffect(() => {
    console.log("Setting client secret");

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
  console.log(cart);
  return (
    <Container>
      <div>
        {clientSecret && (
          <div className="flex flex-col md:flex-row justify-around">
            <div>
              {cart.items && cart.items.length > 0 ? (
                cart.items
                  .filter(
                    (item:any) => item && item.name !== null && item.price !== null
                  )
                  .map((item: any) => {
                    const { name, id, quantity, price }: any = item;
                    return (
                      <div key={id} className="mb-3">
                        <p className="font-bold text-lg text-gray-800">{name}</p>
                        <p className="text-gray-800 font-bold">
                          {price} × {quantity}
                        </p>
                      </div>
                    );
                  })
              ) : (
                <></>
              )}
            </div>
            <div className="mr-3">
              <Elements options={options} stripe={stripe}>
                <CheckoutForm clientSecret={clientSecret} />
              </Elements>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Checkout;
