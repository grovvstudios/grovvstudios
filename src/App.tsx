import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import Testimonials from "./components/testimonials"; 
import { Process } from "./components/Process";
import { Services } from "./components/services";    
import { VideoShowcase } from "./components/VideoShowcase"; 
import { Founders } from "./components/Founders";     
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import SectionDivider from "./components/SectionDivider"; 
import { PremiumBackground } from "./components/PremiumBackground";

export default function App() {
  return (
    // 1. bg-[#0f172a]: Deep Dark Background.
    // 2. REMOVED 'text-white': This restores Black text on your White cards.
    // 3. REMOVED 'bg-slate-50': No more white flash.
    <div className="min-h-screen relative bg-[#0f172a]">
      
      {/* The Moving Background */}
      <PremiumBackground />

      <div className="relative z-10">
        <Navbar />
        
        <main id="main" className="flex flex-col">
          
          {/* HERO: Needs White text because it sits on the Dark Background */}
          <section id="hero" className="relative text-white">
            <Hero />
          </section>
          
          <SectionDivider />

          {/* TESTIMONIALS: Cards are White -> Text will be Black (Default) */}
          <section id="testimonials" className="relative scroll-mt-24">
            <Testimonials />
          </section>

          <SectionDivider />

          {/* PROCESS: Cards are White -> Text will be Black */}
          <section id="process" className="relative scroll-mt-24">
            <Process />
          </section>

          <SectionDivider />

          {/* SERVICES: Cards are White -> Text will be Black */}
          <section id="services" className="relative scroll-mt-24">
            <Services />
          </section>

          <SectionDivider />

          {/* WORK: Usually has dark overlays or videos, let's keep text white for headers if needed */}
          <section id="work" className="relative scroll-mt-24 text-white">
            <VideoShowcase /> 
          </section>

          <SectionDivider />

          {/* FOUNDERS: Cards are White -> Text will be Black */}
          <section id="founders" className="relative scroll-mt-24">
             <Founders />
          </section>

          <SectionDivider />

          {/* CONTACT: Usually sits on background, needs White text */}
          <section id="contact" className="relative scroll-mt-24 text-white">
            <Contact />
          </section>

          <SectionDivider />

        </main>
        <Footer />
      </div>
    </div>
  );
}
