import React, { useState } from 'react';
import { Episode } from '../../types';
import { 
  Play, 
  Compass, 
  Brain, 
  Sparkles, 
  Target, 
  CheckCircle2, 
  Quote,
  Shield,
  Lightbulb
} from 'lucide-react';
import { EPISODES, SHOWS } from '../../data/mockData';

interface RebelMindsetPageProps {
  onPlayEpisode: (episode: Episode) => void;
}

export const RebelMindsetPage: React.FC<RebelMindsetPageProps> = ({ onPlayEpisode }) => {
  const mindsetEpisode = EPISODES.find(e => e.showId === 'rebel-mindset') || EPISODES[4];
  const [activeTab, setActiveTab] = useState<number>(0);

  const masterclassRules = [
    {
      title: "Voluntary Discomfort",
      concept: "Stoic Hardening",
      desc: "True autonomy is only achieved when external luxury loses its grip over your nervous system. Intentionally subject yourself to friction before life forces it upon you.",
      action: "Identify one convenience you rely on daily and disconnect from it for 72 hours."
    },
    {
      title: "Radical Focus in a Noisy Age",
      concept: "Deep Intellectual Work",
      desc: "The world is engineered to auction your attention to algorithmic advertisers. Your ability to think deeply for uninterrupted hours is your ultimate competitive moat.",
      action: "Institute a daily 90-minute blackout window with zero screens and raw pen-and-paper synthesis."
    },
    {
      title: "The Courage to Displease",
      concept: "Intellectual Non-Conformity",
      desc: "If everyone in your social sphere nods along with every opinion you voice, you are merely regurgitating consensus. Courage begins when you are willing to stand in temporary isolation.",
      action: "Express an authentic disagreement kindly but unequivocally in your next strategic discussion."
    }
  ];

  return (
    <div id="rph-rebel-mindset-page" className="pt-24 pb-20 bg-[#0F0F0F] text-[#F5F1E8]">
      
      {/* Hero */}
      <section className="relative py-16 sm:py-24 border-b border-[#2B1D16] bg-gradient-to-b from-[#2B1D16]/50 via-[#0F0F0F] to-[#0F0F0F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#2B1D16] border border-[#C8A95B]/40 text-xs font-mono text-[#C8A95B]">
            <Brain className="w-4 h-4" />
            <span>Philosophy & Cognitive Resilience</span>
          </div>

          <h1 className="font-['Cinzel'] text-3xl sm:text-5xl lg:text-6xl font-black text-[#F5F1E8] tracking-tight">
            Rebel Mindset
          </h1>

          <p className="font-serif italic text-lg text-[#C8A95B]">
            "Mental frameworks, philosophical resilience, and creative discipline for non-conformists."
          </p>

          <p className="text-sm sm:text-base text-[#F5F1E8]/75 max-w-2xl font-sans">
            A sanctuary away from hollow algorithmic motivational platitudes. We explore classical Stoicism, intellectual resilience, and the psychology of solitary ambition.
          </p>
        </div>
      </section>

      {/* Featured Masterclass Banner */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl bg-[#2B1D16]/40 border border-[#C8A95B]/40 p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8 space-y-4">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#C8A95B]">
              Featured Audio-Visual Masterclass
            </span>
            <h2 className="font-['Cinzel'] text-xl sm:text-3xl font-bold text-[#F5F1E8]">
              {mindsetEpisode.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#F5F1E8]/75 leading-relaxed font-sans">
              {mindsetEpisode.description}
            </p>

            {mindsetEpisode.quote && (
              <div className="p-4 rounded bg-[#0F0F0F] border-l-2 border-[#C8A95B] flex items-start gap-3">
                <Quote className="w-4 h-4 text-[#C8A95B] shrink-0 mt-0.5" />
                <p className="text-xs italic font-serif text-[#F5F1E8]/90">
                  "{mindsetEpisode.quote}"
                </p>
              </div>
            )}

            <div className="pt-2 flex items-center gap-4 text-xs text-white/50 font-mono">
              <span>Runtime: {mindsetEpisode.duration}</span>
              <span>•</span>
              <span>{mindsetEpisode.views} Views</span>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-center items-center p-6 bg-[#0F0F0F] border border-white/10 rounded-lg text-center space-y-4 shadow-xl">
            <div className="w-16 h-16 rounded-full bg-[#2B1D16] border border-[#C8A95B] flex items-center justify-center text-[#C8A95B]">
              <Compass className="w-8 h-8" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-[#C8A95B] font-bold block">
                Deep Dive Masterclass
              </span>
              <span className="text-xs text-white/60">
                Mental Conditioning & Stoicism
              </span>
            </div>
            <button
              onClick={() => onPlayEpisode(mindsetEpisode)}
              className="w-full flex items-center justify-center gap-2 bg-[#C8A95B] hover:bg-[#DFC788] text-[#0F0F0F] font-bold text-xs uppercase tracking-wider py-3 rounded shadow-lg transition-colors"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>Stream Masterclass</span>
            </button>
          </div>

        </div>
      </section>

      {/* 3 Core Philosophical Principles */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 space-y-1">
          <span className="text-xs uppercase tracking-widest text-[#C8A95B] font-bold">
            The Philosophy
          </span>
          <h3 className="font-['Cinzel'] text-2xl font-bold text-[#F5F1E8]">
            Three Mental Axioms For The Rebel
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {masterclassRules.map((rule, idx) => (
            <div
              key={idx}
              className="p-6 rounded-lg bg-[#2B1D16]/30 border border-[#C8A95B]/25 hover:border-[#C8A95B] transition-all space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-[#C8A95B] uppercase tracking-wider">
                    {rule.concept}
                  </span>
                  <Lightbulb className="w-4 h-4 text-[#C8A95B]" />
                </div>
                <h4 className="font-['Cinzel'] text-base font-bold text-[#F5F1E8]">
                  {rule.title}
                </h4>
                <p className="text-xs text-[#F5F1E8]/70 leading-relaxed font-sans">
                  {rule.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 text-xs">
                <span className="text-[10px] uppercase font-mono text-white/40 block mb-1">
                  Tactical Protocol
                </span>
                <p className="text-[#C8A95B] font-medium">
                  {rule.action}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
