import { baseMetadata } from "@/lib/seo";
import { sanityClient } from "@/lib/sanity/client";
import { qResources } from "@/lib/sanity/queries";
import type { Resource } from "@/lib/sanity/types";
import { Card } from "@/components/ui/Card";
import Link from "next/link";

export const metadata = baseMetadata({ title: "Resources" });

export default async function ResourcesPage() {
  const resources = await sanityClient.fetch<Resource[]>(qResources, { category: null }, { next: { revalidate: 300 } });

  return (
    <article className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
      <header>
        <h1 className="text-4xl font-semibold tracking-tight">Resources / Knowledge hub</h1>
        <p className="mt-4 max-w-2xl text-base text-neutral-600">
          Institutional knowledge entries categorized and published through CMS.
        </p>
      </header>

      <section className="mt-10 grid gap-6 md:grid-cols-2" aria-label="Resources list">
        {resources.map((r) => (
          <Card key={r._id} title={r.title}>
            <p className="text-xs font-semibold text-neutral-500">{r.category}{r.publishedAt ? ` • ${new Date(r.publishedAt).toLocaleDateString()}` : ""}</p>
            <p className="mt-3 text-sm text-neutral-600">{r.excerpt || "Excerpt is generated from CMS content."}</p>
            <div className="mt-5">
              <Link className="text-sm font-semibold hover:underline" href={`/resources/${encodeURIComponent(r.category)}/${r.slug.current}`}>
                Read →
              </Link>
            </div>
          </Card>
        ))}
        {!resources.length ? (
          <div className="md:col-span-2 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 text-sm text-neutral-700">
            No resources published yet. This hub is ready for structured entries.
          </div>
        ) : null}
      </section>
    </article>
  );
}
