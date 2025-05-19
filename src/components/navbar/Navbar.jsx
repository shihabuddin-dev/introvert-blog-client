// components/Navbar.jsx
import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaFeatherAlt,
  FaHome,
  FaMicroblog,
} from "react-icons/fa";
import { MdOutlinePublishedWithChanges } from "react-icons/md";
import { NavLink } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className=" font-semibold flex justify-center items-center gap-1"
        >
          <FaHome /> Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blogs"
          className="font-semibold flex justify-center items-center gap-1"
        >
          <FaMicroblog />
          Blogs
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/publish"
          className="font-semibold flex justify-center items-center gap-1"
        >
          <MdOutlinePublishedWithChanges />
          Publish
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 text-2xl font-bold text-teal-600">
            <FaFeatherAlt className="text-teal-500 text-2xl" />
            <span>Introvert Blog</span>
          </div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
            {links}
          </ul>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 text-2xl">
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <ul className="md:hidden flex flex-col bg-white px-4 pt-2 pb-4 space-y-2 shadow-md">
          {links}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
