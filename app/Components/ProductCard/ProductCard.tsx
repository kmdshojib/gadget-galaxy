"use client";
import Image from "next/image";
import React from "react";
import Button from "../Common/Button";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { UseAppDispatch, useAppSelector } from "@/app/Hooks/useRedux";
import { setCartItems, updateCartItems } from "@/redux/features/cartSlice";

interface ProductCardProps {
  name: string | null;
  imageUrl: HTMLImageElement;
  price: number | null;
  id: string | null;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  imageUrl,
  price,
  id,
}) => {
  const dispatch = UseAppDispatch();
  const cartItems = useAppSelector((state) => state.cart);
  const handleCart = () => {
    const product = {
      id: id,
      name: name,
      imageUrl: imageUrl,
      price: price,
      quantity: 1,
    };

    const findItemIndex = cartItems.items.findIndex(
      (item: any) => item.id === product.id
    );

    if (findItemIndex !== -1) {
      const updatedCartItems = cartItems.items.slice(); // Create a new array by slicing the existing one
      updatedCartItems[findItemIndex] = {
        ...updatedCartItems[findItemIndex],
        quantity: updatedCartItems[findItemIndex].quantity + 1,
      };
      dispatch(updateCartItems(updatedCartItems));
    } else {
      dispatch(updateCartItems([...cartItems.items, product]));
    }
  };

  console.log(cartItems);
  return (
    <div className="card w-60 bg-base-100 shadow-2xl">
      <figure>
        <Image
          src={imageUrl}
          alt="laptop-Image"
          width={100}
          height={100}
          className="object-contain"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title hover:underline hover:cursor-pointer">
          {name}
        </h2>
        <p className="text-rose-500 text-lg font-bold">{price}$</p>
        <div className="card-actions justify-end">
          <Button
            onClick={handleCart}
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
