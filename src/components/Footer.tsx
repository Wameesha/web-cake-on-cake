import React from "react";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-pink-500 via-pink-400 to-pink-300 text-white py-16 rounded-none shadow-inner w-full">
            <div className="max-w-6xl mx-auto flex flex-col items-center">
                <p className="text-sm opacity-80">&copy; {new Date().getFullYear()} Cake on Cake. All rights reserved.</p>
                <div className="flex gap-6 mt-2">
                    <a href="#home" className="hover:text-pink-100 transition font-medium">Home</a>
                    <a href="#about" className="hover:text-pink-100 transition font-medium">About</a>
                    <a href="#gallery" className="hover:text-pink-100 transition font-medium">Gallery</a>
                    <a href="#contact" className="hover:text-pink-100 transition font-medium">Contact</a>
                </div>
            </div>
        </footer>
    );
}
