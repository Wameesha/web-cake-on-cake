"use client";

import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
  <section id="contact" className="w-full min-h-[100vh] bg-gradient-to-br from-[#fff0f6] via-[#ffe5ec] to-[#f8bbd0] flex items-center justify-center">
      {/* Contact Info + Form */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 max-w-screen-2xl w-full mx-auto py-16 px-10 gap-16"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Left Side - Contact Info */}
        <motion.div
          className="flex flex-col justify-center gap-5"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold text-pink-700">Contact Us</h2>
          <p className="text-pink-900 leading-relaxed text-xl">
            We&apos;d love to hear from you! Whether you have questions about our products, 
            need assistance, or want to request a quote – we’re here to help.
          </p>
          <div className="flex items-center gap-3 text-pink-700 text-lg">
            <MapPin className="w-5 h-5 text-pink-600" />
            <span>No. 550, Pahalagama, Thiththawella</span>
          </div>
          <div className="flex items-center gap-3 text-pink-700">
            <Phone className="w-5 h-5 text-pink-600" />
            <span>+94 (74) 040 0802</span>
          </div>
          <div className="flex items-center gap-3 text-pink-700">
            <Mail className="w-5 h-5 text-pink-600" />
            <span>sandeepaniimasha1998@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 text-pink-700">
            <Clock className="w-5 h-5 text-pink-600" />
            <span>Everyday Opening Time: 08:00 AM - 10:00 PM</span>
          </div>
  </motion.div>

        {/* Right Side - Contact Form */}
        <motion.div
          className="relative bg-white shadow-md rounded-bl-full rounded-tl-full p-16 overflow-hidden"
          style={{backgroundImage: 'url(/images/cake3.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="absolute inset-0 bg-white bg-opacity-80 z-0"></div>
          <div className="relative z-10 w-full h-full flex flex-col justify-center items-center">
          <form className="flex flex-col gap-5 w-full max-w-lg mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="border border-gray-300 rounded-lg px-4 py-3 focus:border-pink-500 focus:outline-none"
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border border-gray-300 rounded-lg px-4 py-3 focus:border-pink-500 focus:outline-none"
                required
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 rounded-lg px-4 py-3 focus:border-pink-500 focus:outline-none"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="border border-gray-300 rounded-lg px-4 py-3 focus:border-pink-500 focus:outline-none"
              required
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="border border-gray-300 rounded-lg px-4 py-3 focus:border-pink-500 focus:outline-none resize-none"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-pink-600 text-white py-3 rounded-lg font-semibold hover:bg-pink-700 transition-all"
            >
              Submit
            </button>
          </form>
        </div>
      </motion.div>
    </motion.div>
  </section>
  );
}
