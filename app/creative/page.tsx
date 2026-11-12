import type { Metadata } from "next";
import { creative as c } from "@/content";
import { Text, Tabs, Heading, Tile, Footer } from "@/components/Blocks";

export const metadata: Metadata = { title: "Creative — Drew Teo" };

export default function CreativePage() {
  return (
    <>
      <Tabs />
      <h1>Creative</h1>
      <Text paras={c.intro} />

      <section className="sec">
        <Heading>Following</Heading>
        <dl className="numbers">
          {c.following.map((f) => (
            <div key={f.platform}>
              <dt>{f.count || f.handle}</dt>
              <dd>{f.href ? <a href={f.href} target="_blank" rel="noreferrer">{f.platform} ↗</a> : <>{f.handle}</>}</dd>
            </div>
          ))}
        </dl>
      </section>

      {c.media.length > 0 && <section className="sec">
        <Heading badge={`${c.media.length}`}>Selected work</Heading>
        <div className="grid3">
          {c.media.map((m, i) => <Tile key={i} m={m} i={i} />)}
        </div>
      </section>}

      <section className="sec">
        <Heading badge={`${c.brands.length}`}>Brands I&apos;ve worked with</Heading>
        <ul className="entries">
          {c.brands.map((b) => (
            <li key={b.title}>
              <span className="e-title">{b.title}</span>
              <span className="e-line">{b.line} <span className="e-meta">· {b.meta}</span></span>
            </li>
          ))}
        </ul>
      </section>

      <Footer />
    </>
  );
}
