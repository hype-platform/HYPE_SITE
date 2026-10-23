// Example events for the scrolling "live now" strip under the hero.
const LIVE_NOW = [
  { title: "Jazz night", city: "Chicago", stat: "312 watching" },
  { title: "Street food market", city: "Lagos", stat: "1.4k here" },
  { title: "Open-air cinema", city: "Lisbon", stat: "220 watching" },
  { title: "Pickup basketball", city: "Minneapolis", stat: "starting now" },
  { title: "Rooftop DJ set", city: "London", stat: "2.1k watching" },
  { title: "Night market", city: "Taipei", stat: "960 here" },
  { title: "Comedy open mic", city: "Toronto", stat: "148 watching" },
  { title: "Art walk", city: "Mexico City", stat: "410 here" },
  { title: "Silent disco", city: "Berlin", stat: "780 watching" },
  { title: "Beach bonfire", city: "Sydney", stat: "95 here" },
];

export function LiveTicker() {
  // The list is rendered twice so the strip can loop without a gap.
  const items = [...LIVE_NOW, ...LIVE_NOW];

  return (
    <div className="ticker" role="region" aria-label="Examples of events happening live">
      <div className="ticker__track">
        {items.map((event, i) => (
          <span key={i} className="ticker__item" aria-hidden={i >= LIVE_NOW.length}>
            <span className="ticker__live">
              <span className="live-dot" /> Live
            </span>
            <strong>{event.title}</strong>
            <span className="ticker__city">{event.city}</span>
            <span className="ticker__stat">{event.stat}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
