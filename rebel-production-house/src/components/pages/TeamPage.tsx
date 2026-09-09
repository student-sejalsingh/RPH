import React, { useState } from 'react';
import { TeamMember, PageId } from '../../types';
import { 
  Users, 
  Linkedin, 
  Twitter, 
  Instagram, 
  Film, 
  Sparkles, 
  Award, 
  Mail,
  ArrowRight
} from 'lucide-react';
import { TEAM_MEMBERS } from '../../data/mockData';

interface TeamPageProps {
  onNavigate: (page: PageId) => void;
}

export const TeamPage: React.FC<TeamPageProps> = ({ onNavigate }) => {
  const [selectedDept, setSelectedDept] = useState<string>('All');

  const departments = ['All', 'Direction', 'Editorial', 'Cinematography', 'Sound & Music', 'Production'];

  const filteredTeam = selectedDept === 'All'
    ? TEAM_MEMBERS
    : TEAM_MEMBERS.filter(m => m.department === selectedDept);

  return (
    <div id="rph-team-page" className="pt-24 pb-20 bg-[#0F0F0F] text-[#F5F1E8]">
      
      {/* Hero */}
      <section className="relative py-16 sm:py-24 border-b border-[#2B1D16] bg-gradient-to-b from-[#2B1D16]/50 via-[#0F0F0F] to-[#0F0F0F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#2B1D16] border border-[#C8A95B]/40 text-xs font-mono text-[#C8A95B]">
            <Users className="w-4 h-4" />
            <span>The Visionaries Behind RPH</span>
          </div>

          <h1 className="font-['Cinzel'] text-3xl sm:text-5xl lg:text-6xl font-black text-[#F5F1E8] tracking-tight">
            The Creative Collective
          </h1>

          <p className="text-sm sm:text-base text-[#F5F1E8]/75 max-w-2xl font-sans leading-relaxed">
            Filmmakers, investigative journalists, acoustic architects, and production strategists united by a single conviction: that eastern India deserves world-class cinematic representation.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="flex flex-wrap items-center gap-2">
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setSelectedDept(dept)}
              className={`px-3.5 py-1.5 rounded text-xs font-semibold uppercase tracking-wider transition-colors ${
                selectedDept === dept
                  ? 'bg-[#C8A95B] text-[#0F0F0F]'
                  : 'bg-[#2B1D16]/50 border border-white/10 text-[#F5F1E8]/70 hover:border-[#C8A95B]'
              }`}
            >
              {dept}
            </button>
          ))}
        </div>
      </section>

      {/* Team Cards Grid */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTeam.map((member) => (
            <div
              key={member.id}
              id={`team-card-${member.id}`}
              className="bg-[#2B1D16]/30 border border-[#C8A95B]/25 hover:border-[#C8A95B] rounded-xl overflow-hidden transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-lg"
            >
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-[#C8A95B] shrink-0 bg-black">
                    <img
                      src={member.image}
                      alt={member.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#C8A95B] uppercase tracking-wider bg-black/40 px-2 py-0.5 rounded border border-[#C8A95B]/30">
                      {member.department}
                    </span>
                    <h3 className="font-['Cinzel'] text-lg sm:text-xl font-bold text-[#F5F1E8] mt-1 group-hover:text-[#C8A95B] transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs text-white/60">
                      {member.role}
                    </p>
                  </div>
                </div>

                <p className="text-xs text-[#F5F1E8]/75 leading-relaxed font-sans">
                  {member.bio}
                </p>

                <div className="pt-2">
                  <span className="text-[10px] uppercase font-mono text-white/40 block mb-1">
                    Signature Works:
                  </span>
                  <p className="text-xs text-[#C8A95B] font-medium">
                    {member.notableWork}
                  </p>
                </div>
              </div>

              {/* Social links */}
              <div className="px-6 py-3 bg-[#0F0F0F] border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] text-white/40 font-mono">
                  RPH STUDIO CREW
                </span>
                <div className="flex items-center gap-2.5 text-white/60">
                  {member.socials?.twitter && (
                    <a href={member.socials.twitter} target="_blank" rel="noreferrer" className="hover:text-[#C8A95B] transition-colors">
                      <Twitter className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {member.socials?.linkedin && (
                    <a href={member.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-[#C8A95B] transition-colors">
                      <Linkedin className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {member.socials?.instagram && (
                    <a href={member.socials.instagram} target="_blank" rel="noreferrer" className="hover:text-[#C8A95B] transition-colors">
                      <Instagram className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Join the Team Callout */}
      <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
        <div className="p-8 rounded-xl bg-[#2B1D16]/40 border border-[#C8A95B]/40 space-y-3">
          <Sparkles className="w-8 h-8 text-[#C8A95B] mx-auto" />
          <h3 className="font-['Cinzel'] text-xl sm:text-2xl font-bold text-[#F5F1E8]">
            Are You a Rebel Storyteller?
          </h3>
          <p className="text-xs sm:text-sm text-[#F5F1E8]/75 max-w-lg mx-auto leading-relaxed">
            We are always scouting for fearless documentary cinematographers, research fact-checkers, sound recordists, and podcast producers.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 bg-[#C8A95B] hover:bg-[#DFC788] text-[#0F0F0F] font-bold text-xs uppercase tracking-wider px-6 py-3 rounded transition-all"
            >
              <span>Work With Us / Pitch Portfolio</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
