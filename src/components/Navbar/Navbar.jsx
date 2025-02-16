import React from "react";
import logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import DarkMode from "./DarkMode";
import LowerNavbar from "./LowerNavbar";

const Navbar = () => {
  return (
    <div
      className="shadow-md bg-white
       dark:bg-gray-900 dark:text-white
    duration-300 relative z-40"
    >
      {/* Upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="flex items-center justify-between p-1 sm:p-3">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={logo} alt="logo" className="w-10" />
              Shopsy
            </a>
          </div>
          {/* search bar and order button  */}
          <div className="flex justify-between items-center gap-3">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search..."
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all 
                duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none
                focus:border-1 focus:border-primary"
              />
              <IoMdSearch
                className="text-gray-500
              group-hover:text-primary absolute top-3 -tranlate-y-1/2
              right-3"
              />
            </div>
            {/* order button */}
            <button
              onClick={() =>
                alert("This functionality is not available right now!")
              }
              className="bg-gradient-to-r from-primary
               to-secondary transition-all duration-200
               text-white px-4 py-1
               rounded-full flex items-center gap-3 group"
            >
              <span
                className="group-hover:block
              hidden transition-all duration-200"
              >
                Order
              </span>
              <FaShoppingCart
                className="text-xl text-white
              drop-shadow-sm cursor-pointer"
              />
            </button>

            {/* Darkmode Switch */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>

      {/* lower Navbar */}
      <LowerNavbar />
    </div>
  );
};

export default Navbar;
