"use client";
import Image from "next/image";
import React from "react";
import Button from "../Common/Button";
import { AiOutlineShoppingCart } from "react-icons/ai";

const ProductCard: React.FC = () => {
  const handleCart = () => {};
  return (
    <div className="card w-60 bg-base-100 shadow-xl">
      <figure>
        <Image src="" alt="apple" width={100} height={100} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p className="text-rose-500 text-lg font-bold">500$</p>
        <div className="card-actions justify-end">
          <Button
            outline
            buttonType="button"
            label="Cart"
            icon={AiOutlineShoppingCart}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
