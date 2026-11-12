import type { Metadata } from "next";
import { work } from "@/content";
import { Text, Tabs, Tile, Footer } from "@/components/Blocks";

export const metadata: Metadata = { title: "Work — Drew Teo" };

export default function WorkPage() {
  const g = work.gorilla;
  const m = work.magicport;
  return (
    <>
      <Tabs />
      <h1>Work</h1>
      <div className="intro"><p>{work.intro}</p></div>

      <section className="sec job">
        <div className="job-head">
          <h2 className="job-title">
            <a href={g.href} target="_blank" rel="noreferrer">{g.title}</a>
          </h2>
          <span className="job-meta">{g.role} · {g.period}</span>
        </div>
        <Text paras={g.story} className="story" />

        <dl className="numbers">
          {g.numbers.map((n) => (
            <div key={n.label}><dt>{n.value}</dt><dd>{n.label}</dd></div>
          ))}
        </dl>

        <div className="grid3">
          {g.images.map((im, i) => <Tile key={i} m={im} i={i} ratio="square" />)}
        </div>

        <ul className="points">{g.points.map((p) => <li key={p}>{p}</li>)}</ul>
      </section>

      <section className="sec job">
        <div className="job-head">
          <h2 className="job-title">{m.title}</h2>
          <span className="job-meta">{m.role} · {m.period}</span>
        </div>
        <Text paras={m.story} className="story" />
        <ul className="points">{m.points.map((p) => <li key={p}>{p}</li>)}</ul>
      </section>

      <Footer />
    </>
  );
}
