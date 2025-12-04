import React from "react";
import { motion } from "framer-motion";
import {
  FaGoogle,
  FaFacebook,
  FaChartLine,
  FaBullseye,
  FaArrowLeft,
  FaRocket,
  FaCheckCircle,
  FaDollarSign,
  FaSearch,
  FaUsers,
  FaMobileAlt,
  FaRegClock,
  FaShieldAlt,
  FaCogs,
  FaGlobe,
  FaTachometerAlt,
  FaHandshake,
} from "react-icons/fa";
// import { SiMicrosoft, SiLinkedin, SiTwitter, SiInstagram } from 'react-icons/si';
import { Link } from "react-router-dom";

export default function PPC() {
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

  // PPC Platforms
  const ppcPlatforms = [
    {
      platform: "Google Ads",
      icon: <FaGoogle />,
      description:
        "Search, Display, and Shopping campaigns on the world's largest search engine",
      color: "from-blue-500 to-cyan-500",
      features: [
        "Search Ads",
        "Display Network",
        "Shopping Ads",
        "YouTube Ads",
      ],
    },
    {
      platform: "Microsoft Ads",
      description: "Reach Bing and Yahoo audiences with targeted advertising",
      color: "from-green-500 to-emerald-500",
      features: [
        "Bing Search",
        "LinkedIn Profile Targeting",
        "Audience Network",
      ],
    },
    {
      platform: "Facebook & Instagram",
      icon: <FaFacebook />,
      description:
        "Target specific demographics, interests, and behaviors on social media",
      color: "from-blue-600 to-indigo-600",
      features: [
        "News Feed Ads",
        "Stories Ads",
        "Carousel Ads",
        "Lead Generation",
      ],
    },
    {
      platform: "LinkedIn Ads",
      // icon: <SiLinkedin />,
      description:
        "B2B targeting by job title, company, industry, and professional interests",
      color: "from-blue-400 to-cyan-400",
      features: ["Sponsored Content", "Message Ads", "Dynamic Ads", "Text Ads"],
    },
  ];

  // Campaign Types
  const campaignTypes = [
    {
      type: "Search Campaigns",
      description: "Text ads that appear on search engine results",
      icon: <FaSearch />,
      color: "text-blue-500",
      roi: "High Intent",
    },
    {
      type: "Display Campaigns",
      description: "Visual ads across websites and apps in display network",
      icon: <FaGlobe />,
      color: "text-green-500",
      roi: "Brand Awareness",
    },
    {
      type: "Shopping Campaigns",
      description: "Product listings with images, prices, and reviews",
      icon: <FaDollarSign />,
      color: "text-orange-500",
      roi: "Direct Sales",
    },
    {
      type: "Video Campaigns",
      description: "YouTube and social media video advertisements",
      icon: <FaMobileAlt />,
      color: "text-red-500",
      roi: "Engagement",
    },
    {
      type: "Social Campaigns",
      description: "Ads on Facebook, Instagram, LinkedIn, and Twitter",
      icon: <FaUsers />,
      color: "text-purple-500",
      roi: "Community Building",
    },
    {
      type: "Remarketing",
      description: "Target users who previously visited your website",
      icon: <FaBullseye />,
      color: "text-pink-500",
      roi: "High Conversion",
    },
  ];

  // PPC Process
  const ppcProcess = [
    {
      step: "01",
      title: "Strategy & Planning",
      description: "Define goals, budget, and target audience",
    },
    {
      step: "02",
      title: "Keyword Research",
      description: "Identify high-intent keywords and negative keywords",
    },
    {
      step: "03",
      title: "Campaign Setup",
      description: "Create ad groups, write ad copy, and set bids",
    },
    {
      step: "04",
      title: "Landing Page Optimization",
      description: "Design and optimize conversion-focused landing pages",
    },
    {
      step: "05",
      title: "Launch & Monitoring",
      description: "Go live and monitor performance in real-time",
    },
    {
      step: "06",
      title: "Optimization & Scaling",
      description: "Continuously improve campaigns and scale winners",
    },
  ];

  // Performance Metrics
  const performanceMetrics = [
    {
      metric: "Click-Through Rate (CTR)",
      value: "2-5%",
      description: "Average industry CTR for search campaigns",
      icon: <FaChartLine className="text-blue-500" />,
    },
    {
      metric: "Conversion Rate",
      value: "3-7%",
      description: "Average conversion rate for optimized campaigns",
      icon: <FaCheckCircle className="text-green-500" />,
    },
    {
      metric: "Cost Per Click (CPC)",
      value: "$1-$5",
      description: "Varies by industry and competition",
      icon: <FaDollarSign className="text-orange-500" />,
    },
    {
      metric: "Return on Ad Spend (ROAS)",
      value: "300%+",
      description: "Average return for well-optimized campaigns",
      icon: <FaTachometerAlt className="text-purple-500" />,
    },
  ];

  // Targeting Options
  const targetingOptions = [
    "Keyword Targeting",
    "Demographic Targeting",
    "Geographic Targeting",
    "Device Targeting",
    "Time of Day",
    "Interest-Based",
    "Behavioral Targeting",
    "Custom Audiences",
    "Lookalike Audiences",
    "Remarketing Lists",
  ];

  // Management Services
  const managementServices = [
    {
      service: "Daily Monitoring",
      description: "24/7 campaign performance tracking and adjustments",
      icon: <FaRegClock />,
    },
    {
      service: "A/B Testing",
      description: "Continuous testing of ads, landing pages, and bids",
      icon: <FaCogs />,
    },
    {
      service: "Conversion Tracking",
      description: "Setup and optimization of conversion tracking",
      icon: <FaBullseye />,
    },
    {
      service: "Monthly Reporting",
      description: "Detailed performance reports with insights",
      icon: <FaChartLine />,
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
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 rounded-full blur-xl opacity-20"></div>
            <motion.div
              variants={rotateIn}
              className="relative inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/20 dark:to-blue-900/20"
            >
              <FaGoogle className="text-4xl text-green-600 dark:text-green-400" />
            </motion.div>
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          PPC Advertising
        </h1>

        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
          Drive immediate results with targeted pay-per-click campaigns across
          search engines and social platforms
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

      {/* Performance Metrics */}
      <motion.div variants={fadeInUp} className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {performanceMetrics.map((metric, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gray-100 dark:bg-gray-700">
                  <div className="text-2xl">{metric.icon}</div>
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {metric.value}
                </div>
                <p className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  {metric.metric}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {metric.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* PPC Platforms */}
      <motion.div variants={fadeInUp} className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Advertising Platforms We Manage
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ppcPlatforms.map((platform, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group"
            >
              <div className="h-full p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-transparent transition-all duration-300 hover:shadow-xl overflow-hidden relative">
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${platform.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                ></div>

                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-r ${platform.color} text-white`}
                  >
                    <div className="text-2xl">{platform.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {platform.platform}
                  </h3>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {platform.description}
                </p>

                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Campaign Types:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {platform.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Campaign Types */}
      <motion.div variants={fadeInUp} className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          PPC Campaign Types
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {campaignTypes.map((campaign, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`text-2xl ${campaign.color}`}>
                  {campaign.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                    {campaign.type}
                  </h3>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-xs font-semibold">
                    ROI: {campaign.roi}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                {campaign.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* PPC Process */}
      <motion.div variants={fadeInUp} className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Our PPC Management Process
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ppcProcess.map((step, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <div className="h-full p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold text-lg">
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

              {index < ppcProcess.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-8 h-0.5 bg-gray-300 dark:bg-gray-700"></div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Targeting Options */}
      <motion.div variants={fadeInUp} className="mb-16">
        <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 rounded-2xl p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400">
              <FaBullseye className="text-2xl" />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Advanced Targeting Options
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Reach the right audience with precision targeting
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {targetingOptions.map((option, idx) => (
              <motion.div
                key={idx}
                variants={scaleIn}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-3 rounded-lg bg-white dark:bg-gray-800 text-center hover:shadow-md transition-shadow duration-300 border border-gray-200 dark:border-gray-700"
              >
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {option}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Management Services */}
      <motion.div variants={fadeInUp} className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Comprehensive Management Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {managementServices.map((service, index) => (
            <motion.div
              key={index}
              variants={slideInLeft}
              whileHover={{ x: 5 }}
              className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                {service.icon}
              </div>

              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {service.service}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Benefits & ROI */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {/* Benefits */}
        <motion.div variants={fadeInUp}>
          <div className="p-6 rounded-xl bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border border-green-200 dark:border-green-800">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <FaHandshake className="text-green-500" />
              Why Choose Our PPC Services
            </h3>

            <ul className="space-y-3">
              {[
                "Immediate Traffic & Results",
                "Highly Targeted Audience Reach",
                "Full Budget Control & Transparency",
                "Real-Time Performance Tracking",
                "Scalable Campaigns",
                "Expert Account Management",
              ].map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <FaCheckCircle className="text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* ROI Focus */}
        <motion.div variants={fadeInUp}>
          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border border-blue-200 dark:border-blue-800">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <FaDollarSign className="text-blue-500" />
              ROI-Focused Approach
            </h3>

            <div className="space-y-4">
              {[
                {
                  aspect: "Cost Per Acquisition (CPA)",
                  target: "Optimized Daily",
                },
                { aspect: "Return on Ad Spend (ROAS)", target: "300% Minimum" },
                { aspect: "Quality Score", target: "8/10+ Target" },
                { aspect: "Conversion Rate", target: "Continuous Improvement" },
              ].map((item, idx) => (
                <div key={idx}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {item.aspect}
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
                          idx === 1
                            ? "100%"
                            : idx === 0
                            ? "90%"
                            : idx === 2
                            ? "85%"
                            : "80%",
                      }}
                      transition={{ delay: idx * 0.2, duration: 1 }}
                      className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Security & Compliance */}
      <motion.div
        variants={fadeInUp}
        className="mb-16 p-6 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700"
      >
        <div className="flex items-center gap-4 mb-4">
          <FaShieldAlt className="text-2xl text-blue-500" />
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            Account Security & Compliance
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Data Protection",
              desc: "Secure handling of campaign data",
            },
            {
              title: "Ad Policy Compliance",
              desc: "Ensuring all ads meet platform policies",
            },
            {
              title: "Transparent Reporting",
              desc: "Honest, clear performance reporting",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
              className="p-4 rounded-lg bg-white dark:bg-gray-800 text-center"
            >
              <div className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {item.title}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {item.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div variants={fadeInUp} className="text-center">
        <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Drive Immediate Results?
          </h2>
          <p className="text-green-100 mb-8 max-w-2xl mx-auto">
            Start getting qualified leads and sales today with professionally
            managed PPC campaigns
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/get-quote"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-green-600 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg"
              >
                <FaRocket />
                Launch Your PPC Campaign
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                <FaChartLine />
                Free PPC Audit
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
