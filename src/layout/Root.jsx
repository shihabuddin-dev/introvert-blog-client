import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/navbar/Navbar";

const Root = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};

export default Root;
