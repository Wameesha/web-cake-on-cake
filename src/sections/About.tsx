
"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function About() {
    // Cake slideshow logic for right column
    const cakes = [
        { src: "/images/cake1.png", alt: "Cake 1" },
        { src: "/images/cake2.png", alt: "Cake 2" },
        { src: "/images/cake3.png", alt: "Cake 3" },
        { src: "/images/cake4.png", alt: "Cake 4" },
        { src: "/images/cake5.png", alt: "Cake 5" },
    ];
    const [current, setCurrent] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % cakes.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [cakes.length]);

    return (
        <main className="min-h-screen bg-gradient-to-br from-[#fff0f6] via-[#ffe5ec] to-[#f8bbd0] flex flex-col items-center justify-center py-8 px-2">
            <motion.section
                id="about"
                className="max-w-screen-xl w-full grid grid-cols-1 md:grid-cols-[2fr_2fr_1fr] gap-8 items-center"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
                {/* Column 1: Owner Image */}
                <motion.div
                    className="flex justify-start"
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <img
                        src="/images/about.png"
                        alt="Owner of CakeOnCake"
                        className="rounded-2xl w-full max-w-2xl"
                    />
                </motion.div>

                {/* Column 2: Description */}
                <motion.div
                    className="flex flex-col justify-center text-center md:text-left"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <h2 className="text-3xl font-bold text-pink-700 mb-4">Meet the Owner</h2>
                    <p className="text-lg text-gray-800 leading-relaxed mb-6">
                        Hi, I&apos;m <span className="font-semibold text-pink-600">Wameesha</span>,
                        founder of <span className="font-semibold">CakeOnCake</span>! 🎂
                        My love for baking and creativity led me to start this journey,
                        where every cake is a <span className="italic">work of art</span>
                        and a labor of love. I believe in making every celebration sweeter
                        and more memorable.
                    </p>
                    <div className="flex flex-wrap gap-3 mt-2">
                        <span className="inline-block bg-pink-100 text-pink-700 text-base font-medium px-4 py-2 rounded-full shadow">✨ Passionate baker & cake artist</span>
                        <span className="inline-block bg-pink-100 text-pink-700 text-base font-medium px-4 py-2 rounded-full shadow">🎨 Personalized service for every customer</span>
                        <span className="inline-block bg-pink-100 text-pink-700 text-base font-medium px-4 py-2 rounded-full shadow">👩‍👩‍👧 Family-owned & operated</span>
                    </div>
                </motion.div>

                {/* Column 3: Cake Image - Animated Slideshow */}
                <motion.div
                    className="flex justify-center items-center"
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <motion.img
                        key={cakes[current].src}
                        src={cakes[current].src}
                        alt={cakes[current].alt}
                        className="rounded-2xl w-full max-w-lg"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    />
                </motion.div>
            </motion.section>
        </main>
    );
}
