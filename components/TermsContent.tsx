import Link from "next/link";
import { Brand } from "@/components/Brand";
import { LegalCrossLinks } from "@/components/LegalCrossLinks";
import { CONTACT_EMAIL } from "@/lib/constants";

export function TermsContent() {
  return (
    <main className="legal container">
      <div className="legal__toc">
        <p>On this page</p>
        <ol>
          <li><a href="#who-we-are">1. Who we are</a></li>
          <li><a href="#eligibility">2. Eligibility</a></li>
          <li><a href="#accounts">3. Your account</a></li>
          <li><a href="#user-content">4. User content &amp; license</a></li>
          <li><a href="#zero-tolerance">5. Zero tolerance</a></li>
          <li><a href="#moderation">6. Moderation &amp; enforcement</a></li>
          <li><a href="#live-events">7. Live streaming &amp; in-person events</a></li>
          <li><a href="#location">8. Location features</a></li>
          <li><a href="#prohibited-uses">9. Prohibited uses</a></li>
          <li><a href="#termination">10. Termination</a></li>
          <li><a href="#disclaimers">11. Disclaimers; limitation of liability</a></li>
          <li><a href="#changes">12. Changes to these Terms</a></li>
          <li><a href="#law">13. Governing law</a></li>
          <li><a href="#contact">14. Contact</a></li>
          <li><a href="#apple-terms">15. Apple App Store terms</a></li>
        </ol>
      </div>

      <h2 id="who-we-are">1. Who we are</h2>
      <p>
        <Brand /> (the &quot;Service,&quot; &quot;we,&quot; &quot;us,&quot; &quot;our&quot;) is a
        location-based social app for discovering what&apos;s happening nearby — live streams, photos and
        videos, and in-person events. These Terms of Service (&quot;Terms&quot;) govern your access to and use
        of the <Brand /> app and related services.
      </p>
      <p>
        By creating an account or otherwise using <Brand />, you agree to these Terms, our{" "}
        <Link href="/privacy">Privacy Policy</Link>, and our <Link href="/guidelines">Community Guidelines</Link>,
        all of which are incorporated into these Terms by reference. If you don&apos;t agree, please don&apos;t
        use <Brand />.
      </p>

      <h2 id="eligibility">2. Eligibility</h2>
      <p>
        You must be at least 13 years old to use <Brand />. If you are under the age of majority where you live,
        you need a parent&apos;s or legal guardian&apos;s permission to use the Service.
      </p>
      <p>
        Some content on <Brand /> is tagged All ages, 18+, or 21+. To show or hide age-restricted content
        correctly, we rely on the date of birth you give us when you sign up — you must provide your true date
        of birth. Misrepresenting your age to access restricted content is a violation of these Terms.
      </p>

      <h2 id="accounts">3. Your account</h2>
      <p>
        You&apos;re responsible for your account and for keeping your sign-in credentials secure. Let us know
        right away if you believe your account has been accessed without your permission.
      </p>
      <p>
        Accounts are for one person only — no shared accounts, and no impersonating another person, business, or
        public figure.
      </p>

      <h2 id="user-content">4. User content &amp; license</h2>
      <p>
        You own the photos, videos, posts, event listings, live streams, and other content you create and post
        on <Brand /> (&quot;User Content&quot;). By posting User Content, you grant <Brand /> a worldwide,
        non-exclusive, royalty-free license to host, store, reproduce, display, distribute, and promote that
        content — within the app and in public shared links to your posts and events — for the purpose of
        operating and promoting the Service.
      </p>
      <p>
        You must have the rights to anything you post. Don&apos;t post content that infringes someone else&apos;s
        copyright, trademark, privacy, or other rights.
      </p>

      <h2 id="zero-tolerance">5. Zero tolerance for objectionable content and abusive users</h2>
      <p>
        <Brand /> has zero tolerance for objectionable content or abusive users. Our full rules for what is and
        isn&apos;t allowed, and how to report violations, are set out in our{" "}
        <Link href="/guidelines">Community Guidelines</Link>, which are part of these Terms. Content or accounts
        that violate the Community Guidelines may be removed, suspended, or permanently banned.
      </p>

      <h2 id="moderation">6. Moderation &amp; enforcement</h2>
      <p>
        You can report content and accounts, and block other users, directly in the app. We review reports{" "}
        <strong>within 24 hours</strong>, remove content that breaks these Terms or our Community Guidelines, and
        suspend or permanently remove the accounts responsible. We may remove content or suspend or terminate
        accounts at our discretion, with or without notice, if we believe it&apos;s necessary to protect the
        community or comply with the law.
      </p>

      <h2 id="live-events">7. Live streaming &amp; in-person events</h2>
      <p>
        <Brand /> lets you go live and lets you create and discover in-person events. You&apos;re responsible for
        your own safety and conduct at any event you attend or host, and for what you say and show while live.
      </p>
      <p>
        <Brand /> does not organize, verify, or supervise events listed or discovered through the Service, and is
        not responsible for what happens at them. If you host an event, you&apos;re responsible for following
        local laws and regulations, including age restrictions on attendance or content, and for respecting venue
        rules.
      </p>

      <h2 id="location">8. Location features</h2>
      <p>
        <Brand /> uses your location to show you nearby events and posts and to place your own posts and live
        streams on the map. Automatic check-in at events you attend uses your device&apos;s location in the
        background, and only runs if you&apos;ve given the app &quot;Always&quot; location permission. You can
        turn this off at any time in your device settings — the rest of the app will keep working.
      </p>

      <h2 id="prohibited-uses">9. Prohibited uses</h2>
      <p>When using <Brand />, you agree not to:</p>
      <ul>
        <li>Engage in illegal activity of any kind.</li>
        <li>Harass, threaten, or abuse other users.</li>
        <li>Post hate speech or content that attacks people based on a protected characteristic.</li>
        <li>Post sexual content involving minors, in any form.</li>
        <li>Post violence, threats of violence, or content that glorifies serious physical harm.</li>
        <li>Spam, scam, or engage in fraudulent activity.</li>
        <li>Sell or advertise illegal goods, or age-restricted goods to users who don&apos;t meet the minimum age.</li>
        <li>Scrape, reverse-engineer, or interfere with the Service, including attempting to bypass security or rate limits.</li>
      </ul>

      <h2 id="termination">10. Termination</h2>
      <p>
        You can delete your account at any time from within the app (Profile → Delete account). We may suspend or
        terminate your account, with or without notice, if you violate these Terms, our Community Guidelines, or
        applicable law.
      </p>

      <h2 id="disclaimers">11. Disclaimers; limitation of liability</h2>
      <p>
        The Service is provided &quot;as is&quot; and &quot;as available,&quot; without warranties of any kind,
        express or implied. To the fullest extent permitted by law, <Brand /> and its operators are not liable
        for any indirect, incidental, special, or consequential damages arising from your use of the Service,
        including anything that happens at events you discover, attend, or host through <Brand />.
      </p>

      <h2 id="changes">12. Changes to these Terms</h2>
      <p>
        We may update these Terms from time to time. If we make material changes, we&apos;ll update the
        &quot;Last updated&quot; date above and, where appropriate, notify you in the app.
      </p>

      <h2 id="law">13. Governing law</h2>
      <p>
        These Terms are governed by the laws of <strong>[COUNTRY / STATE]</strong>, without regard to its
        conflict-of-law principles.
      </p>

      <h2 id="contact">14. Contact</h2>
      <p>
        Questions about these Terms, or want to report something? Email us at{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>

      <h2 id="apple-terms">15. Apple App Store terms</h2>
      <p>
        If you downloaded <Brand /> from the Apple App Store, the following additional terms apply and take
        precedence over anything conflicting above:
      </p>
      <ul>
        <li>These Terms are between you and us, not Apple. Apple is not responsible for the app or its content.</li>
        <li>Apple has no obligation to provide any maintenance or support services for <Brand />.</li>
        <li>
          If the app fails to conform to any warranty, you may notify Apple, and Apple will refund the purchase
          price for the app, if any, to you. Apple has no other warranty obligation whatsoever with respect to
          the app.
        </li>
        <li>
          Apple is not responsible for addressing any claims by you or any third party relating to the app,
          including product liability claims, any claim that the app fails to conform to any legal or regulatory
          requirement, and claims arising under consumer protection or similar legislation.
        </li>
        <li>
          Apple is not responsible for the investigation, defense, settlement, or discharge of any third-party
          claim that the app or your possession and use of it infringes that third party&apos;s intellectual
          property rights.
        </li>
        <li>
          By using <Brand />, you represent and warrant that you are not located in a country subject to a U.S.
          Government embargo, or that has been designated by the U.S. Government as a &quot;terrorist
          supporting&quot; country, and that you are not listed on any U.S. Government list of prohibited or
          restricted parties.
        </li>
        <li>
          Apple, and Apple&apos;s subsidiaries, are third-party beneficiaries of these Terms, and upon your
          acceptance of these Terms, Apple will have the right (and will be deemed to have accepted the right) to
          enforce these Terms against you as a third-party beneficiary.
        </li>
      </ul>

      <LegalCrossLinks current="/terms" />
    </main>
  );
}
