import type { Metadata } from "next";
import { WorkChapter, RunningHead, PageTurn } from "@/components/Chapters";
import { Footer } from "@/components/Blocks";

export const metadata: Metadata = { title: "Work — Drew Teo" };

export default function Page() {
  return (
    <>
      <RunningHead />
      <WorkChapter />
      <PageTurn prev={{ href: "/", label: "The beginning" }} next={{ href: "/creative/", label: "II · Creative" }} />
      <Footer />
    </>
  );
}
