import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
  AddressElement,
  CardNumberElement,
  CardElement,
} from "@stripe/react-stripe-js";
import { toast } from "react-toastify";

export default function CheckoutForm({ clientSecret }: any) {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      console.log(paymentIntent?.status);
      if (paymentIntent?.status === "succeeded") {
        toast.success("Your payment succeeded");
      }
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
        payment_method: "card",
        return_url: "http://localhost:3000/",
      },
    });
    toast.success("Your payment succeeded");
    if (
      error &&
      (error.type === "card_error" || error.type === "validation_error")
    ) {
      setMessage("Something went wrong!");
    } else {
      toast.success("Your payment succeeded");
    }

    setIsLoading(false);
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <p className="text-black mb-4">Complete your payment here!</p>
      {/* <AddressElement options={{ mode: "shipping" }} /> */}
      <PaymentElement />
      <button
        type="submit"
        className="bg-black rounded-xl text-white p-2 mt-6 mb-2"
        disabled={isLoading || !stripe || !elements}
      >
        {isLoading ? "Loading..." : "Pay now"}
      </button>
    </form>
  );
}
