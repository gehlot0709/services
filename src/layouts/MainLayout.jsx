import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import ScrollToTop from "../components/ScrollToTop.js";
 


const MainLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col main_layout">
      <Navbar />
      {/* Add top padding so content is not hidden behind fixed navbar */}
      <div className="flex-grow mt-16">
          <ScrollToTop />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
