/**
 * Central, browser-safe configuration. There are NO private credentials in this project:
 * the GoHighLevel form is a public embed and submits straight to GoHighLevel.
 */

export const DEFAULT_GHL_FORM_URL = "https://api.leadconnectorhq.com/widget/form/jzahKmKx3IEwHLE4Jri4";
export const GHL_FORM_URL = process.env.NEXT_PUBLIC_GHL_FORM_EMBED_URL?.trim() || DEFAULT_GHL_FORM_URL;
export const GHL_FORM_NAME = "FP_MaraElenaVallejos_Pareto talent lead magnet - Lead";
export const GHL_SCRIPT_URL = "https://link.msgsndr.com/js/form_embed.js";

/** "jzahKmKx3IEwHLE4Jri4" from ".../widget/form/jzahKmKx3IEwHLE4Jri4". */
export const GHL_FORM_ID = GHL_FORM_URL.split("?")[0].split("/").filter(Boolean).pop() ?? "";

export const TEST_MODE = process.env.NEXT_PUBLIC_TEST_MODE === "true";

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL?.trim() || "http://localhost:3000").replace(/\/$/, "");

export const FOOTER_LINKS = {
  privacy: process.env.NEXT_PUBLIC_PRIVACY_URL?.trim() || "#",
  terms: process.env.NEXT_PUBLIC_TERMS_URL?.trim() || "#",
  contact: process.env.NEXT_PUBLIC_CONTACT_URL?.trim() || "#",
};

export const FORM_SECTION_ID = "guide";

export const NAV_LINKS = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Why Pareto Talent", href: "#why" },
  { label: "For Founders", href: "#for-founders" },
  { label: "FAQ", href: "#faq" },
] as const;
