import type { Metadata } from "next";
import { RevealRuntime } from "@/components/Reveal";
import { SiteNav } from "@/components/SiteNav";
import "./globals.css";

export const metadata: Metadata = {
  title: "Legendarium | Lakshay Video Editor",
  description:
    "A 3D Next.js video editing portfolio for Legendarium by Lakshay, featuring reels, promos, events, and motion-led edits.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <RevealRuntime />
        <div className="site-shell">
          <SiteNav />
          <main>{children}</main>
          <footer>
            <span>Legendarium</span>
            <p>Reels, hype edits, events, corporate cuts, and long-form motion stories.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
