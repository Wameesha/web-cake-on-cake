"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Gallery from "../sections/Gallery";
import Contact from "../sections/Contact";
import { motion, useAnimation } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function Home() {
  // Refs for scroll animations
  const aboutRef = useRef(null);
  const galleryRef = useRef(null);
  const contactRef = useRef(null);
  const aboutInView = useInView(aboutRef, { once: false, margin: "-100px" });
  const galleryInView = useInView(galleryRef, { once: true, margin: "-100px" });
  const contactInView = useInView(contactRef, { once: true, margin: "-100px" });

  return (
    <>
      {/* <Navbar /> removed, now only in Hero section */}
  <main className="bg-gradient-to-br from-pink-50 via-white to-pink-100 min-h-screen">
        <Hero />
        <motion.div
          ref={aboutRef}
          initial={{ opacity: 0, y: 60 }}
          animate={aboutInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <About />
        </motion.div>
        <motion.section
          id="gallery"
          ref={galleryRef}
          initial={{ opacity: 0, y: 60 }}
          animate={galleryInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          <Gallery />
        </motion.section>
        <motion.div
          ref={contactRef}
          initial={{ opacity: 0, y: 60 }}
          animate={contactInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
        >
          <Contact />
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
