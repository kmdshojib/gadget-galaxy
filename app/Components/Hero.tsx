import React from "react";
import Button from "./Common/Button";
import Image from "next/image";
import Typewriter from "typewriter-effect";

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-gray-200 via-gray-100 to-blue-100 text-gray-800 rounded-md mb-5">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leadi sm:text-6xl">
            Find the Best
            <span className="text-rose-500">Laptotop </span>at the best Price!
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString("Shop with us!").start();
              }}
            />
            <span> </span>
            <br className="hidden md:inline lg:hidden" />
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("we are the most trusted tech E-Commerce.")
                  .start();
              }}
            />
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <Button label="Shop Now" />
            <Button outline label="Find the Best!" />
          </div>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 ">
          {/* <Image
            src={"https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg"}
            alt=""
            width={100}
            height={100}
            layout="responsive"
            loading="lazy"
            className="object-contain "
          /> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
