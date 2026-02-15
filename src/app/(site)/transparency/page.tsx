import { baseMetadata } from "@/lib/seo";
import { routes } from "@/lib/routes";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export const metadata = baseMetadata({ title: "Impact & Transparency" });

export default function TransparencyHub() {
  return (
    <article className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
      <header>
        <h1 className="text-4xl font-semibold tracking-tight">Impact & Transparency</h1>
        <p className="mt-4 max-w-2xl text-base text-neutral-600">
          Built for accountability: M&E framework, reports, financial disclosures, and governance documents.
        </p>
      </header>

      <section className="mt-10 grid gap-6 md:grid-cols-2" aria-label="Transparency sections">
        <Card title="Monitoring & Evaluation framework">
          <p className="text-sm text-neutral-600">How impact is measured, validated, and disclosed.</p>
          <div className="mt-5"><Button href={routes.meFramework} variant="secondary">View M&E framework</Button></div>
        </Card>

        <Card title="Reports & publications">
          <p className="text-sm text-neutral-600">Annual reports, financial statements, evaluations, and policies.</p>
          <div className="mt-5"><Button href={routes.reports} variant="secondary">View reports</Button></div>
        </Card>

        <Card title="Download center">
          <p className="text-sm text-neutral-600">All PDFs in one place for fast access.</p>
          <div className="mt-5"><Button href={routes.downloads} variant="secondary">Open downloads</Button></div>
        </Card>

        <Card title="Policies & governance documents">
          <p className="text-sm text-neutral-600">Constitution and policy documents published progressively.</p>
          <div className="mt-5"><Button href={routes.policies} variant="secondary">View documents</Button></div>
        </Card>
      </section>
    </article>
  );
}
