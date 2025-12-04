import React from "react";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaChartLine,
  FaMobileAlt,
  FaGlobe,
  FaArrowLeft,
  FaRocket,
  FaCheckCircle,
  FaCode,
  FaPenNib,
  FaLink,
  FaUsers,
  FaFileAlt,
  FaShieldAlt,
  FaBolt,
  FaTachometerAlt,
  FaRegClock,
  FaTools,
  FaGoogle,
} from "react-icons/fa";
// import { SiGoogleanalytics, SiSearchenginemarketing, SiPagespeedinsights } from 'react-icons/si';
import { Link } from "react-router-dom";

export default function Seo() {
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

  // SEO Services
  const seoServices = [
    {
      category: "Technical SEO",
      icon: <FaCode />,
      description: "Website infrastructure optimization for search engines",
      color: "from-blue-500 to-cyan-500",
      services: [
        "Site Speed Optimization",
        "Mobile-First Indexing",
        "Schema Markup",
        "XML Sitemaps",
      ],
    },
    {
      category: "On-Page SEO",
      icon: <FaPenNib />,
      description: "Content and HTML source code optimization",
      color: "from-green-500 to-emerald-500",
      services: [
        "Keyword Optimization",
        "Meta Tags",
        "Content Strategy",
        "Heading Structure",
      ],
    },
    {
      category: "Off-Page SEO",
      icon: <FaLink />,
      description: "Activities outside your website to improve rankings",
      color: "from-purple-500 to-indigo-500",
      services: [
        "Link Building",
        "Guest Posting",
        "Local SEO",
        "Brand Mentions",
      ],
    },
    {
      category: "Local SEO",
      icon: <FaGlobe />,
      description: "Optimize for local search results and Google My Business",
      color: "from-orange-500 to-yellow-500",
      services: [
        "GMB Optimization",
        "Local Citations",
        "Review Management",
        "NAP Consistency",
      ],
    },
  ];

  // SEO Metrics & Results
  const seoMetrics = [
    {
      metric: "Organic Traffic Growth",
      value: "200-500%",
      description: "Average increase in first 6 months",
      icon: <FaChartLine className="text-green-500 text-2xl" />,
    },
    {
      metric: "Keyword Rankings",
      value: "Top 3 Positions",
      description: "Target for primary keywords",
      icon: <FaSearch className="text-blue-500 text-2xl" />,
    },
    {
      metric: "Page Speed Score",
      value: "90+",
      description: "Google PageSpeed Insights",
      // icon: <SiPagespeedinsights className="text-orange-500 text-2xl" />,
    },
    {
      metric: "Conversion Rate",
      value: "50% Increase",
      description: "From optimized landing pages",
      icon: <FaUsers className="text-purple-500 text-2xl" />,
    },
  ];

  // SEO Process
  const seoProcess = [
    {
      step: "01",
      title: "SEO Audit",
      description: "Comprehensive website analysis and competitor research",
    },
    {
      step: "02",
      title: "Keyword Strategy",
      description: "Identify target keywords and search intent",
    },
    {
      step: "03",
      title: "On-Page Optimization",
      description: "Optimize content, meta tags, and technical elements",
    },
    {
      step: "04",
      title: "Content Creation",
      description: "Develop SEO-optimized content and blog posts",
    },
    {
      step: "05",
      title: "Link Building",
      description: "Acquire high-quality backlinks and citations",
    },
    {
      step: "06",
      title: "Monitoring & Reporting",
      description: "Track progress and provide monthly reports",
    },
  ];

  // Technical SEO Elements
  const technicalElements = [
    "Core Web Vitals",
    "Mobile Responsiveness",
    "SSL Certificate",
    "Structured Data",
    "Canonical Tags",
    "Robots.txt",
    "404 Error Handling",
    "URL Structure",
    "Image Optimization",
    "JavaScript SEO",
  ];

  // SEO Tools We Use
  const seoTools = [
    {
      name: "Google Analytics",
      color: "text-orange-500",
      purpose: "Traffic Analysis",
    },
    {
      name: "Google Search Console",
      icon: <FaGoogle />,
      color: "text-blue-500",
      purpose: "Search Performance",
    },
    {
      name: "SEMrush",
      // icon: <SiSearchenginemarketing />,
      color: "text-red-500",
      purpose: "Competitor Analysis",
    },
    {
      name: "Ahrefs",
      icon: <FaSearch />,
      color: "text-green-500",
      purpose: "Backlink Analysis",
    },
  ];

  // SEO Packages
  const seoPackages = [
    {
      name: "Basic SEO",
      price: "Starter",
      features: [
        "On-Page Optimization",
        "Technical Audit",
        "Keyword Research",
        "Monthly Reporting",
        "5 Keywords Targeted",
      ],
      color: "from-gray-400 to-gray-600",
    },
    {
      name: "Professional SEO",
      price: "Most Popular",
      features: [
        "Full On-Page SEO",
        "Technical Implementation",
        "Competitor Analysis",
        "Content Strategy",
        "15 Keywords Targeted",
        "Monthly Link Building",
      ],
      color: "from-blue-500 to-cyan-500",
      popular: true,
    },
    {
      name: "Enterprise SEO",
      price: "Custom",
      features: [
        "Complete SEO Strategy",
        "Advanced Technical SEO",
        "Content Creation",
        "Comprehensive Link Building",
        "Unlimited Keywords",
        "Weekly Reporting",
        "Priority Support",
      ],
      color: "from-purple-500 to-pink-500",
    },
  ];

  // SEO Benefits
  const seoBenefits = [
    {
      benefit: "Long-Term Results",
      description: "SEO provides sustainable organic traffic growth",
      icon: <FaRegClock className="text-green-500" />,
    },
    {
      benefit: "Higher Credibility",
      description: "Top rankings build trust with your audience",
      icon: <FaShieldAlt className="text-blue-500" />,
    },
    {
      benefit: "Better ROI",
      description: "Organic traffic has higher conversion rates",
      // icon: <FaDollarSign className="text-purple-500" />,
    },
    {
      benefit: "Mobile Optimization",
      description: "SEO improves mobile user experience",
      icon: <FaMobileAlt className="text-orange-500" />,
    },
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
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 rounded-full blur-xl opacity-20"></div>
            <motion.div
              variants={rotateIn}
              className="relative inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-blue-100 to-green-100 dark:from-blue-900/20 dark:to-green-900/20"
            >
              <FaSearch className="text-4xl text-blue-600 dark:text-blue-400" />
            </motion.div>
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Search Engine Optimization
        </h1>

        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
          Improve your website's visibility in search engines and drive
          sustainable organic traffic growth
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

      {/* SEO Metrics */}
      <motion.div variants={fadeInUp} className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {seoMetrics.map((metric, index) => (
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

      {/* SEO Services */}
      <motion.div variants={fadeInUp} className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Comprehensive SEO Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {seoServices.map((service, index) => (
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

                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-r ${service.color} text-white`}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {service.category}
                  </h3>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {service.description}
                </p>

                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Services Included:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.services.map((item, idx) => (
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

      {/* SEO Process */}
      <motion.div variants={fadeInUp} className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Our SEO Optimization Process
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {seoProcess.map((step, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <div className="h-full p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-green-500 text-white font-bold text-lg">
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

              {index < seoProcess.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-8 h-0.5 bg-gray-300 dark:bg-gray-700"></div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* SEO Packages */}
      <motion.div variants={fadeInUp} className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          SEO Service Packages
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {seoPackages.map((pkg, index) => (
            <motion.div
              key={index}
              variants={slideInLeft}
              whileHover={{ scale: pkg.popular ? 1.05 : 1.02, y: -10 }}
              className="relative"
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="px-4 py-1 text-sm font-bold rounded-full bg-gradient-to-r from-blue-500 to-green-500 text-white">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div
                className={`h-full p-6 rounded-2xl border-2 ${
                  pkg.popular
                    ? "border-blue-500 dark:border-blue-500"
                    : "border-gray-200 dark:border-gray-700"
                } bg-white dark:bg-gray-800`}
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {pkg.name}
                  </h3>
                  <div
                    className={`text-lg font-bold text-gray-900 dark:text-white mb-4 ${
                      pkg.popular ? "text-blue-600 dark:text-blue-400" : ""
                    }`}
                  >
                    {pkg.price}
                  </div>
                  <div
                    className={`h-1 w-16 mx-auto rounded-full bg-gradient-to-r ${pkg.color}`}
                  ></div>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + idx * 0.05 }}
                      className="flex items-center gap-3"
                    >
                      <FaCheckCircle className="text-green-500 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-400">
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-center"
                >
                  <Link
                    to="/get-quote"
                    className={`inline-block w-full py-3 font-bold rounded-lg transition-all duration-300 ${
                      pkg.popular
                        ? "bg-gradient-to-r from-blue-500 to-green-500 text-white hover:from-blue-600 hover:to-green-600"
                        : "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600"
                    }`}
                  >
                    Get Started
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Technical SEO Elements */}
      <motion.div variants={fadeInUp} className="mb-16">
        <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 rounded-2xl p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400">
              <FaTools className="text-2xl" />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Technical SEO Elements
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Comprehensive technical optimization for search engine crawling
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {technicalElements.map((element, idx) => (
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

      {/* SEO Tools */}
      <motion.div variants={fadeInUp} className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Professional SEO Tools We Use
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {seoTools.map((tool, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 text-center"
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
      </motion.div>

      {/* SEO Benefits */}
      <motion.div variants={fadeInUp} className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Benefits of Professional SEO
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {seoBenefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-2xl">{benefit.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {benefit.benefit}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Performance Focus */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {/* Mobile Optimization */}
        <motion.div variants={fadeInUp}>
          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border border-blue-200 dark:border-blue-800">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <FaMobileAlt className="text-blue-500" />
              Mobile-First Indexing
            </h3>

            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Google now uses the mobile version of your site for indexing and
              ranking. We ensure your website is fully optimized for mobile
              devices.
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                "Responsive Design",
                "Fast Loading",
                "Touch-Friendly",
                "AMP Pages",
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
          </div>
        </motion.div>

        {/* Performance Metrics */}
        <motion.div variants={fadeInUp}>
          <div className="p-6 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <FaTachometerAlt className="text-green-500" />
              Performance Tracking
            </h3>

            <div className="space-y-4">
              {[
                {
                  metric: "Organic Traffic",
                  target: "Month-over-Month Growth",
                },
                { metric: "Keyword Rankings", target: "Top 10 Positions" },
                { metric: "Backlink Quality", target: "Domain Authority 40+" },
                { metric: "Page Speed", target: "Core Web Vitals Pass" },
              ].map((item, idx) => (
                <div key={idx}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {item.metric}
                    </span>
                    <span className="text-sm font-bold text-gray-900 dark:text-white">
                      {item.target}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{
                        width:
                          idx === 0
                            ? "95%"
                            : idx === 1
                            ? "85%"
                            : idx === 2
                            ? "75%"
                            : "90%",
                      }}
                      transition={{ delay: idx * 0.2, duration: 1 }}
                      className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* CTA Section */}
      <motion.div variants={fadeInUp} className="text-center">
        <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Dominate Search Results?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's improve your search engine rankings and drive sustainable
            organic growth for your business
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/get-quote"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg"
              >
                <FaRocket />
                Start SEO Optimization
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                <FaSearch />
                Free SEO Audit
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
