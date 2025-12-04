import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";

function GetQuote() {
  const [captchaToken, setCaptchaToken] = useState(null);
  const [isSending, setIsSending] = useState(false);
  const formRef = useRef();
  const generateOTP = () =>
    Math.floor(100000 + Math.random() * 900000).toString();

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
        alert("✅ Quote submitted and sent to your email!");
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

  return (
    <section className="get-quote py-20 ">
      <div className="container mx-auto px-6 max-w-4xl">
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

        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white dark:bg-gray-800 shadow-2xl rounded-3xl p-8 space-y-6"
        >
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
              name="name"
              required
              placeholder="Enter your name"
              className="w-full border border-gray-300 dark:border-gray-700 rounded-md px-4 py-2 focus:ring-2 focus:ring-pink-500 focus:outline-none bg-gray-50 dark:bg-gray-700 dark:text-white"
            />
          </div>

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
              name="email"
              required
              placeholder="Enter your email"
              className="w-full border border-gray-300 dark:border-gray-700 rounded-md px-4 py-2 focus:ring-2 focus:ring-pink-500 focus:outline-none bg-gray-50 dark:bg-gray-700 dark:text-white"
            />
          </div>

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
              name="mobile"
              required
              placeholder="Enter your mobile number"
              className="w-full border border-gray-300 dark:border-gray-700 rounded-md px-4 py-2 focus:ring-2 focus:ring-pink-500 focus:outline-none bg-gray-50 dark:bg-gray-700 dark:text-white"
            />
          </div>

          <div>
            <label
              htmlFor="service"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Service Required
            </label>
            <select
              id="service"
              name="service"
              required
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

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Additional Details
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              placeholder="Tell us more about your project..."
              className="w-full border border-gray-300 dark:border-gray-700 rounded-md px-4 py-2 focus:ring-2 focus:ring-pink-500 focus:outline-none bg-gray-50 dark:bg-gray-700 dark:text-white"
            ></textarea>
          </div>

          <input
            type="hidden"
            name="time"
            value={new Date().toLocaleString()}
          />

          <div className="flex justify-center">
            <ReCAPTCHA
              sitekey="6Lc66iAsAAAAABQyyZwtjq_j4oxSaSzmj2AANpSl"
              onChange={(token) => setCaptchaToken(token)}
              theme="light"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={isSending}
              className={`w-full md:w-auto bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold px-6 py-3 rounded-md shadow-lg transition duration-300 ${
                isSending ? "opacity-50 cursor-not-allowed" : "hover:opacity-90"
              }`}
            >
              {isSending ? "Sending..." : "Request Quote"}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

export default GetQuote;
