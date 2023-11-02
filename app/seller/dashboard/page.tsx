"use client";

import React, { useEffect } from "react";
import { useAppSelector } from "../../Hooks/useRedux";
import ErrorPage from "@/app/Components/Common/Errorpage";
import Container from "@/app/Components/Common/Container";
import {
  useDeleteProductsMutation,
  useGetSellerProductsQuery,
} from "@/redux/Services/productService";
import Spinner from "@/app/Components/Common/Spinner";
import { IPrdoucts } from "@/app/page";
import Image from "next/image";
import { toast } from "react-toastify";

const SellerDashboard = () => {
  const { auth } = useAppSelector((state) => state);
  const { user }: any = auth;
  const { data, isLoading, refetch } = useGetSellerProductsQuery(user.email);
  const productData: IPrdoucts | null | any = data;
  const [deleteProduct, { isLoading: deleteLoading }] =
    useDeleteProductsMutation();
  useEffect(() => {
    refetch()
  }, [refetch]);
  if (user?.role !== "seller") {
    return <ErrorPage />;
  }
  if (isLoading) {
    return <div>loading...</div>;
  }
  const handleDelete = async (id: string) => {
    try {
      const result: any = await deleteProduct(id);
      console.log({ result });
      if ("data" in result) {
        toast.success(result.data.message);
        refetch();
      }
    } catch (err) {
      if (err) {
        console.log(err);
      }
    }
  };
  return (
    <Container>
      <div>
        <>
          {isLoading ? (
            <Spinner />
          ) : (
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {productData?.length !== 0 &&
                    productData?.map((item: any, index = 1) => {
                      const { _id, images, laptopName, quantity, price } = item;
                      return (
                        <tr key={_id}>
                          <td>{index++}</td>
                          <td>
                            <div className="flex items-center space-x-3">
                              <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                  <Image
                                    src={images[0]}
                                    sizes="100vh"
                                    width="0"
                                    height="0"
                                    alt="Avatar"
                                  />
                                </div>
                              </div>
                              <div>
                                <div className="font-bold">{laptopName}</div>
                                <div className="text-sm opacity-50">
                                  Total items Available: {quantity}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>${price}</td>
                          <th>
                            <button
                              onClick={() => handleDelete(_id)}
                              type="button"
                              className="btn bg-rose-500 text-white btn-xs"
                            >
                              Delete
                            </button>
                          </th>
                          <th>
                            <button type="button" className="btn btn-xs">
                              Edit
                            </button>
                          </th>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          )}
        </>
      </div>
    </Container>
  );
};

export default SellerDashboard;
