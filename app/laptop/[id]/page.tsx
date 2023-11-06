"use client";
import Container from "@/app/Components/Common/Container";
import Spinner from "@/app/Components/Common/Spinner";
import { useGetProductByIdQuery } from "@/redux/Services/productService";
import { useParams } from "next/navigation";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProductById = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetProductByIdQuery(id);
  const productData: any = data;
  console.log(productData);
  return (
    <div>
      <Container>
        {isLoading ? (
          <Spinner />
        ) : (
          <div className="flex flex-col">
            <div className="mt-1 flex justify-center ">
              <div className="carousel w-full mb-3 h-[350px]">
                {productData.product?.images.map(
                  (image: any, index: number) => {
                    index = index + 1;
                    return (
                      <div
                        id={`slide${index++}`}
                        className="carousel-item relative w-full"
                        key={index++}
                      >
                        <Image
                          className="w-full object-cover"
                          src={image}
                          alt="causolImage"
                          sizes="100vh"
                          height="0"
                          width="0"
                        />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                          <Link href="#slide1" className="btn btn-circle">
                            ❮
                          </Link>
                          <Link href="#slide2" className="btn btn-circle">
                            ❯
                          </Link>
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
            <Link
              href={`/categories/${productData?.product?.category}`}
              className="badge badge-outline mt-2 cursor-pointer hover:bg-slate-900 hover:text-neutral-200"
            >
              {productData?.product?.category}
            </Link>
            <div className="mt-2 font-extrabold text-xl text-gray-800">
              {productData?.product?.laptopName}
            </div>
            <p className="mt-2 font-semibold text-gray-800">
              Price:${productData?.product?.price}
            </p>
            <p className="mt-2 font-semibold text-gray-800">
              Total items Avalable: {productData?.product?.quantity}
            </p>
          </div>
        )}
      </Container>
    </div>
  );
};

export default ProductById;
