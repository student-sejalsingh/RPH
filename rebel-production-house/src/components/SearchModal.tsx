import React, { useState, useMemo, useEffect } from 'react';
import { 
  X, 
  Search, 
  Play, 
  Tv, 
  Film, 
  FileText, 
  Sparkles, 
  Users, 
  ArrowRight 
} from 'lucide-react';
import { EPISODES, SHOWS, FILMS, NEWS_ARTICLES, BIHAR_ICONS, TEAM_MEMBERS } from '../data/mockData';
import { Episode, FilmItem, PageId } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectMedia: (item: Episode | FilmItem) => void;
  onNavigate: (page: PageId) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectMedia,
  onNavigate
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const results = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return null;

    const matchedEpisodes = EPISODES.filter(
      e => e.title.toLowerCase().includes(q) ||
           e.description.toLowerCase().includes(q) ||
           e.guestName?.toLowerCase().includes(q) ||
           e.category.toLowerCase().includes(q)
    );

    const matchedShows = SHOWS.filter(
      s => s.title.toLowerCase().includes(q) ||
           s.shortDescription.toLowerCase().includes(q) ||
           s.category.toLowerCase().includes(q)
    );

    const matchedFilms = FILMS.filter(
      f => f.title.toLowerCase().includes(q) ||
           f.synopsis.toLowerCase().includes(q) ||
           f.director.toLowerCase().includes(q) ||
           f.genre.toLowerCase().includes(q)
    );

    const matchedNews = NEWS_ARTICLES.filter(
      n => n.title.toLowerCase().includes(q) ||
           n.excerpt.toLowerCase().includes(q) ||
           n.author.toLowerCase().includes(q)
    );

    const matchedIcons = BIHAR_ICONS.filter(
      b => b.name.toLowerCase().includes(q) ||
           b.bio.toLowerCase().includes(q) ||
           b.domain.toLowerCase().includes(q)
    );

    const matchedTeam = TEAM_MEMBERS.filter(
      t => t.name.toLowerCase().includes(q) ||
           t.role.toLowerCase().includes(q) ||
           t.department.toLowerCase().includes(q)
    );

    return {
      episodes: matchedEpisodes,
      shows: matchedShows,
      films: matchedFilms,
      news: matchedNews,
      icons: matchedIcons,
      team: matchedTeam,
      totalCount: matchedEpisodes.length + matchedShows.length + matchedFilms.length + matchedNews.length + matchedIcons.length + matchedTeam.length
    };
  }, [query]);

  if (!isOpen) return null;

  return (
    <div 
      id="rph-search-modal"
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-3xl bg-[#0F0F0F] border border-[#C8A95B]/40 rounded-lg shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3 bg-[#2B1D16] border-b border-[#C8A95B]/20 gap-3">
          <Search className="w-5 h-5 text-[#C8A95B]" />
          <input
            id="global-search-input"
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search podcasts, films, debates, news, Bihar icons..."
            className="flex-1 bg-transparent text-sm sm:text-base text-[#F5F1E8] placeholder:text-white/40 focus:outline-none"
          />
          {query && (
            <button 
              onClick={() => setQuery('')}
              className="p-1 rounded hover:bg-white/10 text-white/60"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-white/80"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Area */}
        <div className="overflow-y-auto p-4 space-y-6 flex-1 custom-scrollbar">
          {!query ? (
            <div className="text-center py-12 space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#2B1D16] border border-[#C8A95B]/30 flex items-center justify-center mx-auto text-[#C8A95B]">
                <Search className="w-6 h-6" />
              </div>
              <p className="text-sm text-[#F5F1E8]/70">
                Type keywords like "Cinema", "Podcast", "Nalanda", "Dinkar", or "Economy"
              </p>
              <div className="flex flex-wrap justify-center gap-2 pt-2">
                {['Piyush Singh', 'AAR-PAAR', 'Nalanda', 'Rebel Films', 'Madhubani', 'Dinkar'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-2.5 py-1 rounded bg-[#2B1D16]/60 border border-[#C8A95B]/30 text-xs text-[#C8A95B] hover:bg-[#C8A95B] hover:text-[#0F0F0F] transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : results?.totalCount === 0 ? (
            <div className="text-center py-12 text-white/50 text-sm">
              No results found for "{query}". Try a different keyword or check our shows tab.
            </div>
          ) : (
            <div className="space-y-6">
              
              {/* Matched Episodes */}
              {results && results.episodes.length > 0 && (
                <div className="space-y-2">
                  <div className="text-xs uppercase tracking-widest text-[#C8A95B] font-semibold flex items-center gap-2">
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Episodes ({results.episodes.length})</span>
                  </div>
                  <div className="space-y-2">
                    {results.episodes.map((ep) => (
                      <div
                        key={ep.id}
                        onClick={() => {
                          onSelectMedia(ep);
                          onClose();
                        }}
                        className="flex items-center gap-3 p-2.5 rounded bg-[#2B1D16]/30 border border-white/5 hover:border-[#C8A95B]/50 hover:bg-[#2B1D16]/60 cursor-pointer transition-all group"
                      >
                        <img 
                          src={ep.thumbnail} 
                          alt={ep.title}
                          referrerPolicy="no-referrer"
                          className="w-16 h-12 rounded object-cover shrink-0" 
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="text-xs sm:text-sm font-semibold text-[#F5F1E8] group-hover:text-[#C8A95B] truncate">
                            {ep.title}
                          </h4>
                          <p className="text-[11px] text-white/50 truncate">
                            {ep.showTitle} • {ep.duration} • {ep.guestName || 'Editorial'}
                          </p>
                        </div>
                        <Play className="w-4 h-4 text-[#C8A95B] shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Matched Films */}
              {results && results.films.length > 0 && (
                <div className="space-y-2">
                  <div className="text-xs uppercase tracking-widest text-[#C8A95B] font-semibold flex items-center gap-2">
                    <Film className="w-3.5 h-3.5" />
                    <span>Rebel Films ({results.films.length})</span>
                  </div>
                  <div className="space-y-2">
                    {results.films.map((film) => (
                      <div
                        key={film.id}
                        onClick={() => {
                          onSelectMedia(film);
                          onClose();
                        }}
                        className="flex items-center gap-3 p-2.5 rounded bg-[#2B1D16]/30 border border-white/5 hover:border-[#C8A95B]/50 hover:bg-[#2B1D16]/60 cursor-pointer transition-all group"
                      >
                        <img 
                          src={film.thumbnail} 
                          alt={film.title}
                          referrerPolicy="no-referrer"
                          className="w-16 h-12 rounded object-cover shrink-0" 
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="text-xs sm:text-sm font-semibold text-[#F5F1E8] group-hover:text-[#C8A95B] truncate">
                            {film.title}
                          </h4>
                          <p className="text-[11px] text-white/50 truncate">
                            {film.subTitle} • {film.duration} • Dir. {film.director}
                          </p>
                        </div>
                        <Play className="w-4 h-4 text-[#C8A95B] shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Matched Shows */}
              {results && results.shows.length > 0 && (
                <div className="space-y-2">
                  <div className="text-xs uppercase tracking-widest text-[#C8A95B] font-semibold flex items-center gap-2">
                    <Tv className="w-3.5 h-3.5" />
                    <span>Shows & Pillars ({results.shows.length})</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {results.shows.map((show) => (
                      <div
                        key={show.id}
                        onClick={() => {
                          onNavigate(show.slug as PageId);
                          onClose();
                        }}
                        className="p-3 rounded bg-[#2B1D16]/30 border border-white/5 hover:border-[#C8A95B]/50 cursor-pointer transition-all"
                      >
                        <span className="text-xs font-bold text-[#F5F1E8] block hover:text-[#C8A95B]">
                          {show.title}
                        </span>
                        <span className="text-[10px] text-white/50 block line-clamp-1">
                          {show.shortDescription}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Matched News */}
              {results && results.news.length > 0 && (
                <div className="space-y-2">
                  <div className="text-xs uppercase tracking-widest text-[#C8A95B] font-semibold flex items-center gap-2">
                    <FileText className="w-3.5 h-3.5" />
                    <span>Journalism & Ground Reports ({results.news.length})</span>
                  </div>
                  <div className="space-y-2">
                    {results.news.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => {
                          onNavigate('news');
                          onClose();
                        }}
                        className="p-3 rounded bg-[#2B1D16]/30 border border-white/5 hover:border-[#C8A95B]/50 cursor-pointer transition-all"
                      >
                        <h4 className="text-xs font-bold text-[#F5F1E8] hover:text-[#C8A95B]">
                          {item.title}
                        </h4>
                        <p className="text-[11px] text-white/50 line-clamp-1 mt-0.5">
                          By {item.author} • {item.readTime}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Matched Bihar Icons */}
              {results && results.icons.length > 0 && (
                <div className="space-y-2">
                  <div className="text-xs uppercase tracking-widest text-[#C8A95B] font-semibold flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Bihar Icons ({results.icons.length})</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {results.icons.map((icon) => (
                      <div
                        key={icon.id}
                        onClick={() => {
                          onNavigate('bihar-icons');
                          onClose();
                        }}
                        className="flex items-center gap-3 p-2.5 rounded bg-[#2B1D16]/30 border border-white/5 hover:border-[#C8A95B]/50 cursor-pointer"
                      >
                        <img 
                          src={icon.image} 
                          alt={icon.name}
                          referrerPolicy="no-referrer"
                          className="w-10 h-10 rounded-full object-cover shrink-0" 
                        />
                        <div className="min-w-0">
                          <span className="text-xs font-bold text-[#F5F1E8] block truncate">
                            {icon.name}
                          </span>
                          <span className="text-[10px] text-[#C8A95B] block truncate">
                            {icon.domain}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="p-3 bg-[#0F0F0F] border-t border-white/10 text-center text-[11px] text-white/40">
          Press ESC to dismiss • Click any media item to stream
        </div>
      </div>
    </div>
  );
};
