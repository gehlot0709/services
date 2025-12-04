import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaCode, 
  FaServer, 
  FaDatabase, 
  FaLayerGroup,
  FaRocket,
  FaArrowLeft,
  FaCheckCircle,
  FaBolt,
  FaShieldAlt,
  FaSync,
  FaGlobe,
  FaCogs,
  FaCloud,
  FaMobileAlt,
  FaPaintBrush
} from 'react-icons/fa';
import { 
  SiHtml5, 
  SiCss3, 
  SiTailwindcss, 
  SiBootstrap, 
  SiJavascript, 
  SiReact, 
  SiNodedotjs, 
  SiExpress, 
  SiMongodb,
  SiFramer,
  SiGithub,
  SiDocker
} from 'react-icons/si';
import { Link } from 'react-router-dom';

export default function Fullstack() {
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

  // Technology Stack - Full MERN Stack
  const technologies = [
    {
      category: 'Frontend',
      color: 'from-blue-500 to-cyan-500',
      items: [
        { icon: <SiHtml5 />, name: 'HTML5', color: 'text-orange-500' },
        { icon: <SiCss3 />, name: 'CSS3', color: 'text-blue-600' },
        { icon: <SiTailwindcss />, name: 'Tailwind CSS', color: 'text-cyan-500' },
        { icon: <SiBootstrap />, name: 'Bootstrap', color: 'text-purple-600' },
        { icon: <SiJavascript />, name: 'JavaScript', color: 'text-yellow-500' },
        { icon: <SiReact />, name: 'React.js', color: 'text-cyan-400' },
        { icon: <SiFramer />, name: 'Framer Motion', color: 'text-pink-500' }
      ]
    },
    {
      category: 'Backend',
      color: 'from-green-500 to-emerald-500',
      items: [
        { icon: <SiNodedotjs />, name: 'Node.js', color: 'text-green-600' },
        { icon: <SiExpress />, name: 'Express.js', color: 'text-gray-600 dark:text-gray-300' },
        { icon: <SiMongodb />, name: 'MongoDB', color: 'text-green-500' },
        { icon: <FaServer />, name: 'REST APIs', color: 'text-blue-500' },
        { icon: <FaShieldAlt />, name: 'JWT Auth', color: 'text-red-500' },
        { icon: <FaCloud />, name: 'Cloud Services', color: 'text-yellow-500' }
      ]
    },
    {
      category: 'Tools & DevOps',
      color: 'from-purple-500 to-indigo-500',
      items: [
        { icon: <SiGithub />, name: 'Git & GitHub', color: 'text-gray-800 dark:text-white' },
        { icon: <SiDocker />, name: 'Docker', color: 'text-blue-400' },
        { icon: <FaSync />, name: 'CI/CD', color: 'text-green-500' },
        { icon: <FaCogs />, name: 'Webpack', color: 'text-blue-600' },
        { icon: <FaGlobe />, name: 'Deployment', color: 'text-orange-500' }
      ]
    }
  ];

  // Fullstack Services
  const services = [
    {
      icon: <FaLayerGroup />,
      title: 'Complete Web Applications',
      description: 'End-to-end development from UI design to database architecture',
      color: 'from-blue-500 to-cyan-500',
      tech: ['React', 'Node.js', 'MongoDB']
    },
    {
      icon: <FaMobileAlt />,
      title: 'Responsive Web Apps',
      description: 'Mobile-first applications that work seamlessly across all devices',
      color: 'from-purple-500 to-pink-500',
      tech: ['Tailwind CSS', 'Bootstrap', 'React']
    },
    {
      icon: <FaServer />,
      title: 'RESTful API Development',
      description: 'Scalable backend APIs with proper authentication and documentation',
      color: 'from-green-500 to-emerald-500',
      tech: ['Express.js', 'Node.js', 'MongoDB']
    },
    {
      icon: <FaDatabase />,
      title: 'Database Design',
      description: 'Efficient database schemas and optimization for MongoDB',
      color: 'from-orange-500 to-yellow-500',
      tech: ['MongoDB', 'Mongoose', 'Indexing']
    },
    {
      icon: <FaShieldAlt />,
      title: 'Authentication & Security',
      description: 'Secure user authentication, authorization, and data protection',
      color: 'from-red-500 to-pink-500',
      tech: ['JWT', 'OAuth', 'Encryption']
    },
    {
      icon: <FaCloud />,
      title: 'Deployment & Hosting',
      description: 'Cloud deployment, CI/CD pipelines, and server management',
      color: 'from-teal-500 to-cyan-500',
      tech: ['Docker', 'AWS', 'Vercel']
    }
  ];

  // Development Process
  const processSteps = [
    {
      step: '01',
      title: 'Planning & Architecture',
      description: 'System design and technology stack selection',
      icon: <FaCogs />
    },
    {
      step: '02',
      title: 'Frontend Development',
      description: 'UI/UX implementation with React and styling frameworks',
      icon: <FaPaintBrush />
    },
    {
      step: '03',
      title: 'Backend Development',
      description: 'API development, database design, and business logic',
      icon: <FaServer />
    },
    {
      step: '04',
      title: 'Integration',
      description: 'Connect frontend with backend APIs and services',
      icon: <FaLayerGroup />
    },
    {
      step: '05',
      title: 'Testing',
      description: 'Unit testing, integration testing, and bug fixes',
      icon: <FaCheckCircle />
    },
    {
      step: '06',
      title: 'Deployment & Maintenance',
      description: 'Deploy to production and provide ongoing support',
      icon: <FaRocket />
    }
  ];

  // MERN Stack Benefits
  const benefits = [
    {
      title: 'Single Language',
      description: 'JavaScript across frontend and backend',
      icon: <SiJavascript className="text-yellow-500 text-2xl" />
    },
    {
      title: 'Fast Development',
      description: 'Rapid prototyping and development cycle',
      icon: <FaBolt className="text-blue-500 text-2xl" />
    },
    {
      title: 'Scalability',
      description: 'Handle growing traffic and data',
      icon: <FaGlobe className="text-green-500 text-2xl" />
    },
    {
      title: 'Cost-Effective',
      description: 'Open-source technologies reduce costs',
      icon: <FaCheckCircle className="text-purple-500 text-2xl" />
    }
  ];

  // Project Examples
  const projectTypes = [
    'E-commerce Platforms',
    'Social Media Applications',
    'Real-time Chat Apps',
    'CRM & Dashboard Systems',
    'Content Management Systems',
    'Booking & Reservation Systems',
    'Learning Management Systems',
    'Analytics & Reporting Tools'
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
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-xl opacity-20"></div>
            <motion.div 
              variants={rotateIn}
              className="relative inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/20"
            >
              <FaLayerGroup className="text-4xl text-purple-600 dark:text-purple-400" />
            </motion.div>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Fullstack Development
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
          End-to-end web application development using MERN stack (MongoDB, Express, React, Node.js)
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

      {/* Technology Stack */}
      <motion.div variants={fadeInUp} className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Complete Technology Stack
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {technologies.map((stack, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ scale: 1.02, y: -5 }}
              className="relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
            >
              <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${stack.color}`}></div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  {stack.category}
                </h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {stack.items.map((tech, techIndex) => (
                    <motion.div
                      key={techIndex}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.2 + techIndex * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="flex flex-col items-center p-4 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200"
                    >
                      <div className={`text-3xl mb-2 ${tech.color}`}>
                        {tech.icon}
                      </div>
                      <span className="text-sm font-medium text-gray-900 dark:text-white text-center">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Services */}
      <motion.div variants={fadeInUp} className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Fullstack Development Services
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group"
            >
              <div className="h-full p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-transparent transition-all duration-300 hover:shadow-xl overflow-hidden relative">
                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                <div className={`inline-flex items-center justify-center w-14 h-14 mb-4 rounded-lg bg-gradient-to-r ${service.color} text-white`}>
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {service.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {service.tech.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 text-xs font-semibold rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* MERN Stack Benefits */}
      <motion.div variants={fadeInUp} className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Why Choose MERN Stack?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={slideInLeft}
              whileHover={{ x: 5 }}
              className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center gap-4 mb-4">
                {benefit.icon}
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {benefit.title}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Development Process */}
      <motion.div variants={fadeInUp} className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Our Fullstack Development Process
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <div className="h-full p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold text-lg">
                      {step.step}
                    </div>
                  </div>
                  
                  <div>
                    <div className="inline-flex items-center justify-center w-10 h-10 mb-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-purple-600 dark:text-purple-400">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
              
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-8 h-0.5 bg-gray-300 dark:bg-gray-700"></div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Project Types */}
      <motion.div variants={fadeInUp} className="mb-16">
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-2xl p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-white dark:bg-gray-800 text-purple-600 dark:text-purple-400">
              <FaCode className="text-2xl" />
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Types of Projects We Build
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Comprehensive fullstack solutions for various industries
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {projectTypes.map((project, idx) => (
              <motion.div
                key={idx}
                variants={scaleIn}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-3 rounded-lg bg-white dark:bg-gray-800 text-center hover:shadow-md transition-shadow duration-300 border border-gray-200 dark:border-gray-700"
              >
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{project}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Why Fullstack Development */}
      <motion.div 
        variants={fadeInUp}
        className="mb-16 p-6 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700"
      >
        <div className="flex items-center gap-4 mb-4">
          <FaLayerGroup className="text-2xl text-blue-500" />
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            End-to-End Development Advantage
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Benefits:</h4>
            <ul className="space-y-2">
              {[
                'Single point of contact for entire project',
                'Consistent codebase and architecture',
                'Faster development and deployment',
                'Better performance optimization',
                'Seamless frontend-backend integration',
                'Reduced communication overhead'
              ].map((item, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <FaCheckCircle className="text-green-500 text-sm" />
                  <span className="text-gray-600 dark:text-gray-300">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Our Expertise:</h4>
            <div className="space-y-3">
              {[
                { skill: 'React Development', level: '95%' },
                { skill: 'Node.js Backend', level: '90%' },
                { skill: 'Database Design', level: '85%' },
                { skill: 'API Integration', level: '95%' }
              ].map((item, idx) => (
                <div key={idx}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{item.skill}</span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">{item.level}</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: item.level }}
                      transition={{ delay: idx * 0.2, duration: 1 }}
                      className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div variants={fadeInUp} className="text-center">
        <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Build Your Fullstack Application?
          </h2>
          <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
            From concept to deployment, we handle everything to bring your web application to life
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
                Start Fullstack Project
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
                <FaLayerGroup />
                Discuss Architecture
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}