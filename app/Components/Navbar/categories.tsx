import Link from "next/link";
import React from "react";
import { BiSolidCategory } from "react-icons/bi";

const Categories: React.FC = () => {
  return (
    <div className="dropdown dropdown-end ">
      <label tabIndex={1} className="m-1 btn btn-ghost btn-circle avatar">
        <BiSolidCategory size={20} />
      </label>
      <ul
        tabIndex={1}
        className="mt-5 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
      >
        <li>
          <Link
            href="/categories/Gaming"
            className="hover:text-rose-500 transition"
          >
            Gaming
          </Link>
        </li>
        <li>
          <Link
            href="/categories/UltraBook"
            className="hover:text-rose-500 transition"
          >
            Ultra Book
          </Link>
        </li>
        <li>
          <Link
            href="/categories/Apple"
            className="hover:text-rose-500 transition"
          >
            Apple
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Categories;
