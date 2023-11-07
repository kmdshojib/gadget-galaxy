import { UseAppDispatch, useAppSelector } from "@/app/Hooks/useRedux";
import { logoutUser } from "@/redux/features/authSlice";
import Link from "next/link";
import React from "react";
import {
  BiLogOutCircle,
  BiSolidLogInCircle,
  BiSolidUserPlus,
  BiUser,
} from "react-icons/bi";
import { CgBorderRight } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoAddCircleOutline } from "react-icons/io5";
import { MdOutlineAdminPanelSettings } from "react-icons/md";

const MobileMenu: React.FC = () => {
  const { user, token } = useAppSelector((state) => state.auth);
  const dispatch = UseAppDispatch();
  const handleLogout = () => {
    dispatch(logoutUser());
  };
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Hamburger Menu Button */}
        <label htmlFor="my-drawer">
          <GiHamburgerMenu />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu p-4 w-80 min-h-full bg-base-200  z-10">
          {/* Sidebar content here */}
          <div className="collapse collapse-arrow bg-base-200">
            <input
              title="accodrian"
              type="radio"
              name="my-accordion-2"
              placeholder=""
            />
            <div className="collapse-title text-xl font-medium">Profile</div>
            <div className="collapse-content">
              <div className="flex flex-col space-y-2">
                {!token ? (
                  <>
                    <Link
                      href="/signin"
                      className="hover:text-rose-500 transition flex"
                    >
                      <BiSolidLogInCircle size={15} />
                      SignIn
                    </Link>
                    <Link
                      href="/register"
                      className="hover:text-rose-500 transition flex"
                    >
                      <BiSolidUserPlus size={18} />
                      Register
                    </Link>
                  </>
                ) : (
                  <>
                    <p className="hover:text-rose-500 transition flex">
                      <BiUser size={18} />
                      {user?.name}
                    </p>
                    {user?.role === "seller" && (
                      <>
                        <Link
                          href="/addproduct"
                          className="hover:text-rose-500 transition  flex"
                        >
                          <IoAddCircleOutline size={18} />
                          Add Product
                        </Link>
                        <Link
                          href="/seller/dashboard"
                          className="hover:text-rose-500 transition flex"
                        >
                          <MdOutlineAdminPanelSettings size={18} />
                          SellerDashboard
                        </Link>
                      </>
                    )}
                    <>
                      {user?.role === "Buyer" && (
                        <Link
                          href="/myorders"
                          className="hover:text-rose-500 transition flex"
                        >
                          <CgBorderRight size={18} />
                          Orders
                        </Link>
                      )}
                    </>
                    <p
                      onClick={handleLogout}
                      className="hover:text-rose-500 transition flex"
                    >
                      <BiLogOutCircle size={18} />
                      Logout
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input
              title="accodrian"
              type="radio"
              name="my-accordion-2"
              placeholder=""
            />
            <div className="collapse-title text-xl font-medium">Categories</div>
            <div className="collapse-content">
              <div className="flex flex-col justify-between">
                <Link
                  href="/categories/gaming"
                  className="hover:text-rose-500 transition mb-3"
                >
                  Gaming
                </Link>
                <Link
                  href="/categories/ultrabook"
                  className="hover:text-rose-500 transition mb-3"
                >
                  Ultra Book
                </Link>
                <Link
                  href="/categories/apple"
                  className="hover:text-rose-500 transition mb-3"
                >
                  Apple
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
