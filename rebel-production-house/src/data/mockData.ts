import { Show, Episode, FilmItem, NewsArticle, BiharIcon, TeamMember, PlatformStat } from '../types';

export const PLATFORM_STATS: PlatformStat[] = [
  {
    value: "50+",
    label: "Podcasts Released",
    description: "Deep, long-form conversations exploring uncharted perspectives and courageous ideas.",
    iconName: "Mic"
  },
  {
    value: "100+",
    label: "Original Videos",
    description: "Cinematic documentaries, hard-hitting debates, ground reports, and short films.",
    iconName: "Video"
  },
  {
    value: "20+",
    label: "Iconic Guests",
    description: "Pioneering thinkers, cultural leaders, grassroots rebels, and visionary creators.",
    iconName: "Users"
  },
  {
    value: "500K+",
    label: "Total Digital Views",
    description: "An engaged collective of seekers, creators, and citizens seeking real substance.",
    iconName: "TrendingUp"
  }
];

export const SHOWS: Show[] = [
  {
    id: "podcast",
    slug: "podcast",
    title: "The Piyush Singh Podcast",
    category: "Podcast",
    shortDescription: "Unfiltered dialogues with thinkers, creators, historians, and disruptors shaping contemporary discourse.",
    fullDescription: "Hosted by Piyush Singh, this flagship long-form conversational show uncovers authentic human stories, questioning societal constructs, celebrating creative rebellion, and deep-diving into cinema, politics, and culture.",
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80",
    bannerImage: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=1600&q=80",
    host: "Piyush Singh",
    totalEpisodes: 54,
    highlightBadge: "Flagship Show",
    tags: ["Long-form", "Philosophy", "Cinema", "Society"]
  },
  {
    id: "aar-paar",
    slug: "aar-paar",
    title: "AAR-PAAR",
    category: "AAR-PAAR",
    shortDescription: "High-stakes clash of viewpoints. No PR buffers, no sugarcoating—only relentless pursuit of truth.",
    fullDescription: "A sharp, investigative debate series where politicians, policy analysts, grassroots workers, and activists are held accountable on critical public dilemmas, socio-economic friction, and policy impact.",
    image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
    bannerImage: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=1600&q=80",
    host: "RPH Editorial Desk",
    totalEpisodes: 28,
    highlightBadge: "Hard-Hitting Debate",
    tags: ["Investigative", "Debate", "Governance", "Accountability"]
  },
  {
    id: "rebel-films",
    slug: "rebel-films",
    title: "Rebel Films",
    category: "Rebel Films",
    shortDescription: "Immersive cinematic narratives, social documentaries, and indie fiction challenging traditional cinema.",
    fullDescription: "The cinema wing of Rebel Production House crafts visually arresting independent cinema. From forgotten folklore to raw contemporary urban struggles, our lenses capture reality with visual poetry and emotional weight.",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80",
    bannerImage: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1600&q=80",
    totalEpisodes: 18,
    highlightBadge: "Award Winning",
    tags: ["Documentary", "Indie Cinema", "Cinematic", "Social Stories"]
  },
  {
    id: "rebel-voice",
    slug: "rebel-voice",
    title: "Rebel Voice",
    category: "Rebel Voice",
    shortDescription: "Uncurated perspectives from the heartland. Ordinary citizens voicing extraordinary truths.",
    fullDescription: "A platform dedicated to democratic dissent, ground realities, and citizen storytelling. From farmers in the Mithila plains to student movements in Patna and Delhi, Rebel Voice captures unfiltered realities.",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80",
    bannerImage: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1600&q=80",
    totalEpisodes: 42,
    highlightBadge: "Grassroots",
    tags: ["Grassroots", "Youth", "Ground Realities", "Monologues"]
  },
  {
    id: "rebel-mindset",
    slug: "rebel-mindset",
    title: "Rebel Mindset",
    category: "Rebel Mindset",
    shortDescription: "Mental frameworks, philosophical resilience, and creative discipline for non-conformists.",
    fullDescription: "A curated series of masterclasses and contemplative essays exploring stoicism, creative defiance, intellectual courage, and mastering psychological grit in an era of noisy distractions.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
    bannerImage: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=1600&q=80",
    totalEpisodes: 36,
    highlightBadge: "Mind & Philosophy",
    tags: ["Psychology", "Motivation", "Discipline", "Strategy"]
  },
  {
    id: "rebel-manch",
    slug: "rebel-manch",
    title: "Rebel Manch",
    category: "Rebel Manch",
    shortDescription: "The live amphitheater of spoken word, revolutionary poetry, regional folk rhythms, and theatre.",
    fullDescription: "Where spoken word meets social consciousness. Rebel Manch brings together poets, folk musicians, theatrical artists, and monologists in an acoustic studio setting to revive oral rebellion.",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80",
    bannerImage: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=1600&q=80",
    totalEpisodes: 24,
    highlightBadge: "Live Stage & Poetry",
    tags: ["Spoken Word", "Folk Music", "Stage", "Urdu & Hindi Poetry"]
  },
  {
    id: "bihar-icons",
    slug: "bihar-icons",
    title: "Bihar Icons",
    category: "Bihar Icons",
    shortDescription: "Reclaiming the pride of Magadha and Mithila. Deep chronicles of innovators and changemakers.",
    fullDescription: "A tribute to the land of Nalanda, Buddha, and Chanakya. Documenting contemporary legends, pioneering scientists, grassroots educators, and cultural saviors who are redefining Bihar's global legacy.",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80",
    bannerImage: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1600&q=80",
    totalEpisodes: 30,
    highlightBadge: "Cultural Heritage",
    tags: ["Heritage", "Bihar Changemakers", "History", "Pride"]
  }
];

