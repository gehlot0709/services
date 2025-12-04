import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaLaptopCode,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black via-gray-900 to-black text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
        {/* Branding & Social */}
        <div>
          <Link
            to="/"
            className="flex items-center text-indigo-500 font-bold text-2xl mb-4 hover:scale-105 transition-transform"
          >
            <FaLaptopCode className="text-3xl mr-2" />
            PixelsPrint
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
            Crafting digital experiences through design, development, and
            marketing. We build trust through pixels.
          </p>
          <div className="flex space-x-3">
            {[
              { icon: <FaFacebookF />, link: "#" },
              { icon: <FaInstagram />, link: "#" },
              { icon: <FaTwitter />, link: "#" },
              { icon: <FaLinkedinIn />, link: "#" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.link}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-indigo-600 transition-colors duration-300 shadow-md"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Navigation</h4>
          <ul className="space-y-2 text-sm">
            {[
              { name: "Home", to: "/" },
              { name: "Portfolio", to: "/portfolio" },
              { name: "About Us", to: "/about" },
              { name: "Contact", to: "/contact" },
              { name: "Get Quote", to: "/get-quote" },
            ].map((item, i) => (
              <li key={i}>
                <Link
                  to={item.to}
                  className="hover:text-indigo-400 hover:pl-2 transition-all duration-300 inline-block"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
          <ul className="space-y-2 text-sm">
            {[
              "Frontend Development",
              "Backend Development",
              "Full-Stack Development",
              "SEO Services",
              "Social Media Marketing",
              "Email Marketing",
              "UI/UX Design",
              "Logo Design",
            ].map((service, i) => (
              <li key={i}>
                <Link
                  to={`/services/${service
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  className="hover:text-indigo-400 hover:pl-2 transition-all duration-300 inline-block"
                >
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
          <p className="text-gray-400 text-sm mb-2">
            Ahmedabad, Gujarat, India
          </p>
          <p className="text-gray-400 text-sm mb-2">
            Email:{" "}
            <a
              href="mailto:info@pixelsprint.com"
              className="hover:text-indigo-400"
            >
              info@pixelsprint.com
            </a>
          </p>
          <p className="text-gray-400 text-sm">
            Phone:{" "}
            <a href="tel:+919876543210" className="hover:text-indigo-400">
              +91 98765 43210
            </a>
          </p>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-12 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} PixelsPrint. All rights reserved. <br />
        Designed & Developed by{" "}
        <span className="text-indigo-400 font-medium hover:underline">
          Pratham Gehlot
        </span>
      </div>
    </footer>
  );
};

export default Footer;
