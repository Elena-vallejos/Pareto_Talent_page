import { TEST_MODE } from "@/lib/config";

/** Rendered only when NEXT_PUBLIC_TEST_MODE=true. Production builds must not set it. */
export function TestModeBanner() {
  if (!TEST_MODE) return null;
  return (
    <div
      role="status"
      className="pointer-events-none fixed bottom-3 left-3 z-50 rounded-full border-2 border-ember bg-plum px-3 py-1 text-xs font-bold tracking-[0.16em] text-cream shadow-lg"
    >
      TEST MODE
    </div>
  );
}
