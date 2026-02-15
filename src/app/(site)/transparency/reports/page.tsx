import { baseMetadata } from "@/lib/seo";
import { sanityClient } from "@/lib/sanity/client";
import { qReports } from "@/lib/sanity/queries";
import type { Report } from "@/lib/sanity/types";
import { Card } from "@/components/ui/Card";

export const metadata = baseMetadata({ title: "Reports & Publications" });

export default async function ReportsPage() {
  const reports = await sanityClient.fetch<Report[]>(qReports, {}, { next: { revalidate: 300 } });

  return (
    <article className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
      <header>
        <h1 className="text-4xl font-semibold tracking-tight">Reports & publications</h1>
        <p className="mt-4 max-w-2xl text-base text-neutral-600">
          Institutional reporting center. Upload PDFs through CMS with draft/publish controls.
        </p>
      </header>

      <section className="mt-10 grid gap-6 md:grid-cols-2" aria-label="Reports list">
        {reports.map((r) => (
          <Card key={r._id} title={r.title}>
            <p className="text-xs font-semibold text-neutral-500">
              {r.type}{r.period ? ` • ${r.period}` : ""}{r.publishedAt ? ` • ${new Date(r.publishedAt).toLocaleDateString()}` : ""}
            </p>
            <p className="mt-3 text-sm text-neutral-600">{r.summary || "Summary will be populated via CMS."}</p>
            <div className="mt-5">
              <a className="text-sm font-semibold hover:underline" href={r.pdfUrl} target="_blank" rel="noreferrer">
                Download PDF →
              </a>
            </div>
          </Card>
        ))}
        {!reports.length ? (
          <div className="md:col-span-2 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 text-sm text-neutral-700">
            No public reports yet. This page is ready for uploads.
          </div>
        ) : null}
      </section>
    </article>
  );
}
