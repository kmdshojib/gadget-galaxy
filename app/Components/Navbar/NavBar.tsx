"use client";
import Container from "../Common/Container";
import Logo from "@/app/Components/Navbar/Logo";
import Cart from "@/app/Components/Navbar/Cart";
import Profile from "@/app/Components/Navbar/Profile";
import Categories from "./categories";
import Search from "./Search";
import MobileMenu from "./MobileMenu";
const NavBar = () => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-2 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3">
            <div className="navbar bg-base-100 ">
              <Logo />
              <div className="hidden sm:block">
                {" "}
                {/* Hide Logo on small screens */}
                {/* <Search /> */}
              </div>
              <div className="navbar-end flex items-center gap-3">
                <div className="hidden sm:block">
                  {" "}
                  {/* Hide Cart and Categories on small screens */}
                  <Profile />
                </div>
                <div className="hidden sm:block">
                  <Categories />
                </div>
                <Cart />
               
              </div>
              <div className="md:hidden">
                <MobileMenu />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default NavBar;
