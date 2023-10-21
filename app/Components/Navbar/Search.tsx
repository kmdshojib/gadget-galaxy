"use client";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  return (
    <div className="dropdown dropdown-bottom">
      <div className="form-control">
        <label tabIndex={1} className="input-group input-group-md">
          <input
            type="text"
            placeholder="Search"
            className=" input input-bordered input-md"
          />
          <span>
            <AiOutlineSearch />
          </span>
        </label>
      </div>

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
