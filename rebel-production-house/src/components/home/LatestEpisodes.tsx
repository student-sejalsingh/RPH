import React, { useRef } from 'react';
import { Episode } from '../../types';
import { 
  Play, 
  Clock, 
  ChevronLeft, 
  ChevronRight, 
  Flame, 
  User 
} from 'lucide-react';

interface LatestEpisodesProps {
  episodes: Episode[];
  onPlayEpisode: (episode: Episode) => void;
}

export const LatestEpisodes: React.FC<LatestEpisodesProps> = ({
  episodes,
  onPlayEpisode
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const offset = direction === 'left' ? -380 : 380;
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <section id="latest-episodes-section" className="py-20 bg-[#0F0F0F] relative border-t border-[#2B1D16] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Carousel Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-8 h-px bg-[#C8A95B]" />
              <span className="text-xs uppercase tracking-widest text-[#C8A95B] font-bold flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 text-[#C8A95B]" />
                Fresh Off The Reel
              </span>
            </div>
            <h2 className="font-['Cinzel'] text-2xl sm:text-4xl font-bold text-[#F5F1E8] tracking-tight">
              Latest Episodes & Releases
            </h2>
            <p className="text-xs sm:text-sm text-[#F5F1E8]/70">
              New podcasts, documentaries, and investigative reports updated weekly.
            </p>
          </div>

          {/* Navigation Arrows for horizontally scrollable media cards */}
          <div className="flex items-center gap-2 self-end sm:self-auto">
            <button
              id="latest-episodes-scroll-left"
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full bg-[#2B1D16] border border-[#C8A95B]/40 hover:border-[#C8A95B] hover:bg-[#C8A95B] text-[#F5F1E8] hover:text-[#0F0F0F] flex items-center justify-center transition-all shadow-md"
              aria-label="Previous episodes"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              id="latest-episodes-scroll-right"
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full bg-[#2B1D16] border border-[#C8A95B]/40 hover:border-[#C8A95B] hover:bg-[#C8A95B] text-[#F5F1E8] hover:text-[#0F0F0F] flex items-center justify-center transition-all shadow-md"
              aria-label="Next episodes"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-6 pt-2 scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {episodes.map((ep) => (
            <div
              key={ep.id}
              id={`episode-card-${ep.id}`}
              onClick={() => onPlayEpisode(ep)}
              className="w-72 sm:w-80 md:w-96 shrink-0 snap-start group cursor-pointer bg-[#2B1D16]/30 border border-[#C8A95B]/20 hover:border-[#C8A95B] rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1.5 shadow-lg flex flex-col justify-between"
            >
              {/* Media Thumbnail Container with Play Overlay */}
              <div className="relative aspect-video w-full overflow-hidden bg-black">
                <img
                  src={ep.thumbnail}
                  alt={ep.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Duration Badge */}
                <div className="absolute bottom-2.5 right-2.5 flex items-center gap-1 bg-black/80 backdrop-blur px-2 py-0.5 rounded text-[11px] font-mono text-[#C8A95B] border border-[#C8A95B]/30">
                  <Clock className="w-3 h-3" />
                  <span>{ep.duration}</span>
                </div>

                {/* Show Tag */}
                <div className="absolute top-2.5 left-2.5 bg-[#2B1D16]/90 border border-[#C8A95B]/50 px-2.5 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider text-[#F5F1E8]">
                  {ep.category}
                </div>

                {/* Center Hover Play Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                  <div className="w-12 h-12 rounded-full bg-[#C8A95B] text-[#0F0F0F] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </div>
              </div>

              {/* Episode Details */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <div className="text-[11px] font-mono text-[#C8A95B] mb-1">
                    {ep.showTitle}
                  </div>

                  <h3 className="font-['Cinzel'] text-sm sm:text-base font-bold text-[#F5F1E8] group-hover:text-[#C8A95B] transition-colors line-clamp-2 leading-snug">
                    {ep.title}
                  </h3>

                  <p className="text-xs text-[#F5F1E8]/60 mt-2 line-clamp-2 leading-relaxed font-sans">
                    {ep.description}
                  </p>
                </div>

                {/* Guest & Watch Action */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2 min-w-0">
                    {ep.guestImage ? (
                      <img 
                        src={ep.guestImage} 
                        alt={ep.guestName || 'Guest'} 
                        referrerPolicy="no-referrer"
                        className="w-6 h-6 rounded-full object-cover border border-[#C8A95B]/50 shrink-0"
                      />
                    ) : (
                      <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white/60 shrink-0">
                        <User className="w-3.5 h-3.5" />
                      </div>
                    )}
                    <span className="text-xs text-white/70 truncate">
                      {ep.guestName || 'Editorial'}
                    </span>
                  </div>

                  <span className="text-xs font-bold uppercase tracking-wider text-[#C8A95B] group-hover:underline flex items-center gap-1 shrink-0">
                    <span>Watch</span>
                    <Play className="w-3 h-3 fill-current" />
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
