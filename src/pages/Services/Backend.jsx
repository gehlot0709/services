import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaServer, 
  FaDatabase, 
  FaShieldAlt, 
  FaBolt, 
  FaCode, 
  FaCloud, 
  FaCogs, 
  FaLock,
  FaRocket,
  FaCheckCircle,
  FaNodeJs,
  FaArrowLeft
} from 'react-icons/fa';
import { SiMongodb, SiFirebase } from 'react-icons/si';
import { Link } from 'react-router-dom';

export default function Backend() {
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

  const technologies = [
    { 
      icon: <FaNodeJs className="text-4xl" />, 
      name: 'Node.js', 
      color: 'bg-green-100 dark:bg-green-900/30 border-green-200 dark:border-green-800',
      textColor: 'text-green-600 dark:text-green-400',
      description: 'JavaScript runtime for scalable server-side applications'
    },
    { 
      icon: <SiMongodb className="text-4xl" />, 
      name: 'MongoDB', 
      color: 'bg-green-50 dark:bg-green-900/20 border-green-100 dark:border-green-800',
      textColor: 'text-green-700 dark:text-green-300',
      description: 'NoSQL database for flexible data storage'
    },
    { 
      icon: <SiFirebase className="text-4xl" />, 
      name: 'Firebase', 
      color: 'bg-yellow-100 dark:bg-yellow-900/30 border-yellow-200 dark:border-yellow-800',
      textColor: 'text-yellow-600 dark:text-yellow-400',
      description: 'Backend-as-a-Service for rapid development'
    }
  ];

  const features = [
    {
      icon: <FaServer />,
      title: 'RESTful API Development',
      description: 'Build scalable and maintainable REST APIs with proper authentication, validation, and documentation',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <FaDatabase />,
      title: 'MongoDB Database Design',
      description: 'Efficient database schemas, indexing strategies, and query optimization for MongoDB',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Security Implementation',
      description: 'JWT authentication, encryption, rate limiting, and security best practices',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: <FaBolt />,
      title: 'Performance Optimization',
      description: 'Caching strategies, load balancing, and database optimization',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: <FaCloud />,
      title: 'Firebase Integration',
      description: 'Real-time databases, authentication, and cloud functions integration',
      color: 'from-orange-500 to-yellow-500'
    },
    {
      icon: <FaCogs />,
      title: 'Server Architecture',
      description: 'Design and implement scalable server architecture',
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Requirement Analysis',
      description: 'Understanding your business needs and technical requirements'
    },
    {
      step: '02',
      title: 'API Design',
      description: 'Designing scalable and maintainable API architecture'
    },
    {
      step: '03',
      title: 'Database Design',
      description: 'Creating optimized MongoDB schemas and relationships'
    },
    {
      step: '04',
      title: 'Development',
      description: 'Building secure and efficient backend services'
    },
    {
      step: '05',
      title: 'Testing',
      description: 'Thorough testing and quality assurance'
    },
    {
      step: '06',
      title: 'Deployment',
      description: 'Deployment to production with monitoring'
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
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-xl opacity-20"></div>
            <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20">
              <FaServer className="text-4xl text-blue-600 dark:text-blue-400" />
            </div>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Backend Development
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
          Robust server-side solutions built with Node.js, MongoDB, and Firebase
        </p>
        
        <motion.div variants={slideInLeft}>
          <Link 
            to="/services" 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium transition-colors duration-200"
          >
            <FaArrowLeft />
            Back to Services
          </Link>
        </motion.div>
      </motion.div>

      {/* Technologies Stack */}
      <motion.div variants={fadeInUp} className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
          Our Technology Stack
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`p-6 rounded-2xl border ${tech.color} transition-all duration-300 hover:shadow-xl`}
            >
              <div className="flex flex-col items-center text-center">
                <div className={`mb-4 ${tech.textColor}`}>
                  {tech.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {tech.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {tech.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Features */}
      <motion.div variants={fadeInUp} className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          What We Offer
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group"
            >
              <div className="h-full p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-transparent transition-all duration-300 hover:shadow-xl overflow-hidden relative">
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                <div className={`inline-flex items-center justify-center w-14 h-14 mb-4 rounded-lg bg-gradient-to-r ${feature.color} text-white`}>
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Development Process */}
      <motion.div variants={fadeInUp} className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Our Development Process
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <div className="h-full p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold text-lg">
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
              
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-8 h-0.5 bg-gray-300 dark:bg-gray-700"></div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div variants={fadeInUp} className="text-center">
        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Build Your Backend?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's create robust, scalable backend solutions for your applications
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/get-quote"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg"
              >
                <FaRocket />
                Get Started Now
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
                <FaCode />
                Discuss Your Project
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Benefits */}
      <motion.div variants={fadeInUp} className="mt-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
          Why Choose Our Backend Services
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div 
            variants={slideInLeft}
            className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="flex-shrink-0">
                <FaCheckCircle className="text-2xl text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Scalable Architecture
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Build backend systems that can grow with your business needs
            </p>
          </motion.div>
          
          <motion.div 
            variants={slideInLeft}
            className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="flex-shrink-0">
                <FaLock className="text-2xl text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Enterprise Security
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Implement industry-standard security practices and protocols
            </p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}