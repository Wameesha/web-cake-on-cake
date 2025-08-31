
'use client';
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

// Animated cake toppers background
const colors = ["#f8bbd0", "#ffe5ec", "#ffb6c1", "#fff0f6", "#fce4ec", "#ffd6e0", "#f9a1bc"];
function getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

import { useState } from "react";
function CakeToppersBackground() {
    const [balls, setBalls] = useState<Array<{
        size: number;
        color: string;
        top: number;
        left: number;
        duration: number;
        delay: number;
        x: number;
        y: number;
    }>>([]);
    useEffect(() => {
        const arr = Array.from({ length: 18 }).map(() => ({
            size: getRandomInt(18, 38),
            color: colors[getRandomInt(0, colors.length - 1)],
            top: getRandomInt(0, 80),
            left: getRandomInt(0, 90),
            duration: getRandomInt(6, 14),
            delay: Math.random() * 2,
            x: getRandomInt(-120, 120),
            y: getRandomInt(-80, 80)
        }));
        setBalls(arr);
    }, []);
    return (
        <div className="absolute inset-0 pointer-events-none z-10">
            {balls.map((ball, i) => (
                <motion.div
                    key={i}
                    initial={{ x: 0, y: 0, opacity: 0.7 }}
                    animate={{ x: ball.x, y: ball.y, opacity: 0.9 }}
                    transition={{ duration: ball.duration, repeat: Infinity, repeatType: "reverse", delay: ball.delay }}
                    style={{
                        position: "absolute",
                        top: `${ball.top}%`,
                        left: `${ball.left}%`,
                        width: `${ball.size}px`,
                        height: `${ball.size}px`,
                        borderRadius: "50%",
                        background: ball.color,
                        boxShadow: "0 2px 8px 0 rgba(0,0,0,0.08)",
                        zIndex: 10,
                    }}
                />
            ))}
        </div>
    );
}
export default function Hero() {
    useEffect(() => {
        let scrolled = false;
        function handleScroll() {
            if (!scrolled && window.scrollY > 50) {
                scrolled = true;
                const aboutSection = document.getElementById("about");
                if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: "smooth" });
                }
                window.removeEventListener("scroll", handleScroll);
            }
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <section className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-pink-100">
            <div className="absolute top-0 left-0 w-full z-20">
                <Navbar />
            </div>
            <CakeToppersBackground />
            {/* Hero Section */}
            <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-20 relative z-10">
                {/* Left Content */}
                <div className="md:w-1/2 text-center md:text-left">
                    <motion.span
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="inline-flex items-center gap-2 bg-pink-100 text-pink-700 font-semibold px-4 py-1 rounded-full shadow-sm mb-4 text-base"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-pink-400">
                            <path d="M10 2c.552 0 1 .448 1 1v2h2V3a1 1 0 112 0v2h1a1 1 0 011 1v2.382a1 1 0 01-.553.894l-7 3.5a1 1 0 01-.894 0l-7-3.5A1 1 0 012 8.382V6a1 1 0 011-1h1V3a1 1 0 112 0v2h2V3c0-.552.448-1 1-1zm-7 8.618l7 3.5 7-3.5V16a2 2 0 01-2 2H5a2 2 0 01-2-2V10.618z" />
                        </svg>
                        Creating Memorable Cakes for Every Celebration
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-5xl md:text-6xl font-extrabold text-pink-900 leading-tight mb-6"
                    >
                        Delicious Cakes, <br /> Crafted for Every Occasion
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="text-lg text-gray-700 mb-8"
                    >
                        Indulge in our freshly baked, premium cakes made from the finest ingredients. <br />
                        Perfect for birthdays, weddings, or any special moment. <br />
                        Taste the difference with every bite.
                    </motion.p>
                    {/* Buttons */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.7 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                    >
                        <button
                            type="button"
                            className="border border-pink-600 text-pink-600 px-6 py-3 rounded-full hover:bg-pink-50 transition"
                            onClick={() => {
                                const gallerySection = document.getElementById("gallery");
                                if (gallerySection) {
                                    gallerySection.scrollIntoView({ behavior: "smooth" });
                                }
                            }}
                        >
                            Browse Our Cakes
                        </button>
                    </motion.div>
                </div>
                {/* Right Image */}
                <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center items-center">
                    <motion.img
                        src="/images/hero1.png"
                        alt="Hero Cake"
                        className="rounded-lg w-full h-[28rem] object-cover"
                        style={{ maxWidth: "600px" }}
                        initial={{ opacity: 0, scale: 0.8, x: 100 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    />
                </div>
            </div>
        </section>
    );
}
// ...existing code...
