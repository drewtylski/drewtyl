"use client";

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

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#creative", label: "Creative" },
];

export function Nav({ light = false }: { light?: boolean }) {
  return (
    <nav className={`tabs ${light ? "light" : ""}`} aria-label="Sections">
      {LINKS.map((t) => <a key={t.href} href={t.href}>{t.label}</a>)}
    </nav>
  );
}

export function Heading({ children, badge }: { children: React.ReactNode; badge?: string }) {
  return <h2 className="h">{children}{badge && <span className="badge">{badge}</span>}</h2>;
}

export function Tile({ m, i, ratio = "portrait" }: { m: Media; i: number; ratio?: "portrait" | "square" | "feature" }) {
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

/** Book-style plates: first item large, the rest in a grid. */
export function Plates({ items }: { items: Media[] }) {
  if (!items.length) return null;
  const [first, ...rest] = items;
  return (
    <div className="plates wide">
      <Tile m={first} i={0} ratio="feature" />
      {rest.length > 0 && <div className="grid3">{rest.map((m, i) => <Tile key={i} m={m} i={i + 1} />)}</div>}
    </div>
  );
}

export function Footer() {
  return (
    <footer className="foot">
      <a href={`mailto:${site.email}`}>Contact</a>
      <span className="sep">·</span><a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
      <span className="sep">·</span><a href={site.instagram} target="_blank" rel="noreferrer">Instagram</a>
    </footer>
  );
}
