import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TrackForge — IT Asset Operations",
  description: "A modern IT asset management dashboard for growing teams.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
