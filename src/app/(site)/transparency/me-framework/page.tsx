import { baseMetadata } from "@/lib/seo";
import { Callout } from "@/components/ui/Callout";

export const metadata = baseMetadata({ title: "M&E Framework" });

export default function MEFrameworkPage() {
  return (
    <article className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
      <header>
        <h1 className="text-4xl font-semibold tracking-tight">Monitoring & Evaluation framework</h1>
        <p className="mt-4 max-w-2xl text-base text-neutral-600">
          This page defines how LMGHI measures outcomes, validates data quality, and reports limitations.
        </p>
      </header>

      <section className="mt-10 grid gap-6 md:grid-cols-2" aria-label="M&E principles">
        <Callout title="What we measure">
          Reach, coverage, service utilization, referrals, follow-up, and program outcomes tied to defined indicators.
        </Callout>
        <Callout title="How we report">
          We publish metrics with timeframe and methodology notes and link evidence through reports where available.
        </Callout>
      </section>

      <section className="mt-10 rounded-2xl border border-neutral-200 bg-white p-6" aria-label="Data integrity">
        <h2 className="text-lg font-semibold">Data integrity and limitations</h2>
        <p className="mt-3 text-sm text-neutral-600">
          Early-stage organizations must avoid overstating impact. This framework is designed for progressive disclosure:
          publish what is validated, document limitations, and improve measurement over time.
        </p>
      </section>
    </article>
  );
}
