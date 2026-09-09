import React from 'react';
import { Show, PageId } from '../../types';
import { ArrowRight, Tv, Play } from 'lucide-react';

interface FeaturedShowsProps {
  shows: Show[];
  onSelectShow: (slug: string) => void;
  onNavigate: (page: PageId) => void;
}

export const FeaturedShows: React.FC<FeaturedShowsProps> = ({
  shows,
  onSelectShow,
  onNavigate
}) => {
  return (
    <section id="featured-shows-section" className="py-20 sm:py-28 bg-[#0F0F0F] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-8 h-px bg-[#C8A95B]" />
              <span className="text-xs uppercase tracking-widest text-[#C8A95B] font-bold">
                Signature Originals
              </span>
            </div>
            <h2 className="font-['Cinzel'] text-2xl sm:text-4xl font-bold text-[#F5F1E8] tracking-tight">
              Featured Shows & Content Slate
            </h2>
            <p className="text-xs sm:text-sm text-[#F5F1E8]/70 max-w-xl">
              Curated franchises exploring politics, sociology, cinematic art, human ambition, and the heritage of Bihar.
            </p>
          </div>

          <button
            id="view-all-shows-btn"
            onClick={() => onNavigate('podcasts')}
            className="flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#C8A95B] hover:text-[#DFC788] font-bold self-start sm:self-auto group"
          >
            <span>Browse Full Lineup</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Show Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {shows.map((show, idx) => (
            <div
              key={show.id}
              id={`featured-show-card-${show.id}`}
              className="group relative rounded-lg bg-[#2B1D16]/30 border border-[#C8A95B]/25 hover:border-[#C8A95B] overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-2xl hover:shadow-[#C8A95B]/10 flex flex-col justify-between"
            >
              {/* Show Image with Gradient Backdrop */}
              <div className="relative aspect-video w-full overflow-hidden bg-black/60">
                <img
                  src={show.image}
                  alt={show.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-black/30" />

                {/* Badge */}
                {show.highlightBadge && (
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded bg-[#2B1D16]/90 border border-[#C8A95B]/60 text-[10px] font-bold uppercase tracking-wider text-[#C8A95B] shadow">
                      {show.highlightBadge}
                    </span>
                  </div>
                )}

                <div className="absolute bottom-3 right-3 text-[11px] font-mono text-white/70 bg-black/60 px-2 py-0.5 rounded backdrop-blur border border-white/10">
                  {show.totalEpisodes} Releases
                </div>
              </div>

              {/* Show Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#C8A95B]">
                      {show.category}
                    </span>
                    {show.host && (
                      <>
                        <span className="text-white/30 text-xs">•</span>
                        <span className="text-xs text-white/60">Host: {show.host}</span>
                      </>
                    )}
                  </div>

                  <h3 className="font-['Cinzel'] text-lg sm:text-xl font-bold text-[#F5F1E8] group-hover:text-[#C8A95B] transition-colors leading-snug">
                    {show.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#F5F1E8]/70 mt-2 line-clamp-3 leading-relaxed">
                    {show.shortDescription}
                  </p>
                </div>

                {/* Tags & Action Button */}
                <div className="space-y-4 pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {show.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-black/40 border border-white/10 rounded text-[10px] text-white/60"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                    <button
                      id={`explore-show-${show.id}-btn`}
                      onClick={() => onSelectShow(show.slug)}
                      className="flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-[#C8A95B] hover:text-[#DFC788] transition-colors"
                    >
                      <span>Explore Show</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <button
                      onClick={() => onSelectShow(show.slug)}
                      className="w-8 h-8 rounded-full bg-[#C8A95B]/10 border border-[#C8A95B]/40 flex items-center justify-center text-[#C8A95B] group-hover:bg-[#C8A95B] group-hover:text-[#0F0F0F] transition-all"
                      aria-label={`Explore ${show.title}`}
                    >
                      <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
