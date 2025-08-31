
"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Animated floating squares background for About section
const topperColors = ["#f8bbd0", "#ffe5ec", "#ffb6c1", "#fff0f6", "#fce4ec", "#ffd6e0", "#f9a1bc", "#e0bbff", "#ffd700", "#c0e8d5"];
// SVG cake toppers (candles, hearts, stars, cherries)
const toppers = [
    (color: string) => (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="12" fill={color} /><rect x="14" y="8" width="4" height="12" rx="2" fill="#fff" /></svg>
    ),
    (color: string) => (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M16 6 L20 14 L28 16 L20 18 L16 26 L12 18 L4 16 L12 14 Z" fill={color} /></svg>
    ),
    (color: string) => (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><ellipse cx="16" cy="20" rx="8" ry="6" fill={color} /><circle cx="16" cy="12" r="4" fill="#fff" /></svg>
    ),
    (color: string) => (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M16 8 Q20 12 16 16 Q12 12 16 8 Z" fill={color} /><circle cx="16" cy="16" r="6" fill="#fff" /></svg>
    ),
    (color: string) => (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect x="10" y="10" width="12" height="12" rx="6" fill={color} /><rect x="14" y="14" width="4" height="4" rx="2" fill="#fff" /></svg>
    ),
];
function getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function AboutBackground() {
    const [items, setItems] = React.useState<Array<{
        topperIdx: number;
        color: string;
        top: number;
        left: number;
        duration: number;
        delay: number;
        x: number;
        y: number;
    }>>([]);
    React.useEffect(() => {
        const arr = Array.from({ length: 10 }).map(() => ({
            topperIdx: getRandomInt(0, toppers.length - 1),
            color: topperColors[getRandomInt(0, topperColors.length - 1)],
            top: getRandomInt(0, 80),
            left: getRandomInt(0, 90),
            duration: getRandomInt(10, 18),
            delay: Math.random() * 2,
            x: getRandomInt(-80, 80),
            y: getRandomInt(-40, 40)
        }));
        setItems(arr);
    }, []);
    return (
        <div className="absolute inset-0 pointer-events-none z-0">
            {items.map((item, i) => (
                <motion.div
                    key={i}
                    initial={{ x: 0, y: 0, opacity: 0.7 }}
                    animate={{ x: item.x, y: item.y, opacity: 0.9 }}
                    transition={{ duration: item.duration, repeat: Infinity, repeatType: "reverse", delay: item.delay }}
                    style={{
                        position: "absolute",
                        top: `${item.top}%`,
                        left: `${item.left}%`,
                        width: `64px`,
                        height: `64px`,
                        zIndex: 0,
                    }}
                >
                    {toppers[item.topperIdx](item.color)}
                </motion.div>
            ))}
        </div>
    );
}

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
    <main className="relative h-screen bg-gradient-to-br from-[#fff0f6] via-[#ffe5ec] to-[#f8bbd0] flex flex-col items-center justify-center py-8 px-0">
        <AboutBackground />
            <motion.section
                id="about"
                className="max-w-screen-2xl w-full grid grid-cols-1 md:grid-cols-[2fr_2fr_1fr] gap-8 items-center"
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
                        founder of <span className="font-semibold">CakeOnCake</span>!
                        My love for baking and creativity led me to start this journey,
                        where every cake is a <span className="italic">work of art</span>
                        and a labor of love. I believe in making every celebration sweeter
                        and more memorable.
                    </p>
                    <div className="flex flex-wrap gap-3 mt-2">
                        <span className="inline-block bg-pink-100 text-pink-700 text-base font-medium px-4 py-2 rounded-full shadow flex items-center gap-2">
                            {/* Star icon for Passionate baker & cake artist */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-pink-400"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 17.75L18.2 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.44 4.73L5.8 21z" /></svg>
                            Passionate baker & cake artist
                        </span>
                        <span className="inline-block bg-pink-100 text-pink-700 text-base font-medium px-4 py-2 rounded-full shadow flex items-center gap-2">
                            {/* Palette icon for Personalized service */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-pink-400"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2a10 10 0 100 20 4 4 0 004-4h-4a2 2 0 010-4h4a4 4 0 00-4-4z" /></svg>
                            Personalized service for every customer
                        </span>
                        <span className="inline-block bg-pink-100 text-pink-700 text-base font-medium px-4 py-2 rounded-full shadow flex items-center gap-2">
                            {/* Users icon for Family-owned & operated */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-pink-400"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a4 4 0 00-3-3.87M9 20h6M3 20h5v-2a4 4 0 013-3.87M16 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                            Family-owned & operated
                        </span>
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
