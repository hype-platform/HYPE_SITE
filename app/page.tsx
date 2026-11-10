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
    icon: "/identities/attendee.png",
    title: "The Attendee",
    desc: "Shows up. Pulls up to plans, gets checked in on arrival, and posts moments from where it's happening.",
  },
  {
    color: "#4a9eff",
    icon: "/identities/watcher.png",
    title: "The Watcher",
    desc: "Tunes in. Drops into lives nearby, chats, asks the host questions and hypes them up.",
  },
  {
    color: "#ff9a30",
    icon: "/identities/streamer.png",
    title: "The Streamer",
    desc: "Goes live. Becomes the eyes for everyone who can't be there yet, and brings them over.",
  },
  {
    color: "#1ec8b0",
    icon: "/identities/connector.png",
    title: "The Connector",
    desc: "Brings people. Builds a crew, sends Let them know, and gets friends out the door.",
  },
];

const CREATE = [
  {
    tag: "Happening now",
    title: "Post a moment",
    desc: "Shoot it or upload it, write what's going on right on the picture (\"It's packed\", \"No line right now\"), tag the place and choose how long it stays up.",
  },
  {
    tag: "Plan for later",
    title: "Make a plan",
    desc: "Anything from an hour out to three months ahead. Say who's hosting, what it costs and what's good to know, and make it repeat like a calendar event.",
  },
  {
    tag: "Go live",
    title: "Stream it",
    desc: "Go live from where you are. Chat with the crowd, answer their questions, and watch the hype meter climb as people head your way.",
  },
  {
    tag: "Crew",
    title: "Bring your people",
    desc: "Your friends are your crew. Make smaller crews inside it and Let them know about anything in one tap, with a note if you like.",
  },
];

const STEPS = [
  {
    num: "01",
    title: "See what's near",
    desc: "Discover puts lives, moments and plans in order, nearest and soonest first, within the distance you choose. Filter by when, what, cost, or where friends are going.",
  },
  {
    num: "02",
    title: "Attend",
    desc: "Tap Attend to say you're going. When you get there, your iPhone checks you in for you. We never store your coordinates.",
  },
  {
    num: "03",
    title: "Bring people",
    desc: "Let your crew know, or share the link. Friends without the app can see the plan and say they're coming from the page.",
  },
];

