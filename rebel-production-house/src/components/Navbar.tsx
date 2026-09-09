import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { 
  Play, 
  Search, 
  Menu, 
  X, 
  Film, 
  Tv, 
  ChevronDown 
} from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenSearch: () => void;
  onWatchNow: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenSearch,
  onWatchNow,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showsDropdownOpen, setShowsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const primaryNavItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'podcasts', label: 'Podcasts' },
    { id: 'aar-paar', label: 'AAR-PAAR' },
    { id: 'films', label: 'Films' },
    { id: 'news', label: 'News' },
  ];

  const showNavItems: { id: PageId; label: string; desc: string }[] = [
    { id: 'podcasts', label: 'The Piyush Singh Podcast', desc: 'Unfiltered long-form dialogues' },
    { id: 'aar-paar', label: 'AAR-PAAR', desc: 'Investigative debates & accountability' },
    { id: 'films', label: 'Rebel Films', desc: 'Social documentaries & indie cinema' },
    { id: 'rebel-voice', label: 'Rebel Voice', desc: 'Grassroots citizen monologues' },
    { id: 'rebel-mindset', label: 'Rebel Mindset', desc: 'Philosophy & mental grit' },
    { id: 'rebel-manch', label: 'Rebel Manch', desc: 'Spoken word, poetry & stage' },
    { id: 'bihar-icons', label: 'Bihar Icons', desc: 'Legends & contemporary trailblazers' },
  ];

  const secondaryNavItems: { id: PageId; label: string }[] = [
    { id: 'rebel-voice', label: 'Rebel Voice' },
    { id: 'rebel-mindset', label: 'Rebel Mindset' },
    { id: 'rebel-manch', label: 'Rebel Manch' },
    { id: 'bihar-icons', label: 'Bihar Icons' },
    { id: 'team', label: 'Team' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    setShowsDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        id="rph-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0F0F0F]/95 backdrop-blur-md border-b border-[#C8A95B]/20 py-3 shadow-2xl shadow-black/80'
            : 'bg-gradient-to-b from-[#0F0F0F]/90 via-[#0F0F0F]/60 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo Brand */}
          <button
            id="brand-logo-btn"
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-3 text-left group focus:outline-none"
          >
            <div className="relative w-10 h-10 rounded-sm bg-[#2B1D16] border border-[#C8A95B] flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105 shadow-md">
              <span className="font-['Cinzel'] font-black text-sm tracking-wider text-[#C8A95B]">
                RPH
              </span>
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#C8A95B]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="font-['Cinzel'] font-bold text-sm tracking-widest text-[#F5F1E8] uppercase group-hover:text-[#C8A95B] transition-colors">
                Rebel Production House
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#C8A95B] font-medium hidden sm:block">
                Stories That Challenge
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {primaryNavItems.map((item) => (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleLinkClick(item.id)}
                className={`px-3 py-1.5 rounded text-xs tracking-wider uppercase font-semibold transition-all relative ${
                  currentPage === item.id
                    ? 'text-[#C8A95B] bg-[#2B1D16]/50 border-b-2 border-[#C8A95B]'
                    : 'text-[#F5F1E8]/80 hover:text-[#C8A95B] hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}

            {/* Shows Hub Dropdown */}
            <div className="relative">
              <button
                id="nav-shows-dropdown-toggle"
                onClick={() => setShowsDropdownOpen(!showsDropdownOpen)}
                onBlur={() => setTimeout(() => setShowsDropdownOpen(false), 250)}
                className={`flex items-center gap-1 px-3 py-1.5 rounded text-xs tracking-wider uppercase font-semibold transition-all ${
                  ['rebel-voice', 'rebel-mindset', 'rebel-manch', 'bihar-icons'].includes(currentPage)
                    ? 'text-[#C8A95B] bg-[#2B1D16]/50 border-b-2 border-[#C8A95B]'
                    : 'text-[#F5F1E8]/80 hover:text-[#C8A95B] hover:bg-white/5'
                }`}
              >
                <span>Originals</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showsDropdownOpen ? 'rotate-180 text-[#C8A95B]' : ''}`} />
              </button>

              {showsDropdownOpen && (
                <div 
                  id="shows-dropdown-menu"
                  className="absolute left-0 mt-2 w-72 bg-[#0F0F0F] border border-[#C8A95B]/30 rounded shadow-2xl p-2 z-50 divide-y divide-white/5"
                >
                  <div className="px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-[#C8A95B]">
                    RPH Content Slate
                  </div>
                  <div className="py-1">
                    {showNavItems.map((show) => (
                      <button
                        key={show.id}
                        id={`dropdown-item-${show.id}`}
                        onClick={() => handleLinkClick(show.id)}
                        className="w-full text-left px-3 py-2 rounded hover:bg-[#2B1D16]/70 transition-colors flex flex-col group"
                      >
                        <span className="text-xs font-medium text-[#F5F1E8] group-hover:text-[#C8A95B]">
                          {show.label}
                        </span>
                        <span className="text-[10px] text-white/50">
                          {show.desc}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Team & Contact Links */}
            <button
              id="nav-link-team"
              onClick={() => handleLinkClick('team')}
              className={`px-3 py-1.5 rounded text-xs tracking-wider uppercase font-semibold transition-all ${
                currentPage === 'team'
                  ? 'text-[#C8A95B] bg-[#2B1D16]/50 border-b-2 border-[#C8A95B]'
                  : 'text-[#F5F1E8]/80 hover:text-[#C8A95B] hover:bg-white/5'
              }`}
            >
              Team
            </button>

            <button
              id="nav-link-contact"
              onClick={() => handleLinkClick('contact')}
              className={`px-3 py-1.5 rounded text-xs tracking-wider uppercase font-semibold transition-all ${
                currentPage === 'contact'
                  ? 'text-[#C8A95B] bg-[#2B1D16]/50 border-b-2 border-[#C8A95B]'
                  : 'text-[#F5F1E8]/80 hover:text-[#C8A95B] hover:bg-white/5'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Right Actions: Search + Watch Now CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              id="search-trigger-btn"
              onClick={onOpenSearch}
              className="p-2 rounded-full text-[#F5F1E8]/80 hover:text-[#C8A95B] hover:bg-white/5 transition-colors"
              title="Search RPH Platform"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>

            <button
              id="header-watch-now-btn"
              onClick={onWatchNow}
              className="hidden sm:flex items-center gap-2 bg-[#C8A95B] hover:bg-[#DFC788] text-[#0F0F0F] font-semibold text-xs tracking-wider uppercase px-4 py-2 rounded shadow-md hover:shadow-[#C8A95B]/30 transition-all font-sans"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Watch Now</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#F5F1E8] hover:text-[#C8A95B] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div 
          id="mobile-navigation-drawer"
          className="lg:hidden fixed inset-0 top-16 bg-[#0F0F0F]/98 backdrop-blur-xl z-40 overflow-y-auto border-t border-[#C8A95B]/20 p-6 flex flex-col justify-between"
        >
          <div className="space-y-6">
            <div className="text-[11px] font-semibold uppercase tracking-widest text-[#C8A95B]">
              Browse RPH Catalog
            </div>

            <div className="grid grid-cols-2 gap-2">
              {[...primaryNavItems, ...secondaryNavItems].map((item) => (
                <button
                  key={`mobile-${item.id}`}
                  id={`mobile-nav-${item.id}`}
                  onClick={() => handleLinkClick(item.id)}
                  className={`text-left p-3 rounded text-sm font-medium transition-colors ${
                    currentPage === item.id
                      ? 'bg-[#2B1D16] text-[#C8A95B] border border-[#C8A95B]/40'
                      : 'text-[#F5F1E8]/80 hover:bg-white/5 hover:text-[#C8A95B]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10">
              <button
                id="mobile-watch-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onWatchNow();
                }}
                className="w-full flex items-center justify-center gap-2 bg-[#C8A95B] text-[#0F0F0F] font-bold text-sm tracking-wider uppercase py-3 rounded shadow-lg"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Watch Featured Reel</span>
              </button>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 text-center text-xs text-white/40">
            Rebel Production House • Stories That Challenge. Voices That Matter.
          </div>
        </div>
      )}
    </>
  );
};
