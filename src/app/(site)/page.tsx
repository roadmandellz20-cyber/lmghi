import { sanityClient } from "@/lib/sanity/client";
import { qImpactMetrics, qPillars, qReports, qResources } from "@/lib/sanity/queries";
import type { ImpactMetric, Pillar, Report, Resource } from "@/lib/sanity/types";
import { baseMetadata, ORG } from "@/lib/seo";
import { routes } from "@/lib/routes";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import Link from "next/link";

export const metadata = baseMetadata({ title: "Institutional public health delivery" });

export default async function HomePage() {
  const [pillars, metrics, reports, resources] = await Promise.all([
    sanityClient.fetch<Pillar[]>(qPillars, {}, { next: { revalidate: 300 } }),
    sanityClient.fetch<ImpactMetric[]>(qImpactMetrics, {}, { next: { revalidate: 300 } }),
    sanityClient.fetch<Report[]>(qReports, {}, { next: { revalidate: 300 } }),
    sanityClient.fetch<Resource[]>(qResources, { category: null }, { next: { revalidate: 300 } }),
  ]);

  const topReports = reports.slice(0, 3);
  const topResources = resources.slice(0, 3);
  const topMetrics = metrics.slice(0, 4);

  return (
    <>
      <header className="border-b border-neutral-200 bg-white">
        <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
          <p className="text-xs font-semibold tracking-wider text-neutral-500">INSTITUTIONAL PUBLIC HEALTH</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            {ORG.legalName} <span className="text-neutral-500">(LMGHI)</span>
          </h1>
          <p className="mt-4 max-w-2xl text-base text-neutral-600">
            Structured, governed, evidence-driven programs strengthening health delivery across {ORG.region}.
            Primary country: {ORG.country}. Operating region: {ORG.region}.
          </p>

          <nav aria-label="Primary calls to action" className="mt-8 flex flex-wrap gap-3">
            <Button href={routes.donate}>Donate</Button>
            <Button href={routes.programs} variant="secondary">Explore programs</Button>
            <Button href={routes.partner} variant="secondary">Partner</Button>
          </nav>
        </section>
      </header>

      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6" aria-labelledby="pillars">
        <h2 id="pillars" className="text-2xl font-semibold tracking-tight">Strategic pillars</h2>
        <p className="mt-2 max-w-2xl text-sm text-neutral-600">
          Five disciplined pillars—broad enough for scale, specific enough for accountability.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {pillars.map((p) => (
            <Card key={p._id} title={p.title}>
              <p className="text-sm text-neutral-600">{p.summary || "Program architecture ready for structured expansion."}</p>
              <div className="mt-5">
                <Link className="text-sm font-semibold text-neutral-900 hover:underline" href={`/programs/${p.slug.current}`}>
                  View pillar →
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-white" aria-labelledby="impact">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
          <h2 id="impact" className="text-2xl font-semibold tracking-tight">Impact snapshot</h2>
          <p className="mt-2 max-w-2xl text-sm text-neutral-600">
            Metrics are CMS-managed and supported by the Monitoring & Evaluation framework.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-4">
            {topMetrics.length ? topMetrics.map((m) => (
              <article key={m._id} className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
                <p className="text-3xl font-semibold">{m.value}</p>
                <p className="mt-2 text-sm text-neutral-700">{m.label}</p>
                {m.timeframe ? <p className="mt-1 text-xs text-neutral-500">{m.timeframe}</p> : null}
              </article>
            )) : (
              <div className="md:col-span-4 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 text-sm text-neutral-700">
                No public metrics yet. This section is ready for progressive disclosure as data becomes available.
              </div>
            )}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={routes.meFramework} variant="secondary">How we measure</Button>
            <Button href={routes.transparency} variant="secondary">Transparency hub</Button>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6" aria-labelledby="trust">
        <h2 id="trust" className="text-2xl font-semibold tracking-tight">Trust & accountability</h2>
        <p className="mt-2 max-w-2xl text-sm text-neutral-600">
          Governance, policies, reports, and disclosures—built for institutional expectations.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <Card title="Governance">
            <p className="text-sm text-neutral-600">Clear structure, roles, and oversight. Built for growth without chaos.</p>
            <div className="mt-5"><Button href={routes.governance} variant="secondary">View governance</Button></div>
          </Card>

          <Card title="Reports & disclosures">
            <p className="text-sm text-neutral-600">Report center is ready for uploads: annual reports, financials, evaluations.</p>
            <div className="mt-5"><Button href={routes.reports} variant="secondary">View reports</Button></div>
          </Card>

          <Card title="Policies & documents">
            <p className="text-sm text-neutral-600">Constitution and policy documents prepared for progressive publication.</p>
            <div className="mt-5"><Button href={routes.policies} variant="secondary">View documents</Button></div>
          </Card>
        </div>
      </section>

      <section className="border-t border-neutral-200 bg-white" aria-labelledby="latest">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
          <h2 id="latest" className="text-2xl font-semibold tracking-tight">Latest publications</h2>
          <p className="mt-2 max-w-2xl text-sm text-neutral-600">Evidence and outputs. Not vibes.</p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {topReports.map((r) => (
              <Card key={r._id} title={r.title}>
                <p className="text-xs font-semibold text-neutral-500">{r.type}{r.period ? ` • ${r.period}` : ""}</p>
                <p className="mt-3 text-sm text-neutral-600">{r.summary || "Report summary will be populated from CMS."}</p>
                <div className="mt-5">
                  <a className="text-sm font-semibold hover:underline" href={r.pdfUrl} target="_blank" rel="noreferrer">
                    Download PDF →
                  </a>
                </div>
              </Card>
            ))}
            {!topReports.length ? (
              <div className="md:col-span-3 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 text-sm text-neutral-700">
                No public reports yet. The system is ready for uploads and disclosure.
              </div>
            ) : null}
          </div>

          <h3 className="mt-12 text-xl font-semibold tracking-tight">Knowledge hub</h3>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {topResources.map((x) => (
              <Card key={x._id} title={x.title}>
                <p className="text-xs font-semibold text-neutral-500">{x.category}{x.publishedAt ? ` • ${new Date(x.publishedAt).toLocaleDateString()}` : ""}</p>
                <p className="mt-3 text-sm text-neutral-600">{x.excerpt || "Entry excerpt is generated from CMS content."}</p>
                <div className="mt-5">
                  <Link className="text-sm font-semibold hover:underline" href={`/resources/${encodeURIComponent(x.category)}/${x.slug.current}`}>
                    Read →
                  </Link>
                </div>
              </Card>
            ))}
            {!topResources.length ? (
              <div className="md:col-span-3 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 text-sm text-neutral-700">
                No public resources yet. This hub is structured for searchable institutional knowledge.
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </>
  );
}
