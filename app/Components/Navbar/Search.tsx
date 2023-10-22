"use client";
import { IPrdoucts } from "@/app/page";
import { useSearchProductByNameQuery } from "@/redux/Services/productService";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  const { register, handleSubmit, control } = useForm();
  const [searchParam, setSearchParam] = useState("");
  const router = useRouter();
  const { data, isLoading } = useSearchProductByNameQuery(searchParam);
  const productData: IPrdoucts | null | any = data;
  const handleSearch = (data: any) => {
    setSearchParam(data.search);
    router.push(`/search/${searchParam}`);
  };
  const handleInputChange = (data: any) => {
    setSearchParam(data);
  };

  return (
    <div className="dropdown dropdown-bottom">
      <form onSubmit={handleSubmit(handleSearch)} className="form-control">
        <label tabIndex={1} className="input-group input-group-md">
          <Controller
            control={control}
            name="search"
            render={({ field: { onChange } }) => (
              <input
                type="text"
                placeholder="Search"
                className=" input input-bordered input-md"
                {...register("search")}
                onChange={(e) => {
                  const newData = e.target.value;
                  onChange(e);
                  handleInputChange(newData);
                }}
              />
            )}
          />
          <button
            type="submit"
            title="search"
            className="btn btn-active btn-neutral"
          >
            <AiOutlineSearch />
          </button>
        </label>
      </form>

      <div
        tabIndex={1}
        className="mt-5 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-60"
      >
        {isLoading ? (
          <p>searching...</p>
        ) : productData?.searchItem.length !== 0 ? (
          productData.searchItem.map((item: any) => (
            <>
              <div
                key={item._id}
                className="m-2 hover:bg-slate-300 hover:cursor-pointer"
              >
                <Link className="flex" href={`/laptop/${item._id}`}>
                  <Image
                    src={item.images[1]}
                    alt={item.laptopName}
                    width={100}
                    height={100}
                  />
                  <p className="ml-2">{item.laptopName}</p>
                </Link>
              </div>
              <hr />
            </>
          ))
        ) : (
          <p>No Product Found</p>
        )}
        {productData?.searchItem.length !== 0 && (
          <Link
            href={`/search/${searchParam}`}
            className="text-center text-sky-600 mt-1 mb-1 hover:cursor-pointer hover:underline"
          >
            See more ({productData?.searchItem.length})
          </Link>
        )}
      </div>
    </div>
  );
};

export default Search;
