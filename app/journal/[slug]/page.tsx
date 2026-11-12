import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { journal } from "@/content";
import { Tabs, Footer } from "@/components/Blocks";

export function generateStaticParams() {
  return journal.map((j) => ({ slug: j.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = journal.find((j) => j.slug === slug);
  return { title: post ? `${post.title} — Drew Teo` : "Drew Teo" };
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = journal.find((j) => j.slug === slug);
  if (!post) notFound();

  return (
    <>
      <Tabs />
      <article className="post">
        <Link href="/" className="back">← Journal</Link>
        <h1>{post.title}</h1>
        <p className="post-meta">{post.date}</p>
        <div className="intro">
          {post.body.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </article>
      <Footer />
    </>
  );
}
