import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Gallery from "../sections/Gallery";
import Contact from "../sections/Contact";

export default function Home() {
  return (
    <>
      {/* <Navbar /> removed, now only in Hero section */}
      <main className="bg-gradient-to-br from-pink-50 via-white to-pink-100 min-h-screen">
        <Hero />
        <About />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
