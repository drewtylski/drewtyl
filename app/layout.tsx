import type { Metadata } from "next";
import "@fontsource/instrument-serif/400.css";
import "@fontsource/instrument-serif/400-italic.css";
import "@fontsource-variable/source-sans-3";
import "@fontsource-variable/figtree";
import "@fontsource-variable/schibsted-grotesk";
import "@fontsource-variable/schibsted-grotesk/wght-italic.css";
import "./globals.css";
import Rail from "@/components/Rail";
import { site } from "@/content";

export const metadata: Metadata = {
  title: "Drew Teo",
  description: "Drew Teo is a growth operator and founder in Singapore. Founder of Gorilla Gear, Founding SDR at MagicPort.",
  metadataBase: new URL(`https://${site.domain}`),
};

// Applies saved/system theme before paint so there's no flash.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(!t){t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.dataset.theme=t}catch(e){}})()`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {site.adobeFontsKit && <link rel="stylesheet" href={`https://use.typekit.net/${site.adobeFontsKit}.css`} />}
      </head>
      <body>
        <Rail />
        <main className="col">{children}</main>
      </body>
    </html>
  );
}
