import { baseMetadata } from "@/lib/seo";
import { sanityClient } from "@/lib/sanity/client";
import { qImpactMetrics } from "@/lib/sanity/queries";
import type { ImpactMetric } from "@/lib/sanity/types";
import { Card } from "@/components/ui/Card";
import { routes } from "@/lib/routes";
import { Button } from "@/components/ui/Button";

export const metadata = baseMetadata({ title: "Impact" });

export default async function ImpactPage() {
  const metrics = await sanityClient.fetch<ImpactMetric[]>(qImpactMetrics, {}, { next: { revalidate: 300 } });

  return (
    <article className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
      <header>
        <h1 className="text-4xl font-semibold tracking-tight">Impact</h1>
        <p className="mt-4 max-w-2xl text-base text-neutral-600">
          We publish metrics with methodology notes and link evidence through the Transparency hub.
        </p>
      </header>

      <section className="mt-10 grid gap-6 md:grid-cols-3" aria-label="Impact metrics">
        {metrics.map((m) => (
          <Card key={m._id} title={m.label}>
            <p className="text-3xl font-semibold">{m.value}</p>
            {m.timeframe ? <p className="mt-2 text-xs font-semibold text-neutral-500">{m.timeframe}</p> : null}
            {m.methodNote ? <p className="mt-3 text-sm text-neutral-600">{m.methodNote}</p> : null}
          </Card>
        ))}
        {!metrics.length ? (
          <div className="md:col-span-3 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 text-sm text-neutral-700">
            No public metrics yet. This page is ready for progressive publication.
          </div>
        ) : null}
      </section>

      <nav className="mt-10 flex flex-wrap gap-3" aria-label="Impact actions">
        <Button href={routes.meFramework} variant="secondary">M&E framework</Button>
        <Button href={routes.reports} variant="secondary">Reports</Button>
        <Button href={routes.donate}>Donate</Button>
      </nav>
    </article>
  );
}
