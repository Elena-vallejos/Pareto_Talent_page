import type { ReactNode } from "react";
import { cx } from "@/lib/cx";

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cx("mx-auto w-full max-w-6xl px-5 sm:px-8", className)}>{children}</div>;
}

export function Eyebrow({ children, tone = "dark" }: { children: ReactNode; tone?: "dark" | "light" }) {
  return (
    <p className={cx("flex items-center gap-3 text-sm font-bold uppercase tracking-[0.18em]", tone === "dark" ? "text-plum" : "text-cream")}>
      <span aria-hidden="true" className="h-2 w-2 bg-ember" />
      {children}
    </p>
  );
}

export function H2({ children, tone = "dark", className }: { children: ReactNode; tone?: "dark" | "light"; className?: string }) {
  return (
    <h2
      className={cx(
        "font-display text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.75rem]",
        tone === "dark" ? "text-plum" : "text-cream",
        className
      )}
    >
      {children}
    </h2>
  );
}

export const primaryButton =
  "inline-flex items-center justify-center gap-2 rounded-full bg-ember px-7 py-4 text-base font-semibold text-plum transition-colors hover:bg-[#ff6a26] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-plum sm:text-lg";

export const primaryButtonOnDark =
  "inline-flex items-center justify-center gap-2 rounded-full bg-ember px-7 py-4 text-base font-semibold text-plum transition-colors hover:bg-[#ff6a26] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-cream sm:text-lg";

export const secondaryButton =
  "inline-flex items-center justify-center gap-2 rounded-full border-2 border-plum px-7 py-[0.9rem] text-base font-semibold text-plum transition-colors hover:bg-plum hover:text-cream focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-ember sm:text-lg";

export function ArrowDown({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <path d="M10 3v13m0 0l-5-5m5 5l5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Check({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <path d="M4.5 10.5l3.5 3.5 7.5-8.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Cross({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <path d="M5.5 5.5l9 9m0-9l-9 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
