import Link from "next/link";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const MobileMenu: React.FC = () => {
  return (
    // <div>
    //   <button title="togglemenu" type="button" onClick={toggleDrawer}>
    //     <GiHamburgerMenu />
    //   </button>

    //   {isDrawerOpen && (
    //     <div className="drawer">
    //       <input
    //         id="my-drawer"
    //         type="checkbox"
    //         className="drawer-toggle"
    //         checked={isDrawerOpen}
    //         onChange={closeDrawer}
    //       />
    //       <div className="drawer-content"></div>
    //       <div className="drawer-side sm:hidden md:block">
    //         <label
    //           htmlFor="my-drawer"
    //           aria-label="close sidebar"
    //           className="drawer-overlay"
    //         ></label>
    //         <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
    //           {/* Sidebar content here */}
    //           <li onClick={closeDrawer} className="close sm:block md:hidden">
    //             <Link href="/addproduct">Add Product</Link>
    //           </li>
    //           <li>
    //             <a>Sidebar Item 2</a>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   )}
    // </div>
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
      <ul className="menu p-4 w-80 min-h-full bg-base-200  z-10">
        {/* Sidebar content here */}
        <li className="close">
          <Link href="/addproduct">Add Product</Link>
        </li>
        <li>
          <a>Sidebar Item 2</a>
        </li>
        <li>
          
        </li>
      </ul>
    </div>
  </div>
  );
};

export default MobileMenu;
