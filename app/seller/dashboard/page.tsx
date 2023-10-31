"use client";

import React from "react";
import { useAppSelector } from "../../Hooks/useRedux";
import ErrorPage from "@/app/Components/Common/Errorpage";
import Container from "@/app/Components/Common/Container";
import { useGetSellerProductsQuery } from "@/redux/Services/productService";

const SellerDashboard = () => {
  const { auth } = useAppSelector((state) => state);
  const { user }: any = auth;
  const { data, isLoading } = useGetSellerProductsQuery(user.email);
  if (user?.role !== "seller") {
    return <ErrorPage />;
  }
  if (isLoading) {
    return <div>loading...</div>;
  }
  return (
    <div>
      <Container>
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
              <tr>
                <td>1</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="/tailwind-css-component-profile-2@56w.png"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Hart Hagerty</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>
                  Zemlak, Daniel and Leannon
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Desktop Support Technician
                  </span>
                </td>
                <td>Purple</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </Container>
    </div>
  );
};

export default SellerDashboard;
