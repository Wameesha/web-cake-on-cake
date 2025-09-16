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
        <nav className="sticky top-0 z-50 bg-pink-100/80 backdrop-blur-xl rounded-b-2xl shadow-sm">
            <div className="max-w-4xl w-full mx-auto flex items-center justify-between px-6 py-3">
                <div className="flex flex-col items-center gap-0">
                    <img
                        src="/images/cake-logo2.png"
                        alt="CakeOnCake Logo"
                        className="h-24 w-24 object-contain"
                    />
                </div>
                <ul className="flex gap-4 bg-white/60 rounded-full px-4 py-2 shadow-sm">
                    {navItems.map((item) => (
                        <li key={item.label}>
                            <a
                                href={item.href}
                                onClick={e => handleNavClick(e, item.href)}
                                className="px-4 py-2 rounded-full font-semibold text-pink-700 hover:text-pink-900 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-pink-300"
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
