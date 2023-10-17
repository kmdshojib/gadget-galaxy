"use client";
import React from "react";
import Container from "@/app/Components/Common/Container";
import ProductCard from "@/app/Components/ProductCard/ProductCard";
import { IPrdoucts } from "@/app/page";
import { useGetProductByCategoryQuery } from "@/redux/Services/productService";
import { useParams } from "next/navigation";
import Spinner from "@/app/Components/Common/Spinner";

const ProductByCategory = () => {
  const { categories } = useParams();

  const { data, isLoading } = useGetProductByCategoryQuery(categories);
  if (isLoading) {
    return <Spinner />;
  }
  const productData: IPrdoucts | null | any = data;
  return (
    <div>
      <Container>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3 items-center justify-center">
          {productData?.products.length !== 0 ? (
            productData?.products?.map((product: any, index: number) => {
              const { laptopName, images, price, _id } = product;
              return (
                <div key={index + 1}>
                  <ProductCard
                    id={_id}
                    name={laptopName}
                    imageUrl={images[0]}
                    price={price}
                  />
                </div>
              );
            })
          ) : (
            <p>No Product Found!</p>
          )}
        </div>
      </Container>
    </div>
  );
};

export default ProductByCategory;
