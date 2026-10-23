import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SITE_URL } from "@/lib/constants";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Hypefindr — Things are happening near you.",
    template: "%s — Hypefindr",
  },
  description:
    "Hypefindr is a live, location-based social app for real-world events. Discover what's happening near you, watch live streams from anywhere, go live, and show up.",
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Hypefindr — Things are happening near you.",
    description:
      "Discover events near you, watch live streams from anywhere in the world, go live, and show up. Hypefindr shows you what's happening right now.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hypefindr — Things are happening near you.",
    description:
      "Discover events near you, watch live streams from anywhere in the world, go live, and show up.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
