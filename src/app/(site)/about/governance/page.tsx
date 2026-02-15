import { baseMetadata } from "@/lib/seo";
import { Card } from "@/components/ui/Card";

export const metadata = baseMetadata({ title: "Governance" });

export default function GovernancePage() {
  return (
    <article className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
      <header>
        <h1 className="text-4xl font-semibold tracking-tight">Governance</h1>
        <p className="mt-4 max-w-2xl text-base text-neutral-600">
          This section is structured for institutional expectations: oversight, roles, and accountability.
        </p>
      </header>

      <section className="mt-10 grid gap-6 md:grid-cols-3" aria-label="Governance structure">
        <Card title="Board oversight (Placeholder)">
          <p className="text-sm text-neutral-600">Board composition, responsibilities, and decision-making framework.</p>
        </Card>
        <Card title="Executive management (Placeholder)">
          <p className="text-sm text-neutral-600">Operational leadership and delivery accountability.</p>
        </Card>
        <Card title="Advisory function (Placeholder)">
          <p className="text-sm text-neutral-600">Technical guidance, partnerships, and external review.</p>
        </Card>
      </section>

      <section className="mt-10 rounded-2xl border border-neutral-200 bg-white p-6" aria-label="Accountability note">
        <h2 className="text-lg font-semibold">Accountability</h2>
        <p className="mt-3 text-sm text-neutral-600">
          Governance documents and policies will be progressively published in the Policies section as they are finalized.
        </p>
      </section>
    </article>
  );
}
