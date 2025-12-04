import React from 'react';
import { FaLink, FaHandshake, FaChartPie, FaDollarSign, FaUsers, FaRocket } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function AffiliateMarketing() {
  return (
    <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          {/* Header Section */}
          <div className="relative px-8 py-12 text-center">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
            
            <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30">
              <FaLink className="text-3xl text-indigo-600 dark:text-indigo-400" />
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Affiliate Marketing
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
              Performance-based marketing partnerships for sustainable revenue growth
            </p>
            
            <Link 
              to="/services" 
              className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-semibold transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to All Services
            </Link>
          </div>

          {/* Content Section */}
          <div className="px-8 pb-12">
            {/* Overview */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Partnership Programs That Drive Results
              </h2>
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-700/50 dark:to-gray-800/50 rounded-xl p-6">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Build and manage high-performing affiliate programs that drive sales through 
                  strategic partnerships and commission-based marketing. Our comprehensive 
                  affiliate marketing solutions help you expand your reach, increase revenue, 
                  and build lasting partnerships.
                </p>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-gradient-to-br from-indigo-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-500 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 mr-4">
                    <FaHandshake className="text-2xl text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Strategic Partnerships</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Connect with the right affiliates who align with your brand values and target audience
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-500 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-purple-100 dark:bg-purple-900/30 mr-4">
                    <FaChartPie className="text-2xl text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Performance Analytics</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Track ROI, conversion rates, and campaign performance with detailed analytics
                </p>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-pink-300 dark:hover:border-pink-500 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-pink-100 dark:bg-pink-900/30 mr-4">
                    <FaDollarSign className="text-2xl text-pink-600 dark:text-pink-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Commission Management</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Automated commission tracking, payments, and affiliate payout systems
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 mr-4">
                    <FaUsers className="text-2xl text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Affiliate Recruitment</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Targeted strategies to recruit high-quality affiliates for your program
                </p>
              </div>
            </div>

            {/* Our Approach */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Our Approach
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30">
                      <span className="text-indigo-600 dark:text-indigo-400 font-bold">1</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Program Setup & Strategy
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Design a custom affiliate program with competitive commission structures and clear guidelines
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30">
                      <span className="text-purple-600 dark:text-purple-400 font-bold">2</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Affiliate Recruitment
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Identify and recruit top-performing affiliates in your industry
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-pink-100 dark:bg-pink-900/30">
                      <span className="text-pink-600 dark:text-pink-400 font-bold">3</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Campaign Management
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Ongoing support, creative assets, and tracking for affiliate campaigns
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 md:p-12">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Ready to Grow Through Strategic Partnerships?
                </h2>
                <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
                  Let's build an affiliate marketing program that drives sustainable revenue growth for your business
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/get-quote"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-indigo-600 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
                  >
                    <FaRocket className="mr-3" />
                    Get Started Now
                  </Link>
                  <Link 
                    to="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all duration-300"
                  >
                    Contact Our Team
                  </Link>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-12 text-center">
              <div className="inline-flex items-center justify-center p-4 rounded-xl bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900">
                <p className="text-gray-600 dark:text-gray-400">
                  <span className="font-semibold text-gray-900 dark:text-white">Average ROI:</span> 20:1 | 
                  <span className="font-semibold text-gray-900 dark:text-white ml-4">Setup Time:</span> 2-4 Weeks | 
                  <span className="font-semibold text-gray-900 dark:text-white ml-4">Success Rate:</span> 95%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}