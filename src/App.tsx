// Standardized Imports (PascalCase)
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
// FIX: PascalCase to match file name (fixes Vercel build error)
import Testimonials from "./components/testimonials"; 
import { Process } from "./components/Process";
// FIX: PascalCase to match file name
import { Services } from "./components/services";     
import { VideoShowcase } from "./components/VideoShowcase"; 
import { Founders } from "./components/Founders";     
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import SectionDivider from "./components/SectionDivider"; 

// Import the new background system
import { PremiumBackground } from "./components/PremiumBackground";

export default function App() {
  return (
    // FIX: Removed 'bg-slate-50'. 
    // We want the main container transparent so PremiumBackground shows through.
    <div className="min-h-screen relative overflow-hidden text-gray-900 selection:bg-purple-200 selection:text-purple-900">
      
      {/* The Living, Breathing Background */}
      <PremiumBackground />

      <div className="relative z-10">
        <Navbar />
        <main id="main">
          
          {/* 1. HERO */}
          <section id="hero" className="relative">
            <Hero />
          </section>

          <SectionAnchor />
          <SectionDivider />

           {/* 4. SERVICES (Portfolio) */}
          <section id="services" className="relative scroll-mt-24">
            <Services />
          </section>
     
          <SectionDivider />

          {/* 3. PROCESS */}
          <section id="process" className="relative scroll-mt-24">
            <Process />
          </section>

          <SectionDivider />
          {/* 2. TESTIMONIALS */}
          <section id="testimonials" className="relative scroll-mt-24">
            <Testimonials />
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

        </main>
        <Footer />
      </div>
    </div>
  );
}
