import Link from "next/link";
import { getPillar } from "@/lib/programs";

type ProgramRouteParams = {
  pillar: string;
  program: string;
};

export default async function ProgramPillarPage({ params }: { params: Promise<ProgramRouteParams> }) {
  const { pillar: pillarSlug } = await params;
  const pillar = getPillar(pillarSlug);

  if (!pillar) {
    return (
      <main className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-2xl font-semibold text-neutral-900">Not found</h1>
        <p className="mt-2 text-neutral-600">That program pillar doesn’t exist.</p>
        <Link href="/programs" className="mt-6 inline-block text-sm font-medium text-neutral-900 hover:underline">
          Back to programs →
        </Link>
      </main>
    );
  }

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-12 pb-10">
        <div className="flex items-center gap-2 text-xs font-medium text-neutral-500">
          <Link href="/programs" className="hover:text-neutral-900">
            Programs
          </Link>
          <span className="text-neutral-300">/</span>
          <span>{pillar.shortLabel}</span>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
              {pillar.title}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-600">{pillar.summary}</p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/get-involved/partner"
                className="rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-neutral-800"
              >
                Partner on this pillar
              </Link>
              <Link
                href="/get-involved/donate"
                className="rounded-full border border-neutral-200 bg-white px-5 py-2.5 text-sm font-medium text-neutral-900 hover:bg-neutral-50"
              >
                Fund outcomes
              </Link>
              <Link
                href="/transparency"
                className="rounded-full border border-neutral-200 bg-white px-5 py-2.5 text-sm font-medium text-neutral-900 hover:bg-neutral-50"
              >
                How we measure
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
              <div className="text-sm font-semibold text-neutral-900">Outcome snapshot</div>
              <p className="mt-2 text-sm leading-6 text-neutral-600">
                Metrics are published progressively as reporting becomes available.
              </p>

              <div className="mt-5 space-y-3">
                {pillar.outcomes.map((o) => (
                  <div key={o.label} className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-xs font-medium text-neutral-500">{o.label}</div>
                      <div className="text-xs text-neutral-500">{o.note}</div>
                    </div>
                    <div className="text-sm font-semibold text-neutral-900">{o.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px w-full bg-neutral-200" />
      </div>

      {/* Content */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left */}
          <div className="lg:col-span-7">
            <h2 className="text-xl font-semibold text-neutral-900">Focus areas</h2>
            <p className="mt-2 text-sm leading-6 text-neutral-600">
              What this pillar prioritizes in delivery design and implementation.
            </p>

            <ul className="mt-5 space-y-2 text-sm text-neutral-700">
              {pillar.focusAreas.map((x) => (
                <li key={x} className="flex items-start gap-2">
                  <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-neutral-400" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <h2 className="text-xl font-semibold text-neutral-900">How we measure</h2>
              <p className="mt-2 text-sm leading-6 text-neutral-600">
                Indicators before narratives. These are the inputs we track to validate outcomes.
              </p>

              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {pillar.howWeMeasure.map((m) => (
                  <div key={m} className="rounded-2xl border border-neutral-200 bg-white p-5">
                    <div className="text-sm font-semibold text-neutral-900">{m}</div>
                    <div className="mt-1 text-xs text-neutral-500">
                      Published progressively in the Transparency hub.
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-neutral-200 bg-white p-6">
              <h3 className="text-sm font-semibold text-neutral-900">Examples</h3>
              <p className="mt-2 text-sm text-neutral-600">
                Initial programs under this pillar. Projects publish progressively.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {pillar.examplePrograms.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 space-y-3">
                <Link
                  href="/contact"
                  className="block rounded-full bg-neutral-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-neutral-800"
                >
                  Request collaboration
                </Link>
                <Link
                  href="/get-involved/donate"
                  className="block rounded-full border border-neutral-200 bg-white px-5 py-2.5 text-center text-sm font-medium text-neutral-900 hover:bg-neutral-50"
                >
                  Fund this pillar
                </Link>
              </div>
            </div>

            <div className="mt-4 rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
              <div className="text-sm font-semibold text-neutral-900">Governance note</div>
              <p className="mt-2 text-sm leading-6 text-neutral-600">
                This pillar is governed by clear roles, oversight, and progressive disclosures as data becomes available.
              </p>
              <div className="mt-4">
                <Link href="/transparency" className="text-sm font-medium text-neutral-900 hover:underline">
                  See reporting structure →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-lg font-semibold text-neutral-900">Want a trackable outcome?</h3>
              <p className="mt-1 text-sm text-neutral-600">
                Partner with LMGHI for accountable delivery and measurable reporting.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/get-involved/partner"
                className="rounded-full bg-neutral-900 px-5 py-2 text-sm font-medium text-white hover:bg-neutral-800"
              >
                Partner
              </Link>
              <Link
                href="/get-involved/donate"
                className="rounded-full border border-neutral-200 bg-white px-5 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-50"
              >
                Donate
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
