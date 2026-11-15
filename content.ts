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
export type Brand = { title: string; line: string; meta: string; link: string; domain: string; image: string; cardTitle: string };

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
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _slugify = (s: string, i: number) =>
  (s || `post-${i + 1}`).toLowerCase().normalize("NFKD").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || `post-${i + 1}`;

// ── ABOUT ──
export const about = {
  portrait: media(C.about?.portrait)?.src || "",
  hero: media(C.about?.hero),
  media: (C.about?.media || []).map(media).filter(Boolean) as Media[],
  tagline: (C.about?.tagline || "") as string,
  bio: paras(C.about?.bio),
};

// Show/hide switches from the editor (missing = shown)
const S = C.sections || {};
export const show = {
  numbers: S.numbers === true,
  highlights: S.highlights === true,
  gorillaImages: S.gorillaImages !== false,
  magicport: S.magicport !== false,
  following: S.following === true,
  media: S.media !== false,
  brands: S.brands === true,
};

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
    media: (m.media || []).map(media).filter(Boolean) as Media[],
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
  brands: (C.creative?.brands || [])
    .filter((b: any) => b.title)
    .map((b: any): Brand => ({
      title: b.title as string,
      line: (b.line || "") as string,
      meta: (b.meta || "") as string,
      link: (b.link || "") as string,
      domain: b.link ? String(b.link).replace(/^https?:\/\//, "").split("/")[0].replace(/^www\./, "") : "",
      image: media(b.image)?.src || b.preview?.image || "",
      cardTitle: (b.preview?.title || "") as string,
    })) as Brand[],
  media: (C.creative?.media || []).map(media).filter(Boolean) as Media[],
};
