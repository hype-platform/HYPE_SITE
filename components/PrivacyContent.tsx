import { Brand } from "@/components/Brand";
import { LegalCrossLinks } from "@/components/LegalCrossLinks";
import { CONTACT_EMAIL } from "@/lib/constants";

export function PrivacyContent() {
  return (
    <main className="legal container">
      <div className="legal__toc">
        <p>On this page</p>
        <ol>
          <li><a href="#collect">Information we collect</a></li>
          <li><a href="#no-ads">What we don&apos;t do</a></li>
          <li><a href="#sharing">Who we share information with</a></li>
          <li><a href="#retention">Data retention</a></li>
          <li><a href="#delete-account">How to delete your account</a></li>
          <li><a href="#your-rights">Your rights</a></li>
          <li><a href="#children">Children</a></li>
          <li><a href="#security">Security</a></li>
          <li><a href="#international">International data transfers</a></li>
          <li><a href="#changes">Changes to this policy</a></li>
          <li><a href="#contact">Contact</a></li>
        </ol>
      </div>

      <p>
        <strong>[YOUR NAME OR COMPANY NAME]</strong> (&quot;we,&quot; &quot;us,&quot; &quot;our&quot;) operates{" "}
        <Brand />, a location-based social app for discovering live streams, posts, and events happening near
        you. This Privacy Policy explains what information we collect, why we collect it, and the choices you
        have.
      </p>

      <h2 id="collect">Information we collect</h2>

      <p><strong>Contact info.</strong> Phone number and email address — used to sign you in and to help you recover your account.</p>

      <p>
        <strong>Identity &amp; profile.</strong> Your name, username, profile photo, bio, and date of birth. We
        use your date of birth to confirm you meet the minimum age to use <Brand /> and to show or hide
        age-restricted (18+/21+) content correctly. If you choose an optional profile identity, we store that
        too.
      </p>

      <p><strong>Precise location.</strong></p>
      <ul>
        <li>Foreground location — used while you have the app open, to show you nearby events and posts and to place your own posts and live streams on the map.</li>
        <li>Background location — collected only if you grant <Brand /> &quot;Always&quot; location permission, and used solely to automatically check you in when you arrive at an event.</li>
        <li>You can turn location off at any time in your iPhone&apos;s Settings app. The rest of <Brand /> will keep working without it.</li>
      </ul>

      <p>
        <strong>Photos, videos &amp; audio.</strong> The photos and videos you capture or upload, your live
        streams and their recordings, and access to your camera, microphone, and photo library — only when you
        actively use those features.
      </p>

      <p>
        <strong>User content &amp; activity.</strong> Posts, events, comments and chat messages, reactions,
        follows, check-ins, RSVPs, and the reports and blocks you submit.
      </p>

      <p>
        <strong>Usage data.</strong> How you interact with <Brand /> — what you view, tap, and engage with — used
        to rank your feed and improve the app. This is first-party data only; we don&apos;t use it for
        advertising.
      </p>

      <p>
        <strong>Device &amp; technical data.</strong> Your push notification token, device type, app version, and
        crash or diagnostic logs.
      </p>

      <h2 id="no-ads">What we don&apos;t do</h2>
      <p>
        We do not sell your personal data, do not use it for advertising, and do not track you across other
        companies&apos; apps or websites.
      </p>

      <h2 id="sharing">Who we share information with</h2>
      <p>We share information with the service providers that help us run <Brand />, only as needed to operate the Service:</p>
      <ul>
        <li><strong>Supabase</strong> — account authentication, database, and server functions.</li>
        <li><strong>Cloudflare</strong> (R2 storage and Stream) — storing and delivering your photos, videos, and live-stream recordings.</li>
        <li><strong>LiveKit</strong> — powering real-time live video streaming.</li>
        <li><strong>Mapbox</strong> — maps, place search, and directions; receives your location when you use the map or get directions.</li>
        <li><strong>Apple</strong> — Sign in with Apple and push notifications (APNs).</li>
        <li><strong>Google</strong> — Sign in with Google.</li>
        <li><strong>Our SMS provider</strong>, through our authentication service — sending phone verification codes.</li>
      </ul>
      <p>
        Your public content — posts, live streams, your profile, and anything you share via a public link — is
        visible to other <Brand /> users and to anyone you share a link with.
      </p>

      <h2 id="retention">Data retention</h2>
      <p>
        We keep your information for as long as your account exists. When you delete your account in the app,
        your account and the content you posted are deleted. Some information may remain briefly in backups, or
        where we&apos;re required to keep it by law.
      </p>

      <h2 id="delete-account">How to delete your account</h2>
      <p>
        You can permanently delete your account at any time: open the app, go to Profile → Delete account. You
        can also email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> to request deletion.
      </p>

      <h2 id="your-rights">Your rights</h2>
      <p>
        Depending on where you live, you may have the right to access the personal data we hold about you,
        correct it, delete it, receive a copy of it (data portability), or withdraw consent you previously gave
        us. To exercise any of these rights, email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
      <p>
        <strong>If you&apos;re in the EEA or UK (GDPR).</strong> Our legal bases for processing your data include
        performing our contract with you (providing the app), our legitimate interests (keeping the platform safe
        and improving it), and your consent (for example, for background location). You have the right to lodge a
        complaint with your local data protection authority.
      </p>
      <p>
        <strong>If you&apos;re a California resident (CCPA/CPRA).</strong> You have the right to know what
        personal information we collect, to request its deletion, and to request correction of inaccurate
        information. As stated above, we do not sell your personal information. You won&apos;t be discriminated
        against for exercising any of these rights.
      </p>

      <h2 id="children">Children</h2>
      <p>
        <Brand /> is not for children under 13. We don&apos;t knowingly collect personal data from anyone under
        13, and if we learn that we have, we&apos;ll delete it. Parents or guardians who believe their child has
        provided us with personal data can contact us at{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>

      <h2 id="security">Security</h2>
      <p>
        We use industry-standard safeguards to protect your information, including encryption in transit and
        access controls that limit who can see your data internally. No method of transmission or storage is
        perfectly secure, and we can&apos;t guarantee absolute security.
      </p>

      <h2 id="international">International data transfers</h2>
      <p>
        Some of the service providers listed above may process your information in countries other than the one
        you live in. Where this happens, we take steps to make sure your information continues to receive an
        appropriate level of protection.
      </p>

      <h2 id="changes">Changes to this policy</h2>
      <p>
        We may update this Privacy Policy from time to time. If we make material changes, we&apos;ll update the
        &quot;Last updated&quot; date above and, where appropriate, notify you in the app.
      </p>

      <h2 id="contact">Contact</h2>
      <p>
        Questions about this policy or your data? Email{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. This Service is operated by{" "}
        <strong>[YOUR NAME OR COMPANY NAME]</strong>.
      </p>

      <LegalCrossLinks current="/privacy" />
    </main>
  );
}
