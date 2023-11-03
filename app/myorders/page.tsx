"use client";

import React, { useEffect } from "react";
import { useAppSelector } from "../Hooks/useRedux";
import { useGetOrderListQuery } from "@/redux/Services/productService";
import Container from "../Components/Common/Container";
import Spinner from "../Components/Common/Spinner";
import Image from "next/image";

const Myorders = () => {
  const { auth } = useAppSelector((state) => state);
  const { user }: any = auth;
  const { data, isLoading, refetch } = useGetOrderListQuery(user.email);
  useEffect(() => {
    refetch();
  }, [refetch]);
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <Container>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              {/* <th>Quantity</th> */}
            </tr>
          </thead>
          <tbody>
            {data.product.map((product: any, index: any) => {
              return (
                <tr className="hover" key={index++}>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <Image
                            src={product.images[0]}
                            alt=""
                            width={100}
                            height={100}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{product.laptopName}</div>
                        <div className="text-sm opacity-50">
                          Unites available: {product.quantity}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{product.price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default Myorders;
