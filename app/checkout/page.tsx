"use client";
import { Elements, CardElement } from "@stripe/react-stripe-js";

import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import CheckoutForm from "../Components/checkoutform/CheckoutForm";
import { useAppSelector } from "../Hooks/useRedux";
import Container from "../Components/Common/Container";

const stripe = loadStripe(`${process.env.stripe_key}`);
const Checkout: React.FC = () => {
  const [clientSecret, setClientSecret] = useState("");
  const { cart, auth } = useAppSelector((state) => state);
  // data for order
  const filteredProduct = (cart.items ?? [])
    .filter((item: any) => item.id !== null && item.quantity !== null)
    .map((item: any) => ({ id: item.id, quantity: item.quantity }));

  useEffect(() => {
    if (!clientSecret) {
      if (auth.user?.email && cart.totalPrice && filteredProduct.length > 0) {
        fetch("http://localhost:5000/api/v1/laptop/payment", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ price: cart.totalPrice }),
        })
          .then((res) => {
            if (!res.ok) {
              throw new Error("Network response was not ok");
            }
            return res.json();
          })
          .then((data) => setClientSecret(data.clientSecret))
          .catch((error) => {
            console.log(error);
          });
      }
    }
  }, [auth.user?.email, cart.totalPrice, filteredProduct, clientSecret]);

  const options = {
    clientSecret,
  };
  return (
    <Container>
      <div>
        {clientSecret && (
          <div className="flex flex-col md:flex-row justify-around">
            <div>
              {cart.items && cart.items.length > 0 ? (
                cart.items
                  .filter(
                    (item: any) =>
                      item && item.name !== null && item.price !== null
                  )
                  .map((item: any) => {
                    const { name, id, quantity, price }: any = item;
                    return (
                      <div key={id} className="mb-3">
                        <p className="font-bold text-base text-gray-800">
                          {name}
                        </p>
                        <p className="text-neutral-700 font-semibolds">
                          ${price} × {quantity}
                        </p>
                      </div>
                    );
                  })
              ) : (
                <></>
              )}
              <div className="border-solid border-2 border-gray-700 mb-3"></div>
              <p className="text-base font-bold text-rose-500">
                Total Price: ${cart.totalPrice}
              </p>
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
