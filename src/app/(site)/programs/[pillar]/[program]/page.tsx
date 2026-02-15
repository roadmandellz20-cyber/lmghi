import { baseMetadata } from "@/lib/seo";
import { sanityClient } from "@/lib/sanity/client";
import { qProgramBySlugs } from "@/lib/sanity/queries";
import type { Program } from "@/lib/sanity/types";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Card } from "@/components/ui/Card";
import { Table } from "@/components/ui/Table";
import { Button } from "@/components/ui/Button";
import { routes } from "@/lib/routes";

export async function generateMetadata({ params }: { params: { pillar: string; program: string } }) {
  return baseMetadata({ title: "Program", path: `/programs/${params.pillar}/${params.program}` });
}

export default async function ProgramPage({ params }: { params: { pillar: string; program: string } }) {
  const program = await sanityClient.fetch<Program | null>(
    qProgramBySlugs,
    { pillarSlug: params.pillar, programSlug: params.program },
    { next: { revalidate: 300 } }
  );

  if (!program) {
    return (
      <article className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
        <h1 className="text-3xl font-semibold">Program not found</h1>
        <p className="mt-3 text-sm text-neutral-600">Check the CMS slugs.</p>
      </article>
    );
  }

  return (
    <article className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
      <Breadcrumbs
        items={[
          { label: "Programs", href: "/programs" },
          { label: program.pillar.title, href: `/programs/${program.pillar.slug.current}` },
          { label: program.title },
        ]}
      />

      <header className="mt-6">
        <h1 className="text-4xl font-semibold tracking-tight">{program.title}</h1>
        <p className="mt-4 max-w-2xl text-base text-neutral-600">{program.overview}</p>
      </header>

      <section className="mt-10 grid gap-6 md:grid-cols-2" aria-label="Problem and strategy">
        <Card title="Problem">
          <p className="text-sm text-neutral-600">
            {program.problem?.length ? "Content managed in CMS." : "Problem statement will be published via CMS."}
          </p>
        </Card>
        <Card title="Strategy">
          <p className="text-sm text-neutral-600">
            {program.strategy?.length ? "Content managed in CMS." : "Strategy will be published via CMS."}
          </p>
        </Card>
      </section>

      <section className="mt-10" aria-label="Indicators">
        <h2 className="text-2xl font-semibold tracking-tight">Indicators</h2>
        <p className="mt-2 text-sm text-neutral-600">Monitoring & Evaluation indicators (baseline → target).</p>

        {program.indicators?.length ? (
          <div className="mt-6">
            <Table
              caption="Program indicators"
              head={
                <tr>
                  <th className="p-4 text-xs font-semibold uppercase tracking-wider text-neutral-600">Indicator</th>
                  <th className="p-4 text-xs font-semibold uppercase tracking-wider text-neutral-600">Baseline</th>
                  <th className="p-4 text-xs font-semibold uppercase tracking-wider text-neutral-600">Target</th>
                  <th className="p-4 text-xs font-semibold uppercase tracking-wider text-neutral-600">Notes</th>
                </tr>
              }
            >
              {program.indicators.map((i, idx) => (
                <tr key={`${i.name}-${idx}`} className="border-b border-neutral-200 last:border-0">
                  <td className="p-4 font-medium">{i.name}</td>
                  <td className="p-4 text-neutral-700">{i.baseline || "—"}</td>
                  <td className="p-4 text-neutral-700">{i.target || "—"}</td>
                  <td className="p-4 text-neutral-700">{i.notes || "—"}</td>
                </tr>
              ))}
            </Table>
          </div>
        ) : (
          <div className="mt-6 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 text-sm text-neutral-700">
            Indicators will be published via CMS.
          </div>
        )}
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-3" aria-label="Ways to support">
        <Card title="Support this program">
          <p className="text-sm text-neutral-600">{program.waysToSupport?.donate || "Secure donations support measurable delivery."}</p>
          <div className="mt-5"><Button href={routes.donate}>Donate</Button></div>
        </Card>

        <Card title="Partner">
          <p className="text-sm text-neutral-600">{program.waysToSupport?.partner || "Institutional partnerships strengthen delivery and accountability."}</p>
          <div className="mt-5"><Button href={routes.partner} variant="secondary">Partner inquiry</Button></div>
        </Card>

        <Card title="Volunteer">
          <p className="text-sm text-neutral-600">{program.waysToSupport?.volunteer || "Volunteer roles are structured and coordinated."}</p>
          <div className="mt-5"><Button href={routes.volunteer} variant="secondary">Volunteer</Button></div>
        </Card>
      </section>
    </article>
  );
}
