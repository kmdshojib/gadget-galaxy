"use client";

import { UseAppDispatch, useAppSelector } from "@/app/Hooks/useRedux";
import React from "react";
import { BsCartFill } from "react-icons/bs";
import CartCard from "../cart-card/cartCard";
import Button from "../Common/Button";
import { useRouter } from "next/navigation";

const Cart: React.FC = () => {
  const { cart: cartItems } = useAppSelector((state: any) => state);
  const router = useRouter();
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
        <div className="card-body">
          <span className="font-bold text-lg text-rose-500">
            Total {cartItems.items !== null && cartItems.items.length - 1} items
          </span>
          {cartItems.items !== null ? (
            cartItems.items?.map((item: any, index: number) => {
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
            })
          ) : (
            <p>No Items in cart!</p>
          )}
          <hr />
          <span className="text-rose-500 font-bold">
            Total Price: ${cartItems.totalPrice}
          </span>
          <hr />
          <div className="flex justify-between gap-1">
            <Button outline label="Cart" />
            <Button onClick={() => router.push("/checkout")} label="Checkout" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
