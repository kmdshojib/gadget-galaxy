"use client";

import React from "react";
import { BsCartFill } from "react-icons/bs";

const Cart: React.FC = () => {
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator">
          <BsCartFill size={20} />
          <span className="badge badge-sm indicator-item bg-rose-500 text-white border-rose-500">
            8
          </span>
        </div>
      </label>
      <div
        tabIndex={0}
        className="mt-5 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
      >
        <div className="card-body">
          <span className="font-bold text-lg text-rose-500">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
