"use client";
import { useSearchProductByNameQuery } from "@/redux/Services/productService";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  const { register, handleSubmit, control } = useForm();
  const [searchParam, setSearchParam] = useState("");
  const { data } = useSearchProductByNameQuery(searchParam);
  const handleSearch = (data: any) => {
    setSearchParam(data.search);
  };
  const handleInputChange = (data: any) => {
    setSearchParam(data);
  };
  console.log(data);
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

      <ul
        tabIndex={1}
        className="mt-5 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-60"
      >
        <li>Gaming</li>
        <li>Apple</li>
      </ul>
    </div>
  );
};

export default Search;
