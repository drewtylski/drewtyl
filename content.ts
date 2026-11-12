// ─────────────────────────────────────────────────────────────
//  ALL SITE CONTENT LIVES HERE.
//  Edit words, numbers, links, photos and journal posts in this file.
//  In text, {Words in braces} become links (see `links`).
//  Images and videos go in /public/photos — e.g. "/photos/me.jpg".
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "Drew Teo",
  domain: "drewtyl.com",
  location: "Singapore",
  email: "drewteoyl@gmail.com",
  linkedin: "https://linkedin.com/in/drewteoyl",
  instagram: "https://instagram.com/drewtyl",
  tiktok: "https://tiktok.com/@drewtyl",
  cvUrl: "/drew-teo-cv.pdf",
};

export type Para = { text: string; links?: Record<string, string> };
export type Media = { src: string; label?: string; video?: boolean };

// ── ABOUT ( / ) ──────────────────────────────────────────────

export const about = {
  portrait: "", // e.g. "/photos/me.jpg"
  bio: [
    {
      text: "I'm Drew. I build brands and the growth engines behind them. I founded {Gorilla Gear}, a fitness nutrition brand built for Asia, and I'm the Founding SDR at MagicPort.",
      links: { "Gorilla Gear": "https://gorillagear.club" },
    },
    {
      text: "I also train people, model and make content. I'm based in Singapore and open to growth roles in SF, LA or NY. {More about my work.}",
      links: { "More about my work.": "/work/" },
    },
  ] as Para[],
};

// ── JOURNAL ( / and /journal/<slug> ) ────────────────────────
// Newest first. Add a post by copying a block.

export const journal = [
  {
    slug: "starting-here",
    title: "Starting here",
    line: "Why I made this site",
    date: "13 Nov 2026",
    body: [
      "This is where I'll write about building brands, selling, training and whatever else I'm figuring out.",
      "Replace this post with your first real entry.",
    ],
  },
];

// ── WORK ( /work ) ───────────────────────────────────────────

export const work = {
  intro: "I like being the first person through the door: building the brand, the funnel or the sales motion before there's a playbook for it.",

  gorilla: {
    title: "Gorilla Gear",
    role: "Founder & Brand Strategist",
    period: "Jun 2024 – Now",
    href: "https://gorillagear.club",
    story: [
      { text: "Gorilla Gear is a premium fitness and nutrition brand built for Asia. We launched in May 2025 and I bootstrapped it to more than US$130K ARR in the first 12 months." },
      { text: "I run the growth side end to end: paid acquisition, retention, B2B partnerships and the brand itself." },
    ] as Para[],
    numbers: [
      { value: "US$130K+", label: "ARR in 12 months" },
      { value: "1,000+", label: "Customers" },
      { value: "30%", label: "Repeat rate" },
      { value: ">4x", label: "ROAS" },
    ],
    // Replace with real campaign/product images
    images: [
      { src: "", label: "Product" },
      { src: "", label: "Campaign" },
      { src: "", label: "Activation" },
    ] as Media[],
    points: [
      "Grew revenue 10x through paid acquisition and B2B partnerships, reaching a consistent US$20K+ MRR",
      "Ran Meta Ads at more than 4x ROAS, shipping about 30 creatives a month at peak with matching landing pages",
      "Built Klaviyo retention flows behind a 30% repeat rate across 1,000+ customers",
      "Closed 5+ B2B accounts across lifestyle and fitness channels through outbound",
      "Ran gym and lifestyle activations; the largest drew 200+ people over two days",
    ],
  },

  magicport: {
    title: "MagicPort",
    role: "Founding SDR",
    period: "May 2026 – Now",
    story: [
      { text: "MagicPort is an AI-powered maritime intelligence platform that digitizes port operations. As the first sales hire, I built the outbound motion and the cold prospecting playbook from scratch." },
      { text: "In my first 6 months I generated US$250K in outbound pipeline across 300+ shipping companies in 80+ countries." },
    ] as Para[],
    points: [
      "Work with the founders on go-to-market, refining messaging and qualification to lift meeting conversion",
      "Run pipeline and sales activity in HubSpot",
    ],
  },
};

// ── CREATIVE ( /creative ) ───────────────────────────────────

export const creative = {
  intro: [
    {
      text: "Alongside building brands, I make content and model. I've grown a following of 25K+ across {Instagram} and {TikTok}, and worked with brands on campaigns, UGC and micro-influencer work.",
      links: { Instagram: "https://instagram.com/drewtyl", TikTok: "https://tiktok.com/@drewtyl" },
    },
  ] as Para[],

  following: [
    { platform: "Instagram", handle: "@drewtyl", href: "https://instagram.com/drewtyl", count: "" }, // e.g. "15K"
    { platform: "TikTok", handle: "@drewtyl", href: "https://tiktok.com/@drewtyl", count: "" },
    { platform: "Combined", handle: "IG + TikTok", href: "", count: "25K+" },
  ],

  brands: [
    { title: "Salomon ASEAN", line: "“Made for the Wild” campaign", meta: "Model" },
    { title: "Garnier", line: "Box Dye campaign", meta: "Model" },
    { title: "L'Oréal", line: "UGC and micro-influencer campaign", meta: "Creator" },
    { title: "Descente", line: "Micro-influencer campaign", meta: "Creator" },
  ],

  // Your content. Set video: true for .mp4 clips (they autoplay muted).
  media: [
    { src: "", label: "Salomon" },
    { src: "", label: "Garnier" },
    { src: "", label: "Training" },
    { src: "", label: "L'Oréal" },
    { src: "", label: "Descente" },
    { src: "", label: "Gorilla Gear" },
  ] as Media[],
};
