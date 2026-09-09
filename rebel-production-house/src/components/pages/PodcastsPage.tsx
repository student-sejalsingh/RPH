import React, { useState } from 'react';
import { Episode } from '../../types';
import { 
  Play, 
  Clock, 
  Mic, 
  Headphones, 
  Filter, 
  User, 
  Sparkles, 
  Search,
  Quote 
} from 'lucide-react';
import { EPISODES, SHOWS } from '../../data/mockData';

interface PodcastsPageProps {
  onPlayEpisode: (episode: Episode) => void;
}

export const PodcastsPage: React.FC<PodcastsPageProps> = ({ onPlayEpisode }) => {
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const podcastShow = SHOWS.find(s => s.id === 'podcast') || SHOWS[0];
  const podcastEpisodes = EPISODES.filter(e => e.showId === 'podcast' || e.category === 'Podcast');
  const featuredPodcastEp = podcastEpisodes[0];

  const tags = ['All', 'Cinema', 'Philosophy', 'Society', 'Investigative Reporting'];

  const filteredEpisodes = podcastEpisodes.filter(ep => {
    const matchesTag = selectedTag === 'All' || 
      ep.keyTopics?.some(t => t.toLowerCase().includes(selectedTag.toLowerCase())) ||
      ep.title.toLowerCase().includes(selectedTag.toLowerCase());

    const matchesSearch = !searchQuery || 
      ep.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ep.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ep.guestName?.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesTag && matchesSearch;
  });

  return (
    <div id="rph-podcasts-page" className="pt-24 pb-20 bg-[#0F0F0F] text-[#F5F1E8]">
      
      {/* Hero Header */}
      <section className="relative py-16 sm:py-20 border-b border-[#2B1D16] bg-gradient-to-b from-[#2B1D16]/40 to-[#0F0F0F] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex flex-col lg:flex-row items-center gap-10">
            {/* Host / Show Cover Banner */}
            <div className="relative w-64 sm:w-80 aspect-square rounded-xl overflow-hidden border-2 border-[#C8A95B] shadow-2xl shrink-0 group">
              <img
                src={podcastShow.image}
                alt={podcastShow.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="px-2 py-0.5 rounded bg-[#C8A95B] text-[#0F0F0F] text-[10px] font-bold uppercase tracking-wider">
                  Host: Piyush Singh
                </span>
                <h3 className="font-['Cinzel'] font-bold text-lg text-white mt-1">
                  54 Recorded Episodes
                </h3>
              </div>
            </div>

            {/* Description & Show Mission */}
            <div className="space-y-4 max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#2B1D16] border border-[#C8A95B]/40 text-xs font-mono text-[#C8A95B]">
                <Mic className="w-3.5 h-3.5 text-[#C8A95B]" />
                <span>RPH Audio & Video Broadcast</span>
              </div>

              <h1 className="font-['Cinzel'] text-3xl sm:text-5xl font-black text-[#F5F1E8] tracking-tight">
                The Piyush Singh Podcast
              </h1>

              <p className="text-sm sm:text-base text-[#F5F1E8]/80 leading-relaxed font-sans">
                {podcastShow.fullDescription}
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  id="podcast-play-latest-btn"
                  onClick={() => onPlayEpisode(featuredPodcastEp)}
                  className="flex items-center gap-2 bg-[#C8A95B] hover:bg-[#DFC788] text-[#0F0F0F] font-bold text-xs uppercase tracking-wider px-6 py-3 rounded shadow-lg transition-colors"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>Play Latest Episode</span>
                </button>

                <div className="flex items-center gap-2 text-xs text-white/60">
                  <Headphones className="w-4 h-4 text-[#C8A95B]" />
                  <span>Available in 4K Video & Studio Master Audio</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Featured Episode Premiere Banner */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl bg-[#2B1D16]/40 border border-[#C8A95B]/40 p-6 sm:p-8 flex flex-col md:flex-row gap-8 items-center justify-between">
          <div className="space-y-3 max-w-2xl">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#C8A95B] block">
              Featured Premiere
            </span>
            <h2 className="font-['Cinzel'] text-xl sm:text-2xl font-bold text-[#F5F1E8]">
              {featuredPodcastEp.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#F5F1E8]/70 line-clamp-2">
              {featuredPodcastEp.description}
            </p>
            {featuredPodcastEp.guestName && (
              <div className="flex items-center gap-2 text-xs text-[#C8A95B] font-semibold pt-1">
                <User className="w-4 h-4" />
                <span>Guest: {featuredPodcastEp.guestName} ({featuredPodcastEp.guestRole})</span>
              </div>
            )}
          </div>

          <button
            id="watch-featured-podcast-btn"
            onClick={() => onPlayEpisode(featuredPodcastEp)}
            className="shrink-0 flex items-center gap-2.5 bg-[#C8A95B] hover:bg-[#DFC788] text-[#0F0F0F] font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded shadow-xl transition-all"
          >
            <Play className="w-4 h-4 fill-current" />
            <span>Watch Episode ({featuredPodcastEp.duration})</span>
          </button>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="py-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Topic Tags */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-white/50 flex items-center gap-1 mr-2">
              <Filter className="w-3.5 h-3.5 text-[#C8A95B]" />
              Topic:
            </span>
            {tags.map((tag) => (
              <button
                key={tag}
                id={`podcast-filter-${tag}`}
                onClick={() => setSelectedTag(tag)}
                className={`px-3 py-1 rounded text-xs font-semibold uppercase tracking-wider transition-colors ${
                  selectedTag === tag
                    ? 'bg-[#C8A95B] text-[#0F0F0F]'
                    : 'bg-[#2B1D16]/50 border border-white/10 text-[#F5F1E8]/70 hover:border-[#C8A95B]'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-white/40 absolute left-3 top-2.5" />
            <input
              id="podcast-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search episodes, guests..."
              className="w-full bg-[#2B1D16]/30 border border-white/10 rounded pl-9 pr-3 py-1.5 text-xs text-[#F5F1E8] placeholder:text-white/30 focus:outline-none focus:border-[#C8A95B]"
            />
          </div>

        </div>
      </section>

      {/* Episodes Catalog Grid */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between text-xs text-white/60">
          <span>Showing {filteredEpisodes.length} Episodes</span>
          <span>Filtered by: {selectedTag}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEpisodes.map((ep) => (
            <div
              key={ep.id}
              id={`podcast-card-${ep.id}`}
              className="group bg-[#2B1D16]/30 border border-[#C8A95B]/20 hover:border-[#C8A95B] rounded-lg overflow-hidden transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-md hover:shadow-xl"
            >
              {/* Thumbnail with overlay */}
              <div 
                className="relative aspect-video w-full overflow-hidden bg-black cursor-pointer"
                onClick={() => onPlayEpisode(ep)}
              >
                <img
                  src={ep.thumbnail}
                  alt={ep.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-2.5 right-2.5 bg-black/80 backdrop-blur px-2 py-0.5 rounded text-[11px] font-mono text-[#C8A95B] border border-[#C8A95B]/30 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>{ep.duration}</span>
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                  <div className="w-12 h-12 rounded-full bg-[#C8A95B] text-[#0F0F0F] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="text-[10px] font-mono text-[#C8A95B] uppercase mb-1">
                    {ep.publishedDate} • {ep.views} Views
                  </div>

                  <h3 
                    onClick={() => onPlayEpisode(ep)}
                    className="font-['Cinzel'] text-sm sm:text-base font-bold text-[#F5F1E8] group-hover:text-[#C8A95B] transition-colors line-clamp-2 cursor-pointer"
                  >
                    {ep.title}
                  </h3>

                  <p className="text-xs text-[#F5F1E8]/70 mt-2 line-clamp-2 leading-relaxed">
                    {ep.description}
                  </p>
                </div>

                {/* Guest & Play Button */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {ep.guestImage ? (
                      <img 
                        src={ep.guestImage} 
                        alt={ep.guestName || 'Guest'} 
                        referrerPolicy="no-referrer"
                        className="w-7 h-7 rounded-full object-cover border border-[#C8A95B]"
                      />
                    ) : (
                      <div className="w-7 h-7 rounded-full bg-[#2B1D16] flex items-center justify-center text-white/50">
                        <User className="w-3.5 h-3.5" />
                      </div>
                    )}
                    <span className="text-xs font-semibold text-[#F5F1E8] truncate max-w-[140px]">
                      {ep.guestName || 'Editorial'}
                    </span>
                  </div>

                  <button
                    onClick={() => onPlayEpisode(ep)}
                    className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C8A95B] hover:text-[#DFC788]"
                  >
                    <span>Watch</span>
                    <Play className="w-3 h-3 fill-current" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Guest Invitation & Host Note */}
      <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
        <div className="p-6 rounded-lg bg-[#2B1D16]/30 border border-[#C8A95B]/30 space-y-2">
          <Quote className="w-6 h-6 text-[#C8A95B] mx-auto" />
          <p className="text-sm font-serif italic text-[#F5F1E8]/90">
            "A genuine conversation is not an interview with pre-approved PR questions. It is an exploration where both speaker and listener risk changing their minds."
          </p>
          <span className="text-xs font-mono text-[#C8A95B] block">
            — Piyush Singh
          </span>
        </div>
      </section>

    </div>
  );
};
