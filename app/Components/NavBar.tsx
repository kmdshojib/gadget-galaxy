"use client";
import Link from "next/link";
import Container from "./Container";
import { useRouter } from "next/navigation";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";

const NavBar = () => {
  const router = useRouter();
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 mt-2">
            <div
              onClick={() => router.push("/")}
              className="text-2xl font-pacifico text-gray-800 cursor-pointer transition duration-300 ease-in-out hover:text-rose-500"
            >
              Gadget Galaxy
            </div>
            <div className="flex flex-row justify-between gap-2">
              <Link
                className="transition duration-300 ease-in-out hover:text-rose-500"
                href="/signin"
              >
                Sign In
              </Link>
              <Link
                className="transition duration-300 ease-in-out hover:text-rose-500"
                href="/signin"
              >
                Register
              </Link>
              <div className="relative flex items-center justify-center">
                <div className="absolute top-0 right-0 w-6 h-6 bg-rose-500 rounded-full flex items-center justify-center text-white text-xs">
                  0
                </div>
                <FaShoppingCart size={24} className="text-gray-800 mr-5" />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default NavBar;
