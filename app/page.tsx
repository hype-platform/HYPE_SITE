import Image from "next/image";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { AppStoreButton, GooglePlayButtonSoon } from "@/components/AppStoreButton";
import { LiveTicker } from "@/components/LiveTicker";
import { RadarScope } from "@/components/RadarScope";
import { RevealOnScroll } from "@/components/RevealOnScroll";

const IDENTITIES = [
  {
    color: "#e06030",
    icon: "/profiles/attendee.png",
    title: "The Attendee",
    desc: "Shows up. Checks in at events and shares photos and video from where it's actually happening.",
  },
  {
    color: "#4a9eff",
    icon: "/profiles/watcher.png",
    title: "The Watcher",
    desc: "Watches streams. Tunes into live events anywhere in the world, in real time.",
  },
  {
    color: "#ff9a30",
    icon: "/profiles/streamer.png",
    title: "The Streamer",
    desc: "Goes live. Becomes the eyes for everyone who can't be there in person.",
  },
  {
    color: "#1ec8b0",
    icon: "/profiles/connector.png",
    title: "The Connector",
    desc: "Brings people. Builds a crew and invites friends into what's happening.",
  },
];

const STEPS = [
  {
    num: "01",
    title: "Open the map",
    desc: "See what's live near you and around the world, updating in real time.",
  },
  {
    num: "02",
    title: "Watch or show up",
    desc: "Drop into a stream from wherever you are, or head out and be part of it in person.",
  },
  {
    num: "03",
    title: "Build your identity",
    desc: "Earn points and titles across all four profiles as you attend, watch, stream, and connect.",
  },
];

