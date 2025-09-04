import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { motion, useScroll } from "framer-motion";
import ParticlesBackground from "./ParticlesBackground";

function Hero() {
  const designRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonsRef = useRef([]);
  const particlesContainerRef = useRef(null);

  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    // Rotate + pulse "Design"
    tl.fromTo(
      designRef.current,
      { rotation: 0, scale: 1 },
      {
        rotation: 360,
        duration: 2,
        ease: "power2.inOut",
      }
    ).to(
      designRef.current,
      {
        scale: 1.2,
        duration: 0.5,
        yoyo: true,
        repeat: 1,
      },
      "-=1.5"
    );

    // Heading
    tl.fromTo(
      headingRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
      },
      "-=1"
    );

    // Paragraph
    tl.fromTo(
      paragraphRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
      },
      "-=0.8"
    );

    // Buttons
    tl.fromTo(
      buttonsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
      },
      "-=0.6"
    );

    // Particles container fade-in
    if (particlesContainerRef.current) {
      tl.fromTo(
        particlesContainerRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
        },
        "-=1"
      );
    }
  }, []);

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

      <section className="relative flex flex-col items-center justify-center min-h-screen px-6 overflow-hidden">
        {/* Particle Background Container */}
        <div
          ref={particlesContainerRef}
          className="particles-bg absolute inset-0 z-0 opacity-0"
        >
          <ParticlesBackground />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-3xl">
          <h1
            ref={headingRef}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight opacity-0 text-black"
          >
            We Build, Market &{" "}
            <span ref={designRef} className="inline-block text-indigo-500">
              Design
            </span>{" "}
            Your Success
          </h1>
          <p
            ref={paragraphRef}
            className="text-lg sm:text-xl text-gray-800 mb-10 opacity-0"
          >
            Our agency provides top-quality Web Development, Digital Marketing,
            and Creative Designing services to grow your business online.
          </p>
          <div className="hero-buttons flex flex-col sm:flex-row justify-center gap-4">
            {["/get-quote", "/portfolio"].map((path, i) => (
              <Link
                key={path}
                to={path}
                ref={(el) => (buttonsRef.current[i] = el)}
                className={`${
                  i === 0
                    ? "bg-indigo-600 text-white font-semibold"
                    : "border border-indigo-500 text-indigo-500"
                } px-6 py-3 rounded-lg shadow-lg hover:bg-indigo-500 hover:text-white transition opacity-0`}
              >
                {i === 0 ? "Get a Quote" : "View Portfolio"}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
