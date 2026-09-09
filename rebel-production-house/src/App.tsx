import React, { useState, useEffect } from 'react';
import { PageId, Episode, FilmItem } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { MediaModal } from './components/MediaModal';
import { SearchModal } from './components/SearchModal';

// Pages
import { HomePage } from './components/pages/HomePage';
import { AboutPage } from './components/pages/AboutPage';
import { PodcastsPage } from './components/pages/PodcastsPage';
import { AarPaarPage } from './components/pages/AarPaarPage';
import { FilmsPage } from './components/pages/FilmsPage';
import { NewsPage } from './components/pages/NewsPage';
import { RebelVoicePage } from './components/pages/RebelVoicePage';
import { RebelMindsetPage } from './components/pages/RebelMindsetPage';
import { RebelManchPage } from './components/pages/RebelManchPage';
import { BiharIconsPage } from './components/pages/BiharIconsPage';
import { TeamPage } from './components/pages/TeamPage';
import { ContactPage } from './components/pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeMedia, setActiveMedia] = useState<Episode | FilmItem | null>(null);

  // Scroll to top on navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
  };

  const handlePlayMedia = (item: Episode | FilmItem) => {
    setActiveMedia(item);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage
            onWatchMedia={handlePlayMedia}
            onNavigate={handleNavigate}
          />
        );
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'podcasts':
      case 'podcast':
        return <PodcastsPage onPlayEpisode={handlePlayMedia} />;
      case 'aar-paar':
        return <AarPaarPage onPlayEpisode={handlePlayMedia} />;
      case 'films':
      case 'rebel-films':
        return <FilmsPage onPlayFilm={handlePlayMedia} />;
      case 'news':
        return <NewsPage />;
      case 'rebel-voice':
        return <RebelVoicePage onPlayEpisode={handlePlayMedia} />;
      case 'rebel-mindset':
        return <RebelMindsetPage onPlayEpisode={handlePlayMedia} />;
      case 'rebel-manch':
        return <RebelManchPage onPlayEpisode={handlePlayMedia} />;
      case 'bihar-icons':
        return <BiharIconsPage onPlayEpisode={handlePlayMedia} />;
      case 'team':
        return <TeamPage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage />;
      default:
        return (
          <HomePage
            onWatchMedia={handlePlayMedia}
            onNavigate={handleNavigate}
          />
        );
    }
  };

  return (
    <div id="rph-app-root" className="min-h-screen bg-[#0F0F0F] text-[#F5F1E8] flex flex-col font-sans selection:bg-[#C8A95B] selection:text-[#0F0F0F]">
      
      {/* Global Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {renderCurrentPage()}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Universal Cinema Video / Media Player Modal */}
      <MediaModal
        media={activeMedia}
        onClose={() => setActiveMedia(null)}
        onSelectRelated={(item) => setActiveMedia(item)}
      />

      {/* Global Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectMedia={(item) => {
          setActiveMedia(item);
        }}
        onNavigate={(page) => {
          setCurrentPage(page);
        }}
      />

    </div>
  );
}
