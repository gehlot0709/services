import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaEnvelope, 
  FaRocket, 
  FaChartLine, 
  FaUsers, 
  FaCogs,
  FaArrowLeft,
  FaCheckCircle,
  FaBolt,
  FaShieldAlt,
  FaMobileAlt,
  FaCalendarAlt,
  FaPaperPlane,
  FaTags,
  FaPercentage,
  FaClipboardCheck,
  FaMagic
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function EmailMarketing() {
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

  // Campaign Types
  const campaignTypes = [
    {
      icon: <FaRocket />,
      title: 'Welcome Series',
      description: 'Onboard new subscribers and build relationships from day one',
      color: 'from-blue-500 to-cyan-500',
      metrics: '40% Open Rate'
    },
    {
      icon: <FaTags />,
      title: 'Promotional Campaigns',
      description: 'Drive sales and conversions with targeted promotional emails',
      color: 'from-green-500 to-emerald-500',
      metrics: '25% CTR Average'
    },
    {
      icon: <FaUsers />,
      title: 'Newsletter Campaigns',
      description: 'Engage your audience with valuable content and updates',
      color: 'from-purple-500 to-indigo-500',
      metrics: '30% Engagement'
    },
    {
      icon: <FaCalendarAlt />,
      title: 'Automated Workflows',
      description: 'Set up triggered emails based on user behavior and actions',
      color: 'from-orange-500 to-yellow-500',
      metrics: '5x More Effective'
    },
    {
      icon: <FaBolt />,
      title: 'Re-engagement Campaigns',
      description: 'Win back inactive subscribers and reduce churn',
      color: 'from-red-500 to-pink-500',
      metrics: '15% Reactivation'
    },
    {
      icon: <FaClipboardCheck />,
      title: 'Lead Nurturing',
      description: 'Guide prospects through the sales funnel with targeted content',
      color: 'from-teal-500 to-cyan-500',
      metrics: '35% Conversion Lift'
    }
  ];

  // Email Marketing Metrics
  const metrics = [
    {
      value: '98%',
      label: 'Deliverability Rate',
      icon: <FaPaperPlane />,
      color: 'text-green-500',
      description: 'Ensuring emails reach inboxes'
    },
    {
      value: '45%',
      label: 'Average Open Rate',
      icon: <FaEnvelope />,
      color: 'text-blue-500',
      description: 'Industry-beating engagement'
    },
    {
      value: '22%',
      label: 'Click-Through Rate',
      icon: <FaPercentage />,
      color: 'text-purple-500',
      description: 'Driving meaningful actions'
    },
    {
      value: '300%',
      label: 'ROI on Email',
      icon: <FaChartLine />,
      color: 'text-orange-500',
      description: 'Highest ROI marketing channel'
    }
  ];

  // Automation Features
  const automationFeatures = [
    {
      title: 'Behavioral Triggers',
      description: 'Send emails based on user actions like purchases, page visits, or downloads',
      icon: <FaBolt />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Segmentation',
      description: 'Target specific audience segments with personalized messaging',
      icon: <FaUsers />,
      color: 'from-purple-500 to-indigo-500'
    },
    {
      title: 'A/B Testing',
      description: 'Test subject lines, content, and timing to optimize performance',
      icon: <FaChartLine />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Analytics Dashboard',
      description: 'Track opens, clicks, conversions, and revenue attribution',
      icon: <FaCogs />,
      color: 'from-orange-500 to-yellow-500'
    }
  ];

  // Process Steps
  const processSteps = [
    {
      step: '01',
      title: 'Strategy Development',
      description: 'Define goals, audience segments, and campaign structure'
    },
    {
      step: '02',
      title: 'List Building',
      description: 'Implement opt-in strategies and grow your subscriber base'
    },
    {
      step: '03',
      title: 'Content Creation',
      description: 'Design compelling email templates and write engaging copy'
    },
    {
      step: '04',
      title: 'Automation Setup',
      description: 'Configure workflows, triggers, and segmentation rules'
    },
    {
      step: '05',
      title: 'Testing & Launch',
      description: 'Test across devices and launch campaigns'
    },
    {
      step: '06',
      title: 'Optimization',
      description: 'Analyze performance and continuously improve results'
    }
  ];

  // Platform Features
  const platformFeatures = [
    'Responsive Email Design',
    'Advanced Segmentation',
    'Behavioral Automation',
    'Real-time Analytics',
    'GDPR Compliance',
    'Integration with CRMs',
    'Spam Score Checking',
    'Landing Page Creation'
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
              <FaEnvelope className="text-4xl text-blue-600 dark:text-blue-400" />
            </motion.div>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Email Marketing
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
          Drive engagement, nurture leads, and increase revenue with strategic email campaigns
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

      {/* Campaign Types */}
      <motion.div variants={fadeInUp} className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Campaign Types We Create
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {campaignTypes.map((campaign, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ scale: 1.02, y: -8 }}
              className="group"
            >
              <div className="h-full p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-transparent transition-all duration-300 hover:shadow-xl overflow-hidden relative">
                <div className={`absolute inset-0 bg-gradient-to-r ${campaign.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                <div className={`inline-flex items-center justify-center w-14 h-14 mb-4 rounded-lg bg-gradient-to-r ${campaign.color} text-white`}>
                  {campaign.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {campaign.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {campaign.description}
                </p>
                
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700">
                  <FaChartLine className="text-green-500" />
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    {campaign.metrics}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Automation Features */}
      <motion.div variants={fadeInUp} className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Advanced Automation Features
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {automationFeatures.map((feature, index) => (
            <motion.div
              key={index}
              variants={slideInLeft}
              whileHover={{ x: 5 }}
              className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-start gap-4">
                <div className={`flex-shrink-0 inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-r ${feature.color} text-white`}>
                  {feature.icon}
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Process Steps */}
      <motion.div variants={fadeInUp} className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Our Email Marketing Process
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
              
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-8 h-0.5 bg-gray-300 dark:bg-gray-700"></div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Platform Features */}
      <motion.div variants={fadeInUp} className="mb-16">
        <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 rounded-2xl p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400">
              <FaMagic className="text-2xl" />
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Complete Email Marketing Platform
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Everything you need for successful email marketing campaigns
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {platformFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={scaleIn}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-3 rounded-lg bg-white dark:bg-gray-800 text-center hover:shadow-md transition-shadow duration-300"
              >
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Mobile Optimization */}
      <motion.div 
        variants={fadeInUp}
        className="mb-16 p-6 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20"
      >
        <div className="flex items-center gap-4 mb-4">
          <FaMobileAlt className="text-2xl text-purple-500" />
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            Mobile-Optimized Emails
          </h3>
        </div>
        <p className="text-gray-600 dark:text-gray-300">
          With over 60% of emails opened on mobile devices, we ensure all our email designs are fully responsive and optimized for every screen size.
        </p>
      </motion.div>

      {/* Compliance & Security */}
      <motion.div 
        variants={fadeInUp}
        className="mb-16 p-6 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700"
      >
        <div className="flex items-center gap-4 mb-4">
          <FaShieldAlt className="text-2xl text-green-500" />
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            Compliance & Security
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {['GDPR Compliant', 'CAN-SPAM Act', 'Double Opt-in'].map((item, idx) => (
            <motion.div
              key={idx}
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 p-4 rounded-lg bg-white dark:bg-gray-800"
            >
              <FaCheckCircle className="text-green-500" />
              <span className="font-medium text-gray-700 dark:text-gray-300">{item}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div variants={fadeInUp} className="text-center">
        <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Email Marketing?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's create email campaigns that drive real business results and build lasting customer relationships
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
                Launch Your First Campaign
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
                <FaEnvelope />
                Free Email Audit
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}