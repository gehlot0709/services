import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx"; // Make sure this path matches your file structure

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col main_layout">
      <Navbar />
      {/* Add top padding so content is not hidden behind fixed navbar */}
      <div className="flex-grow mt-20">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
