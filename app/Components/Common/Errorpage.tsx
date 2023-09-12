import React from "react";
import Link from "next/link";

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="max-w-md w-full p-4">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">
            Oops! Something went wrong.
          </h1>
          <p className="text-gray-600 mb-4">
            We&apos;re sorry, but an error has occurred.
          </p>
          <p className="text-gray-600">
            Please try again later or contact support if the issue persists.
          </p>
          <div className="mt-6">
            <Link href="/" className="text-blue-500 hover:underline">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
