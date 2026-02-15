import { baseMetadata } from "@/lib/seo";
import { Card } from "@/components/ui/Card";
import { TurnstileWidget } from "@/components/forms/TurnstileWidget";

export const metadata = baseMetadata({ title: "Volunteer" });

export default function VolunteerPage() {
  return (
    <article className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6">
      <header>
        <h1 className="text-4xl font-semibold tracking-tight">Volunteer</h1>
        <p className="mt-4 text-base text-neutral-600">
          Structured volunteer roles. Submit the form and we’ll respond.
        </p>
      </header>

      <section className="mt-10">
        <Card title="Volunteer inquiry">
          <form action="/api/forms/volunteer" method="POST" className="grid gap-4">
            <input name="name" placeholder="Full name" required className="rounded-xl border border-neutral-300 px-4 py-3 text-sm" />
            <input name="email" type="email" placeholder="Email" required className="rounded-xl border border-neutral-300 px-4 py-3 text-sm" />
            <input name="area" placeholder="Area of interest (e.g., outreach, media, coordination)" required className="rounded-xl border border-neutral-300 px-4 py-3 text-sm" />
            <textarea name="message" placeholder="Message" required className="min-h-[120px] rounded-xl border border-neutral-300 px-4 py-3 text-sm" />

            <TurnstileWidget />

            <button type="submit" className="rounded-2xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white hover:bg-neutral-800">
              Submit
            </button>
          </form>
        </Card>
      </section>
    </article>
  );
}
