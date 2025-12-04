import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaEdit, 
  FaPenFancy, 
  FaSearch, 
  FaShareAlt, 
  FaChartLine,
  FaBullhorn,
  FaRocket,
  FaArrowLeft,
  FaCheckCircle,
  FaUsers,
  FaCalendarAlt,
  FaGlobe,
  FaFileAlt,
  FaVideo,
  FaPodcast,
  FaInfinity
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function ContentMarketing() {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  const rotateIn = {
    hidden: { opacity: 0, rotate: -10 },
    visible: { 
      opacity: 1, 
      rotate: 0,
      transition: { duration: 0.5 }
    }
  };

  // Content Types
  const contentTypes = [
    {
      icon: <FaFileAlt />,
      title: 'Blog Articles',
      description: 'SEO-optimized articles that establish authority and drive organic traffic',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <FaVideo />,
      title: 'Video Content',
      description: 'Engaging video tutorials, explainers, and brand stories for social media',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: <FaPodcast />,
      title: 'Podcast Production',
      description: 'Professional podcast episodes that build loyal audience communities',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: <FaPenFancy />,
      title: 'Whitepapers & E-books',
      description: 'In-depth resources that generate leads and demonstrate expertise',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <FaShareAlt />,
      title: 'Social Media Content',
      description: 'Platform-specific content that drives engagement and shares',
      color: 'from-orange-500 to-yellow-500'
    },
    {
      icon: <FaInfinity />,
      title: 'Content Repurposing',
      description: 'Maximize ROI by transforming content across multiple formats',
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  // Content Strategy Process
  const strategyProcess = [
    {
      step: '01',
      title: 'Audience Research',
      description: 'Understanding your target audience and their content preferences'
    },
    {
      step: '02',
      title: 'Content Strategy',
      description: 'Developing a comprehensive content calendar and distribution plan'
    },
    {
      step: '03',
      title: 'Content Creation',
      description: 'Producing high-quality, engaging content across formats'
    },
    {
      step: '04',
      title: 'Optimization',
      description: 'SEO optimization and platform-specific formatting'
    },
    {
      step: '05',
      title: 'Distribution',
      description: 'Strategic publishing across relevant channels and platforms'
    },
    {
      step: '06',
      title: 'Analytics & Refinement',
      description: 'Tracking performance and optimizing based on data insights'
    }
  ];

  // Metrics & Results
  const metrics = [
    {
      value: '300%',
      label: 'Increase in Organic Traffic',
      icon: <FaChartLine />,
      color: 'text-green-500'
    },
    {
      value: '5x',
      label: 'Higher Engagement Rates',
      icon: <FaUsers />,
      color: 'text-blue-500'
    },
    {
      value: '40%',
      label: 'Reduction in CAC',
      icon: <FaBullhorn />,
      color: 'text-purple-500'
    },
    {
      value: '24/7',
      label: 'Content Working for You',
      icon: <FaCalendarAlt />,
      color: 'text-orange-500'
    }
  ];

  // Services Offered
  const services = [
    {
      title: 'Content Strategy Development',
      features: [
        'Audience persona creation',
        'Content calendar planning',
        'Competitor analysis',
        'Channel strategy'
      ]
    },
    {
      title: 'Content Creation & Production',
      features: [
        'Blog writing & articles',
        'Video scripting & production',
        'Infographic design',
        'Email newsletter content'
      ]
    },
    {
      title: 'Content Distribution',
      features: [
        'Social media scheduling',
        'Email marketing campaigns',
        'Guest posting outreach',
        'Influencer collaborations'
      ]
    },
    {
      title: 'Performance Analytics',
      features: [
        'ROI tracking',
        'Audience engagement metrics',
        'Conversion rate optimization',
        'Content performance reports'
      ]
    }
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
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-xl opacity-20"></div>
            <motion.div 
              variants={rotateIn}
              className="relative inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20"
            >
              <FaEdit className="text-4xl text-purple-600 dark:text-purple-400" />
            </motion.div>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Content Marketing
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
          Create valuable content that attracts, engages, and converts your target audience
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

      {/* Key Metrics */}
      <motion.div variants={fadeInUp} className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gray-100 dark:bg-gray-700 ${metric.color}`}>
                  {metric.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {metric.value}
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  {metric.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Content Types */}
      <motion.div variants={fadeInUp} className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Content Types We Create
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contentTypes.map((type, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group"
            >
              <div className="h-full p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-transparent transition-all duration-300 hover:shadow-xl overflow-hidden relative">
                <div className={`absolute inset-0 bg-gradient-to-r ${type.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                <div className={`inline-flex items-center justify-center w-14 h-14 mb-4 rounded-lg bg-gradient-to-r ${type.color} text-white`}>
                  {type.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {type.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400">
                  {type.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Services */}
      <motion.div variants={fadeInUp} className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Our Content Marketing Services
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {service.title}
              </h3>
              
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + idx * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <FaCheckCircle className="text-green-500 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Strategy Process */}
      <motion.div variants={fadeInUp} className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Our Content Strategy Process
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {strategyProcess.map((step, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <div className="h-full p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-lg">
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
              
              {index < strategyProcess.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-8 h-0.5 bg-gray-300 dark:bg-gray-700"></div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Global Reach */}
      <motion.div variants={fadeInUp} className="mb-16">
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-white dark:bg-gray-800 text-purple-600 dark:text-purple-400">
                <FaGlobe className="text-2xl" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Global Content Reach
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We create content that resonates across cultures and languages
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['SEO Optimization', 'Multilingual', 'Cultural Adaptation', 'Local Trends'].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={scaleIn}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 rounded-lg bg-white dark:bg-gray-800 text-center"
                >
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div variants={fadeInUp} className="text-center">
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Tell Your Story?
          </h2>
          <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
            Let's create compelling content that builds your brand and drives growth
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/get-quote"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-purple-600 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg"
              >
                <FaRocket />
                Start Your Content Journey
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                <FaEdit />
                Request Content Audit
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* SEO Benefits */}
      <motion.div 
        variants={fadeInUp}
        className="mt-16 p-6 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20"
      >
        <div className="flex items-center gap-4 mb-4">
          <FaSearch className="text-2xl text-blue-500" />
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            SEO-Optimized Content
          </h3>
        </div>
        <p className="text-gray-600 dark:text-gray-300">
          Our content is strategically crafted to rank higher in search results, driving organic traffic and establishing your authority in the industry.
        </p>
      </motion.div>
    </motion.div>
  );
}