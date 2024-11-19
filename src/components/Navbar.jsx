import React from "react";
import { CiHeart } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import "./navbar.css";
import { NavLink, Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const getBackgroundColor = () => {
    switch (location.pathname) {
      case "/":
        return "rgba(149, 56, 226, 1)";
      default:
        return "white";
    }
  };
  return (
    <div
      style={{ backgroundColor: getBackgroundColor() }}
      className="navbar head-Bg container mx-auto mt-5 rounded-t-lg"
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <NavLink
              className={({ isActive }) => `${isActive ? "bg-black" : ""}`}
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) => `${isActive ? "bg-black" : ""}`}
              to="/statistics"
            >
              Statistics
            </NavLink>
            <NavLink
              className={({ isActive }) => `${isActive ? "bg-black" : ""}`}
              to="/dashboard"
            >
              Dashboard
            </NavLink>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl text-black">Gaget Heaven</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-black gap-5">
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "bg-black text-white p-2 rounded-xl" : ""}`
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "bg-black text-white p-2 rounded-xl" : ""}`
            }
            to="/statistics"
          >
            Statistics
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "bg-black text-white p-2 rounded-xl" : ""}`
            }
            to="/dashboard"
          >
            Dashboard
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn  rounded-full">
          <BsCart3 />
        </a>
        <a className="btn   rounded-full ml-4">
          <CiHeart />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
