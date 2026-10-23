import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
import { SITE_URL } from "@/lib/constants";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "hypefindr — Things are happening near you.",
    template: "%s — hypefindr",
  },
  description:
    "HYPE is a live, location-based social platform for real-world events. Discover what's happening near you, watch live streams from anywhere, go live, and show up.",
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "hypefindr — Things are happening near you.",
    description:
      "Discover events near you, watch live streams from anywhere in the world, go live, and show up. HYPE is a window into what's happening right now.",
  },
  twitter: {
    card: "summary_large_image",
    title: "hypefindr — Things are happening near you.",
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
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
