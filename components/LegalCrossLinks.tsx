import Link from "next/link";

const PAGES = [
  { href: "/terms", label: "Terms of Service" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/guidelines", label: "Community Guidelines" },
] as const;

export function LegalCrossLinks({ current }: { current: (typeof PAGES)[number]["href"] }) {
  const others = PAGES.filter((p) => p.href !== current);

  return (
    <p
      className="muted"
      style={{ marginTop: "56px", paddingTop: "24px", borderTop: "1px solid var(--hairline)" }}
    >
      Related:{" "}
      {others.map((p, i) => (
        <span key={p.href}>
          <Link href={p.href}>{p.label}</Link>
          {i < others.length - 1 ? " · " : ""}
        </span>
      ))}
    </p>
  );
}
