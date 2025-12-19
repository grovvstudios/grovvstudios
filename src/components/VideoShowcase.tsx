import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import Testimonials from "./components/testimonials";
import { Process } from "./components/Process";
import { Portfolio } from "./components/Portfolio";
import { VideoShowcase } from "./components/VideoShowcase"; // <--- IMPORT ADDED BACK
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
          
          {/* 1. HERO */}
          <section id="hero">
            <Hero />
          </section>
          
          <div className="section-divider" />

          {/* 2. TESTIMONIALS (Linked to #testimonials) */}
          <section id="testimonials" className="scroll-mt-24">
            <Testimonials />
          </section>

          <div className="section-divider" />

          {/* 3. PROCESS (Linked to #process) */}
          <section id="process" className="scroll-mt-24">
            <Process />
          </section>

          <div className="section-divider" />

          {/* 4. SERVICES / PORTFOLIO (Linked to #services) */}
          <section id="services" className="scroll-mt-24">
            <Portfolio />
          </section>

          <div className="section-divider" />

          {/* 5. WORK / VIDEOS (Linked to #work) */}
          <section id="work" className="scroll-mt-24">
            <VideoShowcase /> 
          </section>

          <div className="section-divider" />

          {/* 6. CONTACT (Linked to #contact) */}
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
