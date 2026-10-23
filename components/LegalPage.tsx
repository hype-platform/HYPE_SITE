import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { LegalCrossLinks } from "@/components/LegalCrossLinks";
import { EFFECTIVE_DATE, LAST_UPDATED } from "@/lib/constants";
import { type LegalDoc, renderLegalDoc } from "@/lib/legal";

export function LegalPage({ doc }: { doc: LegalDoc }) {
  const { html, toc } = renderLegalDoc(doc.slug);

  return (
    <>
      <Nav />

      <div className="page-header">
        <div className="container">
          <h1>{doc.title}</h1>
          <p className="muted">
            Effective {EFFECTIVE_DATE} · Last updated {LAST_UPDATED}
          </p>
        </div>
      </div>

      <main className="legal container">
        {toc.length > 1 && (
          <div className="legal__toc">
            <p>On this page</p>
            <ol>
              {toc.map((entry) => (
                <li key={entry.id}>
                  <a href={`#${entry.id}`}>{entry.label}</a>
                </li>
              ))}
            </ol>
          </div>
        )}

        {/* Rendered from our own Markdown files in content/legal at build time. */}
        <div dangerouslySetInnerHTML={{ __html: html }} />

        <LegalCrossLinks current={doc.href} />
      </main>

      <Footer />
    </>
  );
}
