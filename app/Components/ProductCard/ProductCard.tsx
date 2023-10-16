"use client";
import Image from "next/image";
import React from "react";
import Button from "../Common/Button";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { UseAppDispatch, useAppSelector } from "@/app/Hooks/useRedux";
import { setCartTotalPrice, updateCartItems } from "@/redux/features/cartSlice";
import { useRouter } from "next/navigation";
import Link from "next/link";

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
  const calculateTotalPrice = () => {
    if (cartItems.items !== null) {
      let totalPrice = 0;

      cartItems.items.forEach((item: any) => {
        if (item.price !== null && item.quantity !== null) {
          totalPrice += item.price * item.quantity;
        }
      });

      dispatch(setCartTotalPrice(totalPrice));
    } else {
      dispatch(setCartTotalPrice(0));
    }
  };

  const handleCart = () => {
    const product = {
      id: id,
      name: name,
      imageUrl: imageUrl,
      price: price,
      quantity: 1,
    };

    if (cartItems.items !== null) {
      const findItemIndex = cartItems?.items.findIndex(
        (item: any) => item.id === product.id
      );

      if (findItemIndex !== -1) {
        const updatedCartItems = cartItems.items.slice();
        updatedCartItems[findItemIndex] = {
          ...updatedCartItems[findItemIndex],
          quantity:
            (updatedCartItems[findItemIndex] as { quantity: number }).quantity +
            1,
        };
        dispatch(updateCartItems(updatedCartItems));
      } else {
        dispatch(updateCartItems([...cartItems.items, product]));
      }
      calculateTotalPrice()
    }
  };

  return (
    <div className="card w-60 h-[350px] bg-base-100 shadow-2xl">
      <figure>
        <Image
          src={imageUrl}
          alt="laptop-Image"
          width={250}
          height={100}
          className="object-cover"
        />
      </figure>
      <div className="card-body">
        <Link
          className="card-title hover:underline hover:cursor-pointer"
          href={`/laptop/${id}`}
        >
          {" "}
          {name}
        </Link>
        <p className="text-rose-500 text-lg font-bold">{price}$</p>
        <div className="card-actions justify-end">
          <Button
            onClick={handleCart}
            outline
            buttonType="button"
            label="Add to Cart"
            icon={AiOutlineShoppingCart}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
