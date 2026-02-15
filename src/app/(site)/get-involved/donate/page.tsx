"use client";

import * as React from "react";
import Button from "@/components/ui/Button";

const AMOUNTS = [10, 25, 50, 100];

export default function DonatePage() {
  const [amount, setAmount] = React.useState<number>(25);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  async function startCheckout() {
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/donate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data?.error ?? "Donation checkout failed.");

      if (data?.url) {
        window.location.href = data.url; // Stripe Checkout URL
        return;
      }

      throw new Error("Stripe URL missing.");
    } catch (e: any) {
      setError(e?.message ?? "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-semibold tracking-tight text-neutral-900">Donate</h1>
      <p className="mt-2 text-neutral-600 max-w-2xl">
        Fund delivery systems, reporting, and governance. Secure checkout via Stripe.
      </p>

      <section id="donate" className="mt-10 rounded-3xl border border-neutral-200 bg-white p-6 md:p-8 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="text-sm font-semibold text-neutral-900">Choose an amount</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {AMOUNTS.map((a) => (
                <button
                  key={a}
                  onClick={() => setAmount(a)}
                  className={[
                    "px-4 py-2 rounded-full border text-sm transition",
                    a === amount
                      ? "border-neutral-900 bg-neutral-900 text-white"
                      : "border-neutral-200 bg-white text-neutral-900 hover:bg-neutral-50",
                  ].join(" ")}
                >
                  ${a}
                </button>
              ))}
            </div>
          </div>

          <div className="min-w-[240px]">
            <Button
              variant="primary"
              className="w-full justify-center"
              onClick={startCheckout}
              disabled={loading}
            >
              {loading ? "Redirecting..." : `Donate $${amount}`}
            </Button>

            <p className="mt-2 text-xs text-neutral-500">
              Having issues? Email{" "}
              <a className="underline" href="mailto:donate@lmghi.org">
                donate@lmghi.org
              </a>
            </p>

            {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
          </div>
        </div>
      </section>
    </main>
  );
}
