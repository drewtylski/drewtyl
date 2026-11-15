"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/content";

const I = {
  home: <path d="M11.3 2.6a1 1 0 0 1 1.4 0l8 7.4a1 1 0 0 1 .3.7V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1v-9.3a1 1 0 0 1 .3-.7l8-7.4Z" />,
  work: <path d="M9 5V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v4H3V7a2 2 0 0 1 2-2h4Zm2 0h2V4h-2v1ZM3 13h7v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1h7v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Z" />,
  creative: <path d="M9.2 3h5.6l1.6 2H19a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2.6l1.6-2ZM12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />,
  cv: <path d="M6 2h8l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm7 1.5V8h4.5L13 3.5ZM8 12v1.5h8V12H8Zm0 4v1.5h6V16H8Z" />,
  theme: <path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0-5 1 3h-2l1-3Zm0 20-1-3h2l-1 3ZM2 12l3-1v2l-3-1Zm20 0-3 1v-2l3 1ZM4.9 4.9l2.8 1.4-1.4 1.4-1.4-2.8Zm14.2 14.2-2.8-1.4 1.4-1.4 1.4 2.8ZM4.9 19.1l1.4-2.8 1.4 1.4-2.8 1.4ZM19.1 4.9l-1.4 2.8-1.4-1.4 2.8-1.4Z" />,
};
const Svg = ({ d }: { d: React.ReactNode }) => <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>{d}</svg>;

export default function Rail() {
  const path = usePathname() || "/";

  const toggleTheme = () => {
    const r = document.documentElement;
    const next = r.dataset.theme === "dark" ? "light" : "dark";
    r.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch {}
  };
  const on = (k: string) => ((k === "about" ? path === "/" : path.startsWith("/" + k)) ? "on" : "");

  return (
    <nav className="rail" aria-label="Main">
      <Link href="/" className={on("about")} aria-label="About" title="About"><Svg d={I.home} /></Link>
      <Link href="/work/" className={on("work")} aria-label="Work" title="Work"><Svg d={I.work} /></Link>
      <Link href="/creative/" className={on("creative")} aria-label="Creative" title="Creative"><Svg d={I.creative} /></Link>
      <a href={site.cvUrl} target="_blank" rel="noreferrer" aria-label="CV" title="CV"><Svg d={I.cv} /></a>
      <button type="button" onClick={toggleTheme} className="rail-theme" aria-label="Toggle dark mode" title="Theme"><Svg d={I.theme} /></button>
    </nav>
  );
}