export const EPISODES: Episode[] = [
  {
    id: "ep-01",
    title: "The Art of Cinematic Defiance: Breaking Bollywood's Monopoly",
    showId: "podcast",
    showTitle: "The Piyush Singh Podcast",
    category: "Podcast",
    duration: "1h 14m",
    thumbnail: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&w=800&q=80",
    backdropUrl: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=1600&q=80",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    description: "Independent filmmaker Ananya Sen joins Piyush Singh to discuss raw storytelling, surviving without industry dynasties, and why regional cinema from eastern India is the next global frontier.",
    guestName: "Ananya Sen",
    guestRole: "National Award Winning Independent Director",
    guestImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    publishedDate: "October 14, 2025",
    views: "142K",
    featured: true,
    quote: "True cinema doesn't ask for permission. It witnesses what others are paid to ignore.",
    keyTopics: ["Independent Film Financing", "The Death of Star Culture", "Visual Poetics", "Decentralizing Cinema"]
  },
  {
    id: "ep-02",
    title: "AAR-PAAR: Industrial Stagnation or Renaissance? The Real Economic Map of Bihar",
    showId: "aar-paar",
    showTitle: "AAR-PAAR",
    category: "AAR-PAAR",
    duration: "48m",
    thumbnail: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80",
    backdropUrl: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=1600&q=80",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    description: "Economists, startup founders, and policy analysts spar over why Bihar's manufacturing ecosystem stalled and what it takes to bring capital, innovation, and reversed migration into Patna and Darbhanga.",
    guestName: "Prof. R. K. Jha & Dr. Smita Verma",
    guestRole: "Development Economists & Industrial Policy Experts",
    guestImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    publishedDate: "October 20, 2025",
    views: "98K",
    featured: true,
    quote: "Demographics are our greatest asset, yet without localized capital incubation, youth remains our exported resource.",
    keyTopics: ["Special Economic Zones", "Youth Out-Migration", "Agri-Tech Revolution", "Infrastructure Debt"]
  },
  {
    id: "ep-03",
    title: "Shadows of the Kosi: When the River Sweeps Memories",
    showId: "rebel-films",
    showTitle: "Rebel Films",
    category: "Rebel Films",
    duration: "34m",
    thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
    backdropUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=80",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    description: "An evocative documentary film chronicling three generations of families along the shifting embankments of North Bihar's Kosi river, fighting erasure and celebrating ecological survival.",
    guestName: "Director Alok Roy",
    guestRole: "Cinematographer & Environmental Chronicler",
    guestImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    publishedDate: "November 02, 2025",
    views: "185K",
    featured: true,
    quote: "The river doesn't divide land; it divides our hubris from nature's timeless patience.",
    keyTopics: ["Environmental Displacement", "Living on the Embankment", "Oral River Folklore", "Resilience"]
  },
  {
    id: "ep-04",
    title: "Rebel Voice: Voices From the Chalk Dust — The Village Teacher Who Defied Systemic Apathy",
    showId: "rebel-voice",
    showTitle: "Rebel Voice",
    category: "Rebel Voice",
    duration: "26m",
    thumbnail: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80",
    backdropUrl: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1600&q=80",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    description: "A single-teacher primary school in rural Gaya turned into an astronomical science observatory through discarded scrap materials and relentless stubbornness.",
    guestName: "Birendra Prasad",
    guestRole: "Grassroots Educator & Science Evangelist",
    guestImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
    publishedDate: "November 12, 2025",
    views: "74K",
    featured: false,
    quote: "When schools don't have telescopes, we must teach children to grind mirrors with their own hands.",
    keyTopics: ["Grassroots Education", "Science for All", "Defying Red Tape"]
  },
  {
    id: "ep-05",
    title: "Rebel Mindset: The Psychology of Loneliness in High Achievers",
    showId: "rebel-mindset",
    showTitle: "Rebel Mindset",
    category: "Rebel Mindset",
    duration: "41m",
    thumbnail: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    backdropUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1600&q=80",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
    description: "Piyush Singh breaks down why ambition alienates, how to cultivate internal validation, and the ancient Stoic philosophy of voluntary discomfort.",
    guestName: "Dr. Vikramaditya Rathore",
    guestRole: "Neuropsychologist & Performance Mentor",
    guestImage: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
    publishedDate: "November 18, 2025",
    views: "112K",
    featured: false,
    quote: "Solitude is the laboratory where authentic character is forged away from applause.",
    keyTopics: ["Stoicism", "Mental Conditioning", "Dopamine Detachment", "Deep Work"]
  },
  {
    id: "ep-06",
    title: "Rebel Manch: 'Kalam Ka Sipahi' — Spoken Word Live From Patna Ghat",
    showId: "rebel-manch",
    showTitle: "Rebel Manch",
    category: "Rebel Manch",
    duration: "18m",
    thumbnail: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=800&q=80",
    backdropUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1600&q=80",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackSeeTheWorld.mp4",
    description: "An electrifying live spoken word performance by Patna's underground poet collective, exploring youth anxiety, heritage, and the revolutionary spirit of Ramdhari Singh Dinkar.",
    guestName: "Zahoor & The Patna Verse Collective",
    guestRole: "Spoken Word Poets & Lyricists",
    guestImage: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80",
    publishedDate: "November 25, 2025",
    views: "89K",
    featured: true,
    quote: "When the streets go quiet, the poets must raise a storm.",
    keyTopics: ["Spoken Word", "Dinkar Heritage", "Hindi Poetry", "Live Performance"]
  },
  {
    id: "ep-07",
    title: "Bihar Icons: Ustad Bismillah Khan — The Soul of Shehnai & Sacred Ganga",
    showId: "bihar-icons",
    showTitle: "Bihar Icons",
    category: "Bihar Icons",
    duration: "52m",
    thumbnail: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=800&q=80",
    backdropUrl: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1600&q=80",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    description: "A retrospective on Bharat Ratna Ustad Bismillah Khan's birth in Dumraon, Bihar, his spiritual transcendence across communal boundaries, and his eternal dedication to classical music.",
    guestName: "Pandit Sanjeev Mishra & Archival Scholars",
    guestRole: "Musicologist & Historian",
    guestImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
    publishedDate: "December 01, 2025",
    views: "210K",
    featured: true,
    quote: "Music has no caste, no religion. It is the purest prayer between mortal breath and eternity.",
    keyTopics: ["Shehnai Master", "Dumraon Legacy", "Indian Classical Heritage", "Sacred Pluralism"]
  },
  {
    id: "ep-08",
    title: "Journalism Under Siege: How We Broke the Sand Mafia Investigation",
    showId: "podcast",
    showTitle: "The Piyush Singh Podcast",
    category: "Podcast",
    duration: "1h 05m",
    thumbnail: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80",
    backdropUrl: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=1600&q=80",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    description: "Investigative reporters from RPH reveal the behind-the-scenes perils of undercover reporting, death threats, and satellite mapping illicit extraction along the Sone river.",
    guestName: "Tanya Kashyap",
    guestRole: "Senior Investigative Journalist",
    guestImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    publishedDate: "December 10, 2025",
    views: "167K",
    featured: false,
    quote: "If truth doesn't make someone in power uncomfortable, it's merely public relations.",
    keyTopics: ["Investigative Reporting", "Ecological Destruction", "Undercover Journalistic Safety"]
  }
];

