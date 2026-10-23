import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CommunityGuidelinesContent } from "@/components/CommunityGuidelinesContent";
import { LAST_UPDATED } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Community Guidelines",
  description: "hypefindr's Community Guidelines — what's allowed, what isn't, and how reports are handled.",
};

export default function GuidelinesPage() {
  return (
    <>
      <Nav />

      <div className="page-header">
        <div className="container">
          <h1>Community Guidelines</h1>
          <p className="muted">Last updated: {LAST_UPDATED}</p>
        </div>
      </div>

      <CommunityGuidelinesContent />

      <Footer />
    </>
  );
}
