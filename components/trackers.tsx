"use client";

import { useEffect } from "react";
import { track, type AnalyticsEvent } from "@/lib/analytics";

export function PageViewTracker() {
  useEffect(() => {
    track("page_view", { page: "landing" });
  }, []);
  return null;
}

/**
 * Fires once when the element with `targetId` is meaningfully on screen: at least 15% of the element,
 * or at least 40% of the viewport height (tall sections never reach a high percentage on phones).
 */
export function ViewTracker({ targetId, event }: { targetId: string; event: AnalyticsEvent }) {
  useEffect(() => {
    const el = document.getElementById(targetId);
    if (!el || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => {
        const seen = entries.some(
          (e) => e.isIntersecting && (e.intersectionRatio >= 0.15 || e.intersectionRect.height >= window.innerHeight * 0.4)
        );
        if (seen) {
          track(event);
          observer.disconnect();
        }
      },
      { threshold: [0, 0.05, 0.15, 0.3, 0.5] }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [targetId, event]);
  return null;
}
