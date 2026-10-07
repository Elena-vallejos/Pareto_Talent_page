"use client";

import Script from "next/script";
import { useEffect, useRef } from "react";
import { track } from "@/lib/analytics";
import { GHL_FORM_ID, GHL_FORM_NAME, GHL_FORM_URL, GHL_SCRIPT_URL, TEST_MODE } from "@/lib/config";

const isGhlOrigin = (origin: string) => {
  try {
    return /(^|\.)(leadconnectorhq|msgsndr|gohighlevel)\.com$/.test(new URL(origin).hostname);
  } catch {
    return false;
  }
};

/**
 * GoHighLevel form integration.
 *
 * The form is the official GoHighLevel embed: it submits directly to GoHighLevel, which creates the
 * contact, applies tags, creates the opportunity, sends the welcome email and redirects to the Thank
 * You page. This component never touches the submission (no onSubmit, no proxy, no credentials).
 *
 * To change the form: set NEXT_PUBLIC_GHL_FORM_EMBED_URL (see .env.example). The iframe attributes
 * below mirror the code GoHighLevel generates, so nothing else needs to change.
 */
export function LeadForm() {
  const frame = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    let started = false;
    let submitted = false;

    // Cross-origin iframes can't be inspected, but when someone clicks into the form the window
    // loses focus and the iframe becomes the active element. That's our "form_started" signal.
    const onBlur = () =>
      window.setTimeout(() => {
        if (!started && document.activeElement === frame.current) {
          started = true;
          track("form_started");
        }
      }, 0);

    // Best effort: GoHighLevel's embed script posts messages to the page. Anything that looks like a
    // submission is reported once. In TEST_MODE every message is logged so you can see what your form emits.
    const onMessage = (e: MessageEvent) => {
      if (!isGhlOrigin(e.origin)) return;
      if (TEST_MODE) console.debug("[ghl message]", e.data);
      if (submitted) return;
      let text = "";
      try {
        text = typeof e.data === "string" ? e.data : JSON.stringify(e.data);
      } catch {
        return;
      }
      if (/submitted|submission/i.test(text)) {
        submitted = true;
        track("form_submitted");
      }
    };

    window.addEventListener("blur", onBlur);
    window.addEventListener("message", onMessage);
    return () => {
      window.removeEventListener("blur", onBlur);
      window.removeEventListener("message", onMessage);
    };
  }, []);

  return (
    <div className="min-h-[470px] w-full">
      {/* GOHIGHLEVEL FORM EMBED */}
      <iframe
        ref={frame}
        src={GHL_FORM_URL}
        id={`inline-${GHL_FORM_ID}`}
        title={GHL_FORM_NAME}
        loading="lazy"
        style={{ width: "100%", height: "100%", minHeight: 470, border: "none", borderRadius: 8 }}
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name={GHL_FORM_NAME}
        data-height="435"
        data-layout-iframe-id={`inline-${GHL_FORM_ID}`}
        data-form-id={GHL_FORM_ID}
        data-cookie-consent="true"
        data-cookie-consent-provider="auto"
      />
      {/* END GOHIGHLEVEL FORM EMBED */}
      <Script src={GHL_SCRIPT_URL} strategy="lazyOnload" />
    </div>
  );
}
