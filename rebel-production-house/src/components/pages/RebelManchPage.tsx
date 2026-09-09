import React from 'react';
import { Episode } from '../../types';
import { 
  Play, 
  Music, 
  Sparkles, 
  Flame, 
  Clock, 
  Mic, 
  Quote 
} from 'lucide-react';
import { EPISODES, SHOWS } from '../../data/mockData';

interface RebelManchPageProps {
  onPlayEpisode: (episode: Episode) => void;
}

export const RebelManchPage: React.FC<RebelManchPageProps> = ({ onPlayEpisode }) => {
  const manchEpisode = EPISODES.find(e => e.showId === 'rebel-manch') || EPISODES[5];

  const manchPerformances = [
    manchEpisode,
    {
      id: "manch-02",
      title: "'Rashmirathi' Recital Under the Banyan Tree: Krishna Ki Chetwani",
      showId: "rebel-manch",
      showTitle: "Rebel Manch",
      category: "Rebel Manch",
      duration: "14m",
      thumbnail: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=800&q=80",
      description: "A theatrical single-actor dramatic recital of Ramdhari Singh Dinkar's immortal war monologue where Lord Krishna delivers his final ultimatum in Hastinapur.",
      guestName: "Avinash Mishra",
      guestRole: "Classical Hindi Theater Artist",
      publishedDate: "December 02, 2025",
      views: "145K",
      quote: "Hit-vachan nahi tune maana, maitri ka mulya na pehchana! (हित-वचन नहीं तूने माना, मैत्री का मूल्य न पहचाना!)"
    },
    {
      id: "manch-03",
      title: "The Bidesiya Echo: Sarangi & Dholak Live Acoustic Jam",
      showId: "rebel-manch",
      showTitle: "Rebel Manch",
      category: "Rebel Manch",
      duration: "22m",
      thumbnail: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=800&q=80",
      description: "Folk virtuosos from Saran perform Bhikhari Thakur's poignant ballads depicting the heartbreak of women waiting for migrant husbands by the railway tracks.",
      guestName: "Chhapra Folk Ensemble",
      guestRole: "Subaltern Sarangi Masters",
      publishedDate: "December 22, 2025",
      views: "98K",
      quote: "The bow strokes the gut string, and fifty miles of distance vanishes in a tear."
    }
  ];

  return (
    <div id="rph-rebel-manch-page" className="pt-24 pb-20 bg-[#0F0F0F] text-[#F5F1E8]">
      
      {/* Hero */}
      <section className="relative py-16 sm:py-24 border-b border-[#2B1D16] bg-gradient-to-b from-[#2B1D16]/60 to-[#0F0F0F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#2B1D16] border border-[#C8A95B]/40 text-xs font-mono text-[#C8A95B]">
            <Music className="w-4 h-4" />
            <span>Spoken Word, Folk Rhythms & Theater</span>
          </div>

          <h1 className="font-['Cinzel'] text-3xl sm:text-5xl lg:text-6xl font-black text-[#F5F1E8] tracking-tight">
            Rebel Manch
          </h1>

          <p className="font-serif italic text-lg text-[#C8A95B]">
            "Where verses light torches in the dark. The acoustic amphitheater of living rebellion."
          </p>

          <p className="text-sm sm:text-base text-[#F5F1E8]/75 max-w-2xl font-sans">
            Rebel Manch provides a sanctuary for spoken-word poets, classical dramatists, revolutionary lyricists, and folk musicians to perform with raw acoustic purity and cinematic camera work.
          </p>
        </div>
      </section>

      {/* Featured Stage Performance */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl bg-[#2B1D16]/40 border border-[#C8A95B]/40 p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-4">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#C8A95B]">
              Recorded Live on Patna Ghat
            </span>
            <h2 className="font-['Cinzel'] text-xl sm:text-3xl font-bold text-[#F5F1E8]">
              {manchEpisode.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#F5F1E8]/75 leading-relaxed font-sans">
              {manchEpisode.description}
            </p>

            {manchEpisode.quote && (
              <div className="p-4 rounded bg-[#0F0F0F] border-l-2 border-[#C8A95B] flex items-start gap-3">
                <Quote className="w-4 h-4 text-[#C8A95B] shrink-0 mt-0.5" />
                <p className="text-xs italic font-serif text-[#F5F1E8]/90">
                  "{manchEpisode.quote}"
                </p>
              </div>
            )}

            <div className="flex items-center gap-4 text-xs text-white/50 font-mono pt-1">
              <span>Duration: {manchEpisode.duration}</span>
              <span>•</span>
              <span>{manchEpisode.views} Views</span>
            </div>
          </div>

          <div className="lg:col-span-5 relative aspect-video rounded-lg overflow-hidden border border-[#C8A95B]/40 group cursor-pointer" onClick={() => onPlayEpisode(manchEpisode)}>
            <img
              src={manchEpisode.thumbnail}
              alt={manchEpisode.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-[#C8A95B] text-[#0F0F0F] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                <Play className="w-6 h-6 fill-current ml-0.5" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Stage Performances Grid */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 space-y-1">
          <span className="text-xs uppercase tracking-widest text-[#C8A95B] font-bold">
            Live Recordings
          </span>
          <h3 className="font-['Cinzel'] text-2xl font-bold text-[#F5F1E8]">
            The Manch Repertoire
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {manchPerformances.map((perf) => (
            <div
              key={perf.id}
              className="bg-[#2B1D16]/30 border border-[#C8A95B]/20 hover:border-[#C8A95B] rounded-lg overflow-hidden flex flex-col justify-between group transition-all"
            >
              <div 
                className="relative aspect-video w-full overflow-hidden bg-black cursor-pointer"
                onClick={() => onPlayEpisode(perf as Episode)}
              >
                <img
                  src={perf.thumbnail}
                  alt={perf.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute bottom-2.5 right-2.5 bg-black/80 px-2 py-0.5 rounded text-[11px] font-mono text-[#C8A95B]">
                  {perf.duration}
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                  <div className="w-12 h-12 rounded-full bg-[#C8A95B] text-[#0F0F0F] flex items-center justify-center">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h4 
                    onClick={() => onPlayEpisode(perf as Episode)}
                    className="font-['Cinzel'] text-sm sm:text-base font-bold text-[#F5F1E8] group-hover:text-[#C8A95B] transition-colors line-clamp-2 cursor-pointer"
                  >
                    {perf.title}
                  </h4>
                  <p className="text-xs text-[#F5F1E8]/70 mt-2 line-clamp-2">
                    {perf.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-white/60">
                    {perf.guestName}
                  </span>
                  <button
                    onClick={() => onPlayEpisode(perf as Episode)}
                    className="text-[#C8A95B] font-bold uppercase tracking-wider flex items-center gap-1 hover:text-[#DFC788]"
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

    </div>
  );
};
