import { useEffect, useState } from "react";

// Standardized Imports (PascalCase)
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import Testimonials from "./components/testimonials"; // Ensure file is Testimonials.tsx
import { Process } from "./components/Process";
import { Services } from "./components/services";     // Ensure file is Services.tsx
import { VideoShowcase } from "./components/VideoShowcase"; 
import { Founders } from "./components/Founders";     // The new Founders section
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import SectionDivider from "./components/SectionDivider"; // The fixed visible divider

function ParallaxDots() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    // Added passive: true for better scroll performance
    window.addEventListener("scroll", handleScroll, { passive: true });
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
          
          {/* 1. HERO */}
          <section id="hero" className="relative">
            <Hero />
          </section>
          
          <SectionDivider />

          {/* 2. TESTIMONIALS */}
          <section id="testimonials" className="relative scroll-mt-24">
            <Testimonials />
          </section>

          <SectionDivider />

          {/* 3. PROCESS */}
          <section id="process" className="relative scroll-mt-24">
            <Process />
          </section>

          <SectionDivider />

          {/* 4. SERVICES (Portfolio) */}
          <section id="services" className="relative scroll-mt-24">
            <Services />
          </section>

          <SectionDivider />

          {/* 5. WORK (Videos) */}
          <section id="work" className="relative scroll-mt-24">
            <VideoShowcase /> 
          </section>

          <SectionDivider />

          {/* 6. FOUNDERS */}
          <section id="founders" className="relative scroll-mt-24">
             <Founders />
          </section>

          <SectionDivider />

          {/* 7. CONTACT */}
          <section id="contact" className="relative scroll-mt-24">
            <Contact />
          </section>

          <SectionDivider />
        </main>
        <Footer />
      </div>
    </div>
  );
}
