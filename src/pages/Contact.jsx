import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock,
  FaPaperPlane,
  FaUser,
  FaComment,
  FaCheckCircle,
  FaWhatsapp,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaSpinner,
  FaBuilding,
  FaGlobe,
  FaExternalLinkAlt
} from "react-icons/fa";

function Contact() {
  const [captchaToken, setCaptchaToken] = useState(null);
  const [isSending, setIsSending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef();

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

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!captchaToken) {
      alert("⚠️ Please verify you're not a robot.");
      return;
    }

    setIsSending(true);

    emailjs
      .sendForm(
        "service_6zl4r1u",
        "template_xaoo54a",
        formRef.current,
        "pUF5txaBbUZpP4dj0"
      )
      .then(() => {
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 5000);
        formRef.current.reset();
        setCaptchaToken(null);
        setIsSending(false);
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        alert("❌ Failed to send. Please try again.");
        setIsSending(false);
      });
  };

  // Contact Information - UPDATED WITH YOUR DETAILS
  const contactInfo = [
    {
      icon: <FaPhone className="text-xl" />,
      title: "Phone",
      details: "+91 70419 63189",
      subtitle: "Click to call directly",
      color: "from-blue-500 to-cyan-500",
      action: "call",
      phoneNumber: "+917041963189"
    },
    {
      icon: <FaEnvelope className="text-xl" />,
      title: "Email",
      details: "gehlotstudy@gmail.com",
      subtitle: "Click to compose email",
      color: "from-purple-500 to-pink-500",
      action: "email",
      email: "gehlotstudy@gmail.com"
    },
    {
      icon: <FaEnvelope className="text-xl" />,
      title: "Business Email",
      details: "info@pixelsprint.com",
      subtitle: "Official business inquiries",
      color: "from-green-500 to-emerald-500",
      action: "email",
      email: "info@pixelsprint.com"
    },
    {
      icon: <FaClock className="text-xl" />,
      title: "Working Hours",
      details: "Mon - Fri: 9am - 6pm",
      subtitle: "Saturday: 10am - 4pm",
      color: "from-orange-500 to-yellow-500",
      action: "none"
    }
  ];

  // Social Media Links - Updated with your number for WhatsApp
  const socialLinks = [
    { 
      platform: "WhatsApp", 
      icon: <FaWhatsapp />, 
      color: "hover:bg-green-500", 
      link: "https://wa.me/917041963189?text=Hello%20PixelsPrint%21%20I%20would%20like%20to%20get%20more%20information%20about%20your%20services.",
      action: "whatsapp"
    },
    { 
      platform: "Facebook", 
      icon: <FaFacebook />, 
      color: "hover:bg-blue-600", 
      link: "https://facebook.com/pixelsprint" 
    },
    { 
      platform: "Twitter", 
      icon: <FaTwitter />, 
      color: "hover:bg-blue-400", 
      link: "https://twitter.com/pixelsprint" 
    },
    { 
      platform: "LinkedIn", 
      icon: <FaLinkedin />, 
      color: "hover:bg-blue-700", 
      link: "https://linkedin.com/company/pixelsprint" 
    },
    { 
      platform: "Instagram", 
      icon: <FaInstagram />, 
      color: "hover:bg-pink-600", 
      link: "https://instagram.com/pixelsprint" 
    }
  ];

  // Handle Phone Call Click
  const handlePhoneClick = (phoneNumber) => {
    // Format for tel: link
    const telLink = `tel:${phoneNumber}`;
    
    // For mobile devices - will trigger native dialer
    window.location.href = telLink;
    
    // For desktop - show confirmation
    if (!/Mobi|Android/i.test(navigator.userAgent)) {
      if (window.confirm(`Call ${phoneNumber}? This will open your phone app if you're on mobile.`)) {
        window.open(telLink, '_blank');
      }
    }
  };

  // Handle Email Click
  const handleEmailClick = (emailAddress) => {
    // Pre-filled email subject and body
    const subject = "Inquiry from PixelsPrint Website";
    const body = "Hello,\n\nI would like to get more information about your services.\n\nBest regards,";
    
    // Create mailto link
    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp} className="mb-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Click on phone numbers to call directly or click emails to compose messages
            </p>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8"
          >
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Send us a Message
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>

            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 rounded-lg bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800"
              >
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-green-500 text-xl" />
                  <div>
                    <p className="font-semibold text-green-800 dark:text-green-300">
                      Message sent successfully!
                    </p>
                    <p className="text-sm text-green-700 dark:text-green-400 mt-1">
                      We'll get back to you within 24 hours.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaUser className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Enter your name"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 bg-gray-50 dark:bg-gray-700 dark:text-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaEnvelope className="text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="Enter your email"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 bg-gray-50 dark:bg-gray-700 dark:text-white transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Phone Number *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaPhone className="text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder="Enter your phone number"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 bg-gray-50 dark:bg-gray-700 dark:text-white transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  placeholder="What is this regarding?"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 bg-gray-50 dark:bg-gray-700 dark:text-white transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message *
                </label>
                <div className="relative">
                  <div className="absolute top-3 left-3 pointer-events-none">
                    <FaComment className="text-gray-400" />
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    placeholder="Tell us about your project or inquiry..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 bg-gray-50 dark:bg-gray-700 dark:text-white resize-none transition-colors"
                  />
                </div>
              </div>

              {/* Hidden fields for EmailJS template */}
              <input type="hidden" name="time" value={new Date().toLocaleString()} />
              <input type="hidden" name="source" value="Contact Page" />

              <div className="flex justify-center">
                <ReCAPTCHA
                  sitekey="6Lc66iAsAAAAABQyyZwtjq_j4oxSaSzmj2AANpSl"
                  onChange={(token) => setCaptchaToken(token)}
                  theme="light"
                />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSending}
                  className={`w-full flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold px-6 py-4 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-[1.02] ${
                    isSending ? "opacity-70 cursor-not-allowed" : "hover:shadow-xl"
                  }`}
                >
                  {isSending ? (
                    <>
                      <FaSpinner className="animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Quick Contact Callout */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-6 text-white text-center">
              <h3 className="text-xl font-bold mb-2">Quick Contact</h3>
              <p className="mb-4">Click to call or email us directly</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => handlePhoneClick("+917041963189")}
                  className="flex items-center justify-center gap-2 bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <FaPhone />
                  Call Now
                </button>
                <button 
                  onClick={() => handleEmailClick("gehlotstudy@gmail.com")}
                  className="flex items-center justify-center gap-2 bg-white text-purple-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <FaEnvelope />
                  Email Now
                </button>
              </div>
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 cursor-pointer ${
                    info.action !== "none" ? "hover:border-blue-400 dark:hover:border-blue-500" : ""
                  }`}
                  onClick={() => {
                    if (info.action === "call") {
                      handlePhoneClick(info.phoneNumber);
                    } else if (info.action === "email") {
                      handleEmailClick(info.email);
                    }
                  }}
                >
                  <div className="flex justify-between items-start">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${info.color} text-white mb-4`}>
                      {info.icon}
                    </div>
                    {info.action !== "none" && (
                      <FaExternalLinkAlt className="text-gray-400 text-sm" />
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {info.title}
                  </h3>
                  <p className={`text-gray-700 dark:text-gray-300 font-medium mb-1 ${
                    info.action !== "none" ? "text-blue-600 dark:text-blue-400 hover:underline" : ""
                  }`}>
                    {info.details}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {info.subtitle}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Company Info */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                  <FaBuilding className="text-xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">PixelsPrint</h3>
                  <p className="text-blue-200">Digital Solutions Agency</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6">
                We specialize in creating comprehensive digital solutions that help businesses grow online. Our team of experts is ready to assist you with web development, digital marketing, and design services.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FaGlobe className="text-blue-300" />
                  <span className="text-gray-300">www.pixelsprint.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaClock className="text-green-300" />
                  <span className="text-gray-300">Response Time: Within 24 hours</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Connect With Us
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Follow us on social media for updates, tips, and more.
              </p>
              
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                    className={`flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 ${social.color} transition-all duration-300`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Frequently Asked Questions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  How can I contact you immediately?
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Click the phone number <span className="text-blue-500 cursor-pointer" onClick={() => handlePhoneClick("+917041963189")}>+91 70419 63189</span> to call directly, or click any email address to compose a message.
                </p>
              </div>
              
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Do you offer free consultations?
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Yes! We offer free 30-minute consultations for new clients.
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  What services do you offer?
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Web Development, Digital Marketing, SEO, Social Media Marketing, Graphic Design, and more.
                </p>
              </div>
              
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  What are your working hours?
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Monday to Friday: 9 AM - 6 PM IST, Saturday: 10 AM - 4 PM IST.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;