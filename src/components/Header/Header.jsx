import React, { useState } from "react";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { BsGrid1X2 } from "react-icons/bs";
import { NavLink } from "react-router-dom";
const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <header
      className={`py-5 shadow-sm sticky top-0 z-50  px-3 sm:px-0 ${
        show ? "bg-pink-100" : "bg-white"
      }`}
    >
      <div className="container mx-auto">
        <nav className="flex items-center justify-between">
          <a href="/" className="logo font-semibold text-pink-500 text-2xl">
            Tailwind
          </a>
          <ul
            className={`bg-pink-100 sm:bg-white transition-all sm:top-0 left-0 w-full sm:w-auto p-10 sm:p-0 text-center sm:text-left flex-col sm:flex-row  flex items-center space-y-6 sm:space-y-0 sm:space-x-8 absolute sm:relative ${
              show ? "top-16" : "-top-96"
            }`}
          >
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "text-pink-500" : "")}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "text-pink-500" : "")}
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "text-pink-500" : "")}
                to="/meals"
              >
                Meals
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "text-pink-500" : "")}
                to="/coins"
              >
                Coins
              </NavLink>
            </li>
            <li>
              <button className="p-2 px-3 bg-pink-600 rounded ring-1 ring-pink-600 ring-offset-2  text-white">
                Contact
              </button>
            </li>
          </ul>
          <div
            onClick={() => setShow(!show)}
            className="menus cursor-pointer text-xl sm:hidden"
          >
            {show ? <AiOutlineCloseSquare /> : <BsGrid1X2 />}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
