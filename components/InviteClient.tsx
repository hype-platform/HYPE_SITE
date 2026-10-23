"use client";

import { useEffect } from "react";
import { APP_STORE_URL } from "@/lib/constants";

export function InviteClient({ code }: { code: string }) {
  useEffect(() => {
    const timer = window.setTimeout(() => {
      window.location.href = APP_STORE_URL;
    }, 1800);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="invite__card">
      <span className="wordmark wordmark--sm">Hypefindr</span>
      <h1 style={{ fontSize: "1.4rem", marginTop: "18px" }}>You&apos;re invited.</h1>
      <p>Redirecting you to the App Store…</p>
      <div className="invite__code">{code}</div>
      <p>
        Your invite code: {code} — enter it in the app after you sign up.
      </p>
      <a href={APP_STORE_URL} className="btn btn--primary">
        Continue to the App Store
      </a>
    </div>
  );
}
