// ─────────────────────────────────────────────────────────────
//  ALL SITE CONTENT LIVES HERE.
//  Edit words, numbers, links and projects in this file only.
//  Anything in [BRACKETS] is a placeholder to replace.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "Drew Teo",
  domain: "drewtyl.com",
  location: "Singapore",
  email: "drewteoyl@gmail.com",
  linkedin: "https://linkedin.com/in/drewteoyl",
  instagram: "https://instagram.com/drewtyl",
  tiktok: "https://tiktok.com/@drewtyl",
  cvUrl: "/drew-teo-cv.pdf", // drop the PDF into /public with this name
};

// ── RECRUITER VIEW ( / ) ─────────────────────────────────────

export const recruiter = {
  headline: "Drew Teo",
  intro: [
    "I'm a growth operator who builds things from zero. I founded Gorilla Gear, a premium fitness nutrition brand, and I'm the Founding SDR at MagicPort, a maritime tech startup in Singapore.",
    "I bootstrapped Gorilla Gear to more than US$130K ARR in 12 months, and I've generated US$250K of outbound pipeline at MagicPort. I'm looking for growth roles and I'm open to relocating to SF, LA or NY.",
  ],

  stats: [
    { value: "US$130K+", label: "ARR in 12 months, bootstrapped" },
    { value: "US$250K", label: "Outbound pipeline in 6 months" },
    { value: ">4x", label: "ROAS on Meta Ads" },
    { value: "1,000+", label: "Customers, 30% repeat rate" },
  ],

  work: [
    {
      title: "Gorilla Gear",
      role: "Founder",
      period: "Jun 2024 – Now",
      summary:
        "A premium fitness and nutrition brand built for Asia, launched in May 2025. I bootstrapped it to more than US$130K ARR in 12 months and own the whole growth stack.",
      points: [
        "Grew revenue 10x through paid acquisition and B2B partnerships, reaching a consistent US$20K+ MRR",
        "Ran Meta Ads at more than 4x ROAS, shipping about 30 creatives a month at peak with matching landing pages; tracked CTR, AOV, add-to-cart rate and CPA",
        "Built Klaviyo retention flows behind a 30% repeat rate across 1,000+ customers",
        "Closed 5+ B2B accounts across lifestyle and fitness channels through outbound",
        "Ran gym and lifestyle activations; the largest drew 200+ people over two days with three partner brands",
      ],
      link: "https://gorillagear.club",
    },
    {
      title: "MagicPort",
      role: "Founding SDR",
      period: "May 2026 – Now",
      summary:
        "First sales hire at an AI-powered maritime intelligence platform. I built the outbound motion and the cold prospecting playbook from scratch.",
      points: [
        "Generated US$250K in outbound pipeline in the first 6 months, across 300+ shipping companies in 80+ countries",
        "Work with the founders on go-to-market, refining messaging and qualification to lift meeting conversion",
        "Run pipeline and sales activity in HubSpot",
      ],
      link: "",
    },
    {
      title: "Headout — Market Entry Case",
      role: "BDM Case Study",
      period: "2026",
      summary:
        "A supply-acquisition strategy that targets multi-outlet heartland F&B brands that are underserved by the current delivery platforms.",
      points: [
        "Reframed the target profile around zi char, comfort food, halal Western and bakery chains",
        "Built the prospect list and checked each candidate's platform status",
      ],
      link: "",
    },
  ],

  experience: [
    { org: "MagicPort", role: "Founding SDR", period: "2026 – Now" },
    { org: "Gorilla Gear", role: "Founder & Brand Strategist", period: "2024 – Now" },
    { org: "Opera Gallery", role: "Art Advisor · $100K+ in art sales", period: "2024 – 2025" },
    { org: "Regional Express Airlines", role: "Corporate Comms Intern · ~10% audience growth", period: "2023" },
    { org: "OCBC Securities", role: "Business Intern · cut manual work 40%+ with VBA", period: "2022" },
  ],

  toolkit: [
    { name: "Meta Ads Manager", category: "Paid" },
    { name: "Klaviyo", category: "Lifecycle" },
    { name: "Shopify", category: "Commerce" },
    { name: "Meta Pixel / CAPI", category: "Tracking" },
    { name: "HubSpot / outbound", category: "Sales" },
    { name: "Python / SQL", category: "Data" },
    { name: "DaVinci Resolve / After Effects", category: "Creative" },
    { name: "Adobe CC", category: "Design" },
    { name: "VBA / AI workflows", category: "Automation" },
  ],

  education: "Singapore Management University, Bachelor of Business Management, double major in Marketing and Finance (2020–2024).",
};

// ── BRAND VIEW ( /brand ) ────────────────────────────────────

export const brand = {
  headline: "Drew Teo",
  intro: [
    "I'm a creator, model and ACE-certified personal trainer based in Singapore. My content covers training, nutrition and the founder life.",
    "Brands work with me for content that looks premium and comes from someone who actually lives the lifestyle.",
  ],

  stats: [
    { value: "25K+", label: "Followers across IG and TikTok" },
    { value: "4+", label: "Major brand campaigns" },
    { value: "Founder", label: "Of a fitness brand built for Asia" },
    { value: "ACE", label: "Certified personal trainer" },
  ],

  partners: ["Salomon ASEAN", "Garnier", "L'Oréal", "Descente"],

  services: [
    { name: "Sponsored content", detail: "Reels, TikToks, carousels" },
    { name: "UGC", detail: "Ad-ready creative for your paid channels" },
    { name: "Modelling", detail: "Fitness, lifestyle, apparel" },
    { name: "Ambassadorships", detail: "Long-term partnerships" },
    { name: "Events & activations", detail: "Hosting, gym and venue activations" },
  ],

  // Put images in /public/photos and list them here.
  photos: [
    { src: "", caption: "[Campaign]" },
    { src: "", caption: "[Shoot]" },
    { src: "", caption: "[Training]" },
    { src: "", caption: "[Campaign]" },
    { src: "", caption: "[Event]" },
    { src: "", caption: "[Shoot]" },
  ],
};