export const FILMS: FilmItem[] = [
  {
    id: "film-01",
    title: "Maati Ke Rang (Colors of the Earth)",
    subTitle: "The Untold Tale of Madhubani Women Artisans",
    director: "Devendra Narayan",
    releaseYear: "2025",
    duration: "58 mins",
    genre: "Social Documentary",
    synopsis: "Deep in the villages of Madhubani, female artisans have used cow dung, soot, and natural plant extracts to tell forbidden tales of feminine autonomy for centuries. This film follows three generations of women redefining global art auctions.",
    thumbnail: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80",
    bannerImage: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=1600&q=80",
    awards: ["Best Documentary — Prague Indie Fest 2025", "Official Selection — Mumbai International Film Festival"],
    festivalStatus: "Festival Winner",
    featured: true,
    cast: ["Dulari Devi", "Godavari Jha", "Kriti Kumari"]
  },
  {
    id: "film-02",
    title: "Echoes of Nalanda",
    subTitle: "The Ashes and Rebirth of Humanity's First Global University",
    director: "Piyush Singh & Siddharth Roy",
    releaseYear: "2024",
    duration: "1h 22m",
    genre: "Historical Cinematic Documentary",
    synopsis: "When the monumental library of Dharmaganja burned for months in 1193 CE, millions of manuscripts turned to soot. We reconstruct the intellectual zenith of Nalanda through archaeologists, monks, and virtual 3D restoration.",
    thumbnail: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80",
    bannerImage: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1600&q=80",
    awards: ["Heritage Cinema Gold Prize — Kyoto 2024", "National Documentary Honors"],
    festivalStatus: "Curators Choice",
    featured: true,
    cast: ["Prof. Alexander Wyn", "Venerable Geshe Dorje", "Archival Monks"]
  },
  {
    id: "film-03",
    title: "The Iron Track",
    subTitle: "The Midnight Migrant Express to Surat",
    director: "Alok Roy",
    releaseYear: "2025",
    duration: "44 mins",
    genre: "Cinéma Vérité",
    synopsis: "Shot entirely aboard unreserved general train compartments between Muzaffarpur and Surat, capturing the hopes, poetry, card games, and tears of young laborers migrating across the Indian subcontinent.",
    thumbnail: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=800&q=80",
    bannerImage: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1600&q=80",
    awards: ["Human Rights Film Guild Award 2025"],
    festivalStatus: "Critically Acclaimed",
    featured: false,
    cast: ["Sunil Paswan", "Mohammad Alam", "Passengers of Train 19054"]
  },
  {
    id: "film-04",
    title: "Chhath: The Sun, The Water, The Silence",
    subTitle: "A Visual Ode to Nature Worship Without Priests",
    director: "Piyush Singh",
    releaseYear: "2025",
    duration: "32 mins",
    genre: "Visual Poetry / Cultural Ethnography",
    synopsis: "An ambient, slow-cinema meditation on the ancient Vedic festival of Chhath Puja, where millions stand chest-deep in misty rivers at dawn to honor both the setting and rising sun without intermediaries or temples.",
    thumbnail: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
    bannerImage: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1600&q=80",
    awards: ["Visions du Réel Shortlist 2025"],
    festivalStatus: "Official Screening",
    featured: false,
    cast: ["Ghat Communities of Patna and Buxar"]
  }
];

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: "news-01",
    title: "Beyond the Stereotype: How Patna's Tech Underground Is Quietly Building Deep-Tech Startups",
    category: "Culture & Society",
    excerpt: "Away from the glare of Bengaluru and Gurgaon, an audacious crop of engineers and founders in Patna are building edge-AI and vernacular fintech products.",
    content: [
      "In a sun-drenched co-working hub along Fraser Road, 26-year-old Aditya Kumar is testing a computer vision algorithm designed to detect crop blight in litchi orchards. His company doesn't operate from Silicon Valley or Bengaluru's Koramangala—it runs out of Patna.",
      "For decades, the narrative surrounding Bihar's educated youth was single-minded: pass the civil services examination or board a train to a metropolitan center. But over the past 36 months, a quiet counter-revolution has taken root.",
      "High internet penetration, cloud compute accessibility, and a hunger to solve problems native to Tier-2 and Tier-3 India have created an unexpected hotbed for resilient technical talent.",
      "'We don't need permission to build world-class systems,' says Kumar. 'We have lower burn rates, high technical grit, and an immediate understanding of the real 1 billion users.'"
    ],
    author: "Tanya Kashyap",
    authorRole: "Chief Investigative Reporter",
    authorImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    publishedDate: "December 28, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
    featured: true,
    tags: ["Technology", "Patna Startups", "Economy", "Youth"]
  },
  {
    id: "news-02",
    title: "The Dying Kilns: Climate Vulnerability and Labor Realities in the Gangetic Plain",
    category: "Investigative",
    excerpt: "An on-ground dispatch investigating toxic brick kilns, agricultural topsoil depletion, and the health crisis facing seasonal workers.",
    content: [
      "A dense plume of black sulfurous smoke rises against the winter twilight in Vaishali district. Here, hundreds of chimney kilns bake the red clay that fuels northern India's rampant urban expansion.",
      "Our two-month investigative audit reveals severe violations of clean zig-zag chimney norms, child labor loopholes, and the irreversible stripping of fertile alluvial topsoil required for paddy crops.",
      "Despite environmental tribunals issuing stern notices, enforcement remains tangled in bureaucratic inertia and local patronage networks.",
      "RPH ground reporting tracks the voices of families who spend six months every year living beneath the shadow of kilns, breathing particulate matter at eight times safe thresholds."
    ],
    author: "Rohan Mukherjee",
    authorRole: "Senior Environmental Correspondent",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    publishedDate: "January 04, 2026",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80",
    featured: true,
    tags: ["Environment", "Labor Rights", "Investigative", "Bihar"]
  },
  {
    id: "news-03",
    title: "The Rebirth of Bhojpuri Cinema: Can Independent Voices Save It From Slapstick Obscenity?",
    category: "Cinema & Art",
    excerpt: "Once renowned for sensitive rural classics like 'Ganga Maiyya Tohe Piyari Chadhaibo', Bhojpuri cinema fell into formulaic vulgarity. A new wave of filmmakers is fighting to reclaim it.",
    content: [
      "Bhojpuri is spoken by over 50 million people worldwide, from Bihar and Uttar Pradesh to Mauritius, Suriname, and Trinidad. Yet for nearly three decades, mainstream Bhojpuri cinema has been trapped in a spiral of low-budget double-entendre and derivative song sequences.",
      "Now, indie directors trained at FTII and modern theater workshops are launching the 'Bhojpuri Neo-Realism' movement.",
      "Taking inspiration from Satyajit Ray and Anurag Kashyap, these productions showcase the dialect's rich musical nuances, legendary folk theater like Bidesiya, and the poetic depth of Bhikhari Thakur.",
      "The result is a wave of festival-recognized cinema that treats the language and its people with the dignity they deserve."
    ],
    author: "Piyush Singh",
    authorRole: "Founder & Creative Director",
    authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    publishedDate: "January 11, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80",
    featured: false,
    tags: ["Cinema", "Bhojpuri", "Folk Culture", "Art Renaissance"]
  }
];

