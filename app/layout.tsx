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
    default: "Hypefindr | Things are happening near you.",
    template: "%s | Hypefindr",
  },
  description:
    "Hypefindr shows what's happening near you right now, nearest and soonest first: people live, moments posted minutes ago, and plans coming up. Attend, bring your crew, and get checked in when you arrive.",
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Hypefindr | Things are happening near you.",
    description:
      "What's happening near you right now, nearest and soonest first: people live, moments and plans. Attend, bring your crew, and get checked in when you arrive.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hypefindr | Things are happening near you.",
    description:
      "What's happening near you right now, nearest and soonest first: people live, moments and plans. Attend and bring your crew.",
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
