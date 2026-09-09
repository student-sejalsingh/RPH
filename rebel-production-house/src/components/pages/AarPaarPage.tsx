import React, { useState } from 'react';
import { Episode } from '../../types';
import { 
  Play, 
  Clock, 
  Flame, 
  Scale, 
  ShieldAlert, 
  CheckCircle2, 
  MessageSquare,
  TrendingUp,
  Award
} from 'lucide-react';
import { EPISODES, SHOWS } from '../../data/mockData';

interface AarPaarPageProps {
  onPlayEpisode: (episode: Episode) => void;
}

export const AarPaarPage: React.FC<AarPaarPageProps> = ({ onPlayEpisode }) => {
  const aarPaarShow = SHOWS.find(s => s.id === 'aar-paar') || SHOWS[1];
  const aarPaarEpisode = EPISODES.find(e => e.showId === 'aar-paar') || EPISODES[1];

  const [pollVoted, setPollVoted] = useState<string | null>(null);
  const [pollCounts, setPollCounts] = useState({ optionA: 64, optionB: 36 });

  const handleVote = (option: 'optionA' | 'optionB') => {
    if (!pollVoted) {
      setPollVoted(option);
      if (option === 'optionA') {
        setPollCounts(prev => ({ ...prev, optionA: prev.optionA + 1 }));
      } else {
        setPollCounts(prev => ({ ...prev, optionB: prev.optionB + 1 }));
      }
    }
  };

  const debateEpisodes = [
    aarPaarEpisode,
    {
      id: "aar-02",
      title: "The Special Category Status Dilemma: Federal Right or Political Football?",
      showId: "aar-paar",
      showTitle: "AAR-PAAR",
      category: "AAR-PAAR",
      duration: "52m",
      thumbnail: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
      description: "Former NITI Aayog advisors and regional ministers square off on whether special status will genuinely ignite private investment or perpetuate fiscal dependency.",
      guestName: "Sanjay Kumar vs. Dr. Pratibha Das",
      guestRole: "Policy Think-Tank Fellow vs. Senior Advocate",
      publishedDate: "October 29, 2025",
      views: "124K",
      featured: true,
      keyTopics: ["Federal Fiscal Autonomy", "Special Category Status", "Revenue Sharing", "Regional Parity"]
    },
    {
      id: "aar-03",
      title: "Paper Leaks and Exam Cartels: Who Stole the Aspirations of Millions?",
      showId: "aar-paar",
      showTitle: "AAR-PAAR",
      category: "AAR-PAAR",
      duration: "44m",
      thumbnail: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
      description: "Undercover evidence from coaching hubs in Kankarbagh and Delhi, dissecting the political nexus behind competitive exam irregularities.",
      guestName: "Aspirant Union Reps & Investigative Sleuths",
      guestRole: "Student Coalition Leaders",
      publishedDate: "November 08, 2025",
      views: "215K",
      featured: false,
      keyTopics: ["Exam Security", "Coaching Mafia", "Administrative Reform", "Youth Despair"]
    }
  ];

  return (
    <div id="rph-aar-paar-page" className="pt-24 pb-20 bg-[#0F0F0F] text-[#F5F1E8]">
      
      {/* Show Hero */}
      <section className="relative py-16 sm:py-24 border-b border-[#2B1D16] bg-gradient-to-b from-[#2B1D16]/60 via-[#0F0F0F] to-[#0F0F0F] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#2B1D16] border border-[#C8A95B]/50 text-xs font-mono text-[#C8A95B]">
              <Scale className="w-4 h-4 text-[#C8A95B]" />
              <span>RPH Hard-Hitting Debates</span>
            </div>

            <h1 className="font-['Cinzel'] text-4xl sm:text-6xl font-black text-[#F5F1E8] tracking-tight">
              AAR-PAAR
            </h1>

            <p className="font-serif italic text-lg text-[#C8A95B]">
              "No diplomatic filters. When truths collide, only accountability stands."
            </p>

            <p className="text-sm sm:text-base text-[#F5F1E8]/80 leading-relaxed font-sans">
              AAR-PAAR is Rebel Production House's flagship investigative confrontation show. We put legislators, civil servants, corporate titans, and grassroots leaders under the spotlight to answer the questions that matter most to citizens.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                id="aar-paar-watch-featured"
                onClick={() => onPlayEpisode(aarPaarEpisode)}
                className="flex items-center gap-2 bg-[#C8A95B] hover:bg-[#DFC788] text-[#0F0F0F] font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded shadow-xl transition-all"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Watch Current Clash ({aarPaarEpisode.duration})</span>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Featured Arena Banner */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl bg-[#2B1D16]/40 border border-[#C8A95B]/30 p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-[#C8A95B]">
              <Flame className="w-4 h-4" />
              <span>LATEST ARENA DEBATE</span>
            </div>

            <h2 className="font-['Cinzel'] text-xl sm:text-3xl font-bold text-[#F5F1E8] leading-snug">
              {aarPaarEpisode.title}
            </h2>

            <p className="text-xs sm:text-sm text-[#F5F1E8]/75 leading-relaxed font-sans">
              {aarPaarEpisode.description}
            </p>

            <div className="pt-2 flex items-center gap-4 text-xs text-white/60">
              <span>Duration: {aarPaarEpisode.duration}</span>
              <span>•</span>
              <span>{aarPaarEpisode.views} Citizen Views</span>
            </div>
          </div>

          {/* Interactive Audience Pulse Poll */}
          <div className="lg:col-span-5 bg-[#0F0F0F] border border-[#C8A95B]/40 rounded-lg p-6 space-y-4 shadow-xl">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-[#C8A95B] uppercase tracking-widest">
                Live Citizen Verdict
              </span>
              <MessageSquare className="w-4 h-4 text-[#C8A95B]" />
            </div>

            <h4 className="text-xs font-bold text-[#F5F1E8] leading-tight">
              Can industrial SEZs in Tier-2 Bihar reverse the generational brain drain within this decade?
            </h4>

            <div className="space-y-2 pt-2">
              <button
                onClick={() => handleVote('optionA')}
                className={`w-full p-3 rounded text-xs text-left border flex items-center justify-between transition-all ${
                  pollVoted === 'optionA'
                    ? 'bg-[#C8A95B] text-[#0F0F0F] font-bold border-[#C8A95B]'
                    : 'bg-[#2B1D16]/40 border-white/10 text-white/80 hover:border-[#C8A95B]/60'
                }`}
              >
                <span>Yes, with tax parity & logistics infrastructure</span>
                <span className="font-mono">{pollCounts.optionA}%</span>
              </button>

              <button
                onClick={() => handleVote('optionB')}
                className={`w-full p-3 rounded text-xs text-left border flex items-center justify-between transition-all ${
                  pollVoted === 'optionB'
                    ? 'bg-[#C8A95B] text-[#0F0F0F] font-bold border-[#C8A95B]'
                    : 'bg-[#2B1D16]/40 border-white/10 text-white/80 hover:border-[#C8A95B]/60'
                }`}
              >
                <span>No, systemic red tape & land disputes will stall it</span>
                <span className="font-mono">{pollCounts.optionB}%</span>
              </button>
            </div>

            {pollVoted && (
              <p className="text-[11px] text-[#C8A95B] text-center pt-1 font-mono">
                ✓ Your vote recorded. Join the debate in comments on YouTube!
              </p>
            )}
          </div>

        </div>
      </section>

      {/* Episode Archive */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 space-y-1">
          <span className="text-xs uppercase tracking-widest text-[#C8A95B] font-bold">
            The Debate Archive
          </span>
          <h3 className="font-['Cinzel'] text-2xl font-bold text-[#F5F1E8]">
            All AAR-PAAR Episodes
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {debateEpisodes.map((ep) => (
            <div
              key={ep.id}
              className="bg-[#2B1D16]/30 border border-[#C8A95B]/20 hover:border-[#C8A95B] rounded-lg overflow-hidden flex flex-col justify-between transition-all group"
            >
              <div 
                className="relative aspect-video w-full overflow-hidden bg-black cursor-pointer"
                onClick={() => onPlayEpisode(ep as Episode)}
              >
                <img
                  src={ep.thumbnail}
                  alt={ep.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute bottom-2.5 right-2.5 bg-black/80 px-2 py-0.5 rounded text-[11px] font-mono text-[#C8A95B]">
                  {ep.duration}
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
                    onClick={() => onPlayEpisode(ep as Episode)}
                    className="font-['Cinzel'] text-sm sm:text-base font-bold text-[#F5F1E8] group-hover:text-[#C8A95B] transition-colors line-clamp-2 cursor-pointer"
                  >
                    {ep.title}
                  </h4>
                  <p className="text-xs text-[#F5F1E8]/70 mt-2 line-clamp-2">
                    {ep.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-white/50 text-[11px]">
                    {ep.guestName}
                  </span>
                  <button
                    onClick={() => onPlayEpisode(ep as Episode)}
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
