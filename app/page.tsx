import { recruiter as r, site } from "@/content";
import { Section, Stats, Contact } from "@/components/ui";

export default function RecruiterPage() {
  return (
    <>
      <section className="hero fade">
        <p className="eyebrow">Growth · Founder · Sales</p>
        <h1>{r.headline}</h1>
        {r.intro.map((p, i) => (
          <p key={i} className="lede">{p}</p>
        ))}
        <div className="links">
          <a className="btn" href={`mailto:${site.email}`}>Get in touch</a>
          <a className="link" href={site.cvUrl} target="_blank" rel="noreferrer">Download CV ↓</a>
          <a className="link" href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
        </div>
      </section>

      <Stats items={r.stats} />

      <Section title="Selected work">
        <div className="work">
          {r.work.map((w) => (
            <article key={w.title} className="card">
              <div className="card-top">
                <div>
                  <h3>
                    {w.link ? <a href={w.link} target="_blank" rel="noreferrer">{w.title} ↗</a> : w.title}
                  </h3>
                  <span className="muted">{w.role}</span>
                </div>
                <span className="mono muted">{w.period}</span>
              </div>
              <p>{w.summary}</p>
              <ul>
                {w.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Experience">
        <ul className="rows">
          {r.experience.map((e) => (
            <li key={e.org + e.role}>
              <span><strong>{e.org}</strong> <span className="muted">— {e.role}</span></span>
              <span className="mono muted">{e.period}</span>
            </li>
          ))}
        </ul>
        <p className="muted small">{r.education}</p>
      </Section>

      <Section title="Toolkit">
        <ul className="rows">
          {r.toolkit.map((t) => (
            <li key={t.name}>
              <span>{t.name}</span>
              <span className="tag">{t.category}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Contact line="I'm open to growth roles. The fastest way to reach me is email." />
    </>
  );
}
