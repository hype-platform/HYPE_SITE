import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { LAST_UPDATED } from "@/lib/constants";
import { LEGAL_DOCS } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Legal",
  description: "hypefindr's Terms of Service, Privacy Policy, Community Guidelines and other policies.",
};

export default function LegalIndexPage() {
  return (
    <>
      <Nav />

      <div className="page-header">
        <div className="container">
          <h1>Legal</h1>
          <p className="muted">Last updated {LAST_UPDATED}</p>
        </div>
      </div>

      <main className="legal container">
        <p>
          The Terms of Service is the agreement between you and hypefindr. Every other document below is part of
          it.
        </p>
        <ul>
          {LEGAL_DOCS.map((doc) => (
            <li key={doc.href}>
              <Link href={doc.href}>{doc.title}</Link>: {doc.description}
            </li>
          ))}
        </ul>
      </main>

      <Footer />
    </>
  );
}
