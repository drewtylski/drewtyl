import type { Metadata } from "next";
import { CreativeChapter, RunningHead, PageTurn } from "@/components/Chapters";
import { Footer } from "@/components/Blocks";

export const metadata: Metadata = { title: "Creative — Drew Teo" };

export default function Page() {
  return (
    <>
      <RunningHead />
      <CreativeChapter />
      <PageTurn prev={{ href: "/work/", label: "I · Work" }} next={{ href: "/", label: "The beginning" }} nextLabel="Start again" />
      <Footer />
    </>
  );
}
