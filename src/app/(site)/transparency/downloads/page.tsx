import { baseMetadata } from "@/lib/seo";
import { sanityClient } from "@/lib/sanity/client";
import { qReports, qPolicyDocs } from "@/lib/sanity/queries";
import type { Report, PolicyDoc } from "@/lib/sanity/types";

export const metadata = baseMetadata({ title: "Download Center" });

export default async function DownloadsPage() {
  const [reports, docs] = await Promise.all([
    sanityClient.fetch<Report[]>(qReports, {}, { next: { revalidate: 300 } }),
    sanityClient.fetch<PolicyDoc[]>(qPolicyDocs, {}, { next: { revalidate: 300 } }),
  ]);

  return (
    <article className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
      <header>
        <h1 className="text-4xl font-semibold tracking-tight">Download center</h1>
        <p className="mt-4 max-w-2xl text-base text-neutral-600">
          Centralized PDFs for fast access. Built for institutional users.
        </p>
      </header>

      <section className="mt-10" aria-label="Reports downloads">
        <h2 className="text-2xl font-semibold tracking-tight">Reports</h2>
        <ul className="mt-6 grid gap-3">
          {reports.map((r) => (
            <li key={r._id} className="rounded-2xl border border-neutral-200 bg-white p-4">
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="font-semibold">{r.title}</p>
                  <p className="text-xs text-neutral-500">{r.type}{r.period ? ` • ${r.period}` : ""}</p>
                </div>
                <a className="text-sm font-semibold hover:underline" href={r.pdfUrl} target="_blank" rel="noreferrer">Download PDF →</a>
              </div>
            </li>
          ))}
          {!reports.length ? <li className="text-sm text-neutral-600">No reports published yet.</li> : null}
        </ul>
      </section>

      <section className="mt-12" aria-label="Policy documents downloads">
        <h2 className="text-2xl font-semibold tracking-tight">Policies & governance</h2>
        <ul className="mt-6 grid gap-3">
          {docs.map((d) => (
            <li key={d._id} className="rounded-2xl border border-neutral-200 bg-white p-4">
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="font-semibold">{d.title}</p>
                  <p className="text-xs text-neutral-500">{d.category || "Document"}{d.version ? ` • v${d.version}` : ""}</p>
                </div>
                <a className="text-sm font-semibold hover:underline" href={d.pdfUrl} target="_blank" rel="noreferrer">Download PDF →</a>
              </div>
            </li>
          ))}
          {!docs.length ? <li className="text-sm text-neutral-600">No documents published yet.</li> : null}
        </ul>
      </section>
    </article>
  );
}
