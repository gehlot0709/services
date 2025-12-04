import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaCode, 
  FaReact, 
  FaVuejs, 
  FaAngular, 
  FaHtml5, 
  FaCss3Alt, 
  FaJs,
  FaArrowLeft,
  FaRocket,
  FaCheckCircle,
  FaMobileAlt,
  FaBolt,
  FaPaintBrush,
  FaDesktop,
  FaSearch,
  FaLayerGroup,
  FaGlobe,
  FaUsers,
  FaSync
} from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiRedux, SiSass } from 'react-icons/si';
import { Link } from 'react-router-dom';

export default function Frontend() {
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

  // Technology Stack
  const technologies = [
    {
      category: 'Frameworks',
      items: [
        { icon: <FaReact />, name: 'React.js', color: 'text-cyan-500', level: 'Advanced' },
        // { icon: <SiNextdotjs />, name: 'Next.js', color: 'text-gray-800 dark:text-white', level: 'Advanced' },
        // { icon: <FaVuejs />, name: 'Vue.js', color: 'text-green-500', level: 'Intermediate' },
        // { icon: <FaAngular />, name: 'Angular', color: 'text-red-500', level: 'Intermediate' }
      ]
    },
    {
      category: 'Styling',
      items: [
        { icon: <SiTailwindcss />, name: 'Tailwind CSS', color: 'text-blue-500', level: 'Expert' },
        { icon: <FaCss3Alt />, name: 'CSS3', color: 'text-blue-600', level: 'Expert' },
        // { icon: <SiSass />, name: 'SASS/SCSS', color: 'text-pink-500', level: 'Advanced' },
        { icon: <FaHtml5 />, name: 'HTML5', color: 'text-orange-500', level: 'Expert' }
      ]
    },
    {
      category: 'JavaScript',
      items: [
        { icon: <FaJs />, name: 'JavaScript', color: 'text-yellow-500', level: 'Expert' },
        // { icon: <SiTypescript />, name: 'TypeScript', color: 'text-blue-600', level: 'Advanced' },
        // { icon: <SiRedux />, name: 'Redux', color: 'text-purple-600', level: 'Advanced' }
      ]
    }
  ];

  // Services Offered
  const services = [
    {
      icon: <FaDesktop />,
      title: 'Responsive Web Design',
      description: 'Create websites that work flawlessly on all devices and screen sizes',
      color: 'from-blue-500 to-cyan-500',
      features: ['Mobile-first approach', 'Cross-browser compatibility', 'Performance optimization']
    },
    {
      icon: <FaPaintBrush />,
      title: 'UI/UX Implementation',
      description: 'Transform designs into interactive, user-friendly interfaces',
      color: 'from-purple-500 to-pink-500',
      features: ['Pixel-perfect implementation', 'Interactive components', 'Accessibility standards']
    },
    // {
    //   icon: <FaBolt />,
    //   title: 'SPA Development',
    //   description: 'Build fast, interactive Single Page Applications',
    //   color: 'from-green-500 to-emerald-500',
    //   features: ['Client-side routing', 'State management', 'API integration']
    // },
    {
      icon: <FaSearch />,
      title: 'SEO Optimization',
      description: 'Implement best practices for search engine visibility',
      color: 'from-orange-500 to-yellow-500',
      features: ['Semantic HTML', 'Meta tags optimization', 'Performance scoring']
    },
    {
      icon: <FaLayerGroup />,
      title: 'Component Libraries',
      description: 'Build reusable component libraries for scalable applications',
      color: 'from-red-500 to-pink-500',
      features: ['Modular architecture', 'Storybook integration', 'Design system']
    },
    {
      icon: <FaGlobe />,
      title: 'Progressive Web Apps',
      description: 'Create app-like experiences that work offline',
      color: 'from-teal-500 to-cyan-500',
      features: ['Offline functionality', 'Push notifications', 'App install banners']
    }
  ];

  // Performance Metrics
  const metrics = [
    {
      value: '<100ms',
      label: 'First Contentful Paint',
      icon: <FaBolt />,
      color: 'text-green-500',
      description: 'Fast loading experience'
    },
    {
      value: '100/100',
      label: 'Lighthouse Score',
      icon: <FaCheckCircle />,
      color: 'text-blue-500',
      description: 'Perfect performance metrics'
    },
    {
      value: '60fps',
      label: 'Animation Performance',
      icon: <FaSync />,
      color: 'text-purple-500',
      description: 'Smooth animations'
    },
    {
      value: 'A+',
      label: 'Accessibility Score',
      icon: <FaUsers />,
      color: 'text-orange-500',
      description: 'WCAG 2.1 compliant'
    }
  ];

  // Development Process
  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'Understand requirements and plan architecture'
    },
    {
      step: '02',
      title: 'UI/UX Design Review',
      description: 'Analyze designs and plan implementation'
    },
    {
      step: '03',
      title: 'Development Setup',
      description: 'Configure build tools and project structure'
    },
    {
      step: '04',
      title: 'Component Development',
      description: 'Build reusable components and pages'
    },
    {
      step: '05',
      title: 'Testing & Optimization',
      description: 'Test across devices and optimize performance'
    },
    {
      step: '06',
      title: 'Deployment & Maintenance',
      description: 'Deploy to production and provide support'
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
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-xl opacity-20"></div>
            <motion.div 
              variants={rotateIn}
              className="relative inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-900/20 dark:to-blue-900/20"
            >
              <FaCode className="text-4xl text-cyan-600 dark:text-cyan-400" />
            </motion.div>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Frontend Development
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
          Build responsive, interactive user interfaces with modern frameworks and best practices
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
                <p className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  {metric.label}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {metric.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Technology Stack */}
      <motion.div variants={fadeInUp} className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Our Technology Stack
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {technologies.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              variants={slideInLeft}
              className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b border-gray-200 dark:border-gray-700">
                {category.category}
              </h3>
              
              <div className="space-y-4">
                {category.items.map((tech, techIndex) => (
                  <motion.div
                    key={techIndex}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: catIndex * 0.2 + techIndex * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center justify-between p-3 rounded-lg bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`text-2xl ${tech.color}`}>
                        {tech.icon}
                      </div>
                      <span className="font-medium text-gray-900 dark:text-white">
                        {tech.name}
                      </span>
                    </div>
                    
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                      {tech.level}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Services */}
      <motion.div variants={fadeInUp} className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Frontend Development Services
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
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <motion.li 
                      key={idx}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 + idx * 0.05 }}
                      className="flex items-center gap-2"
                    >
                      <FaCheckCircle className="text-green-500 text-sm" />
                      <span className="text-sm text-gray-500 dark:text-gray-400">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
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
              <div className="h-full p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-lg">
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

      {/* Mobile Optimization */}
      <motion.div 
        variants={fadeInUp}
        className="mb-16 p-6 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20"
      >
        <div className="flex items-center gap-4 mb-4">
          <FaMobileAlt className="text-2xl text-blue-500" />
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            Mobile-First Development
          </h3>
        </div>
        <p className="text-gray-600 dark:text-gray-300">
          We follow a mobile-first approach, ensuring your website delivers exceptional experiences on smartphones and tablets before scaling up to desktop. Every interface is touch-friendly, loads quickly on mobile networks, and follows mobile UX best practices.
        </p>
      </motion.div>

      {/* Best Practices */}
      <motion.div variants={fadeInUp} className="mb-16">
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Development Best Practices
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Semantic HTML5',
              'CSS Grid & Flexbox',
              'Component-Based Architecture',
              'Performance Optimization',
              'Accessibility (WCAG 2.1)',
              'Cross-Browser Testing',
              'Code Splitting',
              'Progressive Enhancement'
            ].map((practice, idx) => (
              <motion.div
                key={idx}
                variants={scaleIn}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 p-4 rounded-lg bg-white dark:bg-gray-800"
              >
                <FaCheckCircle className="text-green-500" />
                <span className="font-medium text-gray-700 dark:text-gray-300">{practice}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div variants={fadeInUp} className="text-center">
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Build Amazing Interfaces?
          </h2>
          <p className="text-cyan-100 mb-8 max-w-2xl mx-auto">
            Let's create fast, beautiful, and user-friendly frontend experiences that engage your audience
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/get-quote"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-cyan-600 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg"
              >
                <FaRocket />
                Start Your Project
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
                Discuss Your Requirements
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}