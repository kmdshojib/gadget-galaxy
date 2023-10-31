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
        <div>SellerDashboard</div>
      </Container>
    </div>
  );
};

export default SellerDashboard;
