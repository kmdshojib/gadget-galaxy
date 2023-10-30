"use client";
import { useGetProductQuery } from "@/redux/Services/productService";
import Container from "./Components/Common/Container";
import ProductCard from "./Components/ProductCard/ProductCard";
import Spinner from "./Components/Common/Spinner";
import React from "react";
import Hero from "./Components/Hero";

export interface IPrdoucts {
  products: [];
}

const Home = () => {
  const { data, isLoading } = useGetProductQuery(null);
  const productData: IPrdoucts | null | any = data;
  if (isLoading) {
    return <Spinner />;
  }
  console.log(productData?.product?.length >= 1);
  return (
    <main className="flex">
      <Container>
        <Hero />
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3 items-center justify-center">
          {productData?.product?.length !== 0 ? (
            isLoading ? <Spinner /> : productData?.products?.map((product: any, index: number) => {
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
            <p>No Products found</p>
          )}
        </div>
      </Container>
    </main>
  );
};
export default Home;
