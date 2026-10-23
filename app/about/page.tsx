import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CONTACT_EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description: "About Hypefindr — a live, location-based social app for real-world events.",
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
          Hypefindr is a live, location-based social app built around one idea: the most interesting things are
          happening in the real world, right now, and you should be able to see them.
        </p>
        <p>
          Instead of a feed of what already happened, Hypefindr gives you a live map of what&apos;s happening this
          second — nearby, or anywhere on earth. Watch a live stream from an event across town or across the
          world. Go live yourself and become the eyes for everyone who can&apos;t be there. Show up and check in
          to the moment. Build a crew and bring people with you.
        </p>
        <p>
          As you use Hypefindr, you build an identity across four profiles — The Attendee, The Watcher, The Streamer,
          and The Connector — earning points and titles in each based on how you show up.
        </p>

        <div className="about-grid">
          <div className="about-card">
            <h3>Get in touch</h3>
            <p>
              Questions, feedback, or press inquiries — email us at{" "}
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
