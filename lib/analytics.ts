/**
 * Analytics abstraction. Components only call `track()`.
 * Built-in adapters stay silent unless the matching script exists on the page, so GTM, GA4,
 * Meta Pixel or a GoHighLevel tracking snippet can be added later without touching components.
 */

export type AnalyticsEvent =
  | "page_view"
  | "hero_cta_clicked"
  | "lead_magnet_section_viewed"
  | "form_started"
  | "form_submitted"
  | "assessment_cta_clicked"
  | "cta_clicked"; // generic, for CTAs outside the hero

export type EventProps = Record<string, string | number | boolean | undefined>;
export type AnalyticsAdapter = (event: AnalyticsEvent, props: EventProps) => void;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

const consoleAdapter: AnalyticsAdapter = (event, props) => {
  if (process.env.NODE_ENV !== "production" || process.env.NEXT_PUBLIC_TEST_MODE === "true") {
    console.debug("[analytics]", event, props);
  }
};

const dataLayerAdapter: AnalyticsAdapter = (event, props) => {
  window.dataLayer?.push({ event, ...props });
};

const gtagAdapter: AnalyticsAdapter = (event, props) => {
  window.gtag?.("event", event, props);
};

/** `form_submitted` maps to Meta's standard "Lead" event. PageView is tracked by the Pixel itself. */
const metaPixelAdapter: AnalyticsAdapter = (event, props) => {
  if (!window.fbq || event === "page_view") return;
  if (event === "form_submitted") window.fbq("track", "Lead", props);
  else window.fbq("trackCustom", event, props);
};

const adapters: AnalyticsAdapter[] = [consoleAdapter, dataLayerAdapter, gtagAdapter, metaPixelAdapter];

export function registerAnalyticsAdapter(adapter: AnalyticsAdapter) {
  adapters.push(adapter);
}

export function track(event: AnalyticsEvent, props: EventProps = {}) {
  if (typeof window === "undefined") return;
  for (const adapter of adapters) {
    try {
      adapter(event, props);
    } catch {
      /* analytics must never break the page */
    }
  }
}
