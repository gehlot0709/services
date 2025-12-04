import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaPenNib, 
  FaPalette, 
  FaVectorSquare, 
  FaLightbulb,
  FaArrowLeft,
  FaRocket,
  FaCheckCircle,
  FaEye,
  FaMagic,
  FaFont,
  FaClone,
  FaCrop,
  FaRegHeart,
  FaFileDownload,
  FaHistory,
  FaAward,
  FaUsers,
} from 'react-icons/fa';
import { SiAdobeillustrator, SiFigma, SiCanva } from 'react-icons/si';
import { Link } from 'react-router-dom';

export default function LogoDesign() {
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

  // Logo Styles
  const logoStyles = [
    {
      type: 'Wordmark',
      description: 'Typography-based logos that focus on your brand name',
      icon: <FaFont />,
      color: 'from-blue-500 to-cyan-500',
      examples: ['Google', 'FedEx', 'Coca-Cola']
    },
    {
      type: 'Lettermark',
      description: 'Initials or abbreviations representing your brand',
      icon: <FaPenNib />,
      color: 'from-purple-500 to-pink-500',
      examples: ['IBM', 'NASA', 'HP']
    },
    {
      type: 'Pictorial Mark',
      description: 'Icon-based logos that visually represent your brand',
      icon: <FaVectorSquare />,
      color: 'from-green-500 to-emerald-500',
      examples: ['Apple', 'Twitter', 'Target']
    },
    {
      type: 'Abstract Mark',
      description: 'Unique geometric forms representing your brand concept',
      icon: <FaMagic />,
      color: 'from-orange-500 to-yellow-500',
      examples: ['Nike', 'Pepsi', 'Adidas']
    },
    {
      type: 'Mascot',
      description: 'Character or spokesperson representing your brand',
      icon: <FaUsers />,
      color: 'from-red-500 to-pink-500',
      examples: ['KFC', 'Michelin', 'Pringles']
    },
    {
      type: 'Combination',
      description: 'Combination of text and symbol for maximum impact',
      icon: <FaClone />,
      color: 'from-teal-500 to-cyan-500',
      examples: ['Burger King', 'Lacoste', 'Doritos']
    }
  ];

  // Logo Design Process
  const designProcess = [
    {
      step: '01',
      title: 'Brand Discovery',
      description: 'Understanding your business, audience, and competition',
      icon: <FaEye />
    },
    {
      step: '02',
      title: 'Concept Development',
      description: 'Brainstorming and sketching initial logo concepts',
      icon: <FaLightbulb />
    },
    {
      step: '03',
      title: 'Design Creation',
      description: 'Creating digital versions of selected concepts',
      icon: <FaPenNib />
    },
    {
      step: '04',
      title: 'Refinement',
      description: 'Polishing colors, typography, and details',
      icon: <FaPalette />
    },
    {
      step: '05',
      title: 'Presentation',
      description: 'Presenting logo options with mockups',
      icon: <FaVectorSquare />
    },
    {
      step: '06',
      title: 'Final Delivery',
      description: 'Providing all file formats and brand guidelines',
      icon: <FaFileDownload />
    }
  ];

  // Logo Design Tools
  const designTools = [
    { name: 'Adobe Illustrator', icon: <SiAdobeillustrator />, color: 'text-orange-500', purpose: 'Vector Design' },
    { name: 'Figma', icon: <SiFigma />, color: 'text-red-500', purpose: 'Collaboration' },
    { name: 'Adobe Photoshop', icon: <FaMagic />, color: 'text-blue-500', purpose: 'Mockups' },
    { name: 'Canva', icon: <SiCanva />, color: 'text-blue-400', purpose: 'Presentation' }
  ];

  // Deliverables Package
  const deliverables = [
    {
      package: 'Basic',
      features: ['Primary Logo', '2 Revisions', 'PNG & JPG Files', 'Color Variations'],
      color: 'from-gray-400 to-gray-600'
    },
    {
      package: 'Professional',
      features: ['Primary + Alternate Logos', '5 Revisions', 'All File Formats', 'Brand Colors', 'Simple Guidelines'],
      color: 'from-blue-500 to-cyan-500',
      popular: true
    },
    {
      package: 'Premium',
      features: ['Complete Logo System', 'Unlimited Revisions', 'All File Formats', 'Brand Guidelines', 'Stationery Mockups', 'Social Media Kit'],
      color: 'from-purple-500 to-pink-500'
    }
  ];

  // Logo Principles
  const logoPrinciples = [
    {
      principle: 'Simplicity',
      description: 'Memorable and easily recognizable',
      icon: <FaCrop className="text-blue-500 text-2xl" />
    },
    {
      principle: 'Versatility',
      description: 'Works in color and black & white, large and small',
      icon: <FaClone className="text-purple-500 text-2xl" />
    },
    {
      principle: 'Timelessness',
      description: 'Avoids trends that quickly become dated',
      icon: <FaHistory className="text-green-500 text-2xl" />
    },
    {
      principle: 'Appropriateness',
      description: 'Reflects your industry and target audience',
      icon: <FaUsers className="text-orange-500 text-2xl" />
    }
  ];

  // File Formats Included
  const fileFormats = [
    { format: 'AI', name: 'Adobe Illustrator', desc: 'Editable Vector File' },
    { format: 'EPS', name: 'Encapsulated PostScript', desc: 'Vector for Print' },
    { format: 'PDF', name: 'Portable Document', desc: 'High Quality Print' },
    { format: 'SVG', name: 'Scalable Vector', desc: 'Web & Apps' },
    { format: 'PNG', name: 'Portable Network', desc: 'Web with Transparency' },
    { format: 'JPG', name: 'Joint Photographic', desc: 'General Use' }
  ];

  // Brand Guidelines Elements
  const brandGuidelines = [
    'Logo Usage Rules',
    'Color Palette (CMYK, RGB, HEX)',
    'Typography System',
    'Spacing & Clear Space',
    'Minimum Size Requirements',
    'Do\'s and Don\'ts',
    'Stationery Templates',
    'Social Media Guidelines'
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
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full blur-xl opacity-20"></div>
            <motion.div 
              variants={rotateIn}
              className="relative inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/20 dark:to-orange-900/20"
            >
              <FaPenNib className="text-4xl text-amber-600 dark:text-amber-400" />
            </motion.div>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Professional Logo Design
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
          Create a memorable brand identity that represents your business and resonates with your audience
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

      {/* Logo Styles */}
      <motion.div variants={fadeInUp} className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Logo Design Styles
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {logoStyles.map((style, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group"
            >
              <div className="h-full p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-transparent transition-all duration-300 hover:shadow-xl overflow-hidden relative">
                <div className={`absolute inset-0 bg-gradient-to-r ${style.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                <div className={`inline-flex items-center justify-center w-14 h-14 mb-4 rounded-lg bg-gradient-to-r ${style.color} text-white`}>
                  {style.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {style.type}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {style.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">Examples:</h4>
                  <div className="flex flex-wrap gap-2">
                    {style.examples.map((example, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Design Process */}
      <motion.div variants={fadeInUp} className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Our Logo Design Process
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
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-lg">
                      {step.step}
                    </div>
                  </div>
                  
                  <div>
                    <div className="inline-flex items-center justify-center w-10 h-10 mb-2 rounded-lg bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400">
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
              
              {index < designProcess.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-8 h-0.5 bg-gray-300 dark:bg-gray-700"></div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Deliverables Packages */}
      <motion.div variants={fadeInUp} className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Logo Design Packages
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {deliverables.map((pkg, index) => (
            <motion.div
              key={index}
              variants={slideInLeft}
              whileHover={{ scale: pkg.popular ? 1.05 : 1.02, y: -10 }}
              className="relative"
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="px-4 py-1 text-sm font-bold rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                    MOST POPULAR
                  </span>
                </div>
              )}
              
              <div className={`h-full p-6 rounded-2xl border-2 ${pkg.popular ? 'border-amber-500 dark:border-amber-500' : 'border-gray-200 dark:border-gray-700'} bg-white dark:bg-gray-800`}>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {pkg.package}
                  </h3>
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
                        ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    Select Package
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Design Tools */}
      <motion.div variants={fadeInUp} className="mb-16">
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-2xl p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-white dark:bg-gray-800 text-amber-600 dark:text-amber-400">
              <FaMagic className="text-2xl" />
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Professional Design Tools
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Industry-standard software for creating high-quality logos
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {designTools.map((tool, idx) => (
              <motion.div
                key={idx}
                variants={scaleIn}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="p-4 rounded-xl bg-white dark:bg-gray-800 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className={`text-4xl mb-3 ${tool.color}`}>
                  {tool.icon}
                </div>
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

      {/* Logo Design Principles */}
      <motion.div variants={fadeInUp} className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Logo Design Principles
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {logoPrinciples.map((principle, index) => (
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

      {/* File Formats & Brand Guidelines */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {/* File Formats */}
        <motion.div variants={fadeInUp}>
          <div className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <FaFileDownload className="text-amber-500" />
              File Formats Included
            </h3>
            
            <div className="space-y-4">
              {fileFormats.map((format, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center justify-between p-4 rounded-lg bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                >
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white">{format.format}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{format.name}</div>
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{format.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Brand Guidelines */}
        <motion.div variants={fadeInUp}>
          <div className="p-6 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border border-amber-200 dark:border-amber-800">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              {/* <FaShield className="text-amber-600" /> */}
              Brand Guidelines
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Ensure consistent brand application with comprehensive guidelines
            </p>
            
            <div className="grid grid-cols-2 gap-3">
              {brandGuidelines.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={scaleIn}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 p-3 rounded-lg bg-white dark:bg-gray-800"
                >
                  <FaRegHeart className="text-amber-500 text-sm" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Quality Guarantee */}
      <motion.div 
        variants={fadeInUp}
        className="mb-16 p-6 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700"
      >
        <div className="flex items-center gap-4 mb-4">
          <FaAward className="text-2xl text-amber-500" />
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            Our Quality Guarantee
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: '100% Original', desc: 'Unique designs created just for you' },
            { title: 'Unlimited Revisions', desc: 'Until you\'re completely satisfied' },
            { title: 'Money-Back Guarantee', desc: 'If you\'re not happy with the results' }
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
        <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready for a Logo That Stands Out?
          </h2>
          <p className="text-amber-100 mb-8 max-w-2xl mx-auto">
            Your logo is the face of your brand. Let's create something memorable together
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/get-quote"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-amber-600 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg"
              >
                <FaRocket />
                Start Your Logo Design
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
                <FaPenNib />
                Free Design Consultation
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}