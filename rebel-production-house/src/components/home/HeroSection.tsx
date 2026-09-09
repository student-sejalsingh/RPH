import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Volume2, 
  VolumeX, 
  Film, 
  Sparkles, 
  ChevronRight,
  Tv
} from 'lucide-react';
import { Episode, PageId } from '../../types';

interface HeroSectionProps {
  featuredEpisode: Episode;
  onWatchEpisode: (episode: Episode) => void;
  onNavigate: (page: PageId) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  featuredEpisode,
  onWatchEpisode,
  onNavigate
}) => {
  const [ambientAudioOn, setAmbientAudioOn] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  // Cinematic reels for rotating background showcase
  const heroReels = [
    {
      title: "The Art of Cinematic Defiance",
      sub: "The Piyush Singh Podcast • Episode 01",
      tagline: "Stories That Challenge. Voices That Matter.",
      desc: "Independent filmmaker Ananya Sen joins Piyush Singh to dismantle commercial film dynasties and celebrate eastern India's storytelling revolution.",
      image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=1920&q=85",
      badge: "Flagship Premiere",
      ctaEpisode: featuredEpisode
    },
    {
      title: "Maati Ke Rang (Colors of the Earth)",
      sub: "Rebel Films • Social Documentary",
      tagline: "Think Different. Live Different.",
      desc: "Following three generations of Madhubani women whose natural pigment art sparked an international movement of female defiance and cultural dignity.",
      image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1920&q=85",
      badge: "International Award Winner",
      pageTarget: 'films' as PageId
    },
    {
      title: "AAR-PAAR: Economic Renaissance of Bihar",
      sub: "RPH Investigative Debate Desk",
      tagline: "Relentless Pursuit of Accountability.",
      desc: "Top economists and grassroots founders clash on reversing migration, developing special economic zones, and unleashing the demographic muscle of Bihar.",
      image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=1920&q=85",
      badge: "High-Voltage Debate",
      pageTarget: 'aar-paar' as PageId
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroReels.length);
    }, 9000);
    return () => clearInterval(timer);
  }, [heroReels.length]);

  const currentReel = heroReels[activeSlide];

  return (
    <section 
      id="rph-hero"
      className="relative min-h-[92vh] lg:min-h-screen flex items-end pb-16 pt-24 md:pt-32 overflow-hidden bg-[#0F0F0F]"
    >
      {/* Background Slides with Zoom & Fade Effect */}
      {heroReels.map((reel, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === activeSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
          }`}
          style={{ transitionProperty: 'opacity, transform' }}
        >
          <img
            src={reel.image}
            alt={reel.title}
            className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-110"
          />
          {/* Multi-layered cinematic vignettes */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F0F0F] via-[#0F0F0F]/80 to-transparent" />
          <div className="absolute inset-0 bg-[#2B1D16]/30 mix-blend-multiply" />
        </div>
      ))}

      {/* Subtle Cinematic Film Grain Overlay */}
      <div className="absolute inset-0 film-grain pointer-events-none opacity-40" />

      {/* Hero Content Layer */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl space-y-6">
          
          {/* Top Pill / Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#2B1D16]/90 border border-[#C8A95B]/60 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-[#C8A95B] animate-ping" />
            <span className="font-mono text-[11px] font-bold text-[#C8A95B] uppercase tracking-widest">
              {currentReel.badge}
            </span>
            <span className="text-white/40 text-xs">•</span>
            <span className="text-[11px] text-[#F5F1E8]/80 font-medium truncate">
              {currentReel.sub}
            </span>
          </div>

          {/* Main Cinematic Title */}
          <div className="space-y-2">
            <h1 className="font-['Cinzel'] text-3xl sm:text-5xl lg:text-6xl font-black text-[#F5F1E8] tracking-tight leading-[1.1]">
              {currentReel.title}
            </h1>
            <p className="font-serif italic text-base sm:text-lg text-[#C8A95B]/90">
              "{currentReel.tagline}"
            </p>
          </div>

          {/* Reel Description */}
          <p className="text-sm sm:text-base text-[#F5F1E8]/80 leading-relaxed max-w-2xl font-sans">
            {currentReel.desc}
          </p>

          {/* CTAs: Watch Now and Explore Catalog */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              id="hero-watch-now-cta"
              onClick={() => onWatchEpisode(featuredEpisode)}
              className="flex items-center gap-2.5 bg-[#C8A95B] hover:bg-[#DFC788] text-[#0F0F0F] font-bold text-sm tracking-wider uppercase px-6 py-3.5 rounded shadow-xl hover:shadow-[#C8A95B]/40 hover:-translate-y-0.5 transition-all group"
            >
              <Play className="w-4 h-4 fill-current transition-transform group-hover:scale-110" />
              <span>Watch Now</span>
            </button>

            <button
              id="hero-explore-shows-cta"
              onClick={() => {
                if (currentReel.pageTarget) {
                  onNavigate(currentReel.pageTarget);
                } else {
                  onNavigate('podcasts');
                }
              }}
              className="flex items-center gap-2 bg-[#2B1D16]/80 hover:bg-[#2B1D16] text-[#F5F1E8] border border-[#C8A95B]/40 hover:border-[#C8A95B] font-semibold text-sm tracking-wider uppercase px-5 py-3.5 rounded transition-all group"
            >
              <Tv className="w-4 h-4 text-[#C8A95B]" />
              <span>Explore Series</span>
              <ChevronRight className="w-4 h-4 text-[#C8A95B] group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              id="hero-about-rph-cta"
              onClick={() => onNavigate('about')}
              className="text-xs uppercase tracking-widest text-white/60 hover:text-[#C8A95B] px-3 py-2 transition-colors underline decoration-white/20 hover:decoration-[#C8A95B]"
            >
              Our Manifesto
            </button>
          </div>

          {/* Slide Indicator Dots & Ambient Audio Simulation */}
          <div className="flex items-center justify-between pt-6 border-t border-white/10">
            <div className="flex items-center gap-2">
              {heroReels.map((_, i) => (
                <button
                  key={i}
                  id={`hero-slide-indicator-${i}`}
                  onClick={() => setActiveSlide(i)}
                  className={`h-1.5 transition-all rounded-full ${
                    i === activeSlide 
                      ? 'w-8 bg-[#C8A95B]' 
                      : 'w-2 bg-white/30 hover:bg-white/60'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[11px] font-mono text-white/50 hidden sm:inline">
                REBEL 4K BROADCAST
              </span>
              <button
                id="hero-ambient-audio-toggle"
                onClick={() => setAmbientAudioOn(!ambientAudioOn)}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-black/40 border border-white/15 hover:border-[#C8A95B]/50 text-xs text-white/80 transition-colors"
                title={ambientAudioOn ? 'Mute Atmosphere' : 'Play Cinematic Atmosphere'}
              >
                {ambientAudioOn ? (
                  <>
                    <Volume2 className="w-3.5 h-3.5 text-[#C8A95B] animate-pulse" />
                    <span className="text-[10px] text-[#C8A95B]">Ambience ON</span>
                  </>
                ) : (
                  <>
                    <VolumeX className="w-3.5 h-3.5 text-white/50" />
                    <span className="text-[10px] text-white/50">Ambience Muted</span>
                  </>
                )}
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
