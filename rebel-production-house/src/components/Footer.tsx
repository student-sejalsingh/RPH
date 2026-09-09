import React, { useState } from 'react';
import { PageId } from '../types';
import { 
  Instagram, 
  Linkedin, 
  Youtube, 
  Mail, 
  ArrowUpRight, 
  CheckCircle2, 
  MapPin, 
  Phone 
} from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const nav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="rph-footer" className="bg-[#0F0F0F] border-t border-[#2B1D16] text-[#F5F1E8] relative overflow-hidden">
      {/* Decorative top accent glow in Royal Gold */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-[#C8A95B]/40 to-transparent" />

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">
          
          {/* Col 1 & 2: Brand Manifesto & Newsletter */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-sm bg-[#2B1D16] border border-[#C8A95B] flex items-center justify-center font-['Cinzel'] font-black text-sm text-[#C8A95B]">
                RPH
              </div>
              <div>
                <span className="font-['Cinzel'] font-bold text-base tracking-wider text-[#F5F1E8] block">
                  Rebel Production House
                </span>
                <span className="text-[10px] text-[#C8A95B] tracking-widest uppercase font-medium">
                  Stories That Challenge. Voices That Matter.
                </span>
              </div>
            </div>

            <p className="text-sm text-[#F5F1E8]/70 leading-relaxed max-w-md">
              A digital media collective rooted in Bihar, crafting world-class cinematic documentaries, courageous podcasts, investigative journalism, and human stories that question power and celebrate cultural truth.
            </p>

            <div className="pt-2">
              <h4 className="text-xs uppercase tracking-widest text-[#C8A95B] font-semibold mb-3">
                Join The Rebel Dispatch
              </h4>
              <p className="text-xs text-[#F5F1E8]/60 mb-3">
                Get notified of new podcast episodes, secret film screenings, and ground reports.
              </p>

              {subscribed ? (
                <div className="flex items-center gap-2 p-3 bg-[#2B1D16] border border-[#C8A95B]/60 rounded text-xs text-[#C8A95B]">
                  <CheckCircle2 className="w-4 h-4 text-[#C8A95B]" />
                  <span>Welcome to the circle. You will receive our next editorial dispatch.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2 max-w-md">
                  <input
                    id="newsletter-email-input"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address..."
                    className="flex-1 bg-[#2B1D16]/50 border border-white/10 rounded px-3 py-2 text-xs text-[#F5F1E8] placeholder:text-white/30 focus:outline-none focus:border-[#C8A95B]"
                  />
                  <button
                    id="newsletter-submit-btn"
                    type="submit"
                    className="bg-[#C8A95B] hover:bg-[#DFC788] text-[#0F0F0F] font-semibold text-xs uppercase tracking-wider px-4 py-2 rounded transition-colors whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Col 3: Original Shows Slate */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-[#C8A95B] font-bold">
              Original Shows
            </h4>
            <ul className="space-y-2.5 text-xs text-[#F5F1E8]/75">
              <li>
                <button onClick={() => nav('podcasts')} className="hover:text-[#C8A95B] transition-colors flex items-center gap-1 group">
                  <span>The Piyush Singh Podcast</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button onClick={() => nav('aar-paar')} className="hover:text-[#C8A95B] transition-colors flex items-center gap-1 group">
                  <span>AAR-PAAR Debates</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button onClick={() => nav('films')} className="hover:text-[#C8A95B] transition-colors flex items-center gap-1 group">
                  <span>Rebel Films Studio</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button onClick={() => nav('rebel-voice')} className="hover:text-[#C8A95B] transition-colors flex items-center gap-1 group">
                  <span>Rebel Voice</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button onClick={() => nav('rebel-mindset')} className="hover:text-[#C8A95B] transition-colors flex items-center gap-1 group">
                  <span>Rebel Mindset</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button onClick={() => nav('rebel-manch')} className="hover:text-[#C8A95B] transition-colors flex items-center gap-1 group">
                  <span>Rebel Manch Stage</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button onClick={() => nav('bihar-icons')} className="hover:text-[#C8A95B] transition-colors flex items-center gap-1 group">
                  <span>Bihar Icons Archive</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Journalism & Company */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-[#C8A95B] font-bold">
              House & Journalism
            </h4>
            <ul className="space-y-2.5 text-xs text-[#F5F1E8]/75">
              <li>
                <button onClick={() => nav('about')} className="hover:text-[#C8A95B] transition-colors">
                  Our Manifesto & Story
                </button>
              </li>
              <li>
                <button onClick={() => nav('news')} className="hover:text-[#C8A95B] transition-colors">
                  Investigative News Desk
                </button>
              </li>
              <li>
                <button onClick={() => nav('team')} className="hover:text-[#C8A95B] transition-colors">
                  Creative & Editorial Team
                </button>
              </li>
              <li>
                <button onClick={() => nav('contact')} className="hover:text-[#C8A95B] transition-colors">
                  Pitch a Story / Contact Us
                </button>
              </li>
              <li>
                <button onClick={() => nav('contact')} className="hover:text-[#C8A95B] transition-colors">
                  Press & Media Kit
                </button>
              </li>
              <li>
                <button onClick={() => nav('contact')} className="hover:text-[#C8A95B] transition-colors">
                  Studio Space Booking
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Studio Address & Socials */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-[#C8A95B] font-bold">
              Studio & Connect
            </h4>
            <div className="space-y-3 text-xs text-[#F5F1E8]/70">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C8A95B] shrink-0 mt-0.5" />
                <span>Fraser Road / Boring Canal Rd, Patna, Bihar 800001, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C8A95B] shrink-0" />
                <a href="mailto:contact@rebelproductionhouse.com" className="hover:text-[#C8A95B] transition-colors">
                  contact@rebelproductionhouse.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C8A95B] shrink-0" />
                <span>+91 98350 XXXXX</span>
              </div>
            </div>

            <div className="pt-2">
              <span className="text-[10px] uppercase tracking-widest text-white/40 block mb-2">
                Follow Rebel Production House
              </span>
              <div className="flex items-center gap-3">
                <a
                  id="footer-social-youtube"
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="RPH YouTube"
                  className="w-8 h-8 rounded bg-[#2B1D16] border border-[#C8A95B]/30 flex items-center justify-center text-[#F5F1E8] hover:text-[#C8A95B] hover:border-[#C8A95B] transition-all"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  id="footer-social-instagram"
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="RPH Instagram"
                  className="w-8 h-8 rounded bg-[#2B1D16] border border-[#C8A95B]/30 flex items-center justify-center text-[#F5F1E8] hover:text-[#C8A95B] hover:border-[#C8A95B] transition-all"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  id="footer-social-linkedin"
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="RPH LinkedIn"
                  className="w-8 h-8 rounded bg-[#2B1D16] border border-[#C8A95B]/30 flex items-center justify-center text-[#F5F1E8] hover:text-[#C8A95B] hover:border-[#C8A95B] transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  id="footer-social-email"
                  href="mailto:contact@rebelproductionhouse.com"
                  aria-label="Email RPH"
                  className="w-8 h-8 rounded bg-[#2B1D16] border border-[#C8A95B]/30 flex items-center justify-center text-[#F5F1E8] hover:text-[#C8A95B] hover:border-[#C8A95B] transition-all"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#2B1D16] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>
            © {new Date().getFullYear()} Rebel Production House (RPH). All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-[#C8A95B]/80 font-serif italic">
              "Think Different. Live Different."
            </span>
            <span className="hidden md:inline text-white/30">•</span>
            <span className="hidden md:inline">Rooted in Bihar, Built for the World</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
