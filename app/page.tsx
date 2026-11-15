import Link from "next/link";
import { about, site } from "@/content";
import { Text, Plates, Footer } from "@/components/Blocks";
import Film from "@/components/Film";

export default function Home() {
  const h = about.hero;

  return (
    <>
      {h ? (
        <Film src={h.src} video={!!h.video} name={site.name} tagline={about.tagline} />
      ) : (
        <div id="top"><h1 className="display dark">{site.name}</h1></div>
      )}

      {/* ── About (the opening) ── */}
      <section className="about" id="about">
        <Text paras={about.bio} className="intro big" />
        {about.portrait && (
          <figure className="portrait">
            <img src={about.portrait} alt={site.name} />
          </figure>
        )}
      </section>
      <Plates items={about.media} />

      {/* ── Contents ── */}
      <nav className="contents" aria-label="Contents">
        <span className="contents-label">Contents</span>
        <Link href="/work/"><i>I</i><span>Work</span><em>Gorilla Gear, MagicPort</em></Link>
        <Link href="/creative/"><i>II</i><span>Creative</span><em>Modelling and content</em></Link>
      </nav>

      <Footer />
    </>
  );
}
