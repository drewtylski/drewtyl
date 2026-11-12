import type { Metadata } from "next";
import Link from "next/link";
import "@fontsource-variable/inter";
import "@fontsource/jetbrains-mono/400.css";
import "./globals.css";
import ModeToggle from "@/components/ModeToggle";
import { site } from "@/content";

export const metadata: Metadata = {
  title: "Drew Teo — Growth, Founder, Creator",
  description: "Drew Teo is a growth operator and founder in Singapore. Founder of Gorilla Gear, Founding SDR at MagicPort.",
  metadataBase: new URL(`https://${site.domain}`),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const year = new Date().getFullYear();
  return (
    <html lang="en">
      <body>
        <div className="wrap">
          <header className="nav">
            <Link href="/" className="wordmark">
              <span className="dot" /> {site.name}
            </Link>
            <ModeToggle />
          </header>
          <main>{children}</main>
          <footer className="footer">
            <span>© {year} {site.name} · {site.location}</span>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </footer>
        </div>
      </body>
    </html>
  );
}
