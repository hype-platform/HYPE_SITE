import { Brand } from "@/components/Brand";
import { LegalCrossLinks } from "@/components/LegalCrossLinks";
import { CONTACT_EMAIL } from "@/lib/constants";

export function CommunityGuidelinesContent() {
  return (
    <main className="legal container">
      <div className="legal__toc">
        <p>On this page</p>
        <ol>
          <li><a href="#not-allowed">Not allowed</a></li>
          <li><a href="#age-restricted">Age-restricted content</a></li>
          <li><a href="#live">Live streams</a></li>
          <li><a href="#events">Events</a></li>
          <li><a href="#reporting">How to report</a></li>
          <li><a href="#what-happens">What happens next</a></li>
          <li><a href="#contact">Contact</a></li>
        </ol>
      </div>

      <p>
        <Brand /> has zero tolerance for objectionable content and abusive users. These guidelines explain what
        that means in practice — for every profile, every post, every live stream, and every event on <Brand />.
      </p>

      <h2 id="not-allowed">Not allowed</h2>
      <ul>
        <li><strong>Harassment and bullying</strong> — repeated unwanted contact, targeted pile-ons, or intimidation.</li>
        <li><strong>Hate speech</strong> — content that attacks people based on race, ethnicity, religion, gender, sexual orientation, disability, or any other protected characteristic.</li>
        <li><strong>Threats and violence</strong> — threatening, glorifying, or inciting violence against any person.</li>
        <li><strong>Nudity and sexual content</strong> — including sexual content involving minors, which we report to the National Center for Missing &amp; Exploited Children (NCMEC) and law enforcement.</li>
        <li><strong>Illegal activity</strong> — including the sale of drugs or weapons.</li>
        <li>
          <strong>Self-harm promotion</strong> — content that encourages or instructs self-harm, suicide, or
          eating disorders. If you or someone you know is struggling, the 988 Suicide &amp; Crisis Lifeline (call
          or text 988) is available 24/7.
        </li>
        <li><strong>Spam and scams.</strong></li>
        <li><strong>Impersonation</strong> — pretending to be another person, brand, or <Brand /> itself.</li>
        <li><strong>Sharing other people&apos;s private information</strong> without their consent.</li>
        <li><strong>Dangerous or fake events</strong> — listings that put attendees at risk or misrepresent what&apos;s actually happening.</li>
      </ul>

      <h2 id="age-restricted">Age-restricted content</h2>
      <p>
        If what you&apos;re posting isn&apos;t appropriate for everyone, tag it honestly as 18+ or 21+ so{" "}
        <Brand /> can hide it from users who don&apos;t meet that age, based on the birthdate they gave us when
        they signed up.
      </p>

      <h2 id="live">Live streams</h2>
      <p>
        Everything in these guidelines applies to live streams in real time, including chat and reactions. We may
        end a stream that breaks these rules.
      </p>

      <h2 id="events">Events</h2>
      <p>
        Be honest about what, where, and when your event actually is. Respect the venues you use and the people
        who show up.
      </p>

      <h2 id="reporting">How to report</h2>
      <p>
        Every post, live stream, event, and profile on <Brand /> has a report button — use it to flag anything
        that breaks these guidelines. You can also block any user directly from their profile.
      </p>

      <h2 id="what-happens">What happens next</h2>
      <p>
        We review reports within 24 hours. Content that breaks these guidelines gets removed, and the accounts
        responsible are suspended or permanently banned, depending on severity. Serious violations — threats,
        exploitation of minors, or other illegal activity — are reported to law enforcement.
      </p>

      <h2 id="contact">Contact</h2>
      <p>
        Questions about these guidelines? Email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>

      <LegalCrossLinks current="/guidelines" />
    </main>
  );
}
