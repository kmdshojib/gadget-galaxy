"use client";
import Container from "@/app/Components/Common/Container";
import Spinner from "@/app/Components/Common/Spinner";
import { useGetProductByIdQuery } from "@/redux/Services/productService";
import { useParams } from "next/navigation";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const ProductById = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetProductByIdQuery(id);
  if (isLoading) {
    return <Spinner />;
  }
  const productData: any = data;

  if (productData) {
    return (
      <div>
        <Container>
          <div className="flex flex-col">
            <div className="mt-1 flex justify-center ">
              <Carousel
                className="w-6/6 h-3/6"
                showArrows={true}
                autoPlay={true}
                dynamicHeight={false}
                infiniteLoop={true}
                showThumbs={false}
              >
                {productData.product.images.map((image: any, index: number) => {
                  return (
                    <div key={index++}>
                      <Image
                        className="object-cover"
                        src={image}
                        alt="causolImage"
                        width={500}
                        height={350}
                      />
                    </div>
                  );
                })}
              </Carousel>
            </div>
            <div className="badge badge-outline mt-2 cursor-pointer ">{productData?.product?.category}</div>
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
        </Container>
      </div>
    );
  }
};

export default ProductById;