export const BIHAR_ICONS: BiharIcon[] = [
  {
    id: "icon-01",
    name: "Ramdhari Singh 'Dinkar'",
    domain: "Literature & Revolutionary Poetry",
    title: "Rashtrakavi (National Poet) of Fearless Conscience",
    bio: "Hailing from Simaria in Begusarai, Dinkar's monumental epics 'Rashmirathi' and 'Urvashi' channeled righteous rebellion against injustice and power. He was described as the fiery voice of India's democratic spine.",
    impact: "Authored immortal verses warning tyrants that when the throne trembles, the public awakens. His lines inspired national movements including JP's Total Revolution.",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80",
    era: "1908 – 1974",
    quote: "When destruction approaches a mortal, intellect perishes first. (जब नाश मनुज पर छाता है, पहले विवेक मर जाता है)",
    featuredEpisodeTitle: "The Dinkar Monologues — The Rebel Voice Stage",
    tags: ["Poetry", "Begusarai", "National Pride", "Literature"]
  },
  {
    id: "icon-02",
    name: "Dr. Vashishtha Narayan Singh",
    domain: "Mathematics & Theoretical Science",
    title: "The Math Genius Who Challenged Einstein's Assumptions",
    bio: "Born in Basantpur, Bhojpur district, Vashishtha Narayan Singh conquered the highest academic echelons from Patna Science College to UC Berkeley under John Kelley, before battling schizophrenia in his homeland.",
    impact: "Pioneered groundbreaking work in reproducing kernel Hilbert space theories, cycle vector spaces, and probability theorems cited by NASA and top mathematical institutes.",
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=80",
    era: "1942 – 2019",
    quote: "Numbers do not deceive; men deceive themselves when they lose sight of the infinite.",
    featuredEpisodeTitle: "The Lost Equation: Life of Dr. Vashishtha Narayan Singh",
    tags: ["Mathematics", "UC Berkeley", "Science", "Bhojpur"]
  },
  {
    id: "icon-03",
    name: "Jayaprakash Narayan (JP)",
    domain: "Democratic Movements & Politics",
    title: "Lok Nayak — The Soul of Total Revolution",
    bio: "Born in Sitab Diara, JP was a freedom fighter, Marxist scholar, Sarvodaya philosopher, and the leader who organized millions of youth in 1974 to safeguard Indian democracy and civil liberties.",
    impact: "Founded the philosophy of 'Sampoorna Kranti' (Total Revolution), proving that moral power and peaceful civil resistance can topple entrenched authoritarianism.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
    era: "1902 – 1979",
    quote: "Vacate the throne, for the people are arriving! (सिंहासन खाली करो कि जनता आती है)",
    featuredEpisodeTitle: "Total Revolution: The 1974 Movement That Shook Delhi",
    tags: ["Lok Nayak", "Democracy", "Student Movement", "Social Reform"]
  },
  {
    id: "icon-04",
    name: "Bhikhari Thakur",
    domain: "Folk Theater & Social Reform",
    title: "The Shakespeare of Bhojpuri & Champion of Migrants",
    bio: "A barber by birth from Kutubpur, Saran, Bhikhari Thakur pioneered folk theater forms like 'Bidesiya' and 'Beti Bechwa', courageously addressing caste atrocities, female infanticide, and the pain of migrant separation.",
    impact: "Mobilized millions across rural India through raw theatrical songs. His work is revered globally as an invaluable pillar of subaltern South Asian performance art.",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80",
    era: "1887 – 1971",
    quote: "Art without the tears of the oppressed is merely decoration for the oppressor's drawing room.",
    featuredEpisodeTitle: "Bidesiya Lives: The Folk Theatre Rebellion",
    tags: ["Bhojpuri", "Folk Theatre", "Bidesiya", "Social Reform"]
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "team-01",
    name: "Piyush Singh",
    role: "Founder & Creative Executive Producer",
    department: "Direction",
    bio: "Cinematic creator, podcaster, and media innovator dedicated to elevating honest narratives from Bihar to global audiences. Believes in challenging media monoliths with craft, intellect, and courage.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    notableWork: "Host of The Piyush Singh Podcast; Director of 'Chhath'",
    socials: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com"
    }
  },
  {
    id: "team-02",
    name: "Tanya Kashyap",
    role: "Head of Investigative Journalism & News Desk",
    department: "Editorial",
    bio: "Tenacious investigative journalist with over a decade of ground-reporting on environmental crime, political accountability, and rural welfare governance.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    notableWork: "Sone River Sand Mafia Expose; Lead Anchor for AAR-PAAR",
    socials: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com"
    }
  },
  {
    id: "team-03",
    name: "Devendra Narayan",
    role: "Head of Documentary Cinema & Directing",
    department: "Direction",
    bio: "National Film Award nominated documentary director whose work focuses on indigenous artistic traditions, oral histories, and marginalized heritage across eastern India.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    notableWork: "Director of 'Maati Ke Rang' (Prague Indie Fest Winner)",
    socials: {
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com"
    }
  },
  {
    id: "team-04",
    name: "Siddharth Roy",
    role: "Director of Photography (DOP)",
    department: "Cinematography",
    bio: "Visual storyteller obsessed with naturalistic lighting, anamorphic cinema lenses, and deep atmospheric color grading that gives RPH productions their signature cinematic weight.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    notableWork: "Lead Cinematographer on 'Echoes of Nalanda' and 'Shadows of Kosi'",
    socials: {
      instagram: "https://instagram.com"
    }
  },
  {
    id: "team-05",
    name: "Arjun Sen",
    role: "Chief Sound Designer & Music Producer",
    department: "Sound & Music",
    bio: "Acoustic architect blending traditional instruments like the shehnai and dholak with modern low-frequency modular synthesizers to forge immersive sonic landscapes.",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&q=80",
    notableWork: "Soundtrack for Rebel Manch & RPH Signature Sound Logo",
    socials: {
      instagram: "https://instagram.com",
      twitter: "https://twitter.com"
    }
  },
  {
    id: "team-06",
    name: "Meenakshi Sinha",
    role: "Lead Producer & Head of Community Growth",
    department: "Production",
    bio: "Orchestrating multi-crew shoots across rugged terrains, securing production permits, and building the digital distribution engines that bring RPH stories to hundreds of thousands of viewers.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
    notableWork: "Executive Production on All Season 1 & 2 Releases",
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    }
  }
];
