import { baseMetadata } from "@/lib/seo";
import { sanityClient } from "@/lib/sanity/client";
import { qPillars } from "@/lib/sanity/queries";
import type { Pillar } from "@/lib/sanity/types";
import { Card } from "@/components/ui/Card";
import Link from "next/link";

export const metadata = baseMetadata({ title: "Programs" });

export default async function ProgramsIndex() {
  const pillars = await sanityClient.fetch<Pillar[]>(qPillars, {}, { next: { revalidate: 300 } });

  return (
    <article className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
      <header>
        <h1 className="text-4xl font-semibold tracking-tight">Programs</h1>
        <p className="mt-4 max-w-2xl text-base text-neutral-600">
          Structured architecture: Pillars → Programs → Projects.
        </p>
      </header>

      <section className="mt-10 grid gap-6 md:grid-cols-2" aria-label="Program pillars">
        {pillars.map((p) => (
          <Card key={p._id} title={p.title}>
            <p className="text-sm text-neutral-600">{p.summary || "Pillar summary will be added via CMS."}</p>
            <div className="mt-5">
              <Link className="text-sm font-semibold hover:underline" href={`/programs/${p.slug.current}`}>
                View pillar →
              </Link>
            </div>
          </Card>
        ))}
      </section>
    </article>
  );
}
