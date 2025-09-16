import React from "react";
import { Instagram, Facebook, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
  <footer className="bg-pink-900 py-10 px-4 shadow-2xl">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Branding */}
        <div className="flex flex-col items-start justify-center">
          <span className="text-3xl font-extrabold text-pink-100 mb-2 tracking-tight">CakeOnCake</span>
          <span className="text-base text-pink-200 font-medium mb-4">Making every celebration sweeter!</span>
          <div className="flex gap-4 mt-2">
            <a href="https://instagram.com" target="_blank" rel="noopener" className="bg-pink-800 rounded-full p-2 shadow hover:bg-pink-700 transition">
              <Instagram className="w-6 h-6 text-pink-200" />
            </a>
            <a href="https://www.facebook.com/share/1K9PZ6EGu5/?mibextid=wwXIfr" target="_blank" rel="noopener" className="bg-pink-800 rounded-full p-2 shadow hover:bg-pink-700 transition">
              <Facebook className="w-6 h-6 text-pink-200" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-pink-100 mb-4 text-lg">Quick Links</h3>
          <ul className="space-y-2 text-base text-pink-200">
            <li><a href="#" className="hover:text-pink-300 transition">Home</a></li>
            <li><a href="#gallery" className="hover:text-pink-300 transition">Gallery</a></li>
            <li><a href="#about" className="hover:text-pink-300 transition">About Us</a></li>
            <li><a href="#contact" className="hover:text-pink-300 transition">Contact</a></li>
            <li><a href="#" className="hover:text-pink-300 transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-pink-300 transition">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="font-bold text-pink-100 mb-4 text-lg">Categories</h3>
          <ul className="space-y-2 text-base text-pink-200">
            <li>Fruit Cakes</li>
            <li>Chocolate Cakes</li>
            <li>Birthday Cakes</li>
            <li>Custom Cakes</li>
            <li>Specialty Cakes</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-bold text-pink-100 mb-4 text-lg">Contact Us</h3>
          <div className="flex items-center gap-2 mb-2 text-pink-200">
            <Phone className="w-5 h-5 text-pink-300" />
            <span>+94 (74) 040 0802</span>
          </div>
          <div className="flex items-center gap-2 mb-2 text-pink-200">
            <Mail className="w-5 h-5 text-pink-300" />
            <span>sandeepaniimasha1998@gmail.com</span>
          </div>
          <div className="flex items-center gap-2 mb-2 text-pink-200">
            <span className="font-semibold">Hours:</span>
            <span>08:00 AM - 10:00 PM</span>
          </div>
          <div className="flex items-center gap-2 mb-2 text-pink-200">
            <span className="font-semibold">Location:</span>
            <span>No.550,Pahalagama,Thiththawella</span>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 pt-6 text-center text-base text-pink-200 border-t border-pink-700">
        &copy; 2025 CakeOnCake. All rights reserved.
      </div>
    </footer>
  );
}
