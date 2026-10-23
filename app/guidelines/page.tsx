import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { findLegalDoc } from "@/lib/legal";

const doc = findLegalDoc("guidelines")!;

export const metadata: Metadata = {
  title: doc.title,
  description: doc.description,
};

export default function GuidelinesPage() {
  return <LegalPage doc={doc} />;
}
