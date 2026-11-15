import Link from "next/link";
import { about, work, creative, show, site } from "@/content";
import { Text, Heading, Plates } from "@/components/Blocks";

export function WorkChapter() {
  const g = work.gorilla;
  const m = work.magicport;
  return (
    <>
      {/* ── I. Work ── */}
      <section className="chapter" id="work">
        <p className="chapter-no">Chapter I</p>
        <h2 className="chapter-title">Work</h2>
        {work.intro && <div className="intro"><p className="lead">{work.intro}</p></div>}

        <article className="job">
          <h3 className="job-title"><a href={g.href} target="_blank" rel="noreferrer">{g.title}</a></h3>
          <span className="job-meta">{g.role} · {g.period}</span>
          <Text paras={g.story} className="story" />

          {show.numbers && g.numbers.length > 0 && (
            <dl className="numbers">
              {g.numbers.map((n: { value: string; label: string }) => (
                <div key={n.label}><dt>{n.value}</dt><dd>{n.label}</dd></div>
              ))}
            </dl>
          )}
          {show.gorillaImages && <Plates items={g.images} />}
          {show.highlights && g.points.length > 0 && <ul className="points">{g.points.map((p) => <li key={p}>{p}</li>)}</ul>}
        </article>

        {show.magicport && (
          <article className="job">
            <h3 className="job-title">{m.title}</h3>
            <span className="job-meta">{m.role} · {m.period}</span>
            <Text paras={m.story} className="story" />
            <Plates items={m.media} />
            {show.highlights && m.points.length > 0 && <ul className="points">{m.points.map((p) => <li key={p}>{p}</li>)}</ul>}
          </article>
        )}
      </section>

    </>
  );
}

export function CreativeChapter() {
  const c = creative;
  return (
    <>
      {/* ── II. Creative ── */}
      <section className="chapter" id="creative">
        <p className="chapter-no">Chapter II</p>
        <h2 className="chapter-title">Creative</h2>
        <Text paras={c.intro} className="story" />

        {show.media && <Plates items={c.media} />}

        {show.following && (
          <dl className="numbers three">
            {c.following.map((f) => (
              <div key={f.platform}>
                <dt>{f.count || f.handle}</dt>
                <dd>{f.href ? <a href={f.href} target="_blank" rel="noreferrer">{f.platform} ↗</a> : <>{f.handle}</>}</dd>
              </div>
            ))}
          </dl>
        )}

        {show.brands && c.brands.length > 0 && (
          <div className="sec">
            <Heading>Brands</Heading>
            <ul className="entries">
              {c.brands.map((b) => (
                <li key={b.title}>
                  <span className="e-title">{b.title}</span>
                  <span className="e-line">{b.line}{b.meta && <span className="e-meta"> · {b.meta}</span>}</span>
                  {b.link && (
                    <a className="card-link" href={b.link} target="_blank" rel="noreferrer">
                      {b.image && <span className="card-img"><img src={b.image} alt="" loading="lazy" /></span>}
                      <span className="card-text">
                        <span className="card-title">{b.cardTitle || b.line || b.title}</span>
                        <span className="card-domain">{b.domain} ↗</span>
                      </span>
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

    </>
  );
}

/** Small running header on chapter pages, like the top of a book page. */
export function RunningHead() {
  return (
    <header className="running-head">
      <Link href="/">{site.name}</Link>
    </header>
  );
}

/** "Turn the page" links at the end of a chapter. */
export function PageTurn({ prev, next, nextLabel = "Next chapter" }: { prev?: { href: string; label: string }; next?: { href: string; label: string }; nextLabel?: string }) {
  return (
    <nav className="page-turn" aria-label="Chapters">
      {prev ? <Link href={prev.href} className="pt prev"><small>Back</small><span>← {prev.label}</span></Link> : <span />}
      {next ? <Link href={next.href} className="pt next"><small>{nextLabel}</small><span>{next.label} →</span></Link> : <span />}
    </nav>
  );
}
// keep `about` import used for type inference in some builds
void about;
