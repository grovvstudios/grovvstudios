// Standardized Imports (PascalCase)
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import Testimonials from "./components/Testimonials"; // Ensure file is Testimonials.tsx
import { Process } from "./components/Process";
import { Services } from "./components/Services";     // Ensure file is Services.tsx
import { VideoShowcase } from "./components/VideoShowcase"; 
import { Founders } from "./components/Founders";     
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import SectionDivider from "./components/SectionDivider"; 

// Import the new background system
import { PremiumBackground } from "./components/PremiumBackground";

export default function App() {
  return (
    // Base styles: Off-white background, dark text, purple selection color
    <div className="min-h-screen relative overflow-hidden bg-slate-50 text-gray-900 selection:bg-purple-200 selection:text-purple-900">
      
      {/* The Living, Breathing Background */}
      <PremiumBackground />

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
