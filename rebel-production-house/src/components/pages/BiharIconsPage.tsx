import React, { useState } from 'react';
import { BiharIcon, Episode } from '../../types';
import { 
  Sparkles, 
  Award, 
  Quote, 
  Play, 
  Calendar, 
  BookOpen, 
  ArrowRight,
  X
} from 'lucide-react';
import { BIHAR_ICONS, EPISODES } from '../../data/mockData';

interface BiharIconsPageProps {
  onPlayEpisode: (episode: Episode) => void;
}

export const BiharIconsPage: React.FC<BiharIconsPageProps> = ({ onPlayEpisode }) => {
  const [selectedIcon, setSelectedIcon] = useState<BiharIcon | null>(null);

  const handleWatchTribute = (icon: BiharIcon) => {
    // Find an episode matching the icon or fallback to the cultural icons episode
    const ep = EPISODES.find(e => e.showId === 'bihar-icons' || e.category === 'Bihar Icons') || EPISODES[6];
    onPlayEpisode(ep);
  };

  return (
    <div id="rph-bihar-icons-page" className="pt-24 pb-20 bg-[#0F0F0F] text-[#F5F1E8]">
      
      {/* Hero */}
      <section className="relative py-16 sm:py-24 border-b border-[#2B1D16] bg-gradient-to-b from-[#2B1D16]/60 via-[#0F0F0F] to-[#0F0F0F] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#2B1D16] border border-[#C8A95B]/40 text-xs font-mono text-[#C8A95B]">
            <Sparkles className="w-4 h-4" />
            <span>Heritage & Trailblazers Archive</span>
          </div>

          <h1 className="font-['Cinzel'] text-3xl sm:text-5xl lg:text-6xl font-black text-[#F5F1E8] tracking-tight">
            Bihar Icons
          </h1>

          <p className="font-serif italic text-lg text-[#C8A95B]">
            "Reclaiming the pride of Magadha, Mithila, and Anga. Chronicling the minds that illuminated the subcontinent."
          </p>

          <p className="text-sm sm:text-base text-[#F5F1E8]/75 max-w-2xl font-sans">
            From the mathematical genius of Vashishtha Narayan Singh and the fiery verses of Dinkar to the subaltern theater of Bhikhari Thakur and the democratic courage of JP. We document the giants whose legacy lives in our blood.
          </p>
        </div>
      </section>

      {/* Grid of Icons */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BIHAR_ICONS.map((icon) => (
            <div
              key={icon.id}
              id={`bihar-icon-card-${icon.id}`}
              className="bg-[#2B1D16]/40 border border-[#C8A95B]/30 hover:border-[#C8A95B] rounded-xl overflow-hidden shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="p-6 sm:p-8 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="relative w-20 sm:w-24 h-20 sm:h-24 rounded-lg overflow-hidden border-2 border-[#C8A95B] shrink-0 bg-black">
                    <img
                      src={icon.image}
                      alt={icon.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>

                  <div className="space-y-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#C8A95B] bg-black/40 px-2 py-0.5 rounded border border-[#C8A95B]/30">
                        {icon.domain}
                      </span>
                    </div>

                    <h3 className="font-['Cinzel'] text-xl sm:text-2xl font-bold text-[#F5F1E8] group-hover:text-[#C8A95B] transition-colors leading-tight">
                      {icon.name}
                    </h3>

                    <p className="text-xs text-[#C8A95B] font-medium font-mono">
                      Era: {icon.era}
                    </p>

                    <p className="text-xs text-white/60 line-clamp-1 italic">
                      {icon.title}
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#F5F1E8]/80 leading-relaxed font-sans">
                  {icon.bio}
                </p>

                {/* Immortal Quote Callout */}
                <div className="p-4 rounded bg-[#0F0F0F] border-l-2 border-[#C8A95B] flex items-start gap-2.5">
                  <Quote className="w-4 h-4 text-[#C8A95B] shrink-0 mt-0.5" />
                  <p className="text-xs italic font-serif text-[#F5F1E8]/90">
                    "{icon.quote}"
                  </p>
                </div>

                {/* Key Impact */}
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-mono text-white/40 block">
                    Historical Impact:
                  </span>
                  <p className="text-xs text-[#F5F1E8]/70">
                    {icon.impact}
                  </p>
                </div>
              </div>

              {/* Action Bar */}
              <div className="px-6 sm:px-8 py-4 bg-[#0F0F0F]/80 border-t border-white/10 flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {icon.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-[10px] text-white/50 bg-[#2B1D16] px-2 py-0.5 rounded">
                      #{tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => handleWatchTribute(icon)}
                  className="flex items-center gap-2 bg-[#C8A95B] hover:bg-[#DFC788] text-[#0F0F0F] font-bold text-xs uppercase tracking-wider px-4 py-2 rounded transition-all"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Watch Tribute</span>
                </button>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Cultural Pledge Quote */}
      <section className="py-12 max-w-4xl mx-auto px-4 text-center space-y-4">
        <div className="p-8 rounded-xl bg-gradient-to-r from-[#2B1D16]/60 via-[#2B1D16]/20 to-[#2B1D16]/60 border border-[#C8A95B]/40 space-y-3">
          <Quote className="w-8 h-8 text-[#C8A95B] mx-auto" />
          <h3 className="font-['Cinzel'] text-lg sm:text-2xl font-bold text-[#F5F1E8]">
            "A civilization that forgets its icons is doomed to accept the inferior definitions assigned to it by others."
          </h3>
          <p className="text-xs font-mono text-[#C8A95B] tracking-widest uppercase">
            — Rebel Production House Cultural Archive
          </p>
        </div>
      </section>

    </div>
  );
};
