import Link from "next/link";
import { LEGAL_DOCS } from "@/lib/legal";

export function LegalCrossLinks({ current }: { current: string }) {
  const others = LEGAL_DOCS.filter((doc) => doc.href !== current);

  return (
    <p
      className="muted"
      style={{ marginTop: "56px", paddingTop: "24px", borderTop: "1px solid var(--hairline)" }}
    >
      Related:{" "}
      {others.map((doc, i) => (
        <span key={doc.href}>
          <Link href={doc.href}>{doc.title}</Link>
          {i < others.length - 1 ? " · " : ""}
        </span>
      ))}
    </p>
  );
}
