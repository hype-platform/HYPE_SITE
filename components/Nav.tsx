"use client";

import Link from "next/link";
import { useState } from "react";
import { BRAND_NAME } from "@/lib/constants";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className={`nav${open ? " is-open" : ""}`}>
      <div className="nav__inner">
        <Link href="/" className="wordmark wordmark--sm" aria-label={`${BRAND_NAME} home`}>
          {BRAND_NAME}
        </Link>
        <nav className="nav__links" aria-label="Primary">
          <Link href="/#features">Features</Link>
          <Link href="/#how-it-works">How it works</Link>
          <Link href="/privacy">Privacy</Link>
        </nav>
        <div className="nav__cta">
          <Link href="/#download" className="btn btn--primary btn--sm">
            Download
          </Link>
          <button
            className="nav__menu-btn"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M2 4.5H16M2 9H16M2 13.5H16"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="nav__mobile-panel">
        <Link href="/#features" onClick={() => setOpen(false)}>
          Features
        </Link>
        <Link href="/#how-it-works" onClick={() => setOpen(false)}>
          How it works
        </Link>
        <Link href="/privacy" onClick={() => setOpen(false)}>
          Privacy
        </Link>
      </div>
    </header>
  );
}
