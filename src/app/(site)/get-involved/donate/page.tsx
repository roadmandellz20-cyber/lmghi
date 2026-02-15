// src/app/(site)/get-involved/donate/page.tsx
"use client";

import * as React from "react";
import { Button } from "@/components/ui/Button";

const AMOUNTS = [10, 25, 50, 100];

export default function DonatePage() {
  const [amount, setAmount] = React.useState<number>(25);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string>("");

  async function onDonate() {
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/donate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount }),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok || !data?.ok) {
        throw new Error(data?.error || "Donate failed");
      }

      // ✅ For now we just stay on the page and show “ready”.
      // Later: redirect to data.checkoutUrl (Stripe session URL).
      window.location.href = data.checkoutUrl || "/get-involved/donate?status=ready";
    } catch (e: any) {
      setError(e?.message ?? "Donate failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-14">
      <h1 className="text-3xl font-semibold tracking-tight">Donate</h1>
      <p className="mt-2 text-neutral-600">
        Fund delivery systems, reporting, and governance. Secure checkout via Stripe.
      </p>

      <div className="mt-8 rounded-3xl border border-black/10 bg-white p-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-sm font-medium text-neutral-900">Choose an amount</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {AMOUNTS.map((a) => (
                <button
                  key={a}
                  onClick={() => setAmount(a)}
                  className={[
                    "h-10 rounded-full px-4 text-sm transition border",
                    a === amount
                      ? "border-black bg-black text-white"
                      : "border-black/15 bg-white text-neutral-900 hover:bg-black/[0.04]",
                  ].join(" ")}
                >
                  ${a}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button onClick={onDonate} disabled={loading}>
              {loading ? "Processing..." : `Donate $${amount}`}
            </Button>
            <Button href="/contact" variant="outline">
              Need help?
            </Button>
          </div>
        </div>

        {error ? (
          <div className="mt-4 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
            {error}
          </div>
        ) : null}
      </div>
    </main>
  );
}
