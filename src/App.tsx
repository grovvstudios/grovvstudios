import { useEffect, useState } from "react";

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import Testimonials from "./components/testimonials";
import { Process } from "./components/Process";
import { Portfolio } from "./components/Portfolio";
import { VideoShowcase } from "./components/VideoShowcase"; // Ensure this is imported
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function ParallaxDots() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const p1 = scrollY * -0.10;
  const p2 = scrollY * -0.05;
  const p3 = scrollY * -0.08;
  const p4 = scrollY * -0.04;
  const p5 = scrollY * -0.07;

  return (
    <div className="fixed inset-0 pointer-events-none -z-10">
      <div style={{ position: "absolute", top: 80 + p1, left: 50, width: 180, height: 180, borderRadius: "50%", background: "rgba(147,197,253,0.5)", filter: "blur(70px)" }} />
      <div style={{ position: "absolute", top: 260 + p2, right: 120, width: 150, height: 150, borderRadius: "50%", background: "rgba(167,139,250,0.4)", filter: "blur(75px)" }} />
      <div style={{ position: "absolute", top: 520 + p3, left: "50%", transform: "translateX(-50%)", width: 220, height: 220, borderRadius: "50%", background: "rgba(191,219,254,0.45)", filter: "blur(80px)" }} />
      <div style={{ position: "absolute", bottom: 180 + p4, left: 30, width: 160, height: 160, borderRadius: "50%", background: "rgba(129,140,248,0.45)", filter: "blur(70px)" }} />
      <div style={{ position: "absolute", bottom: 80 + p5, right: 100, width: 190, height: 190, borderRadius: "50%", background: "rgba(244,114,182,0.4)", filter: "blur(85px)" }} />
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <ParallaxDots />

      <div className="relative z-10">
        <Navbar />
        <main id="main">
          <Hero />
          <div className="section-divider" />

          {/* 1. Services Section (Using Portfolio Component) */}
          <div id="services"> 
            <Portfolio />
          </div>
          <div className="section-divider" />

          {/* 2. Process Section */}
          <div id="process">
            <Process />
          </div>
          <div className="section-divider" />

          {/* 3. Work Section (Your New Videos) */}
          {/* Note: The ID is inside the component, but we can wrap it to be safe if needed. 
              Currently VideoShowcase has id="work" inside it. */}
          <VideoShowcase /> 
          <div className="section-divider" />

          {/* 4. Testimonials Section */}
          <div id="testimonials">
            <Testimonials />
          </div>
          <div className="section-divider" />

          {/* 5. Contact Section */}
          <Contact />
          <div className="section-divider" />
        </main>
        <Footer />
      </div>
    </div>
  );
}
