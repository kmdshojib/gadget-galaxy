"use client";

import { useAppSelector } from "@/app/Hooks/useRedux";
import React from "react";
import { BsCartFill } from "react-icons/bs";
import CartCard from "../cart/cartCard";

const Cart: React.FC = () => {
  const cartItems = useAppSelector((state: any) => state.cart);
  console.log(cartItems.items);
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator">
          <BsCartFill size={20} />
          <span className="badge badge-sm indicator-item bg-rose-500 text-white border-rose-500">
            {cartItems.items !== null ? "0" : cartItems.items.length - 1}
          </span>
        </div>
      </label>
      <div
        tabIndex={0}
        className="mt-5 z-[1] card card-compact dropdown-content w-56 h-[350px] lg:w-[300px] bg-base-100 shadow overflow-y-scroll"
      >
        <div className="card-body">
          <span className="font-bold text-lg text-rose-500">
            Total {cartItems.items !== null && cartItems.items.length - 1} items
          </span>
          {cartItems.items !== null ? (
            cartItems.items?.map((item: any, index: number) => {
              return (
                <CartCard
                  key={index + 1}
                  name={item.name}
                  price={item.price}
                  imageUrl={item.imageUrl}
                />
              );
            })
          ) : (
            <p>No Items in cart!</p>
          )}
          <hr />
          <span className="text-info">Subtotal: $999</span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
