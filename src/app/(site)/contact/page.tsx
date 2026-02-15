import { baseMetadata } from "@/lib/seo";
import { TurnstileWidget } from "@/components/forms/TurnstileWidget";
import { Card } from "@/components/ui/Card";

export const metadata = baseMetadata({ title: "Contact" });

export default function ContactPage() {
  return (
    <article className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
      <header>
        <h1 className="text-4xl font-semibold tracking-tight">Contact</h1>
        <p className="mt-3 max-w-2xl text-sm text-neutral-600">
          Send a direct message to LMGHI. We review inquiries for partnerships, operations, and institutional
          collaboration.
        </p>
      </header>

      <section className="mt-10">
        <Card title="Message LMGHI">
          <form action="/api/forms/contact" method="POST" className="grid gap-4">
            <input
              name="name"
              placeholder="Full name"
              required
              className="rounded-xl border border-neutral-300 px-4 py-3 text-sm"
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              required
              className="rounded-xl border border-neutral-300 px-4 py-3 text-sm"
            />
            <input
              name="subject"
              placeholder="Subject"
              required
              className="rounded-xl border border-neutral-300 px-4 py-3 text-sm"
            />
            <textarea
              name="message"
              placeholder="Message"
              required
              className="min-h-[120px] rounded-xl border border-neutral-300 px-4 py-3 text-sm"
            />

            <TurnstileWidget />

            <button
              type="submit"
              className="rounded-2xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white hover:bg-neutral-800"
            >
              Submit
            </button>
          </form>
        </Card>
      </section>
    </article>
  );
}
