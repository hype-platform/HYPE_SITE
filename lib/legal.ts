import { readFileSync } from "node:fs";
import path from "node:path";
import { marked } from "marked";
import { CONTACT_EMAIL, MAILING_ADDRESS } from "@/lib/constants";

// Every legal document lives in content/legal/<slug>.md. The Terms, Privacy Policy and
// Community Guidelines keep their original top-level URLs; the rest live under /legal.
export const LEGAL_DOCS = [
  {
    slug: "terms",
    href: "/terms",
    title: "Terms of Service",
    description: "The contract that governs your use of Hypefindr, including arbitration and liability terms.",
  },
  {
    slug: "privacy",
    href: "/privacy",
    title: "Privacy Policy",
    description: "What Hypefindr collects, why, who receives it, how long we keep it, and your rights.",
  },
  {
    slug: "guidelines",
    href: "/guidelines",
    title: "Community Guidelines",
    description: "What is and is not allowed on Hypefindr and at events, and how reports are handled.",
  },
  {
    slug: "live-streaming",
    href: "/legal/live-streaming",
    title: "Live Streaming and Recording Policy",
    description: "Rules for going live on Hypefindr and recording people and places.",
  },
  {
    slug: "events-safety",
    href: "/legal/events-safety",
    title: "Events, Safety and Assumption of Risk",
    description: "Hypefindr does not organize events. What hosts must do and the risks attendees accept.",
  },
  {
    slug: "child-safety",
    href: "/legal/child-safety",
    title: "Child Safety Policy",
    description: "Hypefindr is 18+ only. Our zero-tolerance rules on child exploitation and how to report it.",
  },
  {
    slug: "content-removal",
    href: "/legal/content-removal",
    title: "Content Removal Requests",
    description: "How to ask Hypefindr to remove content: copyright, intimate images, trademarks, privacy and more.",
  },
  {
    slug: "points-and-referrals",
    href: "/legal/points-and-referrals",
    title: "Points, Scores and Referral Program Terms",
    description: "Hype Score, City Crown, Streaks, Ripples and invites have no monetary value.",
  },
  {
    slug: "enforcement",
    href: "/legal/enforcement",
    title: "Enforcement, Moderation and Appeals",
    description: "How Hypefindr reviews reports, applies strikes, suspends or bans accounts, and handles appeals.",
  },
  {
    slug: "law-enforcement",
    href: "/legal/law-enforcement",
    title: "Law Enforcement Guidelines",
    description: "The legal process Hypefindr requires before disclosing user information.",
  },
  {
    slug: "cookies",
    href: "/legal/cookies",
    title: "Website and Cookie Notice",
    description: "What hypefindr.net collects when you visit it.",
  },
] as const;

export type LegalDoc = (typeof LEGAL_DOCS)[number];
export type LegalSlug = LegalDoc["slug"];

export function findLegalDoc(slug: string): LegalDoc | undefined {
  return LEGAL_DOCS.find((doc) => doc.slug === slug);
}

type TocEntry = { id: string; label: string };

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function renderLegalDoc(slug: LegalSlug): { html: string; toc: TocEntry[] } {
  const source = readFileSync(path.join(process.cwd(), "content", "legal", `${slug}.md`), "utf8")
    .replaceAll("{{CONTACT_EMAIL}}", CONTACT_EMAIL)
    .replaceAll("{{MAILING_ADDRESS}}", MAILING_ADDRESS);

  const tokens = marked.lexer(source);

  // Give every h2/h3 a stable anchor; h2s also make up the "On this page" list.
  const used = new Set<string>();
  const headingIds: string[] = [];
  const toc: TocEntry[] = [];
  for (const token of tokens) {
    if (token.type !== "heading" || token.depth > 3) continue;
    const base = slugify(token.text);
    let id = base;
    for (let n = 2; used.has(id); n++) id = `${base}-${n}`;
    used.add(id);
    headingIds.push(id);
    if (token.depth === 2) toc.push({ id, label: token.text });
  }

  let i = 0;
  const html = marked
    .parser(tokens)
    .replace(/<h([23])>/g, (_, depth) => `<h${depth} id="${headingIds[i++]}">`)
    .replaceAll("<table>", '<div class="legal__table-wrap"><table>')
    .replaceAll("</table>", "</table></div>");

  return { html, toc };
}
