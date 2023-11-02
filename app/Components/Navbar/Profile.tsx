"use client";
import { UseAppDispatch, useAppSelector } from "@/app/Hooks/useRedux";
import { logoutUser } from "@/redux/features/authSlice";
import Image from "next/image";
import Link from "next/link";
import { RxAvatar } from "react-icons/rx";
import { IoAddCircleOutline } from "react-icons/io5";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { CgBorderRight } from "react-icons/cg";
import {
  BiLogOutCircle,
  BiSolidLogInCircle,
  BiSolidUserPlus,
  BiUser,
} from "react-icons/bi";
import { updateCartItems } from "@/redux/features/cartSlice";

const Profile: React.FC = () => {
  const { user, token } = useAppSelector((state) => state.auth);
  const dispatch = UseAppDispatch();
  const handleLogout = () => {
    dispatch(logoutUser());
  };
  console.log({ user });
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={1} className="btn btn-ghost btn-circle">
        <div className="w-10 rounded-full">
          {!user?.imageUrl ? (
            <RxAvatar size={30} />
          ) : (
            <Image
              className="object-cover rounded-full"
              src={user.imageUrl}
              sizes="100vh"
              height="100"
              width="100"
              alt="user"
            />
          )}
        </div>
      </label>
      <ul
        tabIndex={1}
        className="mt-5 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 "
      >
        <li>
          {!token ? (
            <>
              <Link href="/signin" className="hover:text-rose-500 transition">
                <BiSolidLogInCircle size={18} />
                SignIn
              </Link>
              <Link href="/register" className="hover:text-rose-500 transition">
                <BiSolidUserPlus size={18} />
                Register
              </Link>
            </>
          ) : (
            <>
              <p className="hover:text-rose-500 transition">
                <BiUser size={18} />
                {user?.name}
              </p>
              {user?.role === "seller" && (
                <>
                  <Link
                    href="/addproduct"
                    className="hover:text-rose-500 transition"
                  >
                    <IoAddCircleOutline size={18} />
                    Add Product
                  </Link>
                  <Link
                    href="/seller/dashboard"
                    className="hover:text-rose-500 transition"
                  >
                    <MdOutlineAdminPanelSettings size={18} />
                    SellerDashboard
                  </Link>
                </>
              )}
              <Link href="/myorders" className="hover:text-rose-500 transition">
                <CgBorderRight size={18} />
                Orders
              </Link>
              <p
                onClick={handleLogout}
                className="hover:text-rose-500 transition"
              >
                <BiLogOutCircle size={18} />
                Logout
              </p>
            </>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Profile;
