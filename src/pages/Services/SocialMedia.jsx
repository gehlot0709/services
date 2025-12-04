import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaFacebook, 
  FaInstagram, 
  FaTwitter, 
  FaLinkedin,
  FaYoutube,
  FaTiktok,
  FaArrowLeft,
  FaRocket,
  FaCheckCircle,
  FaUsers,
  FaChartLine,
  FaBullhorn,
  FaHashtag,
  FaRegHeart,
  FaShareAlt,
  FaComment,
  FaCalendarAlt,
  FaVideo,
  FaImage,
  FaPalette,
  FaMobileAlt,
  FaGlobe
} from 'react-icons/fa';
import { SiPinterest, SiSnapchat } from 'react-icons/si';
import { Link } from 'react-router-dom';

export default function SocialMedia() {
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

  // Social Media Platforms
  const socialPlatforms = [
    {
      platform: 'Facebook',
      icon: <FaFacebook />,
      description: 'Build community and drive engagement with targeted content',
      color: 'from-blue-600 to-blue-800',
      stats: '2.9B+ Monthly Active Users'
    },
    {
      platform: 'Instagram',
      icon: <FaInstagram />,
      description: 'Visual storytelling and influencer marketing',
      color: 'from-purple-500 to-pink-500',
      stats: '2B+ Monthly Active Users'
    },
    {
      platform: 'Twitter (X)',
      icon: <FaTwitter />,
      description: 'Real-time conversations and brand awareness',
      color: 'from-gray-800 to-black',
      stats: '450M+ Monthly Active Users'
    },
    {
      platform: 'LinkedIn',
      icon: <FaLinkedin />,
      description: 'B2B marketing and professional networking',
      color: 'from-blue-500 to-blue-700',
      stats: '900M+ Members'
    },
    {
      platform: 'YouTube',
      icon: <FaYoutube />,
      description: 'Video marketing and content strategy',
      color: 'from-red-500 to-red-700',
      stats: '2.5B+ Monthly Active Users'
    },
    {
      platform: 'TikTok',
      icon: <FaTiktok />,
      description: 'Short-form video and viral trends',
      color: 'from-black to-gray-800',
      stats: '1B+ Monthly Active Users'
    }
  ];

  // Social Media Services
  const socialServices = [
    {
      service: 'Content Strategy',
      description: 'Develop engaging content calendars and posting schedules',
      icon: <FaCalendarAlt />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      service: 'Community Management',
      description: 'Engage with followers and build brand loyalty',
      icon: <FaUsers />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      service: 'Paid Social Advertising',
      description: 'Targeted campaigns for maximum reach and conversions',
      icon: <FaBullhorn />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      service: 'Influencer Marketing',
      description: 'Collaborate with influencers to expand reach',
      icon: <FaRegHeart />,
      color: 'from-orange-500 to-yellow-500'
    },
    {
      service: 'Analytics & Reporting',
      description: 'Track performance and optimize strategies',
      icon: <FaChartLine />,
      color: 'from-red-500 to-pink-500'
    },
    {
      service: 'Brand Monitoring',
      description: 'Monitor mentions and manage online reputation',
      icon: <FaHashtag />,
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  // Performance Metrics
  const performanceMetrics = [
    {
      metric: 'Engagement Rate',
      value: '3-6%',
      description: 'Average across all platforms',
      icon: <FaRegHeart className="text-pink-500 text-2xl" />
    },
    {
      metric: 'Follower Growth',
      value: '15-25%',
      description: 'Monthly increase with strategy',
      icon: <FaUsers className="text-blue-500 text-2xl" />
    },
    {
      metric: 'Click-Through Rate',
      value: '1.5-3%',
      description: 'Social media ads performance',
      icon: <FaChartLine className="text-green-500 text-2xl" />
    },
    {
      metric: 'ROI',
      value: '500%+',
      description: 'Average return on social investment',
      icon: <FaBullhorn className="text-purple-500 text-2xl" />
    }
  ];

  // Content Types
  const contentTypes = [
    {
      type: 'Visual Content',
      description: 'High-quality images and graphics',
      icon: <FaImage />,
      color: 'text-blue-500',
      platforms: ['Instagram', 'Pinterest', 'Facebook']
    },
    {
      type: 'Video Content',
      description: 'Short-form and long-form videos',
      icon: <FaVideo />,
      color: 'text-red-500',
      platforms: ['TikTok', 'YouTube', 'Reels']
    },
    {
      type: 'Stories & Reels',
      description: '24-hour disappearing content',
      icon: <FaMobileAlt />,
      color: 'text-purple-500',
      platforms: ['Instagram', 'Facebook', 'Snapchat']
    },
    {
      type: 'Live Streaming',
      description: 'Real-time engagement with audience',
      icon: <FaGlobe />,
      color: 'text-green-500',
      platforms: ['Facebook', 'Instagram', 'YouTube']
    }
  ];

  // Social Media Process
  const socialProcess = [
    {
      step: '01',
      title: 'Audit & Strategy',
      description: 'Analyze current presence and define goals'
    },
    {
      step: '02',
      title: 'Content Planning',
      description: 'Develop content calendar and creative assets'
    },
    {
      step: '03',
      title: 'Community Building',
      description: 'Grow followers and engage audience'
    },
    {
      step: '04',
      title: 'Campaign Execution',
      description: 'Launch organic and paid campaigns'
    },
    {
      step: '05',
      title: 'Monitoring',
      description: 'Track engagement and brand mentions'
    },
    {
      step: '06',
      title: 'Optimization',
      description: 'Analyze results and improve strategy'
    }
  ];

  // Engagement Metrics
  const engagementMetrics = [
    'Likes & Reactions',
    'Comments & Replies',
    'Shares & Retweets',
    'Saves & Bookmarks',
    'Click-throughs',
    'Profile Visits',
    'Direct Messages',
    'Story Views',
    'Video Views',
    'Audience Growth'
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
              <FaUsers className="text-4xl text-purple-600 dark:text-purple-400" />
            </motion.div>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Social Media Marketing
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
          Build your brand presence, engage your audience, and drive results across all social platforms
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

      {/* Social Media Platforms */}
      <motion.div variants={fadeInUp} className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Social Media Platforms We Manage
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {socialPlatforms.map((platform, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group"
            >
              <div className="h-full p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-transparent transition-all duration-300 hover:shadow-xl overflow-hidden relative">
                <div className={`absolute inset-0 bg-gradient-to-r ${platform.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                <div className="flex items-center gap-4 mb-4">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-r ${platform.color} text-white`}>
                    <div className="text-2xl">
                      {platform.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {platform.platform}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {platform.stats}
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {platform.description}
                </p>
                
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <FaChartLine className="text-green-500" />
                  <span>Performance Analytics</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Social Media Services */}
      <motion.div variants={fadeInUp} className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Our Social Media Services
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {socialServices.map((service, index) => (
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
                  {service.service}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400">
                  {service.description}
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contentTypes.map((content, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
            >
              <div className={`text-3xl mb-4 ${content.color}`}>
                {content.icon}
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {content.type}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {content.description}
              </p>
              
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">Best for:</h4>
                <div className="flex flex-wrap gap-2">
                  {content.platforms.map((platform, idx) => (
                    <span 
                      key={idx}
                      className="px-2 py-1 text-xs rounded bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                    >
                      {platform}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Social Media Process */}
      <motion.div variants={fadeInUp} className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Our Social Media Process
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {socialProcess.map((step, index) => (
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
              
              {index < socialProcess.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-8 h-0.5 bg-gray-300 dark:bg-gray-700"></div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Engagement Metrics */}
      <motion.div variants={fadeInUp} className="mb-16">
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-white dark:bg-gray-800 text-purple-600 dark:text-purple-400">
              <FaChartLine className="text-2xl" />
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Engagement Metrics We Track
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Comprehensive analytics to measure social media success
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {engagementMetrics.map((metric, idx) => (
              <motion.div
                key={idx}
                variants={scaleIn}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-3 rounded-lg bg-white dark:bg-gray-800 text-center hover:shadow-md transition-shadow duration-300 border border-gray-200 dark:border-gray-700"
              >
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{metric}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Social Media Benefits */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {/* Benefits */}
        <motion.div variants={fadeInUp}>
          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border border-blue-200 dark:border-blue-800">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <FaBullhorn className="text-blue-500" />
              Benefits of Social Media Marketing
            </h3>
            
            <ul className="space-y-3">
              {[
                'Increased Brand Awareness',
                'Direct Customer Engagement',
                'Improved Customer Loyalty',
                'Higher Conversion Rates',
                'Cost-Effective Marketing',
                'Real-Time Customer Feedback',
                'Competitive Advantage',
                'Better SEO Performance'
              ].map((item, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <FaCheckCircle className="text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Community Building */}
        <motion.div variants={fadeInUp}>
          <div className="p-6 rounded-xl bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 border border-pink-200 dark:border-pink-800">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <FaUsers className="text-pink-500" />
              Community Building Strategy
            </h3>
            
            <div className="space-y-4">
              {[
                { aspect: 'Audience Growth', progress: '95%' },
                { aspect: 'Engagement Rate', progress: '90%' },
                { aspect: 'Response Time', progress: '98%' },
                { aspect: 'Brand Advocacy', progress: '85%' }
              ].map((item, idx) => (
                <div key={idx}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{item.aspect}</span>
                    <span className="text-sm font-bold text-gray-900 dark:text-white">{item.progress}</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: item.progress }}
                      transition={{ delay: idx * 0.2, duration: 1 }}
                      className="bg-gradient-to-r from-pink-500 to-purple-500 h-2 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Visual Content */}
      <motion.div 
        variants={fadeInUp}
        className="mb-16 p-6 rounded-xl bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 border border-orange-200 dark:border-orange-800"
      >
        <div className="flex items-center gap-4 mb-4">
          <FaPalette className="text-2xl text-orange-500" />
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            Visual Content Creation
          </h3>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          We create stunning visual content that stands out in crowded social feeds. From eye-catching graphics to engaging videos, our content is designed to stop the scroll and drive engagement.
        </p>
        <div className="flex flex-wrap gap-3">
          {['Custom Graphics', 'Branded Templates', 'Video Editing', 'Animation', 'Photo Editing', 'Infographics'].map((item, idx) => (
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

      {/* CTA Section */}
      <motion.div variants={fadeInUp} className="text-center">
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Grow Your Social Presence?
          </h2>
          <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
            Let's build an engaged community and drive real business results through strategic social media marketing
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
                Start Social Media Campaign
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
                <FaUsers />
                Free Social Media Audit
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}