import { site } from "@/content";

export function Section({ title, aside, children }: { title: string; aside?: React.ReactNode; children: React.ReactNode }) {
  return (
    <section className="section fade">
      <div className="section-head">
        <h2>{title}</h2>
        {aside}
      </div>
      {children}
    </section>
  );
}

export function Stats({ items }: { items: { value: string; label: string }[] }) {
  return (
    <div className="stats fade">
      {items.map((s) => (
        <div key={s.label} className="stat">
          <div className="stat-value">{s.value}</div>
          <div className="stat-label">{s.label}</div>
        </div>
      ))}
    </div>
  );
}

export function Contact({ line }: { line: string }) {
  return (
    <Section title="Contact">
      <p className="muted">{line}</p>
      <div className="links">
        <a className="btn" href={`mailto:${site.email}`}>Email me</a>
        <a className="link" href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
        <a className="link" href={site.instagram} target="_blank" rel="noreferrer">Instagram ↗</a>
      </div>
    </Section>
  );
}
