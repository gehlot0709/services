import React from "react";
import { motion } from "framer-motion";
import {
  FaPalette,
  FaMousePointer,
  FaUsers,
  FaMobileAlt,
  FaArrowLeft,
  FaRocket,
  FaCheckCircle,
  FaEye,
  FaLightbulb,
  FaCode,
  FaLaptop,
  FaLayerGroup,
  FaPaintBrush,
  FaMagic,
  FaRulerCombined,
  FaBrain,
  FaRegHeart,
  FaSync,
  FaShieldAlt,
} from "react-icons/fa";
import { SiFigma, SiAdobe, SiInvision, SiSketch } from "react-icons/si";
import { Link } from "react-router-dom";

export default function UIUX() {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  const rotateIn = {
    hidden: { opacity: 0, rotate: -10 },
    visible: {
      opacity: 1,
      rotate: 0,
      transition: { duration: 0.5 },
    },
  };

  // UI/UX Services
  const uiuxServices = [
    {
      service: "User Research",
      description: "Understand user needs, behaviors, and pain points",
      icon: <FaUsers />,
      color: "from-blue-500 to-cyan-500",
      deliverables: ["User Personas", "Journey Maps", "Usability Testing"],
    },
    {
      service: "Wireframing",
      description: "Create structural blueprints of your application",
      icon: <FaRulerCombined />,
      color: "from-purple-500 to-indigo-500",
      deliverables: [
        "Low-Fidelity Wireframes",
        "Information Architecture",
        "User Flows",
      ],
    },
    {
      service: "UI Design",
      description: "Create visually appealing and consistent interfaces",
      icon: <FaPalette />,
      color: "from-pink-500 to-rose-500",
      deliverables: [
        "Visual Design System",
        "Component Library",
        "Style Guide",
      ],
    },
    {
      service: "Prototyping",
      description: "Interactive prototypes to test and validate designs",
      icon: <FaMousePointer />,
      color: "from-green-500 to-emerald-500",
      deliverables: [
        "Interactive Prototypes",
        "User Testing",
        "Animation Design",
      ],
    },
    {
      service: "Mobile App Design",
      description: "Native and cross-platform mobile app interfaces",
      icon: <FaMobileAlt />,
      color: "from-orange-500 to-yellow-500",
      deliverables: [
        "iOS/Android Guidelines",
        "Responsive Design",
        "Touch Interactions",
      ],
    },
    {
      service: "Design Systems",
      description: "Scalable design systems for consistent experiences",
      icon: <FaLayerGroup />,
      color: "from-teal-500 to-cyan-500",
      deliverables: ["Component Library", "Design Tokens", "Documentation"],
    },
  ];

  // Design Tools
  const designTools = [
    {
      category: "Design & Prototyping",
      tools: [
        {
          name: "Figma",
          icon: <SiFigma />,
          color: "text-red-500",
          purpose: "Collaborative Design",
        },
        {
          name: "Adobe XD",
          icon: <SiAdobe />,
          color: "text-purple-500",
          purpose: "UI/UX Design",
        },
        {
          name: "Sketch",
          icon: <SiSketch />,
          color: "text-orange-500",
          purpose: "Interface Design",
        },
        {
          name: "InVision",
          icon: <SiInvision />,
          color: "text-blue-500",
          purpose: "Prototyping",
        },
      ],
    },
  ];

  // Design Principles
  const designPrinciples = [
    {
      principle: "User-Centered Design",
      description: "Design decisions based on user needs and behaviors",
      icon: <FaUsers className="text-blue-500 text-2xl" />,
    },
    {
      principle: "Consistency",
      description: "Uniform design patterns across the entire product",
      icon: <FaSync className="text-purple-500 text-2xl" />,
    },
    {
      principle: "Accessibility",
      description:
        "Design that works for everyone, including people with disabilities",
      icon: <FaShieldAlt className="text-green-500 text-2xl" />,
    },
    {
      principle: "Simplicity",
      description: "Minimalist design that reduces cognitive load",
      icon: <FaMagic className="text-pink-500 text-2xl" />,
    },
  ];

  // UI/UX Process
  const designProcess = [
    {
      step: "01",
      title: "Discover",
      description: "Research and understand user needs and business goals",
    },
    {
      step: "02",
      title: "Define",
      description:
        "Create user personas, journey maps, and information architecture",
    },
    {
      step: "03",
      title: "Design",
      description: "Wireframes, visual design, and interactive prototypes",
    },
    {
      step: "04",
      title: "Test",
      description: "Usability testing and user feedback collection",
    },
    {
      step: "05",
      title: "Iterate",
      description: "Refine designs based on testing and feedback",
    },
    {
      step: "06",
      title: "Implement",
      description: "Handoff to developers and design system implementation",
    },
  ];

  // UI Design Elements
  const uiElements = [
    "Typography System",
    "Color Palette",
    "Iconography",
    "Spacing & Layout",
    "Buttons & Forms",
    "Navigation Patterns",
    "Data Visualization",
    "Micro-interactions",
    "Loading States",
    "Error States",
  ];

  // UX Metrics
  const uxMetrics = [
    {
      metric: "Usability Score",
      value: "90+",
      description: "Based on industry standards",
      icon: <FaCheckCircle className="text-green-500 text-2xl" />,
    },
    {
      metric: "Task Success Rate",
      value: "95%",
      description: "User task completion rate",
      icon: <FaEye className="text-blue-500 text-2xl" />,
    },
    {
      metric: "User Satisfaction",
      value: "4.8/5",
      description: "Average user satisfaction score",
      icon: <FaRegHeart className="text-pink-500 text-2xl" />,
    },
    {
      metric: "Time on Task",
      value: "Reduced by 40%",
      description: "With optimized user flows",
      icon: <FaRocket className="text-orange-500 text-2xl" />,
    },
  ];

  // Responsive Design
  const responsiveBreakpoints = [
    { device: "Mobile", width: "320px - 480px", icon: <FaMobileAlt /> },
    { device: "Tablet", width: "481px - 768px", icon: <FaLaptop /> },
    { device: "Desktop", width: "769px - 1200px" },
    { device: "Large Desktop", width: "1201px+",  },
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Header Section */}
      <motion.div variants={fadeInUp} className="text-center mb-12">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-20"></div>
            <motion.div
              variants={rotateIn}
              className="relative inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20"
            >
              <FaPalette className="text-4xl text-blue-600 dark:text-blue-400" />
            </motion.div>
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          UI/UX Design
        </h1>

        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
          Create intuitive, beautiful, and user-centered digital experiences
          that delight users and drive business results
        </p>

        <motion.div variants={scaleIn}>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium transition-colors duration-200"
          >
            <FaArrowLeft />
            Back to Services
          </Link>
        </motion.div>
      </motion.div>

      {/* UX Metrics */}
      <motion.div variants={fadeInUp} className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {uxMetrics.map((metric, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                {metric.icon}
                <div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {metric.value}
                  </div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">
                    {metric.metric}
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* UI/UX Services */}
      <motion.div variants={fadeInUp} className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Comprehensive UI/UX Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {uiuxServices.map((service, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group"
            >
              <div className="h-full p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-transparent transition-all duration-300 hover:shadow-xl overflow-hidden relative">
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                ></div>

                <div
                  className={`inline-flex items-center justify-center w-14 h-14 mb-4 rounded-lg bg-gradient-to-r ${service.color} text-white`}
                >
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {service.service}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {service.description}
                </p>

                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Deliverables:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.deliverables.map((item, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Design Tools */}
      <motion.div variants={fadeInUp} className="mb-16">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400">
              <FaPaintBrush className="text-2xl" />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Professional Design Tools
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Industry-standard tools for creating exceptional user experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {designTools[0].tools.map((tool, idx) => (
              <motion.div
                key={idx}
                variants={scaleIn}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="p-6 rounded-xl bg-white dark:bg-gray-800 text-center hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                <div className={`text-4xl mb-3 ${tool.color}`}>{tool.icon}</div>
                <div className="font-bold text-gray-900 dark:text-white mb-1">
                  {tool.name}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {tool.purpose}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Design Principles */}
      <motion.div variants={fadeInUp} className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Our Design Principles
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {designPrinciples.map((principle, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                {principle.icon}
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {principle.principle}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Design Process */}
      <motion.div variants={fadeInUp} className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Our UI/UX Design Process
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {designProcess.map((step, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <div className="h-full p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-lg">
                      {step.step}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>

              {index < designProcess.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-8 h-0.5 bg-gray-300 dark:bg-gray-700"></div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* UI Elements */}
      <motion.div variants={fadeInUp} className="mb-16">
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-white dark:bg-gray-800 text-purple-600 dark:text-purple-400">
              <FaLayerGroup className="text-2xl" />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              UI Design Elements
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Comprehensive design system components we create
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {uiElements.map((element, idx) => (
              <motion.div
                key={idx}
                variants={scaleIn}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-3 rounded-lg bg-white dark:bg-gray-800 text-center hover:shadow-md transition-shadow duration-300 border border-gray-200 dark:border-gray-700"
              >
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {element}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Responsive Design */}
      <motion.div variants={fadeInUp} className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Responsive Design Approach
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {responsiveBreakpoints.map((breakpoint, index) => (
            <motion.div
              key={index}
              variants={slideInLeft}
              whileHover={{ x: 5 }}
              className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700"
            >
              <div className="text-3xl text-blue-500 mb-4">
                {breakpoint.icon}
              </div>

              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {breakpoint.device}
              </h3>

              <div className="text-sm text-gray-600 dark:text-gray-400">
                {breakpoint.width}
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  Design Considerations:
                </div>
                <div className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                  {breakpoint.device === "Mobile" &&
                    "Touch interactions, simplified navigation"}
                  {breakpoint.device === "Tablet" &&
                    "Hybrid interactions, adaptive layouts"}
                  {breakpoint.device === "Desktop" &&
                    "Hover states, complex interactions"}
                  {breakpoint.device === "Large Desktop" &&
                    "Expanded content, multi-column layouts"}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Design Thinking & User Psychology */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {/* Design Thinking */}
        <motion.div variants={fadeInUp}>
          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border border-blue-200 dark:border-blue-800">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <FaBrain className="text-blue-500" />
              Design Thinking Methodology
            </h3>

            <ul className="space-y-3">
              {[
                "Empathize with users through research",
                "Define user problems and needs",
                "Ideate creative solutions",
                "Prototype design concepts",
                "Test with real users",
                "Iterate based on feedback",
              ].map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <FaLightbulb className="text-yellow-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* User Psychology */}
        <motion.div variants={fadeInUp}>
          <div className="p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-800">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <FaUsers className="text-purple-500" />
              User Psychology Insights
            </h3>

            <div className="space-y-4">
              {[
                {
                  insight: "Hick's Law",
                  progress: "Decision time increases with choices",
                },
                {
                  insight: "Fitts's Law",
                  progress: "Time to target based on size/distance",
                },
                {
                  insight: "Miller's Law",
                  progress: "7±2 items in working memory",
                },
                {
                  insight: "Jakob's Law",
                  progress: "Users prefer familiar patterns",
                },
              ].map((item, idx) => (
                <div key={idx}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {item.insight}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      Psychology Principle
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "85%" }}
                      transition={{ delay: idx * 0.2, duration: 1 }}
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Accessibility & Inclusivity */}
      <motion.div
        variants={fadeInUp}
        className="mb-16 p-6 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800"
      >
        <div className="flex items-center gap-4 mb-4">
          <FaShieldAlt className="text-2xl text-green-500" />
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            Accessibility & Inclusivity
          </h3>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          We design for everyone. Our designs follow WCAG 2.1 guidelines to
          ensure accessibility for users with disabilities, including proper
          color contrast, keyboard navigation, screen reader compatibility, and
          more.
        </p>
        <div className="flex flex-wrap gap-3">
          {[
            "WCAG 2.1 Compliance",
            "Color Contrast AAA",
            "Keyboard Navigation",
            "Screen Reader Support",
            "Focus Indicators",
            "ARIA Labels",
          ].map((item, idx) => (
            <motion.div
              key={idx}
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-800"
            >
              <FaCheckCircle className="text-green-500 text-sm" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {item}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div variants={fadeInUp} className="text-center">
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Create Exceptional User Experiences?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's design intuitive, beautiful interfaces that delight users and
            drive business success
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/get-quote"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg"
              >
                <FaRocket />
                Start Your UI/UX Project
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                <FaEye />
                Free UX Audit
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
