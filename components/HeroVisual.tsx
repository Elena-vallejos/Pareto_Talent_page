/**
 * Abstract 80/20 illustration: many inputs, a few of which create disproportionate value.
 * Deterministic positions (2 highlighted dots per row) so server and client render identically.
 */
const HIGHLIGHT: Record<number, number[]> = {
  0: [2, 7],
  1: [5, 9],
  2: [0, 4],
  3: [3, 8],
  4: [1, 6],
  5: [4, 9],
  6: [2, 7],
  7: [0, 5],
  8: [3, 8],
  9: [1, 6],
};

export function HeroVisual() {
  const dots = [];
  for (let r = 0; r < 10; r++) {
    for (let c = 0; c < 10; c++) {
      const hot = HIGHLIGHT[r].includes(c);
      dots.push(
        <circle
          key={`${r}-${c}`}
          cx={20 + c * 28}
          cy={20 + r * 28}
          r={hot ? 9 : 5.5}
          fill={hot ? "#f54e02" : "#fdfeba"}
          fillOpacity={hot ? 1 : 0.28}
          className={hot ? "animate-dot-in motion-reduce:animate-none" : undefined}
          style={hot ? { animationDelay: `${300 + (r * 2 + HIGHLIGHT[r].indexOf(c)) * 90}ms`, transformOrigin: "center", transformBox: "fill-box" } : undefined}
        />
      );
    }
  }
  return (
    <figure className="rounded-3xl bg-plum p-6 text-cream sm:p-8">
      <figcaption className="flex items-center justify-between">
        <span className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">80/20</span>
        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-cream/70">Illustration</span>
      </figcaption>
      <svg
        viewBox="0 0 272 272"
        role="img"
        aria-label="A grid of one hundred dots. Twenty highlighted dots represent the few inputs that create disproportionate value."
        className="mx-auto mt-6 h-auto w-full max-w-[22rem]"
      >
        {dots}
      </svg>
      <ul className="mt-6 space-y-2.5 border-t border-cream/20 pt-5 text-[0.9375rem]">
        <li className="flex items-center gap-3">
          <span aria-hidden="true" className="h-3.5 w-3.5 shrink-0 rounded-full bg-ember" />
          The few contributions that create disproportionate value
        </li>
        <li className="flex items-center gap-3 text-cream/80">
          <span aria-hidden="true" className="h-2.5 w-2.5 shrink-0 rounded-full bg-cream/30" />
          Everything else competing for your time
        </li>
      </ul>
    </figure>
  );
}
