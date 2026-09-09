import React from 'react';
import { PlatformStat } from '../../types';
import { Mic, Video, Users, TrendingUp } from 'lucide-react';

interface StatsSectionProps {
  stats: PlatformStat[];
}

export const StatsSection: React.FC<StatsSectionProps> = ({ stats }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Mic': return Mic;
      case 'Video': return Video;
      case 'Users': return Users;
      default: return TrendingUp;
    }
  };

  return (
    <section id="statistics-section" className="py-16 sm:py-24 bg-gradient-to-b from-[#0F0F0F] via-[#2B1D16]/50 to-[#0F0F0F] relative border-y border-[#2B1D16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C8A95B] font-bold">
            Movement in Numbers
          </span>
          <h2 className="font-['Cinzel'] text-2xl sm:text-4xl font-bold text-[#F5F1E8] tracking-tight">
            Our Cultural Footprint
          </h2>
          <p className="text-xs sm:text-sm text-[#F5F1E8]/70">
            From humble indie beginnings in Bihar to half a million minds challenged across the subcontinent.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = getIcon(stat.iconName);
            return (
              <div
                key={stat.label}
                id={`stat-card-${idx}`}
                className="p-6 rounded-lg bg-[#0F0F0F]/80 border border-[#C8A95B]/30 hover:border-[#C8A95B] transition-all duration-300 shadow-xl flex flex-col justify-between group hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded bg-[#2B1D16] border border-[#C8A95B]/40 flex items-center justify-center text-[#C8A95B] group-hover:scale-110 group-hover:bg-[#C8A95B] group-hover:text-[#0F0F0F] transition-all">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono text-[#C8A95B] uppercase tracking-wider">
                    VERIFIED REACH
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="font-['Cinzel'] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#C8A95B] tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-sm font-bold text-[#F5F1E8] uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>

                <p className="text-xs text-[#F5F1E8]/60 mt-4 pt-4 border-t border-white/10 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Quote / Sub-text */}
        <div className="mt-14 p-6 rounded-lg bg-[#2B1D16]/40 border border-[#C8A95B]/30 max-w-3xl mx-auto text-center space-y-2">
          <p className="font-serif italic text-sm sm:text-base text-[#F5F1E8]/90">
            "We don't measure our success merely by algorithmic impressions, but by conversations ignited around dinner tables and campus tea stalls."
          </p>
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#C8A95B] block">
            — Rebel Production House Editorial Board
          </span>
        </div>

      </div>
    </section>
  );
};
