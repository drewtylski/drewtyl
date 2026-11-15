"use client";

import { useEffect, useRef, useState } from "react";

type Props = { src: string; video: boolean; name: string; tagline: string };

/**
 * Full-screen opening film. As you scroll past it, the film fades
 * and shrinks into a small player in the top-right corner.
 */
export default function Film({ src, video, name, tagline }: Props) {
  const hero = useRef<HTMLElement>(null);
  const vid = useRef<HTMLVideoElement>(null);
  const [mini, setMini] = useState(false);
  const [closed, setClosed] = useState(false);
  const [showName, setShowName] = useState(!video);

  // Name fades in after the film's own title card (~2.8s), or right away for photos.
  useEffect(() => {
    if (!video) return;
    const t = setTimeout(() => setShowName(true), 2800);
    return () => clearTimeout(t);
  }, [video]);

  // Fade the big film as you scroll; switch to the mini player once it's mostly gone.
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = hero.current;
        if (!el) return;
        const h = el.offsetHeight;
        const p = Math.min(1, Math.max(0, window.scrollY / (h * 0.75)));
        el.style.setProperty("--p", String(p));
        setMini(window.scrollY > h * 0.8);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); cancelAnimationFrame(raf); };
  }, []);

  // Keep the video playing when it moves into the mini player.
  useEffect(() => { vid.current?.play?.().catch(() => {}); }, [mini]);

  const poster = src.replace(/\.mp4$/, ".jpg");
  const asMini = mini && !closed && video;

  return (
    <section className="film bleed" id="top" ref={hero}>
      <div className="film-media">
        {video ? (
          <video ref={vid} className={asMini ? "is-mini" : ""} src={src} poster={poster} autoPlay muted loop playsInline preload="auto" />
        ) : (
          <img src={src} alt="" />
        )}
      </div>
      {asMini && (
        <div className="mini-ctrl">
          <a href="#top" className="mini-hit" aria-label="Back to top" />
          <button type="button" className="mini-x" aria-label="Close video" onClick={() => setClosed(true)}>×</button>
        </div>
      )}
      <div className="film-shade" />
      <div className="film-inner">
        <div className={`film-title ${showName ? "in" : ""}`}>
          {tagline && <p className="film-tag">{tagline}</p>}
          <h1 className="display">{name}</h1>
        </div>
      </div>
    </section>
  );
}
