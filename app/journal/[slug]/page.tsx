import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { journal } from "@/content";
import { Tabs, Text, Footer } from "@/components/Blocks";

export function generateStaticParams() {
  return journal.map((j: { slug: string }) => ({ slug: j.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = journal.find((j: { slug: string }) => j.slug === slug);
  return { title: post ? `${post.title} — Drew Teo` : "Drew Teo" };
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = journal.find((j: { slug: string }) => j.slug === slug);
  if (!post) notFound();

  return (
    <>
      <Tabs />
      <article className="post">
        <Link href="/" className="back">← Journal</Link>
        <h1>{post.title}</h1>
        <p className="post-meta">{post.date}</p>
        <Text paras={post.paras} />
      </article>
      <Footer />
    </>
  );
}
