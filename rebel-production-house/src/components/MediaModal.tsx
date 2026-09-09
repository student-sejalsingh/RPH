import React, { useState, useRef, useEffect } from 'react';
import { Episode, FilmItem } from '../types';
import { 
  X, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize2, 
  Clock, 
  Share2, 
  Bookmark, 
  Check, 
  Sparkles, 
  ArrowRight,
  User,
  Quote
} from 'lucide-react';
import { EPISODES } from '../data/mockData';

interface MediaModalProps {
  isOpen: boolean;
  item: Episode | FilmItem | null;
  onClose: () => void;
  onSelectEpisode?: (ep: Episode) => void;
}

export const MediaModal: React.FC<MediaModalProps> = ({
  isOpen,
  item,
  onClose,
  onSelectEpisode
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [copied, setCopied] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'topics' | 'related'>('overview');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === ' ') {
        e.preventDefault();
        togglePlay();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
      setIsPlaying(true);
      setProgress(0);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !item) return null;

  const isEpisode = 'showTitle' in item;
  const episode = isEpisode ? (item as Episode) : null;
  const film = !isEpisode ? (item as FilmItem) : null;

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const duration = videoRef.current.duration || 1;
      setProgress((current / duration) * 100);
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const pos = (e.clientX - rect.left) / rect.width;
      videoRef.current.currentTime = pos * (videoRef.current.duration || 1);
      setProgress(pos * 100);
    }
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const relatedEpisodes = EPISODES.filter(ep => ep.id !== item.id).slice(0, 3);

  // Video source: fallback to a high quality cinematic trailer reel
  const videoSrc = episode?.videoUrl || "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4";

  return (
    <div 
      id="cinematic-media-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/90 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-5xl max-h-[92vh] bg-[#0F0F0F] border border-[#C8A95B]/40 rounded-lg shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-[#2B1D16] border-b border-[#C8A95B]/20 z-10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C8A95B] animate-pulse" />
            <span className="text-xs uppercase tracking-widest text-[#C8A95B] font-semibold">
              RPH Cinema & Broadcast
            </span>
            <span className="text-white/40 text-xs hidden sm:inline">•</span>
            <span className="text-xs text-[#F5F1E8]/70 truncate max-w-xs hidden sm:inline">
              {isEpisode ? episode?.showTitle : 'Rebel Films Feature'}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleShare}
              className="p-1.5 rounded hover:bg-white/10 text-xs text-[#F5F1E8] flex items-center gap-1.5 transition-colors"
              title="Share Link"
            >
              {copied ? <Check className="w-4 h-4 text-[#C8A95B]" /> : <Share2 className="w-4 h-4" />}
              <span className="hidden md:inline">{copied ? 'Copied' : 'Share'}</span>
            </button>

            <button
              onClick={() => setBookmarked(!bookmarked)}
              className={`p-1.5 rounded hover:bg-white/10 text-xs transition-colors flex items-center gap-1.5 ${
                bookmarked ? 'text-[#C8A95B]' : 'text-[#F5F1E8]'
              }`}
              title="Save to Watch Later"
            >
              <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-[#C8A95B]' : ''}`} />
              <span className="hidden md:inline">{bookmarked ? 'Saved' : 'Save'}</span>
            </button>

            <button
              id="close-media-modal-btn"
              onClick={onClose}
              className="p-1.5 rounded-full bg-black/40 hover:bg-[#C8A95B] hover:text-[#0F0F0F] text-white/80 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Container */}
        <div className="overflow-y-auto flex-1 custom-scrollbar">
          
          {/* Cinematic Video Player Container */}
          <div className="relative aspect-video w-full bg-black group overflow-hidden">
            <video
              ref={videoRef}
              src={videoSrc}
              autoPlay
              playsInline
              onTimeUpdate={handleTimeUpdate}
              onClick={togglePlay}
              className="w-full h-full object-cover cursor-pointer"
            />

            {/* Video Controls Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-4 pointer-events-none">
              <div className="flex justify-between items-start pointer-events-auto">
                <span className="px-2.5 py-1 bg-black/60 backdrop-blur rounded text-[11px] font-mono text-[#C8A95B] border border-[#C8A95B]/30">
                  HD 1080P • CINEMATIC AUDIO
                </span>
              </div>

              {/* Bottom Scrubber & Buttons */}
              <div className="space-y-2 pointer-events-auto">
                {/* Progress bar */}
                <div 
                  className="w-full h-1.5 bg-white/20 rounded-full cursor-pointer relative overflow-hidden"
                  onClick={handleSeek}
                >
                  <div 
                    className="h-full bg-[#C8A95B] relative transition-all"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                <div className="flex items-center justify-between text-xs text-white">
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={togglePlay} 
                      className="p-1.5 rounded hover:bg-white/20 text-[#C8A95B]"
                      aria-label={isPlaying ? 'Pause' : 'Play'}
                    >
                      {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-current" />}
                    </button>
                    <button 
                      onClick={toggleMute} 
                      className="p-1.5 rounded hover:bg-white/20 text-white"
                      aria-label={isMuted ? 'Unmute' : 'Mute'}
                    >
                      {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                    </button>
                    <span className="text-[11px] font-mono text-white/70">
                      {isEpisode ? episode?.duration : film?.duration}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => {
                        if (videoRef.current?.requestFullscreen) {
                          videoRef.current.requestFullscreen();
                        }
                      }}
                      className="p-1.5 rounded hover:bg-white/20"
                      aria-label="Fullscreen"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Play/Pause center flash indicator when paused */}
            {!isPlaying && (
              <div 
                onClick={togglePlay}
                className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer"
              >
                <div className="w-16 h-16 rounded-full bg-[#C8A95B] text-[#0F0F0F] flex items-center justify-center shadow-2xl pl-1 hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 fill-current" />
                </div>
              </div>
            )}
          </div>

          {/* Details & Tabs Section */}
          <div className="p-4 sm:p-6 md:p-8 space-y-6">
            
            {/* Title & Metadata Header */}
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded bg-[#2B1D16] border border-[#C8A95B]/40 text-[#C8A95B] text-xs font-semibold uppercase tracking-wider">
                  {isEpisode ? episode?.category : film?.genre}
                </span>
                <span className="text-xs text-white/40 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {isEpisode ? episode?.duration : film?.duration}
                </span>
                {isEpisode && (
                  <span className="text-xs text-white/40">
                    • {episode?.views} views
                  </span>
                )}
                {film && (
                  <span className="text-xs text-[#C8A95B] font-medium">
                    • {film.releaseYear} • Dir. {film.director}
                  </span>
                )}
              </div>

              <h2 className="font-['Cinzel'] text-xl sm:text-2xl md:text-3xl font-bold text-[#F5F1E8] tracking-tight">
                {isEpisode ? episode?.title : film?.title}
              </h2>

              {film && (
                <p className="text-sm font-medium text-[#C8A95B] mt-1">
                  {film.subTitle}
                </p>
              )}
            </div>

            {/* Guest Banner if Episode */}
            {isEpisode && episode?.guestName && (
              <div className="flex items-center gap-4 p-4 rounded bg-[#2B1D16]/50 border border-[#C8A95B]/20">
                {episode.guestImage ? (
                  <img
                    src={episode.guestImage}
                    alt={episode.guestName}
                    referrerPolicy="no-referrer"
                    className="w-12 h-12 rounded-full object-cover border border-[#C8A95B]"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-[#0F0F0F] border border-[#C8A95B] flex items-center justify-center text-[#C8A95B]">
                    <User className="w-6 h-6" />
                  </div>
                )}
                <div>
                  <div className="text-xs text-[#C8A95B] uppercase tracking-wider font-semibold">
                    Featured Guest
                  </div>
                  <div className="text-sm font-bold text-[#F5F1E8]">
                    {episode.guestName}
                  </div>
                  <div className="text-xs text-white/60">
                    {episode.guestRole}
                  </div>
                </div>
              </div>
            )}

            {/* Film Awards if Film */}
            {film?.awards && film.awards.length > 0 && (
              <div className="p-3 bg-[#2B1D16]/40 border border-[#C8A95B]/30 rounded flex flex-wrap gap-2 items-center">
                <Sparkles className="w-4 h-4 text-[#C8A95B] shrink-0" />
                <span className="text-xs text-[#C8A95B] font-semibold uppercase tracking-wider">Accolades:</span>
                {film.awards.map((award, i) => (
                  <span key={i} className="text-xs text-[#F5F1E8] bg-black/40 px-2 py-0.5 rounded border border-white/10">
                    {award}
                  </span>
                ))}
              </div>
            )}

            {/* Tabs Header */}
            <div className="flex border-b border-white/10 space-x-6 text-sm font-medium">
              <button
                onClick={() => setActiveTab('overview')}
                className={`pb-2 transition-colors relative ${
                  activeTab === 'overview'
                    ? 'text-[#C8A95B] font-bold border-b-2 border-[#C8A95B]'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                Overview & Story
              </button>
              {isEpisode && episode?.keyTopics && (
                <button
                  onClick={() => setActiveTab('topics')}
                  className={`pb-2 transition-colors relative ${
                    activeTab === 'topics'
                      ? 'text-[#C8A95B] font-bold border-b-2 border-[#C8A95B]'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  Key Themes & Chapters
                </button>
              )}
              <button
                onClick={() => setActiveTab('related')}
                className={`pb-2 transition-colors relative ${
                  activeTab === 'related'
                    ? 'text-[#C8A95B] font-bold border-b-2 border-[#C8A95B]'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                More From RPH
              </button>
            </div>

            {/* Tab 1: Overview */}
            {activeTab === 'overview' && (
              <div className="space-y-4">
                <p className="text-sm text-[#F5F1E8]/80 leading-relaxed font-sans">
                  {isEpisode ? episode?.description : film?.synopsis}
                </p>

                {isEpisode && episode?.quote && (
                  <div className="p-4 rounded bg-[#2B1D16]/30 border-l-2 border-[#C8A95B] my-4 flex items-start gap-3">
                    <Quote className="w-5 h-5 text-[#C8A95B] shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm italic text-[#F5F1E8]/90 font-serif">
                      "{episode.quote}"
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Tab 2: Key Themes */}
            {activeTab === 'topics' && isEpisode && episode?.keyTopics && (
              <div className="space-y-3">
                <h4 className="text-xs uppercase tracking-widest text-[#C8A95B] font-semibold">
                  Discussion Topics & Ideas Explored
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {episode.keyTopics.map((topic, i) => (
                    <div key={i} className="flex items-center gap-2 p-3 bg-white/5 border border-white/10 rounded text-xs text-[#F5F1E8]">
                      <span className="w-5 h-5 rounded-full bg-[#C8A95B]/20 text-[#C8A95B] flex items-center justify-center font-mono text-[10px]">
                        0{i + 1}
                      </span>
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 3: Related Episodes */}
            {activeTab === 'related' && (
              <div className="space-y-3">
                <h4 className="text-xs uppercase tracking-widest text-[#C8A95B] font-semibold">
                  Explore More Rebel Originals
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {relatedEpisodes.map((rel) => (
                    <div
                      key={rel.id}
                      onClick={() => {
                        if (onSelectEpisode) {
                          onSelectEpisode(rel);
                          setActiveTab('overview');
                        }
                      }}
                      className="group cursor-pointer rounded bg-[#2B1D16]/40 border border-white/10 hover:border-[#C8A95B]/60 p-2.5 transition-all flex flex-col justify-between"
                    >
                      <div className="relative aspect-video rounded overflow-hidden mb-2">
                        <img 
                          src={rel.thumbnail} 
                          alt={rel.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                        <div className="absolute bottom-1 right-1 bg-black/80 px-1.5 py-0.5 rounded text-[10px] text-[#C8A95B] font-mono">
                          {rel.duration}
                        </div>
                      </div>
                      <div className="text-xs font-semibold text-[#F5F1E8] line-clamp-2 group-hover:text-[#C8A95B]">
                        {rel.title}
                      </div>
                      <div className="text-[10px] text-white/50 mt-2 flex items-center justify-between">
                        <span>{rel.showTitle}</span>
                        <ArrowRight className="w-3 h-3 text-[#C8A95B] group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
};
