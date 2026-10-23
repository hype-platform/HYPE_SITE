import Image from "next/image";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { AppStoreButton, GooglePlayButtonSoon } from "@/components/AppStoreButton";

const IDENTITIES = [
  {
    color: "#e06030",
    icon: "/profiles/attendee.png",
    title: "The Attendee",
    desc: "Shows up. Checks into the moment with photos and video from where it's actually happening.",
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

          <div className="hero__content">
            <span className="wordmark">HYPE</span>
            <h1>Things are happening near you.</h1>
            <p className="hero__subhead">
              Watch, stream, and show up to what&apos;s live around you — and across the world.
            </p>
            <div className="hero__cta">
              <AppStoreButton />
            </div>

            <div className="hero__frame" aria-hidden="true">
              <svg viewBox="0 0 280 560" role="img" aria-label="HYPE app preview: live map with nearby events">
                <defs>
                  <linearGradient id="phoneBg" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#12101c" />
                    <stop offset="100%" stopColor="#0a0812" />
                  </linearGradient>
                  <radialGradient id="pin1" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#a855f7" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <rect width="280" height="560" fill="url(#phoneBg)" />
                <line x1="0" y1="90" x2="280" y2="90" stroke="#ffffff" strokeOpacity="0.06" />
                <line x1="0" y1="180" x2="280" y2="180" stroke="#ffffff" strokeOpacity="0.05" />
                <line x1="0" y1="270" x2="280" y2="270" stroke="#ffffff" strokeOpacity="0.05" />
                <line x1="0" y1="360" x2="280" y2="360" stroke="#ffffff" strokeOpacity="0.05" />
                <line x1="70" y1="0" x2="70" y2="560" stroke="#ffffff" strokeOpacity="0.05" />
                <line x1="210" y1="0" x2="210" y2="560" stroke="#ffffff" strokeOpacity="0.05" />

                <circle cx="90" cy="160" r="38" fill="url(#pin1)" />
                <circle cx="90" cy="160" r="6" fill="#a855f7" />
                <circle cx="190" cy="240" r="30" fill="url(#pin1)" />
                <circle cx="190" cy="240" r="5" fill="#a855f7" />
                <circle cx="140" cy="330" r="46" fill="url(#pin1)" />
                <circle cx="140" cy="330" r="7" fill="#e06030" />
                <circle cx="60" cy="400" r="26" fill="url(#pin1)" />
                <circle cx="60" cy="400" r="5" fill="#4a9eff" />

                <rect x="16" y="24" width="120" height="18" rx="9" fill="#ffffff" fillOpacity="0.06" />
                <rect x="16" y="480" width="248" height="56" rx="18" fill="#ffffff" fillOpacity="0.05" stroke="#ffffff" strokeOpacity="0.08" />
                <circle cx="46" cy="508" r="12" fill="#7c3aed" />
                <rect x="68" y="500" width="80" height="8" rx="4" fill="#ffffff" fillOpacity="0.25" />
                <rect x="68" y="514" width="50" height="6" rx="3" fill="#ffffff" fillOpacity="0.12" />
                <circle cx="240" cy="508" r="16" fill="#ff3b5c" />
                <rect x="232" y="503" width="16" height="10" rx="2" fill="#ffffff" />
              </svg>
            </div>
          </div>
        </section>

        {/* ============ LIVE MAP ============ */}
        <section className="section" id="features">
          <div className="container map-section">
            <div className="map-section__visual" aria-hidden="true">
              <svg viewBox="0 0 500 500">
                <circle cx="250" cy="250" r="160" fill="none" stroke="#ffffff" strokeOpacity="0.06" />
                <circle cx="250" cy="250" r="110" fill="none" stroke="#ffffff" strokeOpacity="0.06" />
                <circle cx="250" cy="250" r="60" fill="none" stroke="#ffffff" strokeOpacity="0.06" />
                <circle cx="180" cy="190" r="10" fill="#a855f7">
                  <animate attributeName="r" values="10;16;10" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx="320" cy="220" r="7" fill="#4a9eff">
                  <animate attributeName="r" values="7;12;7" dur="2.4s" repeatCount="indefinite" />
                </circle>
                <circle cx="260" cy="330" r="9" fill="#e06030">
                  <animate attributeName="r" values="9;14;9" dur="2.8s" repeatCount="indefinite" />
                </circle>
                <circle cx="200" cy="310" r="6" fill="#1ec8b0">
                  <animate attributeName="r" values="6;10;6" dur="3.4s" repeatCount="indefinite" />
                </circle>
                <circle cx="250" cy="250" r="4" fill="#f0f0f8" />
              </svg>
            </div>
            <div>
              <span className="section__eyebrow">Live, right now</span>
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
            <div className="section__head">
              <span className="section__eyebrow">Your identity</span>
              <h2 className="section__title">Four ways to be at HYPE.</h2>
              <p className="section__lead">
                You unlock who you are through what you do — earning points and titles as you show up, watch, stream, and connect.
              </p>
            </div>

            <div className="identity-grid">
              {IDENTITIES.map((identity) => (
                <div
                  key={identity.title}
                  className="identity-card"
                  style={{ "--card-color": identity.color } as React.CSSProperties}
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
            <div className="section__head">
              <span className="section__eyebrow">Getting started</span>
              <h2 className="section__title">How it works.</h2>
            </div>

            <div className="steps">
              {STEPS.map((step) => (
                <div key={step.num} className="step">
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
            <div className="cta-band">
              <div className="cta-band__inner">
                <h2>Get HYPE.</h2>
                <p>Things are happening near you, right now.</p>
                <div className="cta-band__buttons">
                  <AppStoreButton />
                  <GooglePlayButtonSoon />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
