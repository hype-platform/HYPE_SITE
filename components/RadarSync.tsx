"use client";

import { useEffect, useRef } from "react";

// Gives every animation inside the radar the same start time, so each blip lights up
// exactly when the sweep passes it. Their CSS delays keep them spaced around the circle.
export function RadarSync() {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const radar = ref.current?.closest<HTMLElement>(".radar");
    if (!radar || typeof radar.getAnimations !== "function") return;

    const start = document.timeline.currentTime;
    for (const animation of radar.getAnimations({ subtree: true })) {
      animation.startTime = start;
    }
  }, []);

  return <span ref={ref} hidden />;
}