export default function Home() {
  return (
    <>
      <Nav />

      <main>
        {/* ============ HERO ============ */}
        <section className="hero">
          <svg className="hero__radar" viewBox="0 0 800 800" fill="none" aria-hidden="true">
            <defs>
              <radialGradient id="heroGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="heroRing" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#7c3aed" />
                <stop offset="50%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#6366f1" />
              </linearGradient>
            </defs>
            <circle cx="400" cy="400" r="380" fill="url(#heroGlow)" />
            <circle cx="400" cy="400" r="120" fill="none" stroke="url(#heroRing)" strokeWidth="1" opacity="0.5" />
            <circle cx="400" cy="400" r="200" fill="none" stroke="url(#heroRing)" strokeWidth="1" opacity="0.35" />
            <circle cx="400" cy="400" r="280" fill="none" stroke="url(#heroRing)" strokeWidth="1" opacity="0.22" />
            <circle cx="400" cy="400" r="4" fill="url(#heroRing)" />
            <circle cx="400" cy="400" r="60" fill="none" stroke="url(#heroRing)" strokeWidth="1.5" opacity="0.7">
              <animate attributeName="r" values="20;300" dur="4s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.7;0" dur="4s" repeatCount="indefinite" />
            </circle>
            <circle cx="400" cy="400" r="60" fill="none" stroke="url(#heroRing)" strokeWidth="1.5" opacity="0.7">
              <animate attributeName="r" values="20;300" dur="4s" begin="2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.7;0" dur="4s" begin="2s" repeatCount="indefinite" />
            </circle>
          </svg>
          <div className="hero__sweep" aria-hidden="true" />

          <div className="hero__content">
            <span className="wordmark">Hypefindr</span>
            <h1>
              Things are happening <span className="text-gradient">near you.</span>
            </h1>
            <p className="hero__subhead">
              Watch, stream, and show up to what&apos;s live around you — and across the world.
            </p>
            <div className="hero__cta">
              <AppStoreButton />
              <a href="#features" className="btn btn--ghost">
                See what&apos;s live
              </a>
            </div>

            <div className="hero__stage">
              <div className="hero__chip hero__chip--a" aria-hidden="true">
                <span className="hero__chip-dot" style={{ background: "#ff3b5c", color: "#ff3b5c" }} />
                <span>
                  <strong>Live · Rooftop DJ set</strong>
                  <small>214 watching</small>
                </span>
              </div>
              <div className="hero__chip hero__chip--b" aria-hidden="true">
                <span className="hero__chip-dot" style={{ background: "#1ec8b0", color: "#1ec8b0" }} />
                <span>
                  <strong>+38 checked in</strong>
                  <small>Warehouse party · 0.8 mi</small>
                </span>
              </div>
              <div className="hero__chip hero__chip--c" aria-hidden="true">
                <span className="hero__chip-dot" style={{ background: "#ff9a30", color: "#ff9a30" }} />
                <span>
                  <strong>Your crew is heading out</strong>
                  <small>4 friends · 12 min away</small>
                </span>
              </div>

              <div className="hero__frame" aria-hidden="true">
                <svg viewBox="0 0 280 560" role="img" aria-label="Hypefindr app preview: live map with nearby events">
                  <defs>
                    <linearGradient id="phoneBg" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#12101c" />
                      <stop offset="100%" stopColor="#0a0812" />
                    </linearGradient>
                    <radialGradient id="pin1" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#a855f7" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
                    </radialGradient>
                    <linearGradient id="avatar" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#7c3aed" />
                      <stop offset="100%" stopColor="#ff9a30" />
                    </linearGradient>
                  </defs>
                  <rect width="280" height="560" fill="url(#phoneBg)" />

                  <g stroke="#ffffff" fill="none">
                    <path d="M-10 120 L300 60" strokeOpacity="0.05" strokeWidth="10" />
                    <path d="M40 -10 L120 580" strokeOpacity="0.05" strokeWidth="8" />
                    <path d="M-10 300 Q140 250 300 330" strokeOpacity="0.05" strokeWidth="12" />
                    <path d="M220 -10 L180 580" strokeOpacity="0.04" strokeWidth="6" />
                    <path d="M-10 430 L300 400" strokeOpacity="0.04" strokeWidth="6" />
                  </g>

                  <circle cx="140" cy="330" r="10" fill="none" stroke="#a855f7" strokeWidth="1.5">
                    <animate attributeName="r" values="10;150" dur="3s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.8;0" dur="3s" repeatCount="indefinite" />
                  </circle>

                  <circle cx="90" cy="160" r="30" fill="url(#pin1)">
                    <animate attributeName="r" values="22;38;22" dur="2.6s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="90" cy="160" r="6" fill="#a855f7" />
                  <circle cx="190" cy="240" r="26" fill="url(#pin1)">
                    <animate attributeName="r" values="18;32;18" dur="2.2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="190" cy="240" r="5" fill="#4a9eff" />
                  <circle cx="140" cy="330" r="40" fill="url(#pin1)">
                    <animate attributeName="r" values="30;48;30" dur="3s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="140" cy="330" r="7" fill="#e06030" />
                  <circle cx="60" cy="400" r="22" fill="url(#pin1)">
                    <animate attributeName="r" values="16;28;16" dur="2.8s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="60" cy="400" r="5" fill="#1ec8b0" />

                  <g transform="translate(150 200)">
                    <rect width="112" height="26" rx="13" fill="#0d0d14" fillOpacity="0.88" stroke="#4a9eff" strokeOpacity="0.6" />
                    <circle cx="14" cy="13" r="4" fill="#ff3b5c">
                      <animate attributeName="opacity" values="1;0.3;1" dur="1.4s" repeatCount="indefinite" />
                    </circle>
                    <text x="24" y="17" fontSize="10" fontWeight="600" fill="#ffffff">Indie show · live</text>
                  </g>

                  <g transform="translate(16 22)">
                    <rect width="124" height="24" rx="12" fill="#ff3b5c" fillOpacity="0.16" stroke="#ff3b5c" strokeOpacity="0.5" />
                    <circle cx="14" cy="12" r="4" fill="#ff3b5c">
                      <animate attributeName="opacity" values="1;0.3;1" dur="1.4s" repeatCount="indefinite" />
                    </circle>
                    <text x="24" y="16" fontSize="10" fontWeight="700" letterSpacing="0.8" fill="#ffffff">LIVE NEAR YOU</text>
                  </g>

                  <rect x="16" y="474" width="248" height="64" rx="18" fill="#141221" fillOpacity="0.92" stroke="#ffffff" strokeOpacity="0.1" />
                  <circle cx="46" cy="506" r="14" fill="url(#avatar)" />
                  <text x="70" y="501" fontSize="13" fontWeight="600" fill="#ffffff">Rooftop DJ set</text>
                  <text x="70" y="519" fontSize="10.5" fill="#ffffff" fillOpacity="0.6">0.4 mi · 214 watching</text>
                  <circle cx="238" cy="506" r="17" fill="#ff3b5c" />
                  <path d="M233 498 L246 506 L233 514 Z" fill="#ffffff" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        <LiveTicker />

        {/* ============ LIVE MAP ============ */}
        <section className="section" id="features">
          <div className="container map-section">
            <div className="map-section__visual reveal">
              <RadarScope />
            </div>
            <div className="reveal" style={{ "--i": 1 } as React.CSSProperties}>
              <span className="section__eyebrow">
                <span className="live-dot" /> Live, right now
              </span>
              <h2 className="section__title">A world that&apos;s actually live.</h2>
              <p className="section__lead">
                Not a feed of what happened yesterday — a map of what&apos;s happening this second, anywhere on earth.
              </p>
              <ul className="map-section__list">
                <li>
                  <span className="map-section__dot" />
                  <div>
                    <h4>Discover what&apos;s near you</h4>
                    <p>See events unfolding around you, surfaced by what&apos;s live and what&apos;s about to be.</p>
                  </div>
                </li>
                <li>
                  <span className="map-section__dot" />
                  <div>
                    <h4>Watch from anywhere</h4>
                    <p>Drop into a live stream from across town or across the world — no travel required.</p>
                  </div>
                </li>
                <li>
                  <span className="map-section__dot" />
                  <div>
                    <h4>A global live map</h4>
                    <p>Every glowing point is a real place, right now, with people actually there.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ============ FOUR IDENTITIES ============ */}
        <section className="section">
          <div className="container">
            <div className="section__head reveal">
              <span className="section__eyebrow">Your identity</span>
              <h2 className="section__title">Four ways to use Hypefindr.</h2>
              <p className="section__lead">
                You unlock who you are through what you do — earning points and titles as you show up, watch, stream, and connect.
              </p>
            </div>

            <div className="identity-grid">
              {IDENTITIES.map((identity, i) => (
                <div
                  key={identity.title}
                  className="identity-card reveal"
                  style={{ "--card-color": identity.color, "--i": i } as React.CSSProperties}
                >
                  <Image className="identity-card__icon" src={identity.icon} alt="" width={72} height={72} />
                  <h3 className="identity-card__title">{identity.title}</h3>
                  <p className="identity-card__desc">{identity.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ HOW IT WORKS ============ */}
        <section className="section" id="how-it-works">
          <div className="container">
            <div className="section__head reveal">
              <span className="section__eyebrow">Getting started</span>
              <h2 className="section__title">How it works.</h2>
            </div>

            <div className="steps">
              {STEPS.map((step, i) => (
                <div key={step.num} className="step reveal" style={{ "--i": i } as React.CSSProperties}>
                  <span className="step__num">{step.num}</span>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ DOWNLOAD CTA ============ */}
        <section className="section section--tight" id="download">
          <div className="container">
            <div className="cta-band reveal">
              <div className="cta-band__inner">
                <h2>Get Hypefindr.</h2>
                <p>Things are happening near you, right now. For ages 18 and over.</p>
                <div className="cta-band__buttons">
                  <AppStoreButton />
                  <GooglePlayButtonSoon />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <RevealOnScroll />
      <Footer />
    </>
  );
}
