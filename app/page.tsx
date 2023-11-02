"use client";
import { useGetProductQuery } from "@/redux/Services/productService";
import Container from "./Components/Common/Container";
import ProductCard from "./Components/ProductCard/ProductCard";
import Spinner from "./Components/Common/Spinner";
import React, { useEffect, useState } from "react";
import Hero from "./Components/Hero";
import FAQ from "./Components/FAQ";
import Link from "next/link";

export interface IPrdoucts {
  products: [];
}

const Home = () => {
  const { data, isLoading, refetch } = useGetProductQuery(null);
  const productData: IPrdoucts | null | any = data;
  const [filteredData, setFilteredData] = useState([]);
  const [categoryActive, setCategoryActive] = useState("All");
  const categories = ["All", "Gaming", "Apple", "UltraBook"];

  useEffect(() => {
    refetch();
    if (productData?.products) {
      setFilteredData(productData.products.slice(0, 4));
    }
  }, [productData, refetch]);

  const handleCategory = (item: string) => {
    setCategoryActive(item);
    const categoryName = item.toLowerCase();
    if (categoryName === "all") {
      setFilteredData(productData.products.slice(0, 4));
    } else if (productData?.products) {
      const productFilteredData = productData.products
        .filter((product: any) => {
          const productCategory = product.category.toLowerCase();
          return productCategory === categoryName;
        })
        .slice(0, 4);
      setFilteredData(productFilteredData);
    }
  };
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <main className="flex">
      <Container>
        <Hero />
        <h1 className="text-4xl font-bold leadi sm:text-5xl text-center my-5">
          Categories
        </h1>
        <div className="flex justify-center my-5">
          {categories.map((item: string, index: number) => {
            return (
              <div
                onClick={() => handleCategory(item)}
                key={index++}
                className={
                  categoryActive === item
                    ? "badge bg-rose-500 text-white text-bold cursor-pointer mr-3 h-8 w-16 text-xs md:w-28 md:text-lg"
                    : "badge border-solid border-2 border-gray-950 text-bold cursor-pointer mr-3 h-8 w-16 text-xs md:w-28 md:text-lg hover:bg-rose-500 hover:text-white hover:border-none"
                }
              >
                {item}
              </div>
            );
          })}
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3 items-center justify-center mb-10">
          {productData?.product?.length !== 0 ? (
            isLoading ? (
              <Spinner />
            ) : (
              filteredData?.map((product: any, index: number) => {
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
            )
          ) : (
            <p>No Products found</p>
          )}
        </div>
        <Link
          href={`/categories/${categoryActive.toLowerCase()}`}
          className="flex justify-center text-lg underline text-sky-600"
        >
          Show {categoryActive}
        </Link>
        <FAQ />
      </Container>
    </main>
  );
};
export default Home;
