/**
 * Tata Play free-to-air (FTA) channel lineup — curated for guests.
 * Source: Tata Play official channel list (July 2026 revision).
 * Channel numbers can change occasionally — edit freely here.
 *
 * lang:  hi | kn | en | te | ta | ml | mr | bn
 * genre: entertainment | movies | news | sports | music | devotional | kids | knowledge
 */
export const CHANNELS = [
  // ---- Hindi entertainment ----
  { no: 171, name: "Star Utsav", lang: "hi", genre: "entertainment" },
  { no: 172, name: "Zee Anmol", lang: "hi", genre: "entertainment" },
  { no: 173, name: "Colors Rishtey", lang: "hi", genre: "entertainment" },
  { no: 174, name: "Sony Pal", lang: "hi", genre: "entertainment" },
  { no: 177, name: "Dangal", lang: "hi", genre: "entertainment" },
  { no: 181, name: "Shemaroo TV", lang: "hi", genre: "entertainment" },
  { no: 183, name: "Dangal 2", lang: "hi", genre: "entertainment" },
  { no: 184, name: "Shemaroo Umang", lang: "hi", genre: "entertainment" },
  { no: 185, name: "EPIC Bharat", lang: "hi", genre: "entertainment" },
  { no: 190, name: "Sun Neo", lang: "hi", genre: "entertainment" },
  { no: 197, name: "DD National", lang: "hi", genre: "entertainment" },
  { no: 198, name: "DD Kisan", lang: "hi", genre: "entertainment" },

  // ---- Hindi movies ----
  { no: 346, name: "B4U Kadak", lang: "hi", genre: "movies" },
  { no: 349, name: "Action Cinema", lang: "hi", genre: "movies" },
  { no: 351, name: "Sony Wah", lang: "hi", genre: "movies" },
  { no: 352, name: "B4U Movies", lang: "hi", genre: "movies" },
  { no: 369, name: "Star Utsav Movies", lang: "hi", genre: "movies" },
  { no: 371, name: "Anmol Cinema", lang: "hi", genre: "movies" },
  { no: 372, name: "Colors Cineplex Superhits", lang: "hi", genre: "movies" },
  { no: 373, name: "Colors Cineplex Bollywood", lang: "hi", genre: "movies" },
  { no: 374, name: "All Time Movies", lang: "hi", genre: "movies" },
  { no: 375, name: "Goldmines", lang: "hi", genre: "movies" },
  { no: 376, name: "Manoranjan TV", lang: "hi", genre: "movies" },
  { no: 377, name: "Anmol Cinema 2", lang: "hi", genre: "movies" },
  { no: 383, name: "Shemaroo Josh", lang: "hi", genre: "movies" },
  { no: 385, name: "Goldmines Movies", lang: "hi", genre: "movies" },
  { no: 386, name: "Goldmines Bollywood", lang: "hi", genre: "movies" },

  // ---- Hindi news ----
  { no: 502, name: "DD News", lang: "hi", genre: "news" },
  { no: 504, name: "ABP News", lang: "hi", genre: "news" },
  { no: 506, name: "NDTV India", lang: "hi", genre: "news" },
  { no: 509, name: "Aaj Tak", lang: "hi", genre: "news" },
  { no: 511, name: "Zee News", lang: "hi", genre: "news" },
  { no: 514, name: "India TV", lang: "hi", genre: "news" },
  { no: 516, name: "News 24", lang: "hi", genre: "news" },
  { no: 519, name: "News18 India", lang: "hi", genre: "news" },
  { no: 521, name: "R Bharat", lang: "hi", genre: "news" },
  { no: 523, name: "News Nation", lang: "hi", genre: "news" },
  { no: 524, name: "TV9 Bharatvarsh", lang: "hi", genre: "news" },
  { no: 525, name: "Good News Today", lang: "hi", genre: "news" },
  { no: 529, name: "Times Now Navbharat", lang: "hi", genre: "news" },

  // ---- English news ----
  { no: 598, name: "Sansad TV", lang: "en", genre: "news" },
  { no: 616, name: "Republic TV", lang: "en", genre: "news" },
  { no: 622, name: "DD India", lang: "en", genre: "news" },
  { no: 637, name: "Al Jazeera", lang: "en", genre: "news" },
  { no: 638, name: "CNA", lang: "en", genre: "news" },
  { no: 639, name: "France 24", lang: "en", genre: "news" },
  { no: 641, name: "DW", lang: "en", genre: "news" },
  { no: 642, name: "ABC Australia", lang: "en", genre: "news" },
  { no: 643, name: "RT", lang: "en", genre: "news" },
  { no: 644, name: "NHK World Japan", lang: "en", genre: "news" },

  // ---- Sports ----
  { no: 452, name: "DD Sports HD", lang: "hi", genre: "sports" },
  { no: 453, name: "DD Sports", lang: "hi", genre: "sports" },

  // ---- Kannada ----
  { no: 1618, name: "Sirikannada All Time", lang: "kn", genre: "entertainment" },
  { no: 1653, name: "TV9 Kannada", lang: "kn", genre: "news" },
  { no: 1655, name: "Public TV", lang: "kn", genre: "news" },
  { no: 1656, name: "Asianet Suvarna News", lang: "kn", genre: "news" },
  { no: 1657, name: "TV5 Kannada", lang: "kn", genre: "news" },
  { no: 1659, name: "R Kannada", lang: "kn", genre: "news" },
  { no: 1660, name: "Power TV", lang: "kn", genre: "news" },
  { no: 1661, name: "News 1st Kannada", lang: "kn", genre: "news" },
  { no: 1672, name: "DD Chandana", lang: "kn", genre: "entertainment" },
  { no: 1673, name: "Sun Udaya Music", lang: "kn", genre: "music" },
  { no: 1674, name: "Raj Musix Kannada", lang: "kn", genre: "music" },
  { no: 1677, name: "Public Music", lang: "kn", genre: "music" },
  { no: 1685, name: "Sri Sankara TV", lang: "kn", genre: "devotional" },
  { no: 1686, name: "Ayush TV", lang: "kn", genre: "knowledge" },
  { no: 1698, name: "SVBC 3", lang: "kn", genre: "devotional" },

  // ---- Hindi music ----
  { no: 809, name: "9XM", lang: "hi", genre: "music" },
  { no: 822, name: "B4U Music", lang: "hi", genre: "music" },
  { no: 835, name: "EPIC Music", lang: "hi", genre: "music" },

  // ---- Devotional (Hindi) ----
  { no: 1055, name: "Aastha", lang: "hi", genre: "devotional" },
  { no: 1057, name: "Sanskar", lang: "hi", genre: "devotional" },
  { no: 1063, name: "Sadhna TV", lang: "hi", genre: "devotional" },
  { no: 1065, name: "Peace of Mind", lang: "hi", genre: "devotional" },
  { no: 1068, name: "Ishwar TV", lang: "hi", genre: "devotional" },
  { no: 1073, name: "Satsang TV", lang: "hi", genre: "devotional" },
  { no: 1077, name: "Aastha Bhajan", lang: "hi", genre: "devotional" },
  { no: 1084, name: "Awakening", lang: "hi", genre: "devotional" },
  { no: 1086, name: "Aadinath TV", lang: "hi", genre: "devotional" },
  { no: 1089, name: "Hare Krsna", lang: "hi", genre: "devotional" },

  // ---- Kids / Knowledge ----
  { no: 696, name: "Unique TV", lang: "hi", genre: "kids" },
  { no: 755, name: "DD Gyan Darshan", lang: "hi", genre: "knowledge" },
  { no: 768, name: "Food Food", lang: "en", genre: "knowledge" },
  { no: 772, name: "Fashion TV", lang: "en", genre: "knowledge" },

  // ---- Telugu ----
  { no: 1456, name: "Sakshi TV", lang: "te", genre: "news" },
  { no: 1459, name: "TV9 Telugu", lang: "te", genre: "news" },
  { no: 1460, name: "NTV Telugu", lang: "te", genre: "news" },
  { no: 1481, name: "DD Saptagiri", lang: "te", genre: "entertainment" },
  { no: 1484, name: "Sun Gemini Music", lang: "te", genre: "music" },
  { no: 1490, name: "Bhakti TV", lang: "te", genre: "devotional" },

  // ---- Tamil ----
  { no: 1532, name: "Polimer TV", lang: "ta", genre: "entertainment" },
  { no: 1533, name: "Makkal TV", lang: "ta", genre: "entertainment" },
  { no: 1556, name: "Puthiya Thalaimurai", lang: "ta", genre: "news" },
  { no: 1557, name: "Thanthi TV", lang: "ta", genre: "news" },
  { no: 1561, name: "Polimer News", lang: "ta", genre: "news" },
  { no: 1578, name: "DD Tamil", lang: "ta", genre: "entertainment" },
  { no: 1580, name: "Sun Music", lang: "ta", genre: "music" },

  // ---- Malayalam ----
  { no: 1819, name: "Mazhavil Manorama", lang: "ml", genre: "entertainment" },
  { no: 1838, name: "Safari TV", lang: "ml", genre: "knowledge" },
  { no: 1841, name: "Asianet News", lang: "ml", genre: "news" },
  { no: 1843, name: "Manorama News", lang: "ml", genre: "news" },
  { no: 1874, name: "DD Malayalam", lang: "ml", genre: "entertainment" },
  { no: 1875, name: "Sun Surya Music", lang: "ml", genre: "music" },

  // ---- Marathi ----
  { no: 1255, name: "ABP Majha", lang: "mr", genre: "news" },
  { no: 1274, name: "DD Sahyadri", lang: "mr", genre: "entertainment" },
  { no: 1277, name: "Sangeet Marathi", lang: "mr", genre: "music" },

  // ---- Bengali ----
  { no: 1317, name: "Sun Bangla", lang: "bn", genre: "entertainment" },
  { no: 1360, name: "ABP Ananda", lang: "bn", genre: "news" },
  { no: 1379, name: "DD Bangla", lang: "bn", genre: "entertainment" },
  { no: 1380, name: "Sangeet Bangla", lang: "bn", genre: "music" },
];

export const GENRES = [
  "entertainment",
  "movies",
  "news",
  "sports",
  "music",
  "devotional",
  "kids",
  "knowledge",
];

export const CHANNEL_LANGS = [
  { code: "all", label: "All" },
  { code: "kn", label: "ಕನ್ನಡ" },
  { code: "hi", label: "हिंदी" },
  { code: "en", label: "English" },
  { code: "te", label: "తెలుగు" },
  { code: "ta", label: "தமிழ்" },
  { code: "ml", label: "മലയാളം" },
  { code: "mr", label: "मराठी" },
  { code: "bn", label: "বাংলা" },
];
