import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CommunityGuidelinesContent } from "@/components/CommunityGuidelinesContent";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "HYPE's Community Guidelines — the rules that govern your use of the app.",
};

export default function PrivacyPage() {
  return (
    <>
      <Nav />

      <div className="page-header">
        <div className="container">
          <h1>Community Guidelines</h1>
          <p className="muted">Effective Date: September 10, 2026 · Jurisdiction: State of Minnesota, United States</p>
        </div>
      </div>

      <CommunityGuidelinesContent />

      <Footer />
    </>
  );
}
