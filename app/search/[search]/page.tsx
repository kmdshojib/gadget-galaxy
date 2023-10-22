"use client";
import React from "react";
import { useParams } from "next/navigation";
import { useSearchProductByNameQuery } from "@/redux/Services/productService";

const Search = () => {
  const { search } = useParams();
  const { data, isLoading } = useSearchProductByNameQuery(search);
  console.log(data);
  return <div>Your Search result for {search}</div>;
};

export default Search;
