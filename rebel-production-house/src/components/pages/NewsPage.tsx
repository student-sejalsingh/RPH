import React, { useState } from 'react';
import { NewsArticle } from '../../types';
import { 
  FileText, 
  Clock, 
  User, 
  Calendar, 
  ArrowRight, 
  X, 
  Share2, 
  Check, 
  Bookmark, 
  Sparkles,
  Filter
} from 'lucide-react';
import { NEWS_ARTICLES } from '../../data/mockData';

export const NewsPage: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [copied, setCopied] = useState(false);

  const categories = ['All', 'Investigative', 'Culture & Society', 'Cinema & Art'];

  const filteredArticles = selectedCategory === 'All'
    ? NEWS_ARTICLES
    : NEWS_ARTICLES.filter(a => a.category === selectedCategory);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div id="rph-news-page" className="pt-24 pb-20 bg-[#0F0F0F] text-[#F5F1E8]">
      
      {/* Header */}
      <section className="relative py-16 sm:py-20 border-b border-[#2B1D16] bg-gradient-to-b from-[#2B1D16]/50 to-[#0F0F0F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#2B1D16] border border-[#C8A95B]/40 text-xs font-mono text-[#C8A95B]">
            <FileText className="w-4 h-4" />
            <span>RPH Investigative Desk & Long-Form Journalism</span>
          </div>

          <h1 className="font-['Cinzel'] text-3xl sm:text-5xl font-black text-[#F5F1E8] tracking-tight">
            The Rebel Dispatch & Ground Reports
          </h1>

          <p className="text-sm sm:text-base text-[#F5F1E8]/75 max-w-2xl font-sans">
            Independent, rigorous reporting uncovering policy dilemmas, environmental crises, grassroots innovations, and socio-cultural shifts in eastern India.
          </p>
        </div>
      </section>

      {/* Filter Category Tabs */}
      <section className="py-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs text-white/50 flex items-center gap-1 mr-2">
            <Filter className="w-3.5 h-3.5 text-[#C8A95B]" />
            Category:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded text-xs font-semibold uppercase tracking-wider transition-colors ${
                selectedCategory === cat
                  ? 'bg-[#C8A95B] text-[#0F0F0F]'
                  : 'bg-[#2B1D16]/50 border border-white/10 text-[#F5F1E8]/70 hover:border-[#C8A95B]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              id={`news-card-${article.id}`}
              onClick={() => setSelectedArticle(article)}
              className="group bg-[#2B1D16]/30 border border-[#C8A95B]/20 hover:border-[#C8A95B] rounded-lg overflow-hidden flex flex-col justify-between cursor-pointer transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-xl"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-black">
                <img
                  src={article.image}
                  alt={article.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded bg-[#2B1D16]/90 border border-[#C8A95B]/40 text-[10px] font-bold uppercase tracking-wider text-[#C8A95B]">
                    {article.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-3 text-[11px] font-mono text-white/50 mb-2">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#C8A95B]" />
                      {article.readTime}
                    </span>
                    <span>•</span>
                    <span>{article.publishedDate}</span>
                  </div>

                  <h3 className="font-['Cinzel'] text-base sm:text-lg font-bold text-[#F5F1E8] group-hover:text-[#C8A95B] transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#F5F1E8]/70 mt-2 line-clamp-3 leading-relaxed font-sans">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img
                      src={article.authorImage}
                      alt={article.author}
                      referrerPolicy="no-referrer"
                      className="w-7 h-7 rounded-full object-cover border border-[#C8A95B]"
                    />
                    <div className="text-[11px]">
                      <span className="text-white font-medium block">{article.author}</span>
                      <span className="text-white/40 block">{article.authorRole}</span>
                    </div>
                  </div>

                  <span className="text-xs font-bold text-[#C8A95B] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    <span>Read</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>

              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Reader Modal for full article reading experience */}
      {selectedArticle && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedArticle(null)}
        >
          <div 
            className="w-full max-w-3xl max-h-[90vh] bg-[#0F0F0F] border border-[#C8A95B]/40 rounded-lg shadow-2xl overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Modal Bar */}
            <div className="flex items-center justify-between px-6 py-3 bg-[#2B1D16] border-b border-[#C8A95B]/20">
              <span className="text-xs uppercase tracking-widest text-[#C8A95B] font-bold">
                {selectedArticle.category} • Editorial Reader
              </span>
              <div className="flex items-center gap-3">
                <button
                  onClick={handleShare}
                  className="p-1 rounded text-white/70 hover:text-white"
                  title="Share Article"
                >
                  {copied ? <Check className="w-4 h-4 text-[#C8A95B]" /> : <Share2 className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="p-1 rounded-full text-white/70 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Content Body */}
            <div className="overflow-y-auto p-6 sm:p-10 space-y-6 custom-scrollbar">
              <div className="space-y-3">
                <span className="text-xs font-mono text-[#C8A95B] uppercase">
                  Published {selectedArticle.publishedDate} • {selectedArticle.readTime}
                </span>
                <h2 className="font-['Cinzel'] text-xl sm:text-3xl font-black text-[#F5F1E8] leading-tight">
                  {selectedArticle.title}
                </h2>
                <div className="flex items-center gap-3 pt-2">
                  <img
                    src={selectedArticle.authorImage}
                    alt={selectedArticle.author}
                    referrerPolicy="no-referrer"
                    className="w-10 h-10 rounded-full object-cover border border-[#C8A95B]"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-[#F5F1E8]">{selectedArticle.author}</h4>
                    <p className="text-[11px] text-white/50">{selectedArticle.authorRole}</p>
                  </div>
                </div>
              </div>

              {/* Cover Image */}
              <div className="relative aspect-video rounded-lg overflow-hidden border border-white/10">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Paragraphs */}
              <div className="space-y-4 text-sm sm:text-base text-[#F5F1E8]/85 leading-relaxed font-sans pt-2">
                {selectedArticle.content.map((paragraph, idx) => (
                  <p key={idx} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Tags */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap gap-2">
                {selectedArticle.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded bg-[#2B1D16] border border-[#C8A95B]/30 text-xs text-[#C8A95B]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
