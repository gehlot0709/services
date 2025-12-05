import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import ScrollToTop from "../components/ScrollToTop.js";
import Loading from "../components/Loading.jsx";

const MainLayout = () => {
  const navigation = useNavigation();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col main_layout">
      <Navbar />
      <div className="flex-grow mt-16">
        <ScrollToTop />
        {navigation.state === "loading" ? <Loading /> : <Outlet />}
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
