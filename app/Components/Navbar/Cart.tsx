"use client";

import { useAppSelector } from "@/app/Hooks/useRedux";
import React, { useCallback } from "react";
import { BsCartFill } from "react-icons/bs";
import CartCard from "../cart-card/cartCard";
import Button from "../Common/Button";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const Cart: React.FC = () => {
  const { cart: cartItems, auth } = useAppSelector((state: any) => state);
  const router = useRouter();
  const handleCheckOut = useCallback(() => {
    if (auth.token && auth.user && cartItems.items.length > 1) {
      router.push("/checkout");
    } else {
      toast.error("Please add Product to cart to continue checkout!");
    }
  }, [cartItems.items.length, auth.token, auth.user, router]);

  const handleCartPage = useCallback(() => {
    toast.warning(
      "Cart page is Comming Soon! This feature will be availeable after next Update!"
    );
  }, []);
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator">
          <BsCartFill size={20} />
          <span className="badge badge-sm indicator-item bg-rose-500 text-white border-rose-500">
            {cartItems.items !== null ? cartItems.items.length - 1 : "0"}
          </span>
        </div>
      </label>
      <div
        tabIndex={0}
        className="mt-5 z-[1] card card-compact dropdown-content w-56 h-[350px] lg:w-[300px] bg-base-100 shadow overflow-y-scroll"
      >
        {cartItems.items !== null && cartItems.items.length > 1 ? (
          <>
            <div className="card-body">
              <span className="font-bold text-lg text-rose-500">
                {cartItems.items !== null
                  ? `Total ${cartItems.items.length - 1} items`
                  : "No items in cart!"}
              </span>
              {cartItems.items?.map((item: any, index: number) => {
                const { name, price, imageUrl, quantity, id } = item;
                return (
                  <CartCard
                    key={index + 1}
                    name={name}
                    price={price}
                    imageUrl={imageUrl}
                    quantity={quantity}
                    id={id}
                  />
                );
              })}
            </div>
            <div className="m-3">
              <hr />
              <span className="text-rose-500 font-bold mb-2">
                Total Price: ${cartItems.totalPrice}
              </span>
              <hr />
              <div className="flex justify-between gap-1">
                <Button onClick={handleCartPage} outline label="Cart" />
                <Button onClick={handleCheckOut} label="Checkout" />
              </div>
            </div>
          </>
        ) : (
          <p className="text-center pt-5 text-rose-500 ">No Items in cart!</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
