import React from "react";
import { Link } from "react-router-dom";
import { motion, useScroll } from "framer-motion";


function Hero() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      {/* Scroll Indicator */}
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 6,
          originX: 0,
          backgroundColor: "#ff0088",
          zIndex: 50,
        }}
      />

      <section className="relative flex flex-col items-center justify-center min-h-screen px-6 overflow-hidden hero_section">
        {/* Particle Background */}
        <motion.div
          className="particles-bg absolute inset-0 z-0 opacity-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        ></motion.div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-3xl">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight text-black"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            We Build, Market &{" "}
            <motion.span
              className="inline-block text-indigo-500"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                rotate: { duration: 2, ease: "easeInOut" },
                scale: { duration: 2, times: [0, 0.5, 1], ease: "easeInOut" },
              }}
            >
              Design
            </motion.span>{" "}
            Your Success
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-gray-800 mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Our agency provides top-quality Web Development, Digital Marketing,
            and Creative Designing services to grow your business online.
          </motion.p>

          <motion.div
            className="hero-buttons flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
          >
            {["/get-quote", "/portfolio"].map((path, i) => (
              <Link
                key={path}
                to={path}
                className={`${
                  i === 0
                    ? "bg-indigo-600 text-white font-semibold"
                    : "border border-indigo-500 text-indigo-500"
                } px-6 py-3 rounded-lg shadow-lg hover:bg-indigo-500 hover:text-white transition`}
              >
                {i === 0 ? "Get a Quote" : "View Portfolio"}
              </Link>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Hero;
