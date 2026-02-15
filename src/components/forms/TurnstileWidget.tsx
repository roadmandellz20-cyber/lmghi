"use client";

import Script from "next/script";
import { useEffect, useId, useRef, useState } from "react";

declare global {
  interface Window {
    turnstile?: {
      render: (el: HTMLElement, opts: { sitekey: string; callback: (token: string) => void; "error-callback"?: () => void; theme?: "light" | "dark" }) => string;
      reset: (widgetId?: string) => void;
    };
  }
}

export function TurnstileWidget({ inputName = "turnstileToken" }: { inputName?: string }) {
  const id = useId();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const widgetIdRef = useRef<string | null>(null);
  const [token, setToken] = useState("");

  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  useEffect(() => {
    if (!siteKey) return;

    const tryRender = () => {
      if (!containerRef.current) return;
      if (!window.turnstile) return;
      if (widgetIdRef.current) return;

      widgetIdRef.current = window.turnstile.render(containerRef.current, {
        sitekey: siteKey,
        callback: (t) => setToken(t),
        "error-callback": () => setToken(""),
        theme: "light",
      });
    };

    const interval = window.setInterval(tryRender, 150);
    tryRender();

    return () => window.clearInterval(interval);
  }, [siteKey]);

  if (!siteKey) {
    return (
      <p className="text-xs font-semibold text-red-700">
        Missing NEXT_PUBLIC_TURNSTILE_SITE_KEY in .env.local
      </p>
    );
  }

  return (
    <div className="grid gap-2">
      <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="afterInteractive" />
      <div ref={containerRef} id={`ts-${id}`} />
      <input type="hidden" name={inputName} value={token} />
      <p className="text-xs text-neutral-500">Spam protection is enabled.</p>
    </div>
  );
}
