import { APP_STORE_URL } from "@/lib/constants";

export function AppStoreButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={APP_STORE_URL}
      className={`appstore-btn ${className}`.trim()}
      aria-label="Download Hypefindr on the App Store"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff">
        <path d="M16.365 1.43c0 1.14-.475 2.11-1.293 2.86-.844.77-2.02 1.36-3.17 1.27-.114-1.13.47-2.28 1.28-3.03.85-.79 2.31-1.37 3.18-1.1zM20.6 17.14c-.5 1.15-.74 1.66-1.38 2.68-.9 1.44-2.16 3.23-3.73 3.25-1.4.02-1.76-.91-3.66-.9-1.9.01-2.3.92-3.7.9-1.57-.02-2.76-1.63-3.66-3.07-2.51-3.98-2.77-8.65-1.22-11.14.99-1.59 2.63-2.52 4.17-2.52 1.57 0 2.55.9 3.85.9 1.26 0 2.02-.9 3.85-.9 1.32 0 2.72.72 3.72 1.96-3.27 1.79-2.74 6.43.72 7.81z" />
      </svg>
      <span className="appstore-btn__text">
        <small>Download on the</small>
        <strong>App Store</strong>
      </span>
    </a>
  );
}

export function GooglePlayButtonSoon() {
  return (
    <span className="appstore-btn appstore-btn--soon" aria-label="Google Play, coming soon">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff">
        <path d="M3.6 2.1c-.4.3-.6.8-.6 1.4v17c0 .6.2 1.1.6 1.4l.1.1L13.5 12l-9.8-9.9-.1 0z" />
        <path
          d="M17 8.5l-3-1.7-3.2 3.2 3.2 3.2 3.1-1.8c.9-.5.9-2.4-.1-2.9z"
          opacity="0.7"
        />
      </svg>
      <span className="appstore-btn__text">
        <small>Coming soon to</small>
        <strong>Google Play</strong>
      </span>
    </span>
  );
}