const SAFETY = [
  {
    title: "Adults only",
    desc: "Hypefindr is for people 18 and over, checked on our server. 21+ plans and posts only reach people who are 21 or older.",
  },
  {
    title: "People review reports",
    desc: "Report a post, plan, live, chat message or person. A person on our team reviews every report within 24 hours.",
  },
  {
    title: "Plans that are real",
    desc: "Hosts confirm their plan in its last 24 hours. If they don't, it comes down before anyone wastes a trip, and everyone coming is told.",
  },
  {
    title: "Your location stays yours",
    desc: "No movement history and no coordinates kept from check-ins. Crew plans only reach the host's friends.",
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
              People live, moments posted minutes ago, and plans coming up, nearest and soonest first. Attend,
              bring your crew, and get checked in when you arrive.
            </p>
            <div className="hero__cta">
              <AppStoreButton />
              <a href="#how-it-works" className="btn btn--ghost">
                How it works
              </a>
            </div>

            <div className="hero__stage">
              <div className="hero__chip hero__chip--a" aria-hidden="true">
                <span className="hero__chip-dot" style={{ background: "#ff3b5c", color: "#ff3b5c" }} />
                <span>
                  <strong>Live · Rooftop DJ set</strong>
                  <small>0.4 mi · 214 watching</small>
                </span>
              </div>
              <div className="hero__chip hero__chip--b" aria-hidden="true">
                <span className="hero__chip-dot" style={{ background: "#a855f7", color: "#a855f7" }} />
                <span>
                  <strong>38 attending</strong>
                  <small>Night market · Host confirmed</small>
                </span>
              </div>
              <div className="hero__chip hero__chip--c" aria-hidden="true">
                <span className="hero__chip-dot" style={{ background: "#c6f432", color: "#c6f432" }} />
                <span>
                  <strong>Let them know</strong>
                  <small>Sent to Friday crew · 4 friends</small>
                </span>
              </div>

              <div className="hero__frame" aria-hidden="true">
                <svg viewBox="0 0 280 560" role="img" aria-label="Hypefindr app preview: the map with lives and plans nearby">
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
                  <circle cx="190" cy="240" r="5" fill="#ff3b5c" />
                  <circle cx="140" cy="330" r="40" fill="url(#pin1)">
                    <animate attributeName="r" values="30;48;30" dur="3s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="140" cy="330" r="7" fill="#a855f7" />
                  <circle cx="60" cy="400" r="22" fill="url(#pin1)">
                    <animate attributeName="r" values="16;28;16" dur="2.8s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="60" cy="400" r="5" fill="#a855f7" />

                  <g transform="translate(150 200)">
                    <rect width="112" height="26" rx="13" fill="#0d0d14" fillOpacity="0.88" stroke="#4a9eff" strokeOpacity="0.6" />
                    <circle cx="14" cy="13" r="4" fill="#ff3b5c">
                      <animate attributeName="opacity" values="1;0.3;1" dur="1.4s" repeatCount="indefinite" />
                    </circle>
                    <text x="24" y="17" fontSize="10" fontWeight="600" fill="#ffffff">Indie show · live</text>
                  </g>

                  <g transform="translate(16 22)">
                    <rect width="112" height="24" rx="12" fill="#c6f432" fillOpacity="0.14" stroke="#c6f432" strokeOpacity="0.55" />
                    <circle cx="14" cy="12" r="4" fill="#c6f432" />
                    <text x="24" y="16" fontSize="10" fontWeight="700" letterSpacing="0.6" fill="#ffffff">Within 3 mi</text>
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

        {/* ============ DISCOVER AND THE MAP ============ */}
        <section className="section" id="features">
          <div className="container map-section">
            <div className="map-section__visual reveal">
              <RadarScope />
            </div>
            <div className="reveal" style={{ "--i": 1 } as React.CSSProperties}>
              <span className="section__eyebrow">
                <span className="live-dot" /> Near you, right now
              </span>
              <h2 className="section__title">What&apos;s on, nearest and soonest first.</h2>
              <p className="section__lead">
                Not a feed of what happened yesterday. Everything that&apos;s live, just posted or coming up around you,
                nearest and starting soonest first, and a map of every spot.
              </p>
              <ul className="map-section__list">
                <li>
                  <span className="map-section__dot" />
                  <div>
                    <h4>Discover, with filters</h4>
                    <p>
                      Pick how far to look, from 1 to 50 miles, then filter by when (tonight, this weekend), what,
                      free, 18+ or 21+, or where your friends are going.
                    </p>
                  </div>
                </li>
                <li>
                  <span className="map-section__dot" />
                  <div>
                    <h4>A map that shows what&apos;s on</h4>
                    <p>Every spot shows its picture, red-edged when someone is live. Search it for any place or address.</p>
                  </div>
                </li>
                <li>
                  <span className="map-section__dot" />
                  <div>
                    <h4>Get there</h4>
                    <p>Turn-by-turn directions in the app, or a ride with Uber, Lyft and your map apps.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ============ MAKE SOMETHING HAPPEN ============ */}
        <section className="section">
          <div className="container">
            <div className="section__head reveal">
              <span className="section__eyebrow">Make something happen</span>
              <h2 className="section__title">One camera, four ways to share.</h2>
              <p className="section__lead">
                Everything starts from the camera in the middle of the tab bar. After the shot, choose Happening now
                or Plan for later.
              </p>
            </div>

            <div className="feature-grid">
              {CREATE.map((item, i) => (
                <div key={item.tag} className="feature reveal" style={{ "--i": i } as React.CSSProperties}>
                  <span className="feature__tag">{item.tag}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ PLANS YOU CAN COUNT ON ============ */}
        <section className="section">
          <div className="container map-section">
            <div className="reveal">
              <span className="section__eyebrow">Plans you can count on</span>
              <h2 className="section__title">If it&apos;s on Hypefindr, it&apos;s happening.</h2>
              <p className="section__lead">
                Every plan made more than a day ahead is confirmed by its host in its last 24 hours. No answer, and it
                comes down three hours before the start, and everyone coming is told.
              </p>
              <ul className="map-section__list">
                <li>
                  <span className="map-section__dot" />
                  <div>
                    <h4>Host confirmed</h4>
                    <p>Cards and plan pages say when the host has confirmed it&apos;s on.</p>
                  </div>
                </li>
                <li>
                  <span className="map-section__dot" />
                  <div>
                    <h4>The facts up front</h4>
                    <p>Who&apos;s hosting, what it costs, and what&apos;s good to know, like bring ID or cash only.</p>
                  </div>
                </li>
                <li>
                  <span className="map-section__dot" />
                  <div>
                    <h4>Weekly things, set once</h4>
                    <p>Plans repeat daily, weekly, monthly or yearly. Each date is its own plan with its own crowd.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="map-section__visual map-section__visual--card reveal" style={{ "--i": 1 } as React.CSSProperties}>
              <div className="confirm-card" aria-hidden="true">
                <div className="confirm-card__app">
                  <span className="confirm-card__icon" />
                  hypefindr <small>now</small>
                </div>
                <strong>Is Friday Night Market still on?</strong>
                <p>It starts in 24 hours. Tap &ldquo;It&apos;s on&rdquo; so people can count on it.</p>
                <div className="confirm-card__actions">
                  <span className="confirm-card__btn confirm-card__btn--on">It&apos;s on</span>
                  <span className="confirm-card__btn">Call it off</span>
                </div>
              </div>
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
                You earn points in four lanes as you show up, watch, stream and connect. Each lane has titles and 12
                badges of its own, and your firsts get celebrated as they happen.
              </p>
            </div>

            <div className="identity-grid">
              {IDENTITIES.map((identity, i) => (
                <div
                  key={identity.title}
                  className="identity-card reveal"
                  style={{ "--card-color": identity.color, "--i": i } as React.CSSProperties}
                >
                  <Image className="identity-card__icon" src={identity.icon} alt="" width={88} height={88} />
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

        {/* ============ SAFETY ============ */}
        <section className="section" id="safety">
          <div className="container">
            <div className="section__head reveal">
              <span className="section__eyebrow">Safety</span>
              <h2 className="section__title">Built for adults, looked after by people.</h2>
              <p className="section__lead">
                Read our <a href="/guidelines">Community Guidelines</a> and <a href="/privacy">Privacy Policy</a> for
                the details.
              </p>
            </div>

            <div className="feature-grid">
              {SAFETY.map((item, i) => (
                <div key={item.title} className="feature feature--plain reveal" style={{ "--i": i } as React.CSSProperties}>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
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
                <p>Things are happening near you, right now. Free on iPhone, for ages 18 and over.</p>
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
