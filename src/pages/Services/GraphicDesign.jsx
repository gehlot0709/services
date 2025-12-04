import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaPalette, 
  FaBrush, 
  FaVectorSquare, 
  FaImages,
  FaArrowLeft,
  FaRocket,
  FaCheckCircle,
  FaPenNib,
  FaEyeDropper,
  FaFont,
  FaLayerGroup,
  FaMagic,
  FaCrop,
  FaClone,
  FaDesktop,
  FaPrint,
  FaMobileAlt,
  FaRegHeart
} from 'react-icons/fa';
import { SiAdobe, SiCanva, SiFigma } from 'react-icons/si';
import { Link } from 'react-router-dom';

export default function GraphicDesign() {
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

  // Design Services
  const designServices = [
    {
      icon: <FaPenNib />,
      title: 'Logo Design',
      description: 'Unique and memorable brand identities that represent your business',
      color: 'from-blue-500 to-cyan-500',
      deliverables: ['Primary Logo', 'Alternate Versions', 'Color Variations', 'Brand Guidelines']
    },
    {
      icon: <FaBrush />,
      title: 'Brand Identity',
      description: 'Complete visual identity systems including color palettes and typography',
      color: 'from-purple-500 to-pink-500',
      deliverables: ['Color Palette', 'Typography System', 'Brand Patterns', 'Style Guide']
    },
    {
      icon: <FaImages />,
      title: 'Marketing Materials',
      description: 'Brochures, flyers, banners, and promotional designs',
      color: 'from-green-500 to-emerald-500',
      deliverables: ['Business Cards', 'Brochures', 'Social Media Graphics', 'Email Templates']
    },
    {
      icon: <FaVectorSquare />,
      title: 'Illustrations',
      description: 'Custom vector illustrations and icons for digital and print',
      color: 'from-orange-500 to-yellow-500',
      deliverables: ['Custom Icons', 'Vector Art', 'Infographics', 'Character Design']
    },
    {
      icon: <FaDesktop />,
      title: 'UI/UX Design',
      description: 'User interface designs for websites and mobile applications',
      color: 'from-red-500 to-pink-500',
      deliverables: ['Website Mockups', 'App Screens', 'Wireframes', 'Prototypes']
    },
    {
      icon: <FaPrint />,
      title: 'Print Design',
      description: 'Print-ready designs for packaging, signage, and merchandise',
      color: 'from-teal-500 to-cyan-500',
      deliverables: ['Packaging Design', 'Signage', 'Stationery', 'Merchandise']
    }
  ];

  // Design Tools & Software
  const designTools = [
    {
      category: 'Industry Standard',
      tools: [
        { name: 'Adobe Photoshop', icon: <SiAdobe />, color: 'text-blue-500' },
        { name: 'Adobe Illustrator', icon: <SiAdobe />, color: 'text-orange-500' },
        { name: 'Adobe InDesign', icon: <SiAdobe />, color: 'text-pink-500' },
        { name: 'Adobe XD', icon: <SiAdobe />, color: 'text-purple-500' }
      ]
    },
    {
      category: 'Modern Tools',
      tools: [
        { name: 'Figma', icon: <SiFigma />, color: 'text-red-500' },
        { name: 'Canva', icon: <SiCanva />, color: 'text-blue-400' },
        { name: 'Procreate', icon: <FaBrush />, color: 'text-yellow-500' },
        { name: 'Sketch', icon: <FaPenNib />, color: 'text-orange-400' }
      ]
    }
  ];

  // Design Principles
  const designPrinciples = [
    {
      principle: 'Balance & Harmony',
      description: 'Creating visual equilibrium and pleasing compositions',
      icon: <FaClone className="text-blue-500" />
    },
    {
      principle: 'Contrast & Hierarchy',
      description: 'Establishing visual importance and guiding viewer attention',
      icon: <FaCrop className="text-purple-500" />
    },
    {
      principle: 'Color Psychology',
      description: 'Using colors strategically to evoke emotions and responses',
      icon: <FaEyeDropper className="text-pink-500" />
    },
    {
      principle: 'Typography',
      description: 'Selecting and pairing fonts for readability and personality',
      icon: <FaFont className="text-green-500" />
    }
  ];

  // Design Process
  const designProcess = [
    {
      step: '01',
      title: 'Discovery & Research',
      description: 'Understanding your brand, audience, and competition'
    },
    {
      step: '02',
      title: 'Concept Development',
      description: 'Brainstorming and creating initial design concepts'
    },
    {
      step: '03',
      title: 'Design Creation',
      description: 'Developing selected concepts into finished designs'
    },
    {
      step: '04',
      title: 'Feedback & Revisions',
      description: 'Incorporating your feedback and making adjustments'
    },
    {
      step: '05',
      title: 'Final Delivery',
      description: 'Preparing files for all required formats and uses'
    },
    {
      step: '06',
      title: 'Brand Guidelines',
      description: 'Creating rules for consistent brand application'
    }
  ];

  // File Formats
  const fileFormats = [
    { format: 'AI', description: 'Adobe Illustrator - Vector', color: 'bg-orange-100 text-orange-800' },
    { format: 'PSD', description: 'Photoshop - Layered', color: 'bg-blue-100 text-blue-800' },
    { format: 'PDF', description: 'Print & Digital', color: 'bg-red-100 text-red-800' },
    { format: 'EPS', description: 'Vector Scalable', color: 'bg-purple-100 text-purple-800' },
    { format: 'PNG', description: 'Transparent Background', color: 'bg-green-100 text-green-800' },
    { format: 'JPG', description: 'High Quality', color: 'bg-yellow-100 text-yellow-800' },
    { format: 'SVG', description: 'Web Vector', color: 'bg-pink-100 text-pink-800' },
    { format: 'FIG', description: 'Figma Files', color: 'bg-red-100 text-red-800' }
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
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-xl opacity-20"></div>
            <motion.div 
              variants={rotateIn}
              className="relative inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-pink-100 to-purple-100 dark:from-pink-900/20 dark:to-purple-900/20"
            >
              <FaPalette className="text-4xl text-pink-600 dark:text-pink-400" />
            </motion.div>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Graphic Design
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
          Visual communication that makes your brand stand out and connect with your audience
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

      {/* Design Services */}
      <motion.div variants={fadeInUp} className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Our Graphic Design Services
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {designServices.map((service, index) => (
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
                
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">Deliverables:</h4>
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
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Professional Design Tools
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {designTools.map((toolCategory, catIndex) => (
            <motion.div
              key={catIndex}
              variants={slideInLeft}
              whileHover={{ x: 5 }}
              className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b border-gray-200 dark:border-gray-700">
                {toolCategory.category}
              </h3>
              
              <div className="space-y-4">
                {toolCategory.tools.map((tool, toolIndex) => (
                  <motion.div
                    key={toolIndex}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: catIndex * 0.2 + toolIndex * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-4 rounded-lg bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                  >
                    <div className={`text-3xl ${tool.color}`}>
                      {tool.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {tool.name}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        Professional Design Software
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Design Principles */}
      <motion.div variants={fadeInUp} className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Design Principles We Follow
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
                <div className="text-3xl">
                  {principle.icon}
                </div>
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
          Our Design Process
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
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold text-lg">
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

      {/* File Formats */}
      <motion.div variants={fadeInUp} className="mb-16">
        <div className="bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 rounded-2xl p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-white dark:bg-gray-800 text-pink-600 dark:text-pink-400">
              <FaLayerGroup className="text-2xl" />
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              File Formats We Deliver
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Professional formats for all your design needs
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {fileFormats.map((format, idx) => (
              <motion.div
                key={idx}
                variants={scaleIn}
                whileHover={{ scale: 1.1 }}
                className={`p-4 rounded-lg text-center ${format.color} hover:shadow-md transition-shadow duration-300`}
              >
                <div className="text-2xl font-bold mb-2">{format.format}</div>
                <div className="text-sm font-medium">{format.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Mobile & Responsive Design */}
      <motion.div 
        variants={fadeInUp}
        className="mb-16 p-6 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20"
      >
        <div className="flex items-center gap-4 mb-4">
          <FaMobileAlt className="text-2xl text-blue-500" />
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            Mobile-First Design Approach
          </h3>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          We design with mobile users in mind first, ensuring your graphics look stunning and function perfectly on smartphones and tablets before scaling up to desktop.
        </p>
        <div className="flex flex-wrap gap-3">
          {['Responsive Layouts', 'Touch-Friendly Design', 'Fast Loading', 'Mobile Optimization'].map((item, idx) => (
            <motion.div
              key={idx}
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-800"
            >
              <FaCheckCircle className="text-green-500 text-sm" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{item}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Creativity & Innovation */}
      <motion.div 
        variants={fadeInUp}
        className="mb-16 p-6 rounded-xl bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border border-yellow-200 dark:border-yellow-800"
      >
        <div className="flex items-center gap-4 mb-4">
          <FaMagic className="text-2xl text-yellow-500" />
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            Creative Excellence
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What Sets Us Apart:</h4>
            <ul className="space-y-2">
              {[
                'Original & Unique Concepts',
                'Trend-Aware Designs',
                'Brand-Centric Approach',
                'Attention to Detail',
                'Strategic Thinking',
                'Emotional Connection'
              ].map((item, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <FaRegHeart className="text-pink-500 text-sm" />
                  <span className="text-gray-600 dark:text-gray-300">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Quality Assurance:</h4>
            <div className="space-y-3">
              {[
                { aspect: 'Color Accuracy', level: '100%' },
                { aspect: 'Print Readiness', level: '100%' },
                { aspect: 'File Organization', level: '95%' },
                { aspect: 'Client Satisfaction', level: '98%' }
              ].map((item, idx) => (
                <div key={idx}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{item.aspect}</span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">{item.level}</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: item.level }}
                      transition={{ delay: idx * 0.2, duration: 1 }}
                      className="bg-gradient-to-r from-pink-500 to-purple-500 h-2 rounded-full"
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
        <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Elevate Your Visual Brand?
          </h2>
          <p className="text-pink-100 mb-8 max-w-2xl mx-auto">
            Let's create stunning graphics that make your brand unforgettable and connect with your audience
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/get-quote"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-pink-600 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg"
              >
                <FaRocket />
                Start Your Design Project
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
                <FaPalette />
                Request Design Consultation
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}