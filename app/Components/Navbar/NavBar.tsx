"use client";
import Container from "../Common/Container";
import Logo from "@/app/Components/Navbar/Logo";
import Cart from "@/app/Components/Navbar/Cart";
import Profile from "@/app/Components/Navbar/Profile";
import Categories from "./categories";

const NavBar = () => {

  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-2 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3">
            <div className="navbar bg-base-100 ">
              <Logo />

              <div className="form-control">
                <input
                  type="text"
                  placeholder="Search"
                  className="input input-bordered w-24 md:w-auto"
                />
              </div>

              <div className="navbar-end">
                <Cart />
                <Categories />
                <Profile />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default NavBar;
