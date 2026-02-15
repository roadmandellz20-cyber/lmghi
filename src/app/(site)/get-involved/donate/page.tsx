import { baseMetadata } from "@/lib/seo";
import { Card } from "@/components/ui/Card";

export const metadata = baseMetadata({ title: "Donate" });

export default function DonatePage() {
  return (
    <article className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6">
      <header>
        <h1 className="text-4xl font-semibold tracking-tight">Donate</h1>
        <p className="mt-4 text-base text-neutral-600">
          Secure donation processing (one-time or recurring). You will be redirected to Stripe Checkout.
        </p>
      </header>

      <section className="mt-10" aria-label="Donation form">
        <Card title="Donation">
          <form action="/api/donate" method="POST" className="grid gap-4">
            <label className="grid gap-2 text-sm font-semibold">
              Amount (USD)
              <input
                name="amount"
                type="number"
                min={1}
                defaultValue={25}
                className="rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm"
                required
              />
            </label>

            <label className="grid gap-2 text-sm font-semibold">
              Frequency
              <select name="frequency" className="rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm" defaultValue="one_time">
                <option value="one_time">One-time</option>
                <option value="monthly">Monthly (recurring)</option>
              </select>
            </label>

            <button
              type="submit"
              className="rounded-2xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white hover:bg-neutral-800"
            >
              Continue to secure checkout
            </button>

            <p className="text-xs text-neutral-500">
              Launch currency: USD. Multi-currency will be added without rewriting the donation architecture.
            </p>
          </form>
        </Card>
      </section>
    </article>
  );
}
