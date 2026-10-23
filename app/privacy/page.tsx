import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PrivacyContent } from "@/components/PrivacyContent";
import { LAST_UPDATED } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How hypefindr collects, uses, and protects your data.",
};

export default function PrivacyPage() {
  return (
    <>
      <Nav />

      <div className="page-header">
        <div className="container">
          <h1>Privacy Policy</h1>
          <p className="muted">Last updated: {LAST_UPDATED}</p>
        </div>
      </div>

      <PrivacyContent />

      <Footer />
    </>
  );
}
