import React from 'react';
import { FilmItem } from '../../types';
import { 
  Play, 
  Film, 
  Award, 
  Clock, 
  Calendar, 
  Sparkles, 
  User, 
  Video 
} from 'lucide-react';
import { FILMS } from '../../data/mockData';

interface FilmsPageProps {
  onPlayFilm: (film: FilmItem) => void;
}

export const FilmsPage: React.FC<FilmsPageProps> = ({ onPlayFilm }) => {
  const featuredFilm = FILMS[0];

  return (
    <div id="rph-films-page" className="pt-24 pb-20 bg-[#0F0F0F] text-[#F5F1E8]">
      
      {/* Hero Header */}
      <section className="relative py-16 sm:py-24 border-b border-[#2B1D16] bg-gradient-to-b from-[#2B1D16]/50 via-[#0F0F0F] to-[#0F0F0F] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#2B1D16] border border-[#C8A95B]/40 text-xs font-mono text-[#C8A95B]">
              <Film className="w-4 h-4 text-[#C8A95B]" />
              <span>Rebel Films Cinema Studio</span>
            </div>

            <h1 className="font-['Cinzel'] text-3xl sm:text-5xl lg:text-6xl font-black text-[#F5F1E8] tracking-tight">
              Independent Cinema. <br />
              Unapologetic Stories.
            </h1>

            <p className="text-sm sm:text-base text-[#F5F1E8]/75 leading-relaxed font-sans max-w-2xl">
              We produce human-centric documentaries, ethnographic short films, and dramatic indie features that resist the commercial homogeny of mainstream Indian cinema.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Film Premier Banner */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl bg-[#2B1D16]/40 border border-[#C8A95B]/40 overflow-hidden shadow-2xl">
          <div className="relative aspect-video sm:aspect-[21/9] w-full bg-black group">
            <img
              src={featuredFilm.bannerImage}
              alt={featuredFilm.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center filter brightness-[0.75]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-black/40 to-transparent" />

            <div className="absolute top-4 left-4 flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded bg-[#C8A95B] text-[#0F0F0F] font-bold text-xs uppercase tracking-wider shadow">
                Festival Laurels
              </span>
              <span className="px-3 py-1 rounded bg-black/60 backdrop-blur border border-white/20 text-white text-xs font-mono">
                {featuredFilm.duration}
              </span>
            </div>

            {/* Center Play button */}
            <div 
              onClick={() => onPlayFilm(featuredFilm)}
              className="absolute inset-0 flex items-center justify-center cursor-pointer group-hover:scale-105 transition-transform"
            >
              <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-[#C8A95B] text-[#0F0F0F] flex items-center justify-center shadow-2xl pl-1 hover:scale-110 transition-transform">
                <Play className="w-8 h-8 fill-current" />
              </div>
            </div>

            <div className="absolute bottom-6 left-6 right-6 max-w-3xl space-y-2">
              <span className="text-xs font-mono text-[#C8A95B] uppercase tracking-widest">
                Directed by {featuredFilm.director} • {featuredFilm.releaseYear}
              </span>
              <h2 className="font-['Cinzel'] text-2xl sm:text-4xl font-bold text-[#F5F1E8]">
                {featuredFilm.title}
              </h2>
              <p className="text-xs sm:text-sm text-white/80 line-clamp-2">
                {featuredFilm.synopsis}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Film Catalog */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 space-y-1">
          <span className="text-xs uppercase tracking-widest text-[#C8A95B] font-bold">
            Repertoire
          </span>
          <h3 className="font-['Cinzel'] text-2xl font-bold text-[#F5F1E8]">
            Documentaries & Featurettes
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FILMS.map((film) => (
            <div
              key={film.id}
              id={`film-card-${film.id}`}
              className="bg-[#2B1D16]/30 border border-[#C8A95B]/20 hover:border-[#C8A95B] rounded-lg overflow-hidden flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 shadow-lg"
            >
              <div 
                className="relative aspect-video w-full overflow-hidden bg-black cursor-pointer"
                onClick={() => onPlayFilm(film)}
              >
                <img
                  src={film.thumbnail}
                  alt={film.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute top-3 left-3 bg-[#2B1D16]/90 border border-[#C8A95B]/40 px-2.5 py-0.5 rounded text-[10px] uppercase font-bold text-[#C8A95B]">
                  {film.genre}
                </div>
                <div className="absolute bottom-3 right-3 bg-black/80 px-2 py-0.5 rounded text-[11px] font-mono text-[#C8A95B]">
                  {film.duration}
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                  <div className="w-12 h-12 rounded-full bg-[#C8A95B] text-[#0F0F0F] flex items-center justify-center">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-white/50 mb-1">
                    <span>{film.releaseYear}</span>
                    <span>•</span>
                    <span>Dir. {film.director}</span>
                  </div>

                  <h4 
                    onClick={() => onPlayFilm(film)}
                    className="font-['Cinzel'] text-lg font-bold text-[#F5F1E8] group-hover:text-[#C8A95B] transition-colors cursor-pointer"
                  >
                    {film.title}
                  </h4>

                  <p className="text-xs text-[#C8A95B] font-medium mt-0.5">
                    {film.subTitle}
                  </p>

                  <p className="text-xs text-[#F5F1E8]/70 mt-2 line-clamp-3 leading-relaxed">
                    {film.synopsis}
                  </p>

                  {film.awards && film.awards.length > 0 && (
                    <div className="mt-3 flex items-center gap-2 text-xs text-[#C8A95B]">
                      <Award className="w-4 h-4 shrink-0" />
                      <span className="truncate italic">{film.awards[0]}</span>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-white/50">
                    {film.cast ? `Featuring: ${film.cast.slice(0, 2).join(', ')}` : 'Documentary Subject'}
                  </span>

                  <button
                    onClick={() => onPlayFilm(film)}
                    className="flex items-center gap-2 bg-[#C8A95B] text-[#0F0F0F] font-bold text-xs uppercase tracking-wider px-4 py-2 rounded hover:bg-[#DFC788] transition-colors"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>Watch Film</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
