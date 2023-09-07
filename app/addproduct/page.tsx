"use client";

import { useAppSelector } from "../Hooks/useRedux";

const AddProduct: React.FC = () => {
  const { user } = useAppSelector((state) => state.auth);
  if (user?.role !== "seller") {
    return <div>404 not found!</div>;
  }
  return <div>Add Product</div>;
};

export default AddProduct;
