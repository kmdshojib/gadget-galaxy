import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
  AddressElement,
} from "@stripe/react-stripe-js";

export default function CheckoutForm({ clientSecret }: any) {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    // const clientSecret = new URLSearchParams(window.location.search).get(
    //   "payment_intent_client_secret"
    // );
    // console.log(clientSecret);
    // if (!clientSecret) {
    //   setMessage("Client secret not found");
    //   return;
    // }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      console.log(clientSecret, paymentIntent);
      setMessage(
        paymentIntent?.status === "succeeded"
          ? "Your payment succeeded"
          : "Unexpected error occurred"
      );
    });
  }, [stripe, clientSecret]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "/",
      },
    });

    if (
      error &&
      (error.type === "card_error" || error.type === "validation_error")
    ) {
      setMessage("Something went wrong!");
    }

    setIsLoading(false);
  };
  // const options = {
  //   mode: {mode:"shipping"},
  // };
  return (

      <form onSubmit={handleSubmit} className="flex flex-col">
        <p className="text-black mb-4">Complete your payment here!</p>
        {/* <AddressElement options={options} /> */}
        <PaymentElement />
        <button
          type="submit"
          className="bg-black rounded-xl text-white p-2 mt-6 mb-2"
          disabled={isLoading || !stripe || !elements}
        >
          {isLoading ? "Loading..." : "Pay now"}
        </button>
        {message && <div>{message}</div>}
      </form>
  );
}
