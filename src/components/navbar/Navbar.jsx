// components/Navbar.jsx
import React, { useState } from "react";
import { FaBars, FaTimes, FaFeatherAlt } from "react-icons/fa";
import { NavLink } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const links = (
    <>
      <NavLink to="/" className="text-blue-600 font-semibold">
        Home
      </NavLink>
      <NavLink to="/blogs" className="text-blue-600 font-semibold">
        Blogs
      </NavLink>
      <NavLink to="/contact" className="text-blue-600 font-semibold">
        Publish
      </NavLink>
    </>
  );

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 text-2xl font-bold text-blue-600">
            <FaFeatherAlt className="text-indigo-500 text-2xl" />
            <span>Introvert Blog</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
            {links}
          </div>

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
        <div className="md:hidden flex flex-col bg-white px-4 pt-2 pb-4 space-y-2 shadow-md">
          {links}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
