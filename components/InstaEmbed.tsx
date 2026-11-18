"use client";

import { useEffect } from "react";

declare global {
  interface Window { instgrm?: { Embeds: { process: () => void } } }
}

/** Instagram's official embed. Loads Instagram's script once and lets it size the post. */
export default function InstaEmbed({ url }: { url: string }) {
  useEffect(() => {
    if (window.instgrm) { window.instgrm.Embeds.process(); return; }
    if (document.getElementById("ig-embed-js")) return;
    const s = document.createElement("script");
    s.id = "ig-embed-js"; s.async = true; s.src = "https://www.instagram.com/embed.js";
    document.body.appendChild(s);
  }, [url]);

  const clean = url.split("?")[0].replace(/\/?$/, "/");
  return (
    <div className="ig-wrap">
      <blockquote className="instagram-media" data-instgrm-permalink={`${clean}?utm_source=ig_embed`} data-instgrm-version="14">
        <a href={clean} target="_blank" rel="noreferrer">View this post on Instagram</a>
      </blockquote>
    </div>
  );
}
