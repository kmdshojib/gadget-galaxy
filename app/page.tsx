"use client";
import { useGetProductQuery } from "@/redux/Services/productService";
import Container from "./Components/Common/Container";
import ProductCard from "./Components/ProductCard/ProductCard";
import Spinner from "./Components/Common/Spinner";
import React from "react";

interface IPrdoucts {
  products:[]
}

const Home = () => {
  const { data, isLoading } = useGetProductQuery(null);
  const productData: IPrdoucts | null | any = data;
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <main className="flex">
      <Container>
        <div>
          {productData?.products?.map((product: any, index: number) => {
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
          })}
        </div>
      </Container>
    </main>
  );
};
export default Home;
