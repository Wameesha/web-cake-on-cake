"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";


const trendingCakes = [
    { src: "/images/hero1.png", alt: "Classic Cake" },
    { src: "/images/cake1.png", alt: "Chocolate Cake" },
    { src: "/images/cake2.png", alt: "Wedding Cake" },
    { src: "/images/cake4.png", alt: "Birthday Cake" },
    { src: "/images/cake5.png", alt: "Special Cake" }
];
const cakeCards = [
    { src: "/images/hero1.png", alt: "Strawberry Cake", price: "Rs. 25", category: "Fruit" },
    { src: "/images/cake1.png", alt: "Chocolate Cake", price: "Rs. 30", category: "Chocolate" },
    { src: "/images/hero1.png", alt: "Vanilla Cake", price: "Rs. 22", category: "Vanilla" },
    { src: "/images/cake2.png", alt: "Custom Cake", price: "Rs. 35", category: "Custom" },
    { src: "/images/cake3.png", alt: "Red Velvet Cake", price: "Rs. 28", category: "Velvet" },
    { src: "/images/cake4.png", alt: "Birthday Cake", price: "Rs. 32", category: "Birthday" },
    { src: "/images/cake5.png", alt: "Special Cake", price: "Rs. 40", category: "Special" },
    { src: "/images/sample-cake.jpg", alt: "Berry Blast", price: "Rs. 27", category: "Fruit" },
];

export default function Gallery() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const categories = ["All", ...Array.from(new Set(cakeCards.map(card => card.category)))];
    const [centerIdx, setCenterIdx] = useState(1);
    // Show cakes: left, center, right
    const getVisibleCakes = () => {
        const left = (centerIdx - 1 + trendingCakes.length) % trendingCakes.length;
        const center = centerIdx % trendingCakes.length;
        const right = (centerIdx + 1) % trendingCakes.length;
        return [left, center, right];
    };
    useEffect(() => {
        const interval = setInterval(() => {
            setCenterIdx((prev) => (prev + 1) % trendingCakes.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);
    const cakeRef = useRef<HTMLImageElement>(null);
    useEffect(() => {
        let angle = 0;
        const interval = setInterval(() => {
            angle = (angle + 1) % 360;
            if (cakeRef.current) {
                cakeRef.current.style.transform = `rotateY(${angle}deg)`;
            }
        }, 30);
        return () => clearInterval(interval);
    }, []);

    return (
        <main className="min-h-screen bg-gradient-to-br from-[#fff0f6] via-[#ffe5ec] to-[#f8bbd0] flex flex-col items-center py-16 px-4">
            <section className="max-w-7xl w-full mx-auto">
                <h2 className="text-4xl font-bold text-pink-700 mb-8 text-center">Cake Gallery</h2>

                {/* Section 1: Recent Order with 360 Cake */}
                <div className="mb-16 w-full min-h-[60vh] flex flex-col items-center justify-center">
                    <h3 className="text-4xl font-bold text-pink-600 mb-10">Recent Order</h3>
                    <div className="flex flex-row items-center justify-center gap-16 w-full">
                        <div className="w-[32rem] h-[32rem] relative flex items-center justify-center">
                            <img
                                ref={cakeRef}
                                src="/images/hero1.png"
                                alt="Recent Order Cake"
                                className="w-full h-full object-contain drop-shadow-2xl rounded-2xl"
                            />
                        </div>
                        <div className="w-[32rem] h-[32rem] relative flex items-center justify-center">
                            <div className="bg-white bg-opacity-90 px-12 py-10 rounded-2xl shadow-2xl w-full h-full flex flex-col justify-center items-center">
                                <h3 className="text-2xl font-bold mb-4 text-pink-700 text-center">Chocolate Dream Cake</h3>
                                <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center">A decadent chocolate cake with layers of rich ganache, topped with fresh berries. Custom made for a birthday celebration.</p>
                                <div className="border-t border-pink-200 pt-4 mt-4 w-full">
                                    <span className="block text-pink-600 font-semibold mb-2 text-center">Customer Review</span>
                                    <p className="text-base text-gray-800 italic text-center">“Absolutely delicious! The cake was moist, rich, and beautifully decorated. Everyone at the party loved it. Will definitely order again!”<br />– Sarah K.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 2: Trending Cakes */}
                <div className="mb-16 w-full min-h-[80vh] flex flex-col items-center justify-center">
                    <h3 className="text-4xl font-bold text-pink-600 mb-20">Trending Cakes</h3>
                    <div className="w-full flex flex-row items-end justify-center gap-12 relative" style={{ minHeight: "340px" }}>
                        {getVisibleCakes().map((idx, pos) => (
                            <motion.div
                                key={idx}
                                initial={{
                                    scale: pos === 1 ? 1.2 : 1,
                                    x: pos === 0 ? -100 : pos === 2 ? 100 : 0,
                                    zIndex: pos === 1 ? 2 : 1
                                }}
                                animate={{
                                    scale: pos === 1 ? 1.2 : 1,
                                    x: pos === 0 ? -180 : pos === 2 ? 180 : 0,
                                    zIndex: pos === 1 ? 2 : 1
                                }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                className={
                                    pos === 1
                                        ? "flex flex-col items-center justify-center w-[22rem] h-[30rem]"
                                        : "flex flex-col items-center justify-center w-[16rem] h-[20rem]"
                                }
                                style={{ position: "absolute", left: `calc(50% - ${pos === 1 ? "11rem" : pos === 0 ? "20rem" : "-20rem"})` }}
                            >
                                <img
                                    src={trendingCakes[idx].src}
                                    alt={trendingCakes[idx].alt}
                                    className={pos === 1 ? "w-full h-80 mb-4" : "w-full h-48 mb-4"}
                                />
                                <span className={pos === 1 ? "text-3xl font-extrabold text-pink-600 mb-2" : "text-xl font-bold text-pink-600 mb-2"}>{trendingCakes[idx].alt}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Section 3: Cake Cards */}
                <div className="mb-16 w-full min-h-[80vh] flex flex-col items-center justify-center">
                    <h3 className="text-3xl font-bold text-pink-600 mb-8">Cake Cards</h3>
                    {/* Category Navbar */}
                    <nav className="mb-10 flex flex-row gap-4 justify-center w-full">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                className={`px-6 py-2 rounded-full font-semibold border-2 transition-all duration-200 ${selectedCategory === cat ? "bg-pink-600 text-white border-pink-600" : "bg-white text-pink-600 border-pink-200 hover:bg-pink-50"}`}
                                onClick={() => setSelectedCategory(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </nav>
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
                        {cakeCards
                            .filter(card => selectedCategory === "All" || card.category === selectedCategory)
                            .map((cake, i) => (
                                <div key={i} className="rounded-2xl border-4 border-pink-200 flex flex-col items-center justify-center p-8 shadow-xl w-full h-[24rem]">
                                    <img
                                        src={cake.src}
                                        alt={cake.alt}
                                        className="rounded-2xl object-cover w-full h-48 mb-4"
                                    />
                                    <span className="text-xl font-bold text-pink-600 mb-2">{cake.alt}</span>
                                    <span className="text-lg font-bold text-pink-800 bg-pink-100 rounded-full px-4 py-1">{cake.price}</span>
                                </div>
                            ))}
                    </div>
                </div>

            </section>
        </main>

    );
    // Animated cake toppers background (hydration-safe)
    const colors = ["#f8bbd0", "#ffe5ec", "#ffb6c1", "#fff0f6", "#fce4ec", "#ffd6e0", "#f9a1bc"];
    function getRandomInt(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
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
}