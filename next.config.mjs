// hypefindr on the App Store (the same as lib/constants.ts).
const APP_STORE_URL = "https://apps.apple.com/app/id6825633668";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Links shared from the app go straight to the App Store: no page in
  // between, no wait. A server redirect (307), so tapping one in Messages
  // or WhatsApp opens the App Store app directly, and link previews show
  // the App Store's own card (the icon, the name, Get).
  //   /i/<code>  your invite link (get_my_invite, 0114): every "Share" in
  //              the app that isn't about one event or post
  //   /get       the same, without a code: for bios, posters, anywhere
  async redirects() {
    return [
      { source: "/i/:code", destination: APP_STORE_URL, permanent: false },
      { source: "/get", destination: APP_STORE_URL, permanent: false },
    ];
  },
  async rewrites() {
    return {
      beforeFiles: [
        { source: "/hype-analytics", destination: "https://hype-analytics.vercel.app/hype-analytics" },
        { source: "/hype-analytics/:path*", destination: "https://hype-analytics.vercel.app/hype-analytics/:path*" },
      ],
    };
  },
};

export default nextConfig;
