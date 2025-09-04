import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const WavyDivider = () => {
  const pathRef = useRef(null);
  const containerRef = useRef(null);

  const finalPath = `M 10 100 Q 500 100 990 100`;

  useEffect(() => {
    const container = containerRef.current;
    const path = pathRef.current;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const y = e.clientY - rect.top;

      gsap.to(path, {
        attr: { d: `M 10 100 Q 500 ${y} 990 100` },
        duration: 0.5,
        ease: "power3.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(path, {
        attr: { d: finalPath },
        duration: 1,
        ease: "elastic.out(1,0.2)",
      });
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-20 md:h-24 lg:h-28 flex items-center justify-center"
    >
      <svg
        viewBox="0 0 1000 250"
        className="w-full h-full"
        preserveAspectRatio="none"
      >
        <path
          ref={pathRef}
          d="M 10 100 Q 500 100 990 100"
          stroke="black"
          strokeWidth="2"
          fill="transparent"
        />
      </svg>
    </div>
  );
};

export default WavyDivider;
