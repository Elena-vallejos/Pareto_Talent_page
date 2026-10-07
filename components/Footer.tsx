import Image from "next/image";
import { FOOTER_LINKS } from "@/lib/config";

const links = [
  { label: "Privacy", href: FOOTER_LINKS.privacy },
  { label: "Terms", href: FOOTER_LINKS.terms },
  { label: "Contact", href: FOOTER_LINKS.contact },
];

export function Footer() {
  return (
    <footer className="border-t border-plum/15 bg-cream">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-start md:justify-between">
        <div>
          <div className="flex items-center gap-2.5">
            <Image src="/logo-plum.png" alt="" width={34} height={34} />
            <span className="font-display text-[0.95rem] font-bold tracking-[0.16em]">PARETO TALENT</span>
          </div>
          <p className="mt-4 max-w-xs text-base text-plum/85">Focus on the contribution that creates the most value.</p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex gap-7">
            {links.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="text-base font-medium underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-ember">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-plum/10">
        <p className="mx-auto w-full max-w-6xl px-5 py-5 text-sm text-plum/75 sm:px-8">&copy; 2026 Pareto Talent</p>
      </div>
    </footer>
  );
}
