"use client";
import { useRouter } from "next/navigation";
import Container from "./../Container";
import Logo from "@/app/Components/Navbar/Logo";
import Cart from "@/app/Components/Navbar/Cart";
import Profile from "@/app/Components/Navbar/Profile";

const NavBar = () => {
  const router = useRouter();
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-2 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between">
            <div className="navbar bg-base-100 ">
              <Logo />

              <div className="form-control">
                <input
                  type="text"
                  placeholder="Search"
                  className="input input-bordered w-24 md:w-auto"
                />
              </div>

              <div>
                <Cart />
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
