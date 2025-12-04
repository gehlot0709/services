import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaDesktop, 
  FaMobileAlt, 
  FaPaintBrush, 
  FaCode,
  FaArrowLeft,
  FaRocket,
  FaCheckCircle,
  FaSearch,
  FaBolt,
  FaShieldAlt,
  FaUsers,
  FaShoppingCart,
  FaGlobe,
  FaChartLine,
  FaLayerGroup,
  FaMagic,
  FaRegHeart,
  FaSync
} from 'react-icons/fa';
import { SiWordpress, SiShopify, SiWebflow, SiWix } from 'react-icons/si';
import { Link } from 'react-router-dom';

export default function Webdesign() {
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

  const slideInLeft = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
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

  // Website Types
  const websiteTypes = [
    {
      type: 'Business Websites',
      description: 'Professional websites to showcase your business and services',
      icon: <FaGlobe />,
      color: 'from-blue-500 to-cyan-500',
      features: ['Company Profile', 'Service Pages', 'Contact Forms', 'About Us']
    },
    {
      type: 'E-commerce Stores',
      description: 'Online stores with secure payment processing',
      icon: <FaShoppingCart />,
      color: 'from-green-500 to-emerald-500',
      features: ['Product Catalog', 'Shopping Cart', 'Payment Gateway', 'Order Tracking']
    },
    {
      type: 'Portfolio Websites',
      description: 'Showcase your work and attract clients',
      icon: <FaUsers />,
      color: 'from-purple-500 to-indigo-500',
      features: ['Project Gallery', 'Client Testimonials', 'Case Studies', 'Contact Forms']
    },
    {
      type: 'Blogging Platforms',
      description: 'Content-focused websites with publishing tools',
      icon: <FaChartLine />,
      color: 'from-orange-500 to-yellow-500',
      features: ['Blog System', 'Categories', 'Comments', 'Newsletter']
    },
    {
      type: 'Landing Pages',
      description: 'High-converting pages for campaigns and products',
      icon: <FaRocket />,
      color: 'from-red-500 to-pink-500',
      features: ['Lead Capture', 'Call-to-Action', 'Conversion Forms', 'A/B Testing']
    },
    {
      type: 'Web Applications',
      description: 'Interactive applications with advanced functionality',
      icon: <FaLayerGroup />,
      color: 'from-teal-500 to-cyan-500',
      features: ['User Accounts', 'Dashboards', 'Real-time Updates', 'API Integration']
    }
  ];

  // Design Process
  const designProcess = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'Understand your business goals and requirements'
    },
    {
      step: '02',
      title: 'Wireframing',
      description: 'Create structural blueprints of website layout'
    },
    {
      step: '03',
      title: 'UI/UX Design',
      description: 'Design visually appealing and user-friendly interfaces'
    },
    {
      step: '04',
      title: 'Development',
      description: 'Code the website with modern technologies'
    },
    {
      step: '05',
      title: 'Testing',
      description: 'Ensure functionality and compatibility'
    },
    {
      step: '06',
      title: 'Launch & Support',
      description: 'Deploy and provide ongoing maintenance'
    }
  ];

  // Technology Stack
  const technologyStack = [
    {
      category: 'Frontend',
      technologies: [
        { name: 'HTML5', color: 'bg-orange-100 text-orange-800' },
        { name: 'CSS3', color: 'bg-blue-100 text-blue-800' },
        { name: 'JavaScript', color: 'bg-yellow-100 text-yellow-800' },
        { name: 'React.js', color: 'bg-cyan-100 text-cyan-800' },
        { name: 'Next.js', color: 'bg-gray-100 text-gray-800' },
        { name: 'Tailwind CSS', color: 'bg-blue-50 text-blue-600' }
      ]
    },
    {
      category: 'CMS & Platforms',
      technologies: [
        { name: 'WordPress', color: 'bg-blue-100 text-blue-800', icon: <SiWordpress /> },
        { name: 'Shopify', color: 'bg-green-100 text-green-800', icon: <SiShopify /> },
        { name: 'Webflow', color: 'bg-purple-100 text-purple-800', icon: <SiWebflow /> },
        { name: 'Custom PHP', color: 'bg-indigo-100 text-indigo-800' }
      ]
    }
  ];

  // Website Features
  const websiteFeatures = [
    {
      feature: 'Responsive Design',
      description: 'Looks perfect on all devices - mobile, tablet, desktop',
      icon: <FaMobileAlt className="text-blue-500 text-2xl" />
    },
    {
      feature: 'SEO Optimized',
      description: 'Built for search engines with proper structure and tags',
      icon: <FaSearch className="text-green-500 text-2xl" />
    },
    {
      feature: 'Fast Loading',
      description: 'Optimized for speed and performance',
      icon: <FaBolt className="text-yellow-500 text-2xl" />
    },
    {
      feature: 'Secure & Safe',
      description: 'SSL certificates and security best practices',
      icon: <FaShieldAlt className="text-red-500 text-2xl" />
    }
  ];

  // Website Packages
  const websitePackages = [
    {
      name: 'Basic Website',
      price: 'Starting at $499',
      features: [
        '5 Custom Pages',
        'Responsive Design',
        'Basic SEO Setup',
        'Contact Form',
        '3 Months Support'
      ],
      color: 'from-gray-400 to-gray-600'
    },
    {
      name: 'Business Website',
      price: 'Starting at $899',
      features: [
        '10+ Custom Pages',
        'Advanced Responsive Design',
        'SEO Optimization',
        'CMS Integration',
        '6 Months Support',
        'Social Media Integration'
      ],
      color: 'from-blue-500 to-cyan-500',
      popular: true
    },
    {
      name: 'E-commerce Store',
      price: 'Starting at $1,499',
      features: [
        'Product Catalog',
        'Shopping Cart',
        'Payment Gateway',
        'Inventory Management',
        'SEO Optimization',
        '12 Months Support',
        'Mobile App Ready'
      ],
      color: 'from-purple-500 to-pink-500'
    }
  ];

  // Design Principles
  const designPrinciples = [
    'User-Centered Design',
    'Mobile-First Approach',
    'Accessibility Compliance',
    'Brand Consistency',
    'Performance Optimization',
    'Conversion-Focused',
    'Scalable Architecture',
    'Easy Maintenance'
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
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-xl opacity-20"></div>
            <motion.div 
              variants={rotateIn}
              className="relative inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/20 dark:to-purple-900/20"
            >
              <FaDesktop className="text-4xl text-indigo-600 dark:text-indigo-400" />
            </motion.div>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Website Design & Development
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
          Create stunning, functional websites that convert visitors into customers
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

      {/* Website Features */}
      <motion.div variants={fadeInUp} className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {websiteFeatures.map((feature, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                {feature.icon}
                <div>
                  <div className="text-lg font-bold text-gray-900 dark:text-white">
                    {feature.feature}
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Website Types */}
      <motion.div variants={fadeInUp} className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Types of Websites We Build
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {websiteTypes.map((website, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group"
            >
              <div className="h-full p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-transparent transition-all duration-300 hover:shadow-xl overflow-hidden relative">
                <div className={`absolute inset-0 bg-gradient-to-r ${website.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                <div className={`inline-flex items-center justify-center w-14 h-14 mb-4 rounded-lg bg-gradient-to-r ${website.color} text-white`}>
                  {website.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {website.type}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {website.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">Includes:</h4>
                  <div className="flex flex-wrap gap-2">
                    {website.features.map((feature, idx) => (
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

      {/* Technology Stack */}
      <motion.div variants={fadeInUp} className="mb-16">
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400">
              <FaCode className="text-2xl" />
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Modern Technology Stack
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              We use cutting-edge technologies to build fast, secure, and scalable websites
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technologyStack.map((stack, catIndex) => (
              <motion.div
                key={catIndex}
                variants={slideInLeft}
                className="p-6 rounded-xl bg-white dark:bg-gray-800"
              >
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {stack.category}
                </h4>
                
                <div className="flex flex-wrap gap-3">
                  {stack.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={techIndex}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: catIndex * 0.2 + techIndex * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg ${tech.color}`}
                    >
                      {tech.icon && <span className="text-lg">{tech.icon}</span>}
                      <span className="font-medium">{tech.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Website Packages */}
      <motion.div variants={fadeInUp} className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Website Design Packages
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {websitePackages.map((pkg, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ scale: pkg.popular ? 1.05 : 1.02, y: -10 }}
              className="relative"
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="px-4 py-1 text-sm font-bold rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                    MOST POPULAR
                  </span>
                </div>
              )}
              
              <div className={`h-full p-6 rounded-2xl border-2 ${pkg.popular ? 'border-indigo-500 dark:border-indigo-500' : 'border-gray-200 dark:border-gray-700'} bg-white dark:bg-gray-800`}>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {pkg.name}
                  </h3>
                  <div className={`text-xl font-bold ${pkg.popular ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-900 dark:text-white'} mb-4`}>
                    {pkg.price}
                  </div>
                  <div className={`h-1 w-16 mx-auto rounded-full bg-gradient-to-r ${pkg.color}`}></div>
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
                      <span className="text-gray-600 dark:text-gray-400">{feature}</span>
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
                        ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    Get Quote
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Design Process */}
      <motion.div variants={fadeInUp} className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Our Website Design Process
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
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold text-lg">
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

      {/* Design Principles */}
      <motion.div variants={fadeInUp} className="mb-16">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400">
              <FaPaintBrush className="text-2xl" />
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Our Design Principles
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              We follow these principles to create exceptional websites
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {designPrinciples.map((principle, idx) => (
              <motion.div
                key={idx}
                variants={scaleIn}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-3 rounded-lg bg-white dark:bg-gray-800 text-center hover:shadow-md transition-shadow duration-300 border border-gray-200 dark:border-gray-700"
              >
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{principle}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Responsive Design */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {/* Mobile-First Design */}
        <motion.div variants={fadeInUp}>
          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border border-blue-200 dark:border-blue-800">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <FaMobileAlt className="text-blue-500" />
              Mobile-First Design
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We design for mobile devices first, then scale up to larger screens. This ensures your website provides an exceptional experience on smartphones and tablets.
            </p>
            
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm text-gray-600 dark:text-gray-400">Mobile Traffic</div>
              <div className="text-lg font-bold text-gray-900 dark:text-white">60%+</div>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '65%' }}
                transition={{ duration: 1 }}
                className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full"
              />
            </div>
          </div>
        </motion.div>

        {/* Performance Metrics */}
        <motion.div variants={fadeInUp}>
          <div className="p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-800">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <FaBolt className="text-purple-500" />
              Performance Guarantee
            </h3>
            
            <div className="space-y-4">
              {[
                { metric: 'Page Load Speed', target: '< 2 Seconds' },
                { metric: 'Google PageSpeed', target: '90+ Score' },
                { metric: 'Core Web Vitals', target: 'All Green' },
                { metric: 'Uptime', target: '99.9% Guarantee' }
              ].map((item, idx) => (
                <div key={idx}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{item.metric}</span>
                    <span className="text-sm font-bold text-gray-900 dark:text-white">{item.target}</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: idx === 3 ? '99%' : idx === 0 ? '95%' : idx === 1 ? '92%' : '98%' }}
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

      {/* Support & Maintenance */}
      <motion.div 
        variants={fadeInUp}
        className="mb-16 p-6 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800"
      >
        <div className="flex items-center gap-4 mb-4">
          <FaSync className="text-2xl text-green-500" />
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            Ongoing Support & Maintenance
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { service: 'Regular Updates', desc: 'Keep your website secure and up-to-date' },
            { service: 'Backup Solutions', desc: 'Daily backups to protect your data' },
            { service: 'Security Monitoring', desc: '24/7 security monitoring and protection' },
            { service: 'Content Updates', desc: 'Regular content and image updates' },
            { service: 'Performance Optimization', desc: 'Continuous speed improvements' },
            { service: 'Analytics Reports', desc: 'Monthly performance reports' }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
              className="p-4 rounded-lg bg-white dark:bg-gray-800"
            >
              <div className="flex items-center gap-2 mb-2">
                <FaCheckCircle className="text-green-500" />
                <div className="font-bold text-gray-900 dark:text-white">{item.service}</div>
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div variants={fadeInUp} className="text-center">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Build Your Dream Website?
          </h2>
          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
            Let's create a stunning website that grows your business and impresses your visitors
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/get-quote"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-indigo-600 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg"
              >
                <FaRocket />
                Start Your Website Project
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
                <FaDesktop />
                Free Website Consultation
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}