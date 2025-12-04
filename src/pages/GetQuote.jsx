import React, { useState } from "react";
import { motion } from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha";

function GetQuote() {
  const [captchaToken, setCaptchaToken] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captchaToken) {
      alert("⚠️ Please verify you're not a robot.");
      return;
    }

    // For demo: just show success
    alert(
      "✅ Quote submitted successfully! (Frontend only, no backend validation)"
    );
  };

  return (
    <section className="get-quote py-20 bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl font-bold text-center mb-6 text-white drop-shadow-lg"
        >
          Get a Free Quote
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center text-gray-100 mb-10 max-w-2xl mx-auto"
        >
          Share your project details with us and we’ll provide a tailored
          solution to help you grow.
        </motion.p>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white dark:bg-gray-800 shadow-2xl rounded-3xl p-8 space-y-6"
        >
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full border border-gray-300 dark:border-gray-700 rounded-md px-4 py-2 focus:ring-2 focus:ring-pink-500 focus:outline-none bg-gray-50 dark:bg-gray-700 dark:text-white"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 dark:border-gray-700 rounded-md px-4 py-2 focus:ring-2 focus:ring-pink-500 focus:outline-none bg-gray-50 dark:bg-gray-700 dark:text-white"
            />
          </div>

          {/* Mobile Number */}
          <div>
            <label
              htmlFor="mobile"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Mobile Number
            </label>
            <input
              type="tel"
              id="mobile"
              placeholder="Enter your mobile number"
              className="w-full border border-gray-300 dark:border-gray-700 rounded-md px-4 py-2 focus:ring-2 focus:ring-pink-500 focus:outline-none bg-gray-50 dark:bg-gray-700 dark:text-white"
            />
          </div>

          {/* Service Selection */}
          <div>
            <label
              htmlFor="service"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Service Required
            </label>
            <select
              id="service"
              className="w-full border border-gray-300 dark:border-gray-700 rounded-md px-4 py-2 focus:ring-2 focus:ring-pink-500 focus:outline-none bg-gray-50 dark:bg-gray-700 dark:text-white"
            >
              <option value="">Select a service</option>
              <option value="SEO">SEO</option>
              <option value="SMO">SMO</option>
              <option value="Web Design">Web Design</option>
              <option value="Graphic Design">Graphic Design</option>
              <option value="PPC">PPC</option>
              <option value="SMM">SMM</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Additional Details
            </label>
            <textarea
              id="message"
              rows="4"
              placeholder="Tell us more about your project..."
              className="w-full border border-gray-300 dark:border-gray-700 rounded-md px-4 py-2 focus:ring-2 focus:ring-pink-500 focus:outline-none bg-gray-50 dark:bg-gray-700 dark:text-white"
            ></textarea>
          </div>

          {/* reCAPTCHA */}
          <div className="flex justify-center">
            <ReCAPTCHA
              sitekey="6Lc66iAsAAAAABQyyZwtjq_j4oxSaSzmj2AANpSl" // ✅ Your site key
              onChange={(token) => setCaptchaToken(token)}
              theme="light"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full md:w-auto bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold px-6 py-3 rounded-md shadow-lg hover:opacity-90 transition duration-300"
            >
              Request Quote
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

export default GetQuote;
