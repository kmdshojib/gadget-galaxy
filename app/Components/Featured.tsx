import { useGetFeaturedProductQuery } from "@/redux/Services/productService";
import React, { useEffect } from "react";
import ProductCard from "./ProductCard/ProductCard";
import SklittonLoader from "./Common/SklittonLoader";
import { IPrdoucts } from "../page";

const Featured = () => {
  const { data, isLoading, isFetching, refetch }: any =
    useGetFeaturedProductQuery(null);
  const productData: IPrdoucts | null | any = data;
  
  useEffect(() => {
    refetch();
  }, [refetch]);
  return (
    <div>
      <h1
        id="featured"
        className="text-4xl font-bold leadi sm:text-5xl text-center my-5"
      >
        Featured
      </h1>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3 items-center justify-center mb-10">
        {productData?.products?.length!==0 ? (
          productData?.product?.map((product: any, index: number) => {
            const { laptopName, images, price, _id } = product;
            return isFetching ? (
              <SklittonLoader />
            ) : (
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
          <div className="flex justify-center text-center mt-5">
            <p className="text-rose-500">No Product Found!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Featured;
