import React from 'react';
import { HeroSection } from '../home/HeroSection';
import { WhoWeAre } from '../home/WhoWeAre';
import { FeaturedShows } from '../home/FeaturedShows';
import { LatestEpisodes } from '../home/LatestEpisodes';
import { StatsSection } from '../home/StatsSection';
import { Episode, FilmItem, PageId } from '../../types';
import { SHOWS, EPISODES, PLATFORM_STATS, FILMS } from '../../data/mockData';
import { Play, Sparkles, ArrowRight, Quote } from 'lucide-react';

interface HomePageProps {
  onWatchMedia: (item: Episode | FilmItem) => void;
  onNavigate: (page: PageId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onWatchMedia,
  onNavigate
}) => {
  const featuredEpisode = EPISODES[0];
  const spotlightFilm = FILMS[0];

  return (
    <div id="rph-home-page" className="space-y-0">
      
      {/* 6.1 Hero Section */}
      <HeroSection
        featuredEpisode={featuredEpisode}
        onWatchEpisode={onWatchMedia}
        onNavigate={onNavigate}
      />

      {/* 6.2 Who We Are Section */}
      <WhoWeAre onNavigate={onNavigate} />

      {/* Spotlight Cinema Banner */}
      <section className="py-16 bg-[#2B1D16]/30 border-b border-[#2B1D16] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl bg-[#0F0F0F] border border-[#C8A95B]/40 overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-2xl">
            
            {/* Media Image */}
            <div className="lg:col-span-7 relative aspect-video lg:aspect-auto min-h-[320px] bg-black">
              <img
                src={spotlightFilm.bannerImage}
                alt={spotlightFilm.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center filter brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black via-transparent to-transparent opacity-80" />
              
              <div className="absolute top-4 left-4 bg-[#C8A95B] text-[#0F0F0F] font-bold text-xs uppercase px-3 py-1 rounded shadow">
                Featured Rebel Film
              </div>

              <button
                onClick={() => onWatchMedia(spotlightFilm)}
                className="absolute inset-0 flex items-center justify-center group"
                aria-label="Play spotlight film"
              >
                <div className="w-16 h-16 rounded-full bg-[#C8A95B] text-[#0F0F0F] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform pl-1">
                  <Play className="w-7 h-7 fill-current" />
                </div>
              </button>
            </div>

            {/* Details */}
            <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-[#C8A95B]">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{spotlightFilm.festivalStatus}</span>
                  <span>•</span>
                  <span>{spotlightFilm.duration}</span>
                </div>

                <h3 className="font-['Cinzel'] text-2xl sm:text-3xl font-bold text-[#F5F1E8]">
                  {spotlightFilm.title}
                </h3>

                <p className="text-xs text-[#C8A95B] font-medium uppercase tracking-wider">
                  {spotlightFilm.subTitle}
                </p>

                <p className="text-xs sm:text-sm text-[#F5F1E8]/75 leading-relaxed font-sans">
                  {spotlightFilm.synopsis}
                </p>

                {spotlightFilm.awards && (
                  <div className="pt-2">
                    <span className="text-[11px] font-mono text-white/40 block mb-1">
                      Festival Honors
                    </span>
                    <p className="text-xs text-[#C8A95B] font-serif italic">
                      "{spotlightFilm.awards[0]}"
                    </p>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center gap-4">
                <button
                  id="spotlight-watch-btn"
                  onClick={() => onWatchMedia(spotlightFilm)}
                  className="flex items-center gap-2 bg-[#C8A95B] hover:bg-[#DFC788] text-[#0F0F0F] font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded transition-colors"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Watch Featurette</span>
                </button>
                <button
                  id="spotlight-all-films-btn"
                  onClick={() => onNavigate('films')}
                  className="text-xs uppercase tracking-wider text-white/70 hover:text-[#C8A95B] font-semibold flex items-center gap-1"
                >
                  <span>All Films</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 6.3 Featured Shows */}
      <FeaturedShows
        shows={SHOWS}
        onSelectShow={(slug) => onNavigate(slug as PageId)}
        onNavigate={onNavigate}
      />

      {/* 6.4 Latest Episodes */}
      <LatestEpisodes
        episodes={EPISODES}
        onPlayEpisode={onWatchMedia}
      />

      {/* 6.5 Statistics Section */}
      <StatsSection stats={PLATFORM_STATS} />

      {/* Editorial Quote & Pitch CTA */}
      <section className="py-20 bg-[#0F0F0F] relative">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <Quote className="w-10 h-10 text-[#C8A95B]/40 mx-auto" />
          <h3 className="font-['Cinzel'] text-xl sm:text-3xl font-bold text-[#F5F1E8] leading-snug">
            "We believe the most revolutionary stories are not found in ivory towers, but in the heartbeats of forgotten heartlands."
          </h3>
          <p className="text-xs sm:text-sm text-[#C8A95B] uppercase tracking-widest font-mono">
            Piyush Singh • Founder & Executive Producer, RPH
          </p>
          <div className="pt-4">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded bg-[#2B1D16] border border-[#C8A95B] text-[#C8A95B] hover:bg-[#C8A95B] hover:text-[#0F0F0F] font-bold text-xs uppercase tracking-wider transition-all"
            >
              <span>Have a Story That Demands to be Heard? Pitch to RPH</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
