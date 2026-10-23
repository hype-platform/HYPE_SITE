import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalPage } from "@/components/LegalPage";
import { LEGAL_DOCS, findLegalDoc } from "@/lib/legal";

// /terms, /privacy and /guidelines have their own top-level routes.
function findNestedDoc(slug: string) {
  const doc = findLegalDoc(slug);
  return doc?.href.startsWith("/legal/") ? doc : undefined;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return LEGAL_DOCS.filter((doc) => doc.href.startsWith("/legal/")).map((doc) => ({ slug: doc.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const doc = findNestedDoc((await params).slug);
  return doc ? { title: doc.title, description: doc.description } : {};
}

export default async function LegalDocPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const doc = findNestedDoc((await params).slug);
  if (!doc) notFound();

  return <LegalPage doc={doc} />;
}
