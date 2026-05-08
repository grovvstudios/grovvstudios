import { Download, Share2, ExternalLink, Clock, TrendingUp } from 'lucide-react';
import { useState } from 'react';

export default function RenaultCaseStudy() {
  const [copied, setCopied] = useState(false);

  const handleDownloadPDF = () => {
    const pdfContent = generatePDF();
    const blob = new Blob([pdfContent], { type: 'application/pdf' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Renault-Duster-Case-Study.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShareLinkedIn = () => {
    const text = `Just read this case study breaking down how Renault's Duster comeback created 108% growth in 60 days. Strategic positioning > product specs. Check it out:`;
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-orange-500/10 border border-orange-500/50 rounded-full mb-6">
              <span className="text-orange-400 text-sm font-semibold">CASE STUDY</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              How A Dead Brand Became Relevant Again
              <br />
              <span className="text-orange-400">In 60 Days</span>
            </h1>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Renault's Duster comeback is a masterclass in positioning over product specs. 
              Here's the strategic breakdown that created 108% growth.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={handleDownloadPDF}
                className="flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold transition-all duration-200"
              >
                <Download size={20} />
                Download PDF (7 Pages)
              </button>
              <button
                onClick={handleShareLinkedIn}
                className="flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-semibold transition-all duration-200"
              >
                <Share2 size={20} />
                Share on LinkedIn
              </button>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-orange-400">108%</div>
              <div className="text-sm text-slate-400">YoY Growth</div>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-orange-400">60 Days</div>
              <div className="text-sm text-slate-400">Launch Timeline</div>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-orange-400">₹10.49L</div>
              <div className="text-sm text-slate-400">Entry Price</div>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-orange-400">5 Trims</div>
              <div className="text-sm text-slate-400">Buyer Segments</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Section 1 */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-white mb-6">The Market Gap</h2>
          <p className="text-slate-300 mb-4">
            By 2024, the midsize SUV segment had crystallized into three clear positions:
          </p>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="text-orange-400 text-xl font-bold">•</div>
              <div>
                <p className="font-semibold text-white">Hyundai Creta</p>
                <p className="text-slate-400">Positioning: "The Premium Brand Choice"</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-orange-400 text-xl font-bold">•</div>
              <div>
                <p className="font-semibold text-white">Toyota Hyryder</p>
                <p className="text-slate-400">Positioning: "The Reliable Choice"</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-orange-400 text-xl font-bold">•</div>
              <div>
                <p className="font-semibold text-white">Skoda Kushaq</p>
                <p className="text-slate-400">Positioning: "The Engineering Choice"</p>
              </div>
            </div>
          </div>
          <div className="mt-6 p-4 bg-orange-500/10 border border-orange-500/30 rounded-lg">
            <p className="text-orange-300 font-semibold">
              But nobody answered: "Give me modern + practical + trustworthy + affordable."
            </p>
            <p className="text-slate-300 mt-2">That was the gap Renault found.</p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-white mb-6">The Five-Point Strategy</h2>
          
          <div className="space-y-6">
            {[
              {
                title: "Price Psychology",
                content: "Entry at ₹10.49L vs Creta's ₹10.79L. Not just cheaper—smarter.",
                insight: "The ₹30K gap becomes a narrative: 'I made the intelligent choice.'"
              },
              {
                title: "Segmentation as Psychology",
                content: "5 trims = 5 different buyer answers. Not pricing tiers, but psychological matches.",
                insight: "Each buyer sees themselves in a different tier, not just buying what they can afford."
              },
              {
                title: "Practical Specifications",
                content: "212mm ground clearance, 518L boot, 280 Nm torque. Built for real life.",
                insight: "Not luxury specs—confidence specs that prove Indian-first engineering."
              },
              {
                title: "Warranty as Promise",
                content: "7-year 'Renault Forever Program.' Positioned as brand promise, not legal document.",
                insight: "Answers the deepest buyer anxiety: 'Will this protect me?'"
              },
              {
                title: "Narrative Arc",
                content: "Petrol launch in March. Hybrid in October. Eight months of momentum.",
                insight: "Launch twice. Create narrative. Not one spike, but sustained growth."
              }
            ].map((strategy, idx) => (
              <div key={idx} className="border-l-2 border-orange-400 pl-4">
                <h3 className="text-xl font-semibold text-white mb-2">{strategy.title}</h3>
                <p className="text-slate-300 mb-2">{strategy.content}</p>
                <p className="text-orange-300 text-sm font-semibold italic">{strategy.insight}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3 */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-white mb-6">The Results</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-slate-700/50 p-6 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <Clock size={20} className="text-orange-400" />
                <h3 className="font-semibold text-white">March 2026</h3>
              </div>
              <p className="text-2xl font-bold text-orange-400 mb-2">1,402 units</p>
              <p className="text-slate-300 text-sm">In just 10 days. 28% of total volume.</p>
            </div>
            <div className="bg-slate-700/50 p-6 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp size={20} className="text-orange-400" />
                <h3 className="font-semibold text-white">April 2026</h3>
              </div>
              <p className="text-2xl font-bold text-orange-400 mb-2">5,413 units</p>
              <p className="text-slate-300 text-sm">108% YoY growth. Momentum is real.</p>
            </div>
          </div>

          <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
            <p className="text-green-300 font-semibold">Hybrid Bookings</p>
            <p className="text-slate-300 mt-2">Sold out in 72 hours before official launch. That's not hype—that's secured future demand.</p>
          </div>
        </div>

        {/* Section 4 */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-white mb-6">The Lesson</h2>
          
          <div className="space-y-4 text-slate-300">
            <p>
              <span className="text-orange-400 font-semibold">In crowded markets,</span> the gap isn't features. It's positioning.
            </p>
            <p>
              Renault didn't try to beat Creta. They identified a <span className="text-orange-400 font-semibold">different buyer</span> with a <span className="text-orange-400 font-semibold">different anxiety</span>.
            </p>
            <p>
              The thoughtful buyer who asks: "Can I justify this? Both emotionally and financially?"
            </p>
            <p className="pt-4 border-t border-slate-700">
              <span className="text-white font-semibold">Clearer positioning beats better execution.</span> Every time.
            </p>
          </div>
        </div>

        {/* Three Scenarios */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-white mb-6">What Happens Next</h2>
          
          <div className="space-y-4">
            <div className="p-4 bg-green-900/20 border border-green-700/50 rounded-lg">
              <p className="font-semibold text-green-300">Scenario A: Execution Excellence</p>
              <p className="text-slate-300 mt-2">Service quality holds. Deliveries stay on schedule. Hybrid launches on time. Result: 3,000-4,000 steady units/month.</p>
              <p className="text-green-400 text-sm font-semibold mt-2">Probability: 60%</p>
            </div>
            <div className="p-4 bg-blue-900/20 border border-blue-700/50 rounded-lg">
              <p className="font-semibold text-blue-300">Scenario B: Positioning Lock-In</p>
              <p className="text-slate-300 mt-2">Scenario A + word-of-mouth flywheel. Urban advocates multiply. Genuine Creta market share loss. Result: 5,000+ units/month.</p>
              <p className="text-blue-400 text-sm font-semibold mt-2">Probability: 30%</p>
            </div>
            <div className="p-4 bg-red-900/20 border border-red-700/50 rounded-lg">
              <p className="font-semibold text-red-300">Scenario C: Execution Failure</p>
              <p className="text-slate-300 mt-2">Service issues. Delays. Hybrid misses timeline. Buzz dies. Back to struggling by Q4.</p>
              <p className="text-red-400 text-sm font-semibold mt-2">Probability: 10%</p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-orange-500/10 border border-orange-500/30 rounded-lg">
            <p className="text-orange-300 font-semibold">My bet: Scenario A trending toward B.</p>
            <p className="text-slate-300 mt-2">Not because Renault is better. Because they're solving a clearer customer problem.</p>
          </div>
        </div>

        {/* Final Thought */}
        <div className="bg-gradient-to-r from-orange-900/30 to-orange-800/20 border border-orange-500/50 rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">The Final Thought</h2>
          <p className="text-slate-200 text-lg leading-relaxed">
            This isn't a car story. This is a <span className="text-orange-400 font-semibold">positioning story</span>.
          </p>
          <p className="text-slate-300 mt-4">
            A brand that died, listened to why it died, came back with the exact solution the market evolved to need.
          </p>
          <p className="text-slate-300 mt-4">
            No shortcuts. No nostalgia marketing. Just: "The problem you have hasn't been solved. We solved it. Here it is."
          </p>
          <p className="text-orange-300 font-semibold mt-6">That's how dead brands win. And that's a lesson every founder needs to understand.</p>
        </div>

        {/* Share Section */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8">
          <h3 className="text-xl font-bold text-white mb-4">Share This Case Study</h3>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleShareLinkedIn}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all"
            >
              <Share2 size={20} />
              Share on LinkedIn
            </button>
            <button
              onClick={handleCopyLink}
              className="flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-semibold transition-all"
            >
              <ExternalLink size={20} />
              {copied ? 'Link Copied!' : 'Copy Link'}
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-slate-700 mt-16 px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto text-center text-slate-400">
          <p className="mb-2">
            <span className="font-semibold text-white">Renault Duster Case Study</span> | Strategic Analysis
          </p>
          <p className="text-sm">
            Analysis conducted March-May 2026. Data sourced from market reports and official communications.
          </p>
          <p className="text-sm mt-4">
            By <a href="https://grovvstudios.com" className="text-orange-400 hover:text-orange-300">GROVV Studios</a>
          </p>
        </div>
      </div>
    </div>
  );
}

function generatePDF() {
  // This is a simplified version. For production, use a library like jsPDF or html2pdf
  return `
    CASE STUDY: HOW A DEAD BRAND BECAME RELEVANT AGAIN IN 60 DAYS
    
    The Renault Duster Comeback: Strategic Positioning Analysis
    March-May 2026
    
    ═══════════════════════════════════════════════════════════════════
    
    PAGE 1: THE SETUP
    
    When Renault killed the Duster in 2022, it felt permanent.
    The market had moved on. Hyundai Creta had solidified prestige leadership.
    Toyota Hyryder had claimed reliability. Skoda Kushaq had established engineering credibility.
    
    Renault's market share in India had crashed below 1%.
    
    But on March 17, 2026, they did something nobody expected.
    They relaunched a positioning. Not just a car.
    
    And the market responded with 108% YoY growth in April.
    
    This isn't a story about a better car.
    This is a story about understanding a customer anxiety that three competing brands had completely missed.
    
    ═══════════════════════════════════════════════════════════════════
    
    PAGE 2: THE MARKET INSIGHT
    
    By late 2024, the midsize SUV segment had crystallized into three clear psychological positions:
    
    HYUNDAI CRETA (₹10.79L - ₹20.2L)
    Positioning: "The Premium Brand Choice"
    Buyer Psychology: "I want to be seen as aspirational"
    
    TOYOTA HYRYDER (₹10.5L - ₹17.5L)
    Positioning: "The Reliable Choice"
    Buyer Psychology: "I want to trust this decision"
    
    SKODA KUSHAQ (₹10.5L - ₹18L)
    Positioning: "The Engineering Choice"
    Buyer Psychology: "I understand cars, I want precision"
    
    But here's what Renault noticed: None of these brands answered the buyer's deepest anxiety.
    
    The buyer who asks:
    - Will maintenance drain my salary?
    - Will resale value collapse?
    - Will the tech become obsolete?
    - Will the warranty actually protect me?
    - Can I justify this purchase to my family?
    
    Creta answered: "You'll be seen as successful."
    Hyryder answered: "You can trust Toyota."
    Kushaq answered: "You understand engineering."
    
    But NOBODY answered: "You made the smart choice. Both emotionally and financially."
    
    That was the gap.
    
    ═══════════════════════════════════════════════════════════════════
    
    PAGE 3-5: THE FIVE-POINT STRATEGY
    
    MOVE #1: PRICE PSYCHOLOGY
    Entry price: ₹10.49L (vs Creta's ₹10.79L)
    The ₹30K gap becomes a narrative: "I made the intelligent choice."
    
    MOVE #2: SEGMENTATION AS PSYCHOLOGY
    5 trims = 5 different buyer answers
    Authentic: "Safety first"
    Evolution: "Tech enters"
    Techno: "Comfort"
    Techno+: "Premium moves in"
    Iconic: "You get the future"
    
    MOVE #3: PRACTICAL SPECIFICATIONS
    212mm ground clearance (vs Creta's 190mm)
    518L boot space (vs Creta's 433L)
    280 Nm torque (vs Creta's 250 Nm)
    
    MOVE #4: WARRANTY AS PROMISE
    7-year "Renault Forever Program"
    Not a legal document. A brand promise.
    
    MOVE #5: NARRATIVE STRATEGY
    March: Petrol launch
    October: Hybrid launch
    Eight months of sustained momentum
    
    ═══════════════════════════════════════════════════════════════════
    
    PAGE 6: THE RESULTS
    
    March 2026: 1,402 units in 10 days
    April 2026: 5,413 units = 108% YoY growth
    Hybrid bookings: Sold out in 72 hours
    
    This isn't a launch spike. This is sustained momentum.
    Future demand is already secured.
    
    ═══════════════════════════════════════════════════════════════════
    
    PAGE 7: THE LESSON
    
    In crowded markets, the gap isn't features. It's positioning.
    
    Renault didn't try to beat Creta.
    They identified a different buyer with a different anxiety.
    
    The thoughtful buyer who asks: "Can I justify this? Both emotionally and financially?"
    
    Clearer positioning beats better execution. Every time.
    
    Three scenarios ahead:
    Scenario A (60%): Execution excellence. 3K-4K units/month
    Scenario B (30%): Positioning lock-in. 5K+ units/month. Creta loses share.
    Scenario C (10%): Execution failure. Back to struggling.
    
    I'm betting A trending toward B.
    
    Not because Renault is better.
    Because they're solving a clearer customer problem.
    
    ═══════════════════════════════════════════════════════════════════
    
    Final Thought:
    
    This is a positioning story. A brand that died, listened to why it died,
    came back with the exact solution the market evolved to need.
    
    That's how dead brands win.
    
    ═══════════════════════════════════════════════════════════════════
    
    Analysis conducted March-May 2026
    By GROVV Studios
  `;
}
