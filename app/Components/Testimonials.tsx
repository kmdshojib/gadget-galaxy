import Link from "next/link";
import React from "react";


const Testimonials: React.FC = () => {
  return (
    <div className="mt-4 p-6 py-12 hover:opacity-95 dark:bg-rose-500 dark:text-gray-900 rounded-md">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <h2 className="text-center text-6xl tracki font-bold">
            Up to <span> </span>
            <br className="sm:hidden" />
            50% Off
          </h2>
          <div className="space-x-2 text-center py-2 lg:py-0 flex flex-col md:flex-row">
            <p className="text-center mt-4">Plus free shipping!</p>
            {/* <span className="font-bold text-lg">Ga</span> */}
            <Link
            href="#featured"
            rel="noreferrer noopener"
            className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block dark:bg-gray-50 dark:text-gray-900 dark:border-gray-400"
          >
            Shop Now!
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
