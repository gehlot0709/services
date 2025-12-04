import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaChevronDown,
  FaLaptopCode,
  FaBullhorn,
  FaPaintBrush,
} from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const servicesMenu = [
    {
      title: "Web Development",
      icon: <FaLaptopCode className="text-indigo-600" />,
      items: [
        { name: "Frontend Development", path: "/services/frontend" },
        { name: "Backend Development", path: "/services/backend" },
        { name: "Full-Stack Development", path: "/services/fullstack" },
      ],
    },
    {
      title: "Digital Marketing",
      icon: <FaBullhorn className="text-pink-500" />,
      items: [
        { name: "SEO Services", path: "/services/seo" },
        { name: "Social Media Marketing", path: "/services/social-media" },
        { name: "PPC Services", path: "/services/ppc" },
        { name: "Graphic Design Service", path: "/services/graphic" },
        { name: "WhatsApp Marketing", path: "/services/whatsapp" },
        { name: "Website Design Service", path: "services/web-design" },
        { name: "Email Marketing", path: "/services/email" },
        { name: "Content Marketing", path: "/services/content" },
        { name: "Affiliate Marketing", path: "/services/affiliate" },
      ],
    },
    {
      title: "Design & Branding",
      icon: <FaPaintBrush className="text-green-500" />,
      items: [
        { name: "UI/UX Design", path: "/services/uiux" },
        { name: "Logo Design", path: "/services/logo" },
        { name: "Graphic Design", path: "/services/graphic" },
      ],
    },
  ];

  return (
    <nav className="bg-black text-white dark:bg-gray-900 shadow fixed w-full z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="flex items-center text-indigo-600 dark:text-indigo-400 font-bold text-xl"
        >
          <FaLaptopCode className="text-2xl mr-2" />
          PixelsPrint
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className="text-white dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors"
            >
              {link.name}
            </Link>
          ))}

          {/* Services Dropdown */}
          <div className="relative group">
            <button className="flex items-center text-white dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400  font-medium transition-colors py-3">
              Services <FaChevronDown className="ml-1 text-sm " />
            </button>
            <div className="absolute hidden group-hover:block top-full right-0 shadow-lg rounded-lg w-[300px] bg-white dark:bg-gray-800 gap-4">
              <div className=" p-1 divide-y divide-gray-200 dark:divide-gray-700 rounded-md">
                {servicesMenu.map((category, i) => (
                  <div
                    key={i}
                    className="relative group/item py-2 hover:bg-gray-50 dark:hover:bg-gray-700 px-2 rounded"
                  >
                    <span className="flex justify-between items-center w-full text-gray-900 dark:text-gray-100 font-semibold cursor-pointer">
                      <span className="flex items-center gap-2">
                        {category.icon}
                        {category.title}
                      </span>
                      <FaChevronDown className="ml-2 text-xs" />
                    </span>

                    {/* Submenu (hover auto-close) */}
                    <div className="absolute hidden group-hover/item:block left-full  top-0  bg-white dark:bg-gray-800 shadow-lg rounded-md w-[220px]">
                      <div className="ml-5 ">
                        <ul className="py-2 ">
                          {category.items.map((item, j) => (
                            <li key={j}>
                              <Link
                                to={item.path}
                                onClick={() => setMenuOpen(false)}
                                className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 hover:bg-gray-50 dark:hover:bg-gray-700 rounded"
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <Link
            to="/get-quote"
            onClick={() => setMenuOpen(false)}
            className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white px-4 py-2 rounded-md shadow-md font-medium transition-colors"
          >
            Get Quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 dark:text-gray-300 text-2xl transition-colors"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 shadow-lg px-4 py-3 space-y-2 transition-colors">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className="block text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-700 px-3 py-2 rounded-md transition-colors"
            >
              {link.name}
            </Link>
          ))}

          {/* Services Dropdowns */}
          {servicesMenu.map((cat, i) => (
            <details
              key={i}
              className="border-b border-gray-200 dark:border-gray-700 pb-2"
            >
              <summary className="px-3 py-2 font-medium text-gray-700 dark:text-gray-300 cursor-pointer flex justify-between items-center">
                {cat.title}
                <FaChevronDown className="ml-2 text-sm" />
              </summary>
              <ul className="pl-6 mt-2 space-y-1">
                {cat.items.map((item, j) => (
                  <li key={j}>
                    <Link
                      to={item.path}
                      onClick={() => setMenuOpen(false)}
                      className="block text-sm text-gray-600 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          ))}

          {/* CTA: Get Quote */}
          <Link
            to="/get-quote"
            onClick={() => setMenuOpen(false)}
            className="block text-center bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white px-3 py-2 rounded-md font-medium shadow-md transition-colors"
          >
            Get Quote
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
