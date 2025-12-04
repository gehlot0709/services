import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  {
    title: "SEO",
    icon: "🔍",
    desc: "We improve your website’s visibility on search engines with keyword optimization, technical SEO, and quality backlinks to drive organic traffic.",
  },
  {
    title: "SMO",
    icon: "📢",
    desc: "Boost your brand awareness on social media platforms with engaging posts, profile optimization, and community management strategies.",
  },
  {
    title: "Web Design",
    icon: "💻",
    desc: "We create modern, responsive, and user-friendly websites tailored to your business goals and optimized for performance across all devices.",
  },
  {
    title: "Graphic Design",
    icon: "🎨",
    desc: "Our creative team delivers eye-catching graphics, logos, banners, and branding materials that leave a lasting impression on your audience.",
  },
  {
    title: "PPC",
    icon: "💰",
    desc: "Maximize ROI with data-driven Pay-Per-Click campaigns on Google and social platforms, targeting the right audience for instant results.",
  },
  {
    title: "SMM",
    icon: "📱",
    desc: "Grow your online presence with result-driven Social Media Marketing campaigns designed to increase engagement, followers, and conversions.",
  },
];

function ServiceCard({ service, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: false, // 👈 triggers every time it enters view
    margin: "-100px 0px -100px 0px",
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="group bg-white dark:bg-gray-800 p-10 rounded-3xl shadow-xl transition-all duration-500 hover:scale-105 hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600"
    >
      <div className="text-5xl mb-4 transition duration-300 group-hover:text-white group-hover:scale-110">
        {service.icon}
      </div>
      <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white transition duration-300 group-hover:text-white">
        {service.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 transition duration-300 group-hover:text-white leading-relaxed">
        {service.desc}
      </p>
    </motion.div>
  );
}

function Services() {
  return (
    <section className="services py-16  dark:bg-gray-900">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          What We Offer
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
