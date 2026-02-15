import { baseMetadata, ORG } from "@/lib/seo";
import { routes } from "@/lib/routes";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export const metadata = baseMetadata({ title: "About" });

export default function AboutPage() {
  return (
    <article className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
      <header>
        <h1 className="text-4xl font-semibold tracking-tight">About LMGHI</h1>
        <p className="mt-4 max-w-2xl text-base text-neutral-600">
          First reference uses full name: <span className="font-semibold">{ORG.legalName} (LMGHI)</span>.
          We build accountable public health delivery: governed, measured, and scalable.
        </p>
      </header>

      <section className="mt-10 grid gap-6 md:grid-cols-2" aria-label="Mission and vision">
        <Card title="Mission">
          <p className="text-sm text-neutral-600">
            Strengthen community health delivery through structured programs, evidence, partnerships, and measurable outcomes.
          </p>
        </Card>
        <Card title="Vision">
          <p className="text-sm text-neutral-600">
            Communities with reliable access to essential health services, supported by systems that last.
          </p>
        </Card>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-3" aria-label="Institutional pillars">
        <Card title="Governance">
          <p className="text-sm text-neutral-600">Clear roles, oversight, and accountability.</p>
          <div className="mt-5"><Button href={routes.governance} variant="secondary">View governance</Button></div>
        </Card>
        <Card title="Policies">
          <p className="text-sm text-neutral-600">Documents prepared for progressive publication and compliance.</p>
          <div className="mt-5"><Button href={routes.policies} variant="secondary">View policies</Button></div>
        </Card>
        <Card title="Transparency">
          <p className="text-sm text-neutral-600">Reports and disclosures built into the information architecture.</p>
          <div className="mt-5"><Button href={routes.transparency} variant="secondary">Transparency hub</Button></div>
        </Card>
      </section>
    </article>
  );
}
