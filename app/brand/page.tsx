import type { Metadata } from "next";
import { brand as b, site } from "@/content";
import { Section, Stats, Contact } from "@/components/ui";

export const metadata: Metadata = {
  title: "Drew Teo — Creator, Model, Trainer",
  description: "Content, modelling and partnerships with Drew Teo, a Singapore-based creator and ACE-certified trainer.",
};

export default function BrandPage() {
  return (
    <>
      <section className="hero fade">
        <p className="eyebrow">Creator · Model · Trainer</p>
        <h1>{b.headline}</h1>
        {b.intro.map((p, i) => (
          <p key={i} className="lede">{p}</p>
        ))}
        <div className="links">
          <a className="btn" href={`mailto:${site.email}?subject=Partnership`}>Work with me</a>
          <a className="link" href={site.instagram} target="_blank" rel="noreferrer">Instagram ↗</a>
          <a className="link" href={site.tiktok} target="_blank" rel="noreferrer">TikTok ↗</a>
        </div>
      </section>

      <Stats items={b.stats} />

      <Section title="Selected work">
        <div className="grid">
          {b.photos.map((p, i) => (
            <figure key={i} className="photo">
              {p.src ? <img src={p.src} alt={p.caption} /> : <div className="ph" />}
              <figcaption>{p.caption}</figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <Section title="Worked with">
        <div className="partners">
          {b.partners.map((p) => <span key={p}>{p}</span>)}
        </div>
      </Section>

      <Section title="Services">
        <ul className="rows">
          {b.services.map((s) => (
            <li key={s.name}>
              <span>{s.name}</span>
              <span className="muted">{s.detail}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Contact line="For campaigns, shoots and partnerships, email me and I'll send over a media kit." />
    </>
  );
}
