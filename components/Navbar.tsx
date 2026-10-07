"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/config";
import { CtaLink } from "./CtaLink";
import { primaryButton } from "./ui";

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const small = "px-5 py-2.5 text-[0.9375rem] sm:text-[0.9375rem]";

  return (
    <header className="sticky top-0 z-40 border-b border-plum/10 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5" aria-label="Pareto Talent, back to top">
          <Image src="/logo-plum.png" alt="" width={34} height={34} priority />
          <span className="font-display text-[0.95rem] font-bold tracking-[0.16em] text-plum">PARETO TALENT</span>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-[0.9375rem] font-medium text-plum/85 underline-offset-4 hover:text-plum hover:underline focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-ember">
              {l.label}
            </a>
          ))}
          <CtaLink className={`${primaryButton} ${small}`} event="cta_clicked" props={{ location: "navbar" }}>
            Get the Free Guide
          </CtaLink>
        </nav>

        <button
          type="button"
          className="-mr-2 flex h-11 w-11 items-center justify-center rounded-full text-plum hover:bg-plum/10 focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-ember md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-plum/10 bg-cream px-5 pb-6 pt-3 md:hidden">
          <nav aria-label="Mobile" className="flex flex-col">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="border-b border-plum/10 py-4 text-lg font-medium text-plum">
                {l.label}
              </a>
            ))}
          </nav>
          <CtaLink
            className={`${primaryButton} mt-5 w-full`}
            event="cta_clicked"
            props={{ location: "navbar_mobile" }}
            onNavigate={() => setOpen(false)}
          >
            Get the Free Guide
          </CtaLink>
        </div>
      )}
    </header>
  );
}
