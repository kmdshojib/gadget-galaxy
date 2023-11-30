import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
  AddressElement,
} from "@stripe/react-stripe-js";
import { toast } from "react-toastify";
import { useAddOrdersMutation } from "@/redux/Services/productService";
import { useAppSelector } from "@/app/Hooks/useRedux";

export default function CheckoutForm({ clientSecret }: any) {
  const stripe = useStripe();
  const elements = useElements();
  const [addOrders, { isLoading: ordersLoading }] = useAddOrdersMutation();
  const { cart, auth } = useAppSelector((state) => state);
  const [message, setMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const filteredProduct = useMemo(
    () =>
      (cart.items ?? [])
        .filter((item: any) => item.id !== null && item.quantity !== null)
        .map((item: any) => ({ id: item.id, quantity: item.quantity })),
    [cart.items]
  );
  const data = useMemo(
    () => ({
      customerEmail: auth.user?.email,
      price: cart.totalPrice,
      product: filteredProduct,
    }),
    [auth.user?.email, cart.totalPrice, filteredProduct]
  );

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

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      if (!stripe || !elements) {
        return;
      }

      setIsLoading(true);

      try {
        const result: any = await addOrders(data);
        console.log(result);

        if (result) {
          const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
              payment_method: "card",
              return_url: "http://localhost:3000/",
            },
          });

          if (
            error &&
            (error.type === "card_error" || error.type === "validation_error")
          ) {
            setMessage("Something went wrong!");
          } else {
            toast.success("Your payment succeeded");
          }
        }
      } catch (error) {
        console.error("Error processing payment:", error);
        setMessage("Something went wrong!");
      } finally {
        setIsLoading(false);
      }
    },
    [stripe, elements, addOrders, data]
  );
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
