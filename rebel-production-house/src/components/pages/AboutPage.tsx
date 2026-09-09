import React from 'react';
import { PageId } from '../../types';
import { 
  Compass, 
  Film, 
  Target, 
  Sparkles, 
  Award, 
  ArrowRight, 
  CheckCircle2,
  ShieldCheck,
  Zap
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div id="rph-about-page" className="pt-24 pb-20 bg-[#0F0F0F] text-[#F5F1E8]">
      
      {/* Hero Header */}
      <section className="relative py-20 overflow-hidden border-b border-[#2B1D16]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2B1D16]/50 via-transparent to-[#0F0F0F]" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs uppercase tracking-[0.3em] text-[#C8A95B] font-bold">
            The RPH Manifesto
          </span>
          <h1 className="font-['Cinzel'] text-3xl sm:text-5xl lg:text-6xl font-black text-[#F5F1E8] tracking-tight leading-tight">
            Stories That Challenge. <br className="hidden sm:inline" />
            Voices That Matter.
          </h1>
          <p className="font-serif italic text-lg sm:text-xl text-[#C8A95B]">
            "Think Different. Live Different."
          </p>
          <p className="text-sm sm:text-base text-[#F5F1E8]/80 max-w-2xl mx-auto leading-relaxed">
            Rebel Production House was born out of an urgent cultural necessity: to challenge the homogenization of mainstream Indian media by building a world-class, uncompromising platform rooted in the stories, struggles, and genius of the eastern heartland.
          </p>
        </div>
      </section>

      {/* Origin Story & Vision */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-8 h-px bg-[#C8A95B]" />
              <span className="text-xs uppercase tracking-widest text-[#C8A95B] font-bold">
                1.1 Project Overview & Genesis
              </span>
            </div>

            <h2 className="font-['Cinzel'] text-2xl sm:text-4xl font-bold text-[#F5F1E8] leading-snug">
              Bridging Netflix, TED, The Ken, and National Geographic.
            </h2>

            <p className="text-sm text-[#F5F1E8]/80 leading-relaxed font-sans">
              For decades, mainstream broadcast channels reduced Bihar and regional India to caricature tropes: crime sagas, bureaucratic exams, or rustic punchlines. Meanwhile, the region that gave birth to humanity's first residential global university (Nalanda), the doctrine of peace (Buddha), statecraft (Chanakya), and modern democratic dissent (JP's Total Revolution) was starved of sophisticated, respectful storytelling.
            </p>

            <p className="text-sm text-[#F5F1E8]/80 leading-relaxed font-sans">
              Rebel Production House integrates the cinematic production values of Netflix, the intellectual depth of TED talks, the journalistic rigor of The Ken, the audio intimacy of Spotify, and the ecological empathy of National Geographic into an independent media home.
            </p>

            <div className="pt-2 grid grid-cols-2 gap-4">
              <div className="p-4 rounded bg-[#2B1D16]/50 border border-[#C8A95B]/30">
                <span className="font-['Cinzel'] text-xl font-bold text-[#C8A95B] block">100%</span>
                <span className="text-xs text-white/70">Independent Ownership & Editorial Freedom</span>
              </div>
              <div className="p-4 rounded bg-[#2B1D16]/50 border border-[#C8A95B]/30">
                <span className="font-['Cinzel'] text-xl font-bold text-[#C8A95B] block">4K Cinema</span>
                <span className="text-xs text-white/70">Anamorphic Lenses & Immersive Soundscapes</span>
              </div>
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden border border-[#C8A95B]/40 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1200&q=80"
              alt="Rebel Production Studio"
              className="w-full h-full object-cover filter brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-transparent opacity-70" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded bg-[#0F0F0F]/80 backdrop-blur border border-[#C8A95B]/30">
              <span className="text-[11px] font-mono text-[#C8A95B] uppercase block">
                The RPH Studio Ethos
              </span>
              <p className="text-xs text-[#F5F1E8] mt-1 font-serif italic">
                "No script is sanitized for sponsors. If it speaks truth to power, our cameras roll."
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* The 4 Tenets of Production */}
      <section className="py-16 bg-[#2B1D16]/30 border-y border-[#2B1D16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#C8A95B] font-bold">
              Our Craft Standards
            </span>
            <h2 className="font-['Cinzel'] text-2xl sm:text-3xl font-bold text-[#F5F1E8]">
              The Four Pillars of Rebel Production
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded bg-[#0F0F0F] border border-[#C8A95B]/30 space-y-3">
              <div className="w-10 h-10 rounded bg-[#2B1D16] border border-[#C8A95B] flex items-center justify-center text-[#C8A95B]">
                <Film className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm text-[#F5F1E8] uppercase tracking-wider">
                1. Visual Majesty
              </h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Whether filming village weavers in Madhubani or economists in Patna, we treat every subject with high-contrast, cinematic lighting and intentional composition.
              </p>
            </div>

            <div className="p-6 rounded bg-[#0F0F0F] border border-[#C8A95B]/30 space-y-3">
              <div className="w-10 h-10 rounded bg-[#2B1D16] border border-[#C8A95B] flex items-center justify-center text-[#C8A95B]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm text-[#F5F1E8] uppercase tracking-wider">
                2. Unbought Journalism
              </h3>
              <p className="text-xs text-white/70 leading-relaxed">
                No corporate PR influence, no government handouts. Our investigative desk tracks illegal mining, labor displacement, and systemic flaws with unswerving fact-checking.
              </p>
            </div>

            <div className="p-6 rounded bg-[#0F0F0F] border border-[#C8A95B]/30 space-y-3">
              <div className="w-10 h-10 rounded bg-[#2B1D16] border border-[#C8A95B] flex items-center justify-center text-[#C8A95B]">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm text-[#F5F1E8] uppercase tracking-wider">
                3. Cultural Reclamation
              </h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Reviving Magahi, Maithili, and Bhojpuri oral traditions, poetry, and theater while celebrating Bihar's unsung scientists, reformers, and grassroots icons.
              </p>
            </div>

            <div className="p-6 rounded bg-[#0F0F0F] border border-[#C8A95B]/30 space-y-3">
              <div className="w-10 h-10 rounded bg-[#2B1D16] border border-[#C8A95B] flex items-center justify-center text-[#C8A95B]">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm text-[#F5F1E8] uppercase tracking-wider">
                4. Intellectual Courage
              </h3>
              <p className="text-xs text-white/70 leading-relaxed">
                We foster nuanced disagreement. Through shows like AAR-PAAR and The Piyush Singh Podcast, we hold space for difficult, uncomfortable questions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience & Community Callout */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <h2 className="font-['Cinzel'] text-2xl sm:text-4xl font-bold text-[#F5F1E8]">
          Who Is Rebel Production House For?
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-left">
          {[
            "People hungry for meaningful long-form podcasts and unfiltered dialogues.",
            "Cinema lovers seeking independent documentaries with authentic regional soul.",
            "Readers and citizens tracking ground-level accountability journalism.",
            "Young minds looking for mental resilience, ambition, and intellectual clarity.",
            "Anyone curious about the true, layered cultural tapestry of Bihar.",
            "Creators who want to collaborate on fearless original programming."
          ].map((item, i) => (
            <div key={i} className="p-4 rounded bg-[#2B1D16]/30 border border-white/10 flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-[#C8A95B] shrink-0 mt-0.5" />
              <span className="text-xs text-[#F5F1E8]/80">{item}</span>
            </div>
          ))}
        </div>

        <div className="pt-6 flex flex-wrap justify-center gap-4">
          <button
            onClick={() => onNavigate('podcasts')}
            className="bg-[#C8A95B] hover:bg-[#DFC788] text-[#0F0F0F] font-bold text-xs uppercase tracking-wider px-6 py-3 rounded transition-colors"
          >
            Start With Podcasts
          </button>
          <button
            onClick={() => onNavigate('team')}
            className="border border-[#C8A95B] text-[#C8A95B] hover:bg-[#C8A95B] hover:text-[#0F0F0F] font-bold text-xs uppercase tracking-wider px-6 py-3 rounded transition-colors"
          >
            Meet The House Team
          </button>
        </div>
      </section>

    </div>
  );
};
