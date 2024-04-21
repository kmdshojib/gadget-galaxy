"use client";
import Image from "next/image";
import React from "react";
import Button from "../Common/Button";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { UseAppDispatch, useAppSelector } from "@/app/Hooks/useRedux";
import { setCartTotalPrice, updateCartItems } from "@/redux/features/cartSlice";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { calculateTotalPrice } from "@/app/functions/calcuateCartPrice";
import { toast } from "react-toastify";

interface ProductCardProps {
  name: string | null;
  imageUrl: HTMLImageElement;
  price: number | null;
  id: string | null;
  discountedPrice?: number | null;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  imageUrl,
  price,
  id,
  discountedPrice,
}) => {
  const dispatch = UseAppDispatch();
  const { cart: cartItems, auth }: any = useAppSelector((state) => state);
  const router = useRouter();
  const handleCart = () => {
    const product = {
      id: id,
      name: name,
      imageUrl: imageUrl,
      price: price,
      quantity: 1,
    };
    if ( auth.user === null || auth.token === null) {
      toast.error("Please Login to add to Cart!");
      router.push("/signin");
      return;
    }
    if (auth.user?.role !== "buyer") {
      toast.error(
        "You must be a buyer to purchase! Please create a buyer account"
      );
      return;
    }
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

        const total = calculateTotalPrice(updatedCartItems);
        dispatch(setCartTotalPrice(total));
      } else {
        dispatch(updateCartItems([...cartItems.items, product]));
        const total = calculateTotalPrice([...cartItems.items, product]);
        dispatch(setCartTotalPrice(total));
      }
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
          loading="lazy"
          className="object-contain"
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
        {discountedPrice ? (
          <p>
            <span className="text-rose-500 text-lg font-bold mr-3">
              ${discountedPrice}
            </span>
            <span className="line-through text-lg font-semibold text-neutral-500">
              ${price}
            </span>
          </p>
        ) : (
          <p className="text-rose-500 text-lg font-bold">${price}</p>
        )}
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
