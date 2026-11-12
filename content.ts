// ─────────────────────────────────────────────────────────────
//  Site content comes from data/content.json, which is exported
//  from the drewtyl.com Editor. This file turns it into what the
//  pages render. Only the fixed details below are edited here.
// ─────────────────────────────────────────────────────────────
import raw from "./data/content.json";

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

type RawMedia = { src?: string; url?: string; label?: string; video?: boolean } | null;
const C = raw as any;

/** "Para one\n\nPara two with [a link](https://x)" → Para[] using {Phrase} links. */
function paras(s: string = ""): Para[] {
  return s
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean)
    .map((p) => {
      const links: Record<string, string> = {};
      const text = p.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_m, label, href) => {
        links[label] = href;
        return `{${label}}`;
      });
      return { text, links };
    });
}
const lines = (s: string = "") => s.split("\n").map((l) => l.replace(/^[-•]\s*/, "").trim()).filter(Boolean);
const media = (m: RawMedia): Media | null => (m && (m.src || m.url) ? { src: (m.src || m.url)!, label: m.label || "", video: !!m.video } : null);
const slugify = (s: string, i: number) =>
  (s || `post-${i + 1}`).toLowerCase().normalize("NFKD").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || `post-${i + 1}`;

// ── ABOUT ──
export const about = {
  portrait: media(C.about?.portrait)?.src || "",
  bio: paras(C.about?.bio),
};

// ── JOURNAL ──
export const journal = (C.journal || [])
  .filter((j: any) => j.title)
  .map((j: any, i: number) => ({
    slug: slugify(j.title, i),
    title: j.title as string,
    line: (j.line || "") as string,
    date: (j.date || "") as string,
    body: paras(j.body).map((p) => p.text.replace(/\{([^}]+)\}/g, "$1")),
    paras: paras(j.body),
  }));

// ── WORK ──
const g = C.work?.gorilla || {};
const m = C.work?.magicport || {};
export const work = {
  intro: (C.work?.intro || "") as string,
  gorilla: {
    title: "Gorilla Gear",
    role: g.role || "",
    period: g.period || "",
    href: "https://gorillagear.club",
    story: paras(g.story),
    numbers: (g.numbers || []).filter((n: any) => n && n.value),
    images: (g.images || []).map(media).filter(Boolean) as Media[],
    points: lines(g.points),
  },
  magicport: {
    title: "MagicPort",
    role: m.role || "",
    period: m.period || "",
    story: paras(m.story),
    points: lines(m.points),
  },
};

// ── CREATIVE ──
const f = C.creative?.following || {};
export const creative = {
  intro: paras(C.creative?.intro),
  following: [
    { platform: "Instagram", handle: "@drewtyl", href: site.instagram, count: f.instagram || "" },
    { platform: "TikTok", handle: "@drewtyl", href: site.tiktok, count: f.tiktok || "" },
    { platform: "Combined", handle: "IG + TikTok", href: "", count: f.combined || "" },
  ],
  brands: (C.creative?.brands || []).filter((b: any) => b.title) as { title: string; line: string; meta: string }[],
  media: (C.creative?.media || []).map(media).filter(Boolean) as Media[],
};
