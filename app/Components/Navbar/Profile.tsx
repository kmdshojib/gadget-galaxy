"use client";
import Link from "next/link";
import { RxAvatar } from "react-icons/rx";

const Profile: React.FC = () => {
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={1} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <RxAvatar size={40} />
        </div>
      </label>
      <ul
        tabIndex={1}
        className="mt-5 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
      >
        <li>
          <Link href="/signin">SignIn</Link>
          <Link href="/register">Register</Link>
          <a>Logout</a>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
