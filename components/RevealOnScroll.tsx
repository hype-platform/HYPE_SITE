"use client";

import { useEffect } from "react";

// Fades `.reveal` elements in as they scroll into view. Elements already on screen,
// and every element when JavaScript is off or reduced motion is on, stay visible.
export function RevealOnScroll() {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );

    for (const el of document.querySelectorAll<HTMLElement>(".reveal")) {
      if (el.getBoundingClientRect().top < window.innerHeight) continue;
      el.classList.add("reveal--pending");
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return null;
}
