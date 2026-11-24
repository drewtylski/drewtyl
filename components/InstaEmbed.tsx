/**
 * Instagram post as a site-styled card (works in light and dark mode).
 * Cover images live in /public/media/ig/<postId>.jpg.
 * If a cover is missing, the card shows a plain tile with the Instagram mark.
 */
import fs from "node:fs";
import path from "node:path";

export default function InstaEmbed({ url }: { url: string }) {
  const clean = url.split("?")[0].replace(/\/?$/, "/");
  const m = clean.match(/instagram\.com\/(reel|reels|p|tv)\/([^/]+)/);
  const id = m?.[2] || "";
  const isReel = m?.[1]?.startsWith("reel") || m?.[1] === "tv";
  const cover = `/media/ig/${id}.jpg`;
  const hasCover = id && fs.existsSync(path.join(process.cwd(), "public", cover));

  return (
    <a className="ig-card" href={clean} target="_blank" rel="noreferrer">
      <span className="ig-media">
        {hasCover ? <img src={cover} alt="" loading="lazy" /> : <span className="ig-empty" />}
        {isReel && (
          <span className="ig-play" aria-hidden>
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M8 5.5v13l11-6.5-11-6.5Z" /></svg>
          </span>
        )}
      </span>
      <span className="ig-foot">
        <span className="ig-mark" aria-hidden>
          <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
        </span>
        <span>@drewtyl</span>
        <span className="ig-view">{isReel ? "Watch" : "View"} on Instagram ↗</span>
      </span>
    </a>
  );
}
