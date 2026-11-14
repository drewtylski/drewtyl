"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Media, Para } from "@/content";
import { site } from "@/content";

/** Paragraphs where {Phrase} becomes a link from `links`. */
export function Text({ paras, className = "intro" }: { paras: Para[]; className?: string }) {
  return (
    <div className={className}>
      {paras.map((p, i) => (
        <p key={i}>
          {p.text.split(/(\{[^}]+\})/g).map((part, j) => {
            const m = part.match(/^\{(.+)\}$/);
            if (!m) return part;
            const href = p.links?.[m[1]] ?? "#";
            const ext = /^https?:/.test(href);
            return <a key={j} href={href} {...(ext ? { target: "_blank", rel: "noreferrer" } : {})}>{m[1]}</a>;
          })}
        </p>
      ))}
    </div>
  );
}

const TABS = [
  { href: "/", label: "About", match: (p: string) => p === "/" || p.startsWith("/journal") },
  { href: "/work/", label: "Work", match: (p: string) => p.startsWith("/work") },
  { href: "/creative/", label: "Creative", match: (p: string) => p.startsWith("/creative") },
];

export function Tabs() {
  const path = usePathname() || "/";
  return (
    <nav className="tabs" aria-label="Sections">
      {TABS.map((t) => (
        <Link key={t.href} href={t.href} className={t.match(path) ? "on" : ""}>{t.label}</Link>
      ))}
    </nav>
  );
}

export function Heading({ children, badge }: { children: React.ReactNode; badge?: string }) {
  return <h2 className="h">{children}{badge && <span className="badge">{badge}</span>}</h2>;
}

export function Tile({ m, i, ratio = "portrait" }: { m: Media; i: number; ratio?: "portrait" | "square" }) {
  return (
    <figure className={`tile ${ratio}`}>
      {m.src ? (
        m.video ? <video src={m.src} poster={m.src.replace(/\.mp4$/, ".jpg")} autoPlay muted loop playsInline preload="metadata" /> : <img src={m.src} alt={m.label || ""} />
      ) : (
        <div className={`tile-empty t${i % 3}`} />
      )}
      {m.label && <figcaption>{m.label}</figcaption>}
    </figure>
  );
}

export function Footer() {
  return (
    <footer className="foot">
      Handcrafted by <b>Drew</b> in {site.location}
      <span className="sep">·</span><a href={`mailto:${site.email}`}>Contact</a>
      <span className="sep">·</span><a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
      <span className="sep">·</span><a href={site.instagram} target="_blank" rel="noreferrer">Instagram</a>
    </footer>
  );
}
