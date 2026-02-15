import { baseMetadata } from "@/lib/seo";
import { sanityClient } from "@/lib/sanity/client";
import { qPolicyDocs } from "@/lib/sanity/queries";
import type { PolicyDoc } from "@/lib/sanity/types";
import { Card } from "@/components/ui/Card";

export const metadata = baseMetadata({ title: "Policies & Documents" });

export default async function PoliciesPage() {
  const docs = await sanityClient.fetch<PolicyDoc[]>(qPolicyDocs, {}, { next: { revalidate: 300 } });

  return (
    <article className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
      <header>
        <h1 className="text-4xl font-semibold tracking-tight">Policies & governance documents</h1>
        <p className="mt-4 max-w-2xl text-base text-neutral-600">
          A structured download center for constitution, safeguarding, anti-fraud, governance, and M&E framework.
        </p>
      </header>

      <section className="mt-10 grid gap-6 md:grid-cols-2" aria-label="Policy documents">
        {docs.map((d) => (
          <Card key={d._id} title={d.title}>
            <p className="text-xs font-semibold text-neutral-500">
              {d.category || "Document"}{d.version ? ` • v${d.version}` : ""}{d.effectiveDate ? ` • ${d.effectiveDate}` : ""}
            </p>
            <div className="mt-5">
              <a className="text-sm font-semibold hover:underline" href={d.pdfUrl} target="_blank" rel="noreferrer">
                Download PDF →
              </a>
            </div>
          </Card>
        ))}
        {!docs.length ? (
          <div className="md:col-span-2 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 text-sm text-neutral-700">
            No documents published yet. This section is ready for progressive disclosure.
          </div>
        ) : null}
      </section>
    </article>
  );
}
