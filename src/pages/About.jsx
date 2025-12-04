import React from "react";
import { motion } from "framer-motion";
import { FaBullseye, FaUsers, FaRocket } from "react-icons/fa";

const AboutUs = () => {
  return (
    <section className="about-us py-20 my-20 ">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-6 text-gray-800 dark:text-white font-serif"
        >
          About <span className="text-indigo-700">PixelsPrint</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center text-gray-900 dark:text-gray-300 mb-10 max-w-3xl mx-auto"
        >
          At PixelsPrint, we blend creativity with technology to deliver
          impactful digital experiences. From web development to marketing and
          branding, our mission is to help businesses grow with smart, scalable
          solutions.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center"
          >
            <FaBullseye className="text-4xl text-indigo-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              Our Mission
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Empower brands with digital tools that drive results and elevate
              their online presence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center"
          >
            <FaUsers className="text-4xl text-pink-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              Our Team
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              A passionate crew of developers, designers, and strategists
              committed to excellence and innovation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center"
          >
            <FaRocket className="text-4xl text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              Our Vision
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              To become a trusted digital partner for businesses worldwide,
              delivering value through design and tech.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
