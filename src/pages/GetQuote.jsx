import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";
import { 
  FaPaperPlane, 
  FaUser, 
  FaEnvelope, 
  FaPhone, 
  FaClipboardList,
  FaComment,
  FaSpinner,
  FaCheckCircle,
  FaQuoteLeft,
  FaArrowRight
} from "react-icons/fa";

function GetQuote() {
  const [captchaToken, setCaptchaToken] = useState(null);
  const [isSending, setIsSending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef();

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
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

  // Service options
  const serviceOptions = [
    "SEO - Search Engine Optimization",
    "SMO - Social Media Optimization",
    "Web Design & Development",
    "Graphic Design",
    "PPC - Pay Per Click",
    "SMM - Social Media Marketing",
    "Content Marketing",
    "Branding & Identity",
    "E-commerce Solutions",
    "Mobile App Development"
  ];

  return (
    <section className="get-quote py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-12"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white mb-6">
            <FaQuoteLeft className="text-2xl" />
          </motion.div>
          
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg"
          >
            Get Your Free Quote Today
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg text-gray-200 max-w-3xl mx-auto"
          >
            Share your project details and we'll craft a personalized solution with competitive pricing.
            <span className="block text-purple-300 font-medium mt-2">
              No obligations. No hidden fees.
            </span>
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left Side - Benefits & Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-6">Why Choose Us?</h3>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Fast Response",
                    desc: "Get your quote within 24 hours",
                    color: "from-green-500 to-emerald-500"
                  },
                  {
                    title: "Transparent Pricing",
                    desc: "No hidden costs, clear breakdown",
                    color: "from-blue-500 to-cyan-500"
                  },
                  {
                    title: "Expert Consultation",
                    desc: "Free strategy session included",
                    color: "from-purple-500 to-pink-500"
                  },
                  {
                    title: "Flexible Packages",
                    desc: "Tailored to your budget & needs",
                    color: "from-orange-500 to-yellow-500"
                  }
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${benefit.color} flex items-center justify-center flex-shrink-0`}>
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{benefit.title}</h4>
                      <p className="text-gray-300 text-sm">{benefit.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Stats */}
              <div className="mt-10 pt-8 border-t border-white/20">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-1">24h</div>
                    <div className="text-sm text-gray-300">Avg. Response</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-1">500+</div>
                    <div className="text-sm text-gray-300">Projects Delivered</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 rounded-lg bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800"
                >
                  <div className="flex items-center gap-3">
                    <FaCheckCircle className="text-green-500 text-xl" />
                    <div>
                      <p className="font-semibold text-green-800 dark:text-green-300">
                        Quote request submitted successfully!
                      </p>
                      <p className="text-sm text-green-700 dark:text-green-400 mt-1">
                        We'll send your customized quote to your email within 24 hours.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              <motion.form
                ref={formRef}
                onSubmit={handleSubmit}
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div variants={scaleIn}>
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
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:focus:ring-purple-400 dark:focus:border-purple-400 bg-gray-50 dark:bg-gray-700 dark:text-white transition-colors shadow-sm"
                      />
                    </div>
                  </motion.div>

                  <motion.div variants={scaleIn}>
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
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:focus:ring-purple-400 dark:focus:border-purple-400 bg-gray-50 dark:bg-gray-700 dark:text-white transition-colors shadow-sm"
                      />
                    </div>
                  </motion.div>
                </div>

                <motion.div variants={scaleIn}>
                  <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Mobile Number *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaPhone className="text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      id="mobile"
                      name="mobile"
                      required
                      placeholder="Enter your mobile number"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:focus:ring-purple-400 dark:focus:border-purple-400 bg-gray-50 dark:bg-gray-700 dark:text-white transition-colors shadow-sm"
                    />
                  </div>
                </motion.div>

                <motion.div variants={scaleIn}>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Service Required *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none top-3">
                      <FaClipboardList className="text-gray-400" />
                    </div>
                    <select
                      id="service"
                      name="service"
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:focus:ring-purple-400 dark:focus:border-purple-400 bg-gray-50 dark:bg-gray-700 dark:text-white appearance-none shadow-sm"
                    >
                      <option value="">Select a service</option>
                      {serviceOptions.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={scaleIn}>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Project Budget (Optional)
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:focus:ring-purple-400 dark:focus:border-purple-400 bg-gray-50 dark:bg-gray-700 dark:text-white shadow-sm"
                  >
                    <option value="">Select budget range</option>
                    <option value="Under ₹20,000">Under ₹20,000</option>
                    <option value="₹20,000 - ₹50,000">₹20,000 - ₹50,000</option>
                    <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000</option>
                    <option value="₹1,00,000 - ₹2,50,000">₹1,00,000 - ₹2,50,000</option>
                    <option value="₹2,50,000+">₹2,50,000+</option>
                    <option value="Not sure">Not sure / Need advice</option>
                  </select>
                </motion.div>

                <motion.div variants={scaleIn}>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Project Details *
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3 pointer-events-none">
                      <FaComment className="text-gray-400" />
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      required
                      placeholder="Tell us about your project goals, timeline, specific requirements..."
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:focus:ring-purple-400 dark:focus:border-purple-400 bg-gray-50 dark:bg-gray-700 dark:text-white resize-none transition-colors shadow-sm"
                    ></textarea>
                  </div>
                </motion.div>

                <input
                  type="hidden"
                  name="time"
                  value={new Date().toLocaleString()}
                />
                <input
                  type="hidden"
                  name="source"
                  value="Get Quote Page"
                />

                <motion.div variants={scaleIn} className="flex justify-center pt-4">
                  <ReCAPTCHA
                    sitekey="6Lc66iAsAAAAABQyyZwtjq_j4oxSaSzmj2AANpSl"
                    onChange={(token) => setCaptchaToken(token)}
                    theme="light"
                    className="rounded-lg overflow-hidden"
                  />
                </motion.div>

                <motion.div
                  variants={scaleIn}
                  className="pt-4"
                >
                  <button
                    type="submit"
                    disabled={isSending}
                    className={`w-full flex items-center justify-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl ${
                      isSending ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                  >
                    {isSending ? (
                      <>
                        <FaSpinner className="animate-spin" />
                        Processing Your Request...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane />
                        Request Free Quote
                        <FaArrowRight className="ml-2" />
                      </>
                    )}
                  </button>
                  <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-3">
                    We respect your privacy. Your information will never be shared.
                  </p>
                </motion.div>
              </motion.form>
            </div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-6 text-gray-300"
            >
              <div className="text-sm">🔒 Secure & Encrypted</div>
              <div className="w-px h-4 bg-gray-600"></div>
              <div className="text-sm">💬 24/7 Support</div>
              <div className="w-px h-4 bg-gray-600"></div>
              <div className="text-sm">✅ Money-Back Guarantee</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Custom CSS for blob animations */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}

export default GetQuote;