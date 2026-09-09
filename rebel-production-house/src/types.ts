export type PageId = 
  | 'home' 
  | 'about' 
  | 'podcasts' 
  | 'aar-paar'
  | 'news' 
  | 'films' 
  | 'rebel-voice' 
  | 'rebel-mindset' 
  | 'rebel-manch' 
  | 'bihar-icons' 
  | 'team' 
  | 'contact';

export interface Show {
  id: string;
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  bannerImage: string;
  host?: string;
  totalEpisodes: number;
  highlightBadge?: string;
  tags: string[];
}

export interface Episode {
  id: string;
  title: string;
  showId: string;
  showTitle: string;
  category: string;
  duration: string;
  thumbnail: string;
  backdropUrl?: string;
  videoUrl?: string;
  audioOnly?: boolean;
  description: string;
  guestName?: string;
  guestRole?: string;
  guestImage?: string;
  publishedDate: string;
  views: string;
  featured?: boolean;
  quote?: string;
  keyTopics?: string[];
  youtubeId?: string;
}

export interface FilmItem {
  id: string;
  title: string;
  subTitle: string;
  director: string;
  releaseYear: string;
  duration: string;
  genre: string;
  synopsis: string;
  thumbnail: string;
  bannerImage: string;
  awards?: string[];
  festivalStatus?: string;
  featured?: boolean;
  cast?: string[];
}

export interface NewsArticle {
  id: string;
  title: string;
  category: 'Investigative' | 'Culture & Society' | 'Ground Report' | 'Editorial' | 'Cinema & Art';
  excerpt: string;
  content: string[];
  author: string;
  authorRole: string;
  authorImage: string;
  publishedDate: string;
  readTime: string;
  image: string;
  featured?: boolean;
  tags: string[];
}

export interface BiharIcon {
  id: string;
  name: string;
  domain: string;
  title: string;
  bio: string;
  impact: string;
  image: string;
  era: string;
  quote: string;
  featuredEpisodeTitle?: string;
  tags: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: 'Direction' | 'Editorial' | 'Cinematography' | 'Sound & Music' | 'Production';
  bio: string;
  image: string;
  notableWork: string;
  socials?: {
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
}

export interface PlatformStat {
  value: string;
  label: string;
  description: string;
  iconName: string;
}
