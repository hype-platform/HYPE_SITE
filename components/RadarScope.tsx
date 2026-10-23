import type { CSSProperties } from "react";
import { RadarSync } from "@/components/RadarSync";

// One full turn of the sweep. Each blip lights up when the beam passes its angle.
const SWEEP_SECONDS = 6;

type Blip = {
  angle: number; // degrees clockwise from 12 o'clock
  distance: number; // 0 = center, 1 = edge of the scope
  color: string;
  title?: string;
  meta?: string;
};

const BLIPS: Blip[] = [
  { angle: 38, distance: 0.62, color: "#a855f7", title: "Rooftop DJ set", meta: "0.4 mi · 214 watching" },
  { angle: 96, distance: 0.4, color: "#4a9eff", title: "Indie show", meta: "2.3 mi · 1.2k watching" },
  { angle: 134, distance: 0.84, color: "#ff9a30" },
  { angle: 170, distance: 0.68, color: "#e06030", title: "Street food night", meta: "1.1 mi · 86 here" },
  { angle: 216, distance: 0.46, color: "#1ec8b0", title: "Pickup soccer", meta: "0.7 mi · starting now" },
  { angle: 258, distance: 0.86, color: "#a855f7" },
  { angle: 302, distance: 0.6, color: "#ec4899", title: "Art walk", meta: "1.6 mi · 40 checked in" },
  { angle: 344, distance: 0.3, color: "#4a9eff" },
];

const TICKS = Array.from({ length: 36 }, (_, i) => i * 10);

export function RadarScope() {
  return (
    <div className="radar" aria-hidden="true" style={{ "--sweep": `${SWEEP_SECONDS}s` } as CSSProperties}>
      <div className="radar__scope">
        <svg className="radar__grid" viewBox="0 0 200 200">
          {[24, 48, 72, 96].map((r) => (
            <circle key={r} cx="100" cy="100" r={r} />
          ))}
          <line x1="100" y1="4" x2="100" y2="196" />
          <line x1="4" y1="100" x2="196" y2="100" />
          {TICKS.map((deg) => (
            <line
              key={deg}
              className={deg % 90 === 0 ? "radar__tick radar__tick--major" : "radar__tick"}
              x1="100"
              y1="4"
              x2="100"
              y2={deg % 30 === 0 ? 10 : 7}
              transform={`rotate(${deg} 100 100)`}
            />
          ))}
        </svg>

        <div className="radar__sweep" />

        {BLIPS.map((blip) => {
          const rad = (blip.angle * Math.PI) / 180;
          const x = 50 + blip.distance * 50 * Math.sin(rad);
          const y = 50 - blip.distance * 50 * Math.cos(rad);
          const style = {
            left: `${x}%`,
            top: `${y}%`,
            "--blip": blip.color,
            "--delay": `${(blip.angle / 360) * SWEEP_SECONDS}s`,
          } as CSSProperties;

          return (
            <span key={blip.angle} className="radar__blip" style={style}>
              <span className="radar__ping" />
              <span className="radar__dot" />
              {blip.title && (
                <span
                  className={`radar__label radar__label--${x > 72 ? "left" : "right"}${x > 58 ? " radar__label--flip-sm" : ""}`}
                >
                  <strong>{blip.title}</strong>
                  <small>{blip.meta}</small>
                </span>
              )}
            </span>
          );
        })}

        <span className="radar__you" />
      </div>

      <div className="radar__hud radar__hud--top">
        <span className="live-dot" /> Scanning nearby
      </div>
      <div className="radar__hud radar__hud--bottom">2 mi radius · 5 live now</div>
      <RadarSync />
    </div>
  );
}
