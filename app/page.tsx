import { about, work, creative, show, site } from "@/content";
import { Text, Nav, Heading, Tile, Footer } from "@/components/Blocks";
import Film from "@/components/Film";

export default function Home() {
  const h = about.hero;
  const g = work.gorilla;
  const m = work.magicport;
  const c = creative;

  return (
    <>
      {/* ── Film ── */}
      {h ? (
        <Film src={h.src} video={!!h.video} name={site.name} tagline={about.tagline} />
      ) : (
        <div id="top">
          <Nav />
          <h1 className="display dark">{site.name}</h1>
        </div>
      )}

      {/* ── About ── */}
      <section className="about" id="about">
        <Text paras={about.bio} className="intro big" />
        {about.portrait && (
          <figure className="portrait">
            <img src={about.portrait} alt={site.name} />
          </figure>
        )}
      </section>

      {/* ── Work ── */}
      <section className="chapter" id="work">
        <h2 className="chapter-title">Work</h2>
        {work.intro && <div className="intro"><p>{work.intro}</p></div>}

        <article className="job">
          <div className="job-head">
            <h3 className="job-title"><a href={g.href} target="_blank" rel="noreferrer">{g.title}</a></h3>
            <span className="job-meta">{g.role} · {g.period}</span>
          </div>
          <Text paras={g.story} className="story" />

          {show.numbers && g.numbers.length > 0 && (
            <dl className="numbers">
              {g.numbers.map((n: { value: string; label: string }) => (
                <div key={n.label}><dt>{n.value}</dt><dd>{n.label}</dd></div>
              ))}
            </dl>
          )}

          {show.gorillaImages && g.images.length > 0 && (
            <div className="grid3 wide">
              {g.images.map((im, i) => <Tile key={i} m={im} i={i} />)}
            </div>
          )}

          <ul className="points">{g.points.map((p) => <li key={p}>{p}</li>)}</ul>
        </article>

        {show.magicport && (
          <article className="job">
            <div className="job-head">
              <h3 className="job-title">{m.title}</h3>
              <span className="job-meta">{m.role} · {m.period}</span>
            </div>
            <Text paras={m.story} className="story" />
            <ul className="points">{m.points.map((p) => <li key={p}>{p}</li>)}</ul>
          </article>
        )}
      </section>

      {/* ── Creative ── */}
      <section className="chapter" id="creative">
        <h2 className="chapter-title">Creative</h2>
        <Text paras={c.intro} />

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

        {show.media && c.media.length > 0 && (
          <div className="grid3 wide">
            {c.media.map((x, i) => <Tile key={i} m={x} i={i} />)}
          </div>
        )}

        {show.brands && c.brands.length > 0 && (
          <div className="sec">
            <Heading badge={`${c.brands.length}`}>Brands I&apos;ve worked with</Heading>
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

      <Footer />
    </>
  );
}
