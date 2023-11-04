import { useGetFeaturedProductQuery } from "@/redux/Services/productService";
import React from "react";
import ProductCard from "./ProductCard/ProductCard";
import SklittonLoader from "./Common/SklittonLoader";
import { IPrdoucts } from "../page";

const Featured = () => {
  const { data, isLoading }: any = useGetFeaturedProductQuery(null);
  const productData: IPrdoucts | null | any = data;
  console.log(data);

  return (
    <div>
      <h1 className="text-4xl font-bold leadi sm:text-5xl text-center my-5">
        Featured
      </h1>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3 items-center justify-center mb-10">
        {isLoading ? (
          <SklittonLoader />
        ) : (
          productData.product.map((product: any, index: number) => {
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
        )}
      </div>
    </div>
  );
};

export default Featured;
