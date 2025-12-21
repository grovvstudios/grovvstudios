// FILE: src/App.tsx
import { useEffect, useState } from "react";
import { Navbar } from "./components/ui/Navbar";
import { Hero } from "./components/ui/Hero";
import Testimonials from "./components/ui/testimonials";
import { Process } from "./components/ui/Process";

// 👇 Updated import for your services/portfolio
import { Portfolio } from "./components/ui/services"; 

// 👇 Updated import for your video showcase
import { VideoShowcase } from "./components/VideoShowcase"; 

import { Contact } from "./components/ui/Contact";
import { Footer } from "./components/ui/Footer";

function ParallaxDots() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ... (Keep your existing dots logic here)
  return <div className="fixed inset-0 pointer-events-none -z-10" />;
}

export default function App() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <ParallaxDots />

      <div className="relative z-10">
        <Navbar />
        <main id="main">
          
          <section id="hero">
            <Hero />
          </section>
          
          <div className="section-divider" />

          <section id="testimonials" className="scroll-mt-24">
            <Testimonials />
          </section>

          <div className="section-divider" />

          <section id="process" className="scroll-mt-24">
            <Process />
          </section>

          <div className="section-divider" />

          {/* This renders the services.tsx component */}
          <section id="services" className="scroll-mt-24">
            <Portfolio />
          </section>

          <div className="section-divider" />

          {/* This renders the VideoShowcase.tsx component */}
          <section id="work" className="scroll-mt-24">
            <VideoShowcase /> 
          </section>

          <div className="section-divider" />

          <section id="contact" className="scroll-mt-24">
            <Contact />
          </section>

          <div className="section-divider" />
        </main>
        <Footer />
      </div>
    </div>
  );
}
