import React from "react";

const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className="sticky top-0 z-50 bg-pink-100/80 backdrop-blur-xl  rounded-b-2xl">
            <div className="max-w-4xl w-full mx-auto flex items-center justify-between px-6 py-4">
                <span className="text-3xl font-extrabold tracking-wide flex items-center gap-2">
                    <span className="bg-gradient-to-r from-pink-300 via-pink-500 to-pink-200 bg-clip-text text-transparent drop-shadow-lg">🍰 Cake on Cake</span>
                </span>
                <ul className="flex gap-6">
                    {navItems.map((item) => (
                        <li key={item.label}>
                            <a
                                href={item.href}
                                onClick={e => handleNavClick(e, item.href)}
                                className="px-6 py-2 rounded-full font-semibold text-pink-700 hover:text-pink-900 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-pink-300"
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
