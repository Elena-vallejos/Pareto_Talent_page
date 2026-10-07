"use client";

import type { ReactNode } from "react";
import { track, type AnalyticsEvent, type EventProps } from "@/lib/analytics";
import { FORM_SECTION_ID } from "@/lib/config";

type Props = {
  children: ReactNode;
  className?: string;
  /** Defaults to the lead-magnet section. */
  href?: string;
  event?: AnalyticsEvent;
  props?: EventProps;
  onNavigate?: () => void;
};

/** A normal anchor (so scrolling is native and works without JavaScript) that also reports the click. */
export function CtaLink({ children, className, href = `#${FORM_SECTION_ID}`, event = "cta_clicked", props, onNavigate }: Props) {
  return (
    <a
      href={href}
      className={className}
      onClick={() => {
        track(event, props);
        onNavigate?.();
      }}
    >
      {children}
    </a>
  );
}
