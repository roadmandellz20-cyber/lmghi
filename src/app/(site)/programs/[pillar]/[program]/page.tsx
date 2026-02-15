// src/app/(site)/programs/[pillar]/[program]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPillar } from "@/lib/programs";

export default async function ProgramPage({
  params,
}: {
  params: { pillar: string; program: string };
}) {
  // ✅ IMPORTANT: await the pillar (it was a Promise before)
  const pillar = await getPillar(params.pillar);

  if (!pillar) notFound();

  const programSlug = params.program;

  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-10">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-sm text-neutral-600">
        <Link className="hover:underline" href="/programs">
          Programs
        </Link>
        <span className="text-neutral-400">/</span>
        <span className="text-neutral-900">
          {"shortLabel" in pillar && pillar.shortLabel
            ? pillar.shortLabel
            : pillar.title}
        </span>
      </div>

      {/* Header */}
      <header className="mt-6">
        <p className="text-xs font-medium uppercase tracking-wider text-neutral-500">
          Program
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-neutral-900">
          {pillar.title}
        </h1>
        <p className="mt-3 max-w-2xl text-neutral-600">
          Full article page (CMS-ready). This page will later pull the complete
          write-up for: <span className="font-medium">{programSlug}</span>.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/programs"
            className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-900 hover:bg-neutral-50"
          >
            Back to programs
          </Link>
          <Link
            href="/get-involved/donate"
            className="rounded-full bg-neutral-900 px-4 py-2 text-sm text-white hover:bg-neutral-800"
          >
            Donate
          </Link>
        </div>
      </header>

      {/* Body */}
      <section className="mt-10 rounded-2xl border border-neutral-200 bg-white p-6">
        <h2 className="text-lg font-semibold text-neutral-900">
          Article content
        </h2>
        <p className="mt-2 text-neutral-600">
          We’ll replace this with real content from Sanity later. For now, this
          proves routing works and the page can render a full readable article.
        </p>

        <div className="mt-6 space-y-3 text-neutral-700">
          <p>
            LMGHI delivers structured, evidence-driven public health programs
            designed for measurable outcomes. Each program page will include:
            objectives, target population, delivery model, indicators, and
            reporting cadence.
          </p>
          <p>
            This specific program will later map to: advocacy, awareness, and
            structured intervention for priority areas (Sickle Cell Disease,
            STDs, Mental Health, Sexual &amp; Reproductive Health, NCDs, and
            major public health concerns).
          </p>
          <p>
            If you can’t read the full thing on-page, the site is trash. So we’re
            making every “article” a real page with proper spacing, contrast,
            and layout.
          </p>
        </div>
      </section>
    </main>
  );
}
