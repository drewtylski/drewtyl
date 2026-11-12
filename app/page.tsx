import Link from "next/link";
import { about, journal, site } from "@/content";
import { Text, Tabs, Heading, Footer } from "@/components/Blocks";

export default function AboutPage() {
  return (
    <>
      <Tabs />

      <section className="hero">
        <div>
          <h1>{site.name}</h1>
          <Text paras={about.bio} />
        </div>
        <figure className="portrait">
          {about.portrait ? <img src={about.portrait} alt={site.name} /> : <div className="tile-empty t0" />}
        </figure>
      </section>

      <section className="sec">
        <Heading badge={`${journal.length}`}>Journal</Heading>
        <ul className="entries">
          {journal.map((j: { slug: string; title: string; line: string; date: string }) => (
            <li key={j.slug}>
              <Link href={`/journal/${j.slug}/`} className="entry-link">
                <span className="e-title">{j.title}</span>
                <span className="e-line">{j.line} <span className="e-meta">· {j.date}</span></span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <Footer />
    </>
  );
}
