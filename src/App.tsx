import { useEffect, useState } from "react";

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import Testimonials from "./components/testimonials";
import { Process } from "./components/Process";
import { Portfolio } from "./components/Portfolio";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

/** 
 * PURE WHITE BACKGROUND + SMALL BLURRED CIRCLES (parallax on scroll)
 */
function ParallaxDots() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Subtle movement — premium & clean
  const p1 = scrollY * -0.10;
  const p2 = scrollY * -0.05;
  const p3 = scrollY * -0.08;
  const p4 = scrollY * -0.04;
  const p5 = scrollY * -0.07;

  return (
    <div className="fixed inset-0 pointer-events-none -z-10">
      {/* Small blurred circles */}
      <div
        style={{
          position: "absolute",
          top: 80 + p1,
          left: 50,
          width: 180,
          height: 180,
          borderRadius: "50%",
          background: "rgba(147,197,253,0.5)",
          filter: "blur(70px)",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 260 + p2,
          right: 120,
          width: 150,
          height: 150,
          borderRadius: "50%",
          background: "rgba(167,139,250,0.4)",
          filter: "blur(75px)",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 520 + p3,
          left: "50%",
          transform: "translateX(-50%)",
          width: 220,
          height: 220,
          borderRadius: "50%",
          background: "rgba(191,219,254,0.45)",
          filter: "blur(80px)",
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: 180 + p4,
          left: 30,
          width: 160,
          height: 160,
          borderRadius: "50%",
          background: "rgba(129,140,248,0.45)",
          filter: "blur(70px)",
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: 80 + p5,
          right: 100,
          width: 190,
          height: 190,
          borderRadius: "50%",
          background: "rgba(244,114,182,0.4)",
          filter: "blur(85px)",
        }}
      />
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* White + small moving bluish circles */}
      <ParallaxDots />

      <div className="relative z-10">
        <Navbar />
        
        {/* CHANGE 1: Use <main> correctly (you already did this, which is great!) */}
        <main id="main">
          
          {/* Hero is fine here, but the H1 tag is INSIDE the Hero component */}
          <Hero />

          <div className="section-divider" />

          {/* CHANGE 2: Use <section> instead of <div> */}
          <section id="testimonials">
            <Testimonials />
          </section>

          <div className="section-divider" />

          {/* CHANGE 3: Wrap Process in a section */}
          <section id="process">
            <Process />
          </section>
          
          <div className="section-divider" />

          {/* CHANGE 4: Wrap Portfolio in a section */}
          <section id="portfolio">
            <Portfolio />
          </section>

          <div className="section-divider" />

          {/* CHANGE 5: Wrap Contact in a section */}
          <section id="contact">
            <Contact />
          </section>

          <div className="section-divider" />
        </main>

        <Footer />
      </div>
    </div>
  );
}
