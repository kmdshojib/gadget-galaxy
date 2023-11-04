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
      {/* navigation */}
      <div className="flex flex-row md:flex-col bg-neutral-content md:justify-around">
        <p onClick={handleUsers}>Users</p>
        <p onClick={handleProduct}>Product</p>
      </div>
      <div className="overflow-x-auto ">
        {users && (
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Index</th>
                <th>Name</th>
                <th>Email</th>
                <th>Verify</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        {/* <Image
                          src="/tailwind-css-component-profile-2@56w.png"
                          alt="Profile"
                          width={100}
                          height={100}
                        /> */}
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Name</div>
                      <div className="text-sm opacity-50">Role</div>
                    </div>
                  </div>
                </td>
                <td>
                  Zemlak, Daniel and Leannon
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Desktop Support Technician
                  </span>
                </td>
                <td>Purple</td>
                <th>
                  <button type="button" className="btn btn-ghost btn-xs">
                    details
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
