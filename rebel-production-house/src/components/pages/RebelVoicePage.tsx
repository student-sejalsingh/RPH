import React from 'react';
import { Episode } from '../../types';
import { 
  Play, 
  Mic2, 
  Radio, 
  MapPin, 
  Quote, 
  Clock, 
  ArrowRight,
  Flame
} from 'lucide-react';
import { EPISODES, SHOWS } from '../../data/mockData';

interface RebelVoicePageProps {
  onPlayEpisode: (episode: Episode) => void;
}

export const RebelVoicePage: React.FC<RebelVoicePageProps> = ({ onPlayEpisode }) => {
  const rebelVoiceShow = SHOWS.find(s => s.id === 'rebel-voice') || SHOWS[3];
  const rebelVoiceEpisodes = EPISODES.filter(e => e.showId === 'rebel-voice' || e.category === 'Rebel Voice');

  const voiceDispatch = rebelVoiceEpisodes[0] || EPISODES[3];

  const grassrootsEntries = [
    voiceDispatch,
    {
      id: "voice-02",
      title: "The Silent Sacks of Mokama: Pulse Farmers Against Middlemen",
      showId: "rebel-voice",
      showTitle: "Rebel Voice",
      category: "Rebel Voice",
      duration: "21m",
      thumbnail: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
      description: "A collective of pulse farmers in Mokama Taal record an open audio-letter to the Agriculture Ministry explaining how procurement cartels siphon away seasonal margins.",
      guestName: "Ramswaroop Yadav",
      guestRole: "Smallholder Farmer, Mokama",
      publishedDate: "December 04, 2025",
      views: "54K",
      quote: "The soil remembers sweat. The account ledger only records discounts."
    },
    {
      id: "voice-03",
      title: "From Ashok Rajpath: What the Generation of Competitive Exams Truly Wants",
      showId: "rebel-voice",
      showTitle: "Rebel Voice",
      category: "Rebel Voice",
      duration: "29m",
      thumbnail: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
      description: "University students in Patna share unfiltered voice diaries about exam stress, familial expectations, and their creative dreams outside bureaucratic test books.",
      guestName: "Patna Student Collective",
      guestRole: "Undergraduate Voices",
      publishedDate: "December 18, 2025",
      views: "81K",
      quote: "We don't dream of paper stamps; we dream of creating something worthy of human dignity."
    }
  ];

  return (
    <div id="rph-rebel-voice-page" className="pt-24 pb-20 bg-[#0F0F0F] text-[#F5F1E8]">
      
      {/* Hero */}
      <section className="relative py-16 sm:py-24 border-b border-[#2B1D16] bg-gradient-to-b from-[#2B1D16]/50 to-[#0F0F0F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#2B1D16] border border-[#C8A95B]/40 text-xs font-mono text-[#C8A95B]">
            <Radio className="w-4 h-4" />
            <span>Citizen Storytelling & Monologues</span>
          </div>

          <h1 className="font-['Cinzel'] text-3xl sm:text-5xl lg:text-6xl font-black text-[#F5F1E8] tracking-tight">
            Rebel Voice
          </h1>

          <p className="font-serif italic text-lg text-[#C8A95B]">
            "Uncurated perspectives from the heartland. Ordinary citizens voicing extraordinary truths."
          </p>

          <p className="text-sm sm:text-base text-[#F5F1E8]/75 max-w-2xl font-sans">
            No anchors, no celebrity commentators. Rebel Voice hands high-fidelity microphones to rural educators, factory hands, student agitators, and mothers whose lived reality is rarely televised.
          </p>
        </div>
      </section>

      {/* Featured Monologue Spotlight */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl bg-[#2B1D16]/40 border border-[#C8A95B]/40 p-6 sm:p-10 flex flex-col lg:flex-row gap-8 items-center justify-between">
          <div className="space-y-4 max-w-2xl">
            <span className="text-[10px] font-mono text-[#C8A95B] uppercase tracking-widest block">
              Featured Grassroots Monologue
            </span>
            <h2 className="font-['Cinzel'] text-xl sm:text-3xl font-bold text-[#F5F1E8]">
              {voiceDispatch.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#F5F1E8]/75 leading-relaxed">
              {voiceDispatch.description}
            </p>

            {voiceDispatch.quote && (
              <div className="p-4 rounded bg-black/40 border-l-2 border-[#C8A95B] flex items-start gap-2">
                <Quote className="w-4 h-4 text-[#C8A95B] shrink-0 mt-0.5" />
                <span className="text-xs italic font-serif text-[#F5F1E8]/90">
                  "{voiceDispatch.quote}"
                </span>
              </div>
            )}
          </div>

          <button
            onClick={() => onPlayEpisode(voiceDispatch)}
            className="shrink-0 flex items-center gap-2 bg-[#C8A95B] hover:bg-[#DFC788] text-[#0F0F0F] font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded shadow-xl transition-all"
          >
            <Play className="w-4 h-4 fill-current" />
            <span>Listen To Monologue ({voiceDispatch.duration})</span>
          </button>
        </div>
      </section>

      {/* Grassroots Dispatches Grid */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 space-y-1">
          <span className="text-xs uppercase tracking-widest text-[#C8A95B] font-bold">
            Field Recordings
          </span>
          <h3 className="font-['Cinzel'] text-2xl font-bold text-[#F5F1E8]">
            Grassroots Chronicles
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {grassrootsEntries.map((entry) => (
            <div
              key={entry.id}
              className="bg-[#2B1D16]/30 border border-[#C8A95B]/20 hover:border-[#C8A95B] rounded-lg overflow-hidden flex flex-col justify-between group transition-all"
            >
              <div 
                className="relative aspect-video w-full overflow-hidden bg-black cursor-pointer"
                onClick={() => onPlayEpisode(entry as Episode)}
              >
                <img
                  src={entry.thumbnail}
                  alt={entry.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute bottom-2.5 right-2.5 bg-black/80 px-2 py-0.5 rounded text-[11px] font-mono text-[#C8A95B]">
                  {entry.duration}
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                  <div className="w-12 h-12 rounded-full bg-[#C8A95B] text-[#0F0F0F] flex items-center justify-center">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-[10px] font-mono text-[#C8A95B] uppercase block mb-1">
                    Recorded in Field • {entry.publishedDate}
                  </span>
                  <h4 
                    onClick={() => onPlayEpisode(entry as Episode)}
                    className="font-['Cinzel'] text-sm sm:text-base font-bold text-[#F5F1E8] group-hover:text-[#C8A95B] transition-colors line-clamp-2 cursor-pointer"
                  >
                    {entry.title}
                  </h4>
                  <p className="text-xs text-[#F5F1E8]/70 mt-2 line-clamp-2">
                    {entry.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-white/60">
                    Speaker: {entry.guestName}
                  </span>
                  <button
                    onClick={() => onPlayEpisode(entry as Episode)}
                    className="text-[#C8A95B] font-bold uppercase tracking-wider flex items-center gap-1 hover:text-[#DFC788]"
                  >
                    <span>Play</span>
                    <Play className="w-3 h-3 fill-current" />
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
