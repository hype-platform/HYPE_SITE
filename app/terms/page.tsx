import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { TermsContent } from "@/components/TermsContent";
import { LAST_UPDATED } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern your use of the hypefindr app.",
};

export default function TermsPage() {
  return (
    <>
      <Nav />

      <div className="page-header">
        <div className="container">
          <h1>Terms of Service</h1>
          <p className="muted">Last updated: {LAST_UPDATED}</p>
        </div>
      </div>

      <TermsContent />

      <Footer />
    </>
  );
}
