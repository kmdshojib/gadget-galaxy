"use client";
import Image from "next/image";
import React, { useState } from "react";

const AdminClient = () => {
  const [users, setUsers] = useState(true);
  const [product, setProduct] = useState(false);
  const handleUsers = () => {
    setUsers(true);
    setProduct(false);
  };
  const handleProduct = () => {
    setUsers(false);
    setProduct(true);
  };
  return (
    <div className="flex flex-col md:flex-row">
      {/* Navigation */}
      <div className="flex flex-row md:flex-col bg-gray-200 md:justify-around p-4">
        <p
          className="cursor-pointer p-2 hover:bg-gray-300"
          onClick={handleUsers}
        >
          Users
        </p>
        <p
          className="cursor-pointer p-2 hover:bg-gray-300"
          onClick={handleProduct}
        >
          Product
        </p>
      </div>
      <div className="overflow-x-auto">
        {users && (
          <table className="min-w-full border rounded-lg">
            {/* Head */}
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2">Index</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Verify</th>
                <th className="px-4 py-2">Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <th className="px-4 py-2">1</th>
                <td className="px-4 py-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12">
                      <div className="rounded-full overflow-hidden w-12 h-12">
                        {/* Your image goes here */}
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Name</div>
                      <div className="text-sm text-gray-500">Role</div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-2">
                  Zemlak, Daniel and Leannon
                  <br />
                  <span className="text-gray-500 text-sm">
                    Desktop Support Technician
                  </span>
                </td>
                <td className="px-4 py-2">Purple</td>
                <th className="px-4 py-2">
                  <button className="text-blue-500 hover:underline">
                    Details
                  </button>
                </th>
              </tr>
            </tbody>
          </table>
        )}
        {product && (
          <table className="min-w-full border rounded-lg">
            {/* Head */}
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Verify</th>
                <th className="px-4 py-2">Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="px-4 py-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12">
                      <div className="rounded-full overflow-hidden w-12 h-12">
                        {/* Your image goes here */}
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Name</div>
                      <div className="text-sm text-gray-500">Role</div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-2">
                  Zemlak, Daniel and Leannon
                  <br />
                  <span className="text-gray-500 text-sm">
                    Desktop Support Technician
                  </span>
                </td>
                <td className="px-4 py-2"></td>
                <th className="px-4 py-2">
                  <button className="text-blue-500 hover:underline">
                    Details
                  </button>
                </th>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AdminClient;
