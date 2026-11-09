// Example things near you for the scrolling strip under the hero: lives,
// moments and plans, the three things Discover shows, closest first.
type Kind = "live" | "moment" | "plan";

const NEAR_YOU: { kind: Kind; title: string; where: string; stat: string }[] = [
  { kind: "live", title: "Jazz night", where: "0.4 mi", stat: "312 watching" },
  { kind: "plan", title: "Night market", where: "Fri 8 PM · 1.2 mi", stat: "96 pulling up" },
  { kind: "moment", title: "Open-air cinema", where: "0.8 mi", stat: "posted 6 min ago" },
  { kind: "plan", title: "Pickup basketball", where: "Every Sat · 2.1 mi", stat: "Host confirmed" },
  { kind: "live", title: "Rooftop DJ set", where: "1.6 mi", stat: "2.1k watching" },
  { kind: "moment", title: "Art walk", where: "0.3 mi", stat: "It's packed" },
  { kind: "plan", title: "Comedy open mic", where: "Tonight 9 PM · 2.7 mi", stat: "Free until 10 PM" },
  { kind: "live", title: "Silent disco", where: "3.0 mi", stat: "780 watching" },
  { kind: "moment", title: "Street food pop-up", where: "1.1 mi", stat: "No line right now" },
  { kind: "plan", title: "Beach bonfire", where: "Sun 7 PM · 4.4 mi", stat: "41 pulling up" },
];

const LABEL: Record<Kind, string> = { live: "Live", moment: "Moment", plan: "Plan" };

export function LiveTicker() {
  // The list is rendered twice so the strip can loop without a gap.
  const items = [...NEAR_YOU, ...NEAR_YOU];

  return (
    <div className="ticker" role="region" aria-label="Examples of what Discover shows near you">
      <div className="ticker__track">
        {items.map((item, i) => (
          <span key={i} className="ticker__item" aria-hidden={i >= NEAR_YOU.length}>
            <span className={`ticker__live ticker__live--${item.kind}`}>
              {item.kind === "live" ? <span className="live-dot" /> : <span className="ticker__dot" />}
              {LABEL[item.kind]}
            </span>
            <strong>{item.title}</strong>
            <span className="ticker__city">{item.where}</span>
            <span className="ticker__stat">{item.stat}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
