import Link from "next/link";
import { BRAND_NAME, CONTACT_EMAIL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <Link href="/" className="wordmark wordmark--sm">
            {BRAND_NAME}
          </Link>
          <nav className="footer__links" aria-label="Footer">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/guidelines">Guidelines</Link>
            <Link href="/legal">Legal</Link>
            <Link href="/about">About</Link>
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </nav>
        </div>
        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.</span>
          <span>Map data © Mapbox © OpenStreetMap</span>
        </div>
      </div>
    </footer>
  );
}
