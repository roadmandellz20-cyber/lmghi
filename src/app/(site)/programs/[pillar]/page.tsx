import { baseMetadata } from "@/lib/seo";
import { sanityClient } from "@/lib/sanity/client";
import { qPillarBySlug, qProgramsByPillarSlug } from "@/lib/sanity/queries";
import type { Pillar, Program } from "@/lib/sanity/types";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Card } from "@/components/ui/Card";
import Link from "next/link";

export async function generateMetadata({ params }: { params: { pillar: string } }) {
  return baseMetadata({ title: "Pillar", description: "Strategic pillar programs.", path: `/programs/${params.pillar}` });
}

export default async function PillarPage({ params }: { params: { pillar: string } }) {
  const pillarSlug = params.pillar;

  const [pillar, programs] = await Promise.all([
    sanityClient.fetch<Pillar | null>(qPillarBySlug, { slug: pillarSlug }, { next: { revalidate: 300 } }),
    sanityClient.fetch<Program[]>(qProgramsByPillarSlug, { pillarSlug }, { next: { revalidate: 300 } }),
  ]);

  if (!pillar) {
    return (
      <article className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
        <h1 className="text-3xl font-semibold">Pillar not found</h1>
        <p className="mt-3 text-sm text-neutral-600">Check the CMS slug.</p>
      </article>
    );
  }

  return (
    <article className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
      <Breadcrumbs items={[{ label: "Programs", href: "/programs" }, { label: pillar.title }]} />

      <header className="mt-6">
        <h1 className="text-4xl font-semibold tracking-tight">{pillar.title}</h1>
        <p className="mt-4 max-w-2xl text-base text-neutral-600">{pillar.summary || "Pillar summary will be added via CMS."}</p>
      </header>

      <section className="mt-10 grid gap-6 md:grid-cols-2" aria-label="Programs under pillar">
        {programs.map((p) => (
          <Card key={p._id} title={p.title}>
            <p className="text-sm text-neutral-600">{p.overview}</p>
            <div className="mt-5">
              <Link className="text-sm font-semibold hover:underline" href={`/programs/${pillarSlug}/${p.slug.current}`}>
                View program →
              </Link>
            </div>
          </Card>
        ))}
        {!programs.length ? (
          <div className="md:col-span-2 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 text-sm text-neutral-700">
            No programs published under this pillar yet.
          </div>
        ) : null}
      </section>
    </article>
  );
}
