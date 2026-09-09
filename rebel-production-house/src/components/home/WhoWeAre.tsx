import React from 'react';
import { 
  Mic, 
  Film, 
  FileText, 
  Flame, 
  Compass, 
  Users, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { PageId } from '../../types';

interface WhoWeAreProps {
  onNavigate: (page: PageId) => void;
}

export const WhoWeAre: React.FC<WhoWeAreProps> = ({ onNavigate }) => {
  const pillars = [
    {
      title: "Podcasts",
      desc: "Uncompromising, intellectual long-form dialogues that strip away PR facades.",
      icon: Mic,
      target: 'podcasts' as PageId
    },
    {
      title: "Films",
      desc: "Visually arresting independent cinema and nuanced cultural narratives.",
      icon: Film,
      target: 'films' as PageId
    },
    {
      title: "Journalism",
      desc: "Fearless investigative reporting on environmental crime and public accountability.",
      icon: FileText,
      target: 'news' as PageId
    },
    {
      title: "Social Documentaries",
      desc: "Human-centric chronicles giving voice to grassroots struggles and quiet revolutions.",
      icon: Flame,
      target: 'films' as PageId
    },
    {
      title: "Motivational Content",
      desc: "Philosophical grit, psychological resilience, and masterclasses in defiant purpose.",
      icon: Compass,
      target: 'rebel-mindset' as PageId
    },
    {
      title: "Interviews",
      desc: "Intimate conversations with visionaries, scholars, rebels, and icons.",
      icon: Users,
      target: 'podcasts' as PageId
    },
    {
      title: "Stories That Inspire Change",
      desc: "Documenting trailblazers who challenge status-quo assumptions from Bihar to the globe.",
      icon: Sparkles,
      target: 'bihar-icons' as PageId
    }
  ];

  return (
    <section id="who-we-are-section" className="py-20 sm:py-28 bg-[#0F0F0F] relative border-b border-[#2B1D16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-8 h-px bg-[#C8A95B]" />
            <span className="text-xs uppercase tracking-widest text-[#C8A95B] font-bold">
              Who We Are
            </span>
          </div>

          <h2 className="font-['Cinzel'] text-2xl sm:text-4xl font-bold text-[#F5F1E8] tracking-tight leading-snug">
            We Are The Chroniclers Of Unfiltered Human Truth.
          </h2>

          <p className="text-sm sm:text-base text-[#F5F1E8]/75 leading-relaxed font-sans">
            Rebel Production House (RPH) is a digital media institution blending the cinematic grandeur of high-end cinema, the intellectual depth of long-form journalism, and the raw soul of heartland storytelling. We reject cookie-cutter sensationalism in favor of lasting cultural weight.
          </p>
        </div>

        {/* 7 Content Pillars Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                id={`who-we-are-pillar-${idx}`}
                onClick={() => onNavigate(pillar.target)}
                className="group p-6 rounded bg-[#2B1D16]/40 border border-[#C8A95B]/20 hover:border-[#C8A95B] hover:bg-[#2B1D16]/80 transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded bg-[#0F0F0F] border border-[#C8A95B]/40 flex items-center justify-center text-[#C8A95B] group-hover:scale-110 group-hover:bg-[#C8A95B] group-hover:text-[#0F0F0F] transition-all">
                    <Icon className="w-5 h-5" />
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-[#F5F1E8] group-hover:text-[#C8A95B] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-[#F5F1E8]/60 mt-1.5 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#C8A95B]">
                  <span className="font-medium">Explore Slate</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}

          {/* Special Manifesto Callout card to complete the grid */}
          <div 
            onClick={() => onNavigate('about')}
            className="p-6 rounded bg-gradient-to-br from-[#2B1D16] to-[#0F0F0F] border border-[#C8A95B]/60 flex flex-col justify-between cursor-pointer group shadow-xl"
          >
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#C8A95B] font-bold block mb-2">
                Our Creed
              </span>
              <h3 className="font-['Cinzel'] text-lg font-bold text-[#F5F1E8] group-hover:text-[#C8A95B] transition-colors">
                Think Different. Live Different.
              </h3>
              <p className="text-xs text-[#F5F1E8]/70 mt-2 leading-relaxed">
                Discover why Rebel Production House was founded and read our full cultural manifesto.
              </p>
            </div>
            <div className="pt-4 flex items-center gap-2 text-xs font-bold text-[#C8A95B]">
              <span>Read Full Manifesto</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
