import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CONTACT_EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description: "About Hypefindr, an iPhone app that shows what's happening near you right now, closest first.",
};

export default function AboutPage() {
  return (
    <>
      <Nav />

      <div className="page-header">
        <div className="container">
          <h1>About Hypefindr</h1>
          <p className="muted">Things are happening near you.</p>
        </div>
      </div>

      <main className="legal container">
        <p>
          Hypefindr is an iPhone app built around one idea: the most interesting things are happening in the real
          world, right now, and you should be able to find them and go.
        </p>
        <p>
          Discover shows what&apos;s on around you, closest first, within the distance you choose: people live,
          moments posted minutes ago, and plans coming up. The map shows every spot, red where someone is live and
          purple for everything else. Post a moment from where you are, plan something for later (once or on
          repeat), or go live. Tap Pull up to say you&apos;re going, and your iPhone checks you in when you arrive.
          Bring your crew with Let them know, or share a link that anyone can pull up from.
        </p>
        <p>
          Plans made more than a day ahead are confirmed by their hosts in their last 24 hours, so what you see is
          really happening. If a host doesn&apos;t confirm, the plan comes down and everyone coming is told.
        </p>
        <p>
          As you use Hypefindr, you build an identity across four lanes: The Attendee, The Watcher, The Streamer and
          The Connector. You earn points, titles and badges in each, and your firsts get celebrated as they happen.
        </p>

        <div className="about-grid">
          <div className="about-card">
            <h3>Get in touch</h3>
            <p>
              For questions, feedback or press inquiries, email us at{" "}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
            </p>
          </div>
          <div className="about-card">
            <h3>Legal</h3>
            <p>
              Hypefindr is for people 18 and older. Read our <a href="/terms">Terms of Service</a>,{" "}
              <a href="/privacy">Privacy Policy</a> and <a href="/guidelines">Community Guidelines</a>, or see{" "}
              <a href="/legal">all policies</a>.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
