import Button from "@/components/ui/Button";

const pillars = [
  {
    title: "Primary Care Delivery",
    pillar: "Delivery systems",
    description: "Strengthen frontline services with standards, staffing support, and reliable operations.",
    href: "/programs/pillar/delivery-systems",
  },
  {
    title: "Maternal & Child Health",
    pillar: "MCH",
    description: "Improve outcomes through continuity of care, referrals, and safe service pathways.",
    href: "/programs/pillar/maternal-child-health",
  },
  {
    title: "Monitoring, Evaluation & Learning",
    pillar: "M&E",
    description: "Measurement, transparency, and evidence that withstand institutional scrutiny.",
    href: "/programs/pillar/monitoring-evaluation-learning",
  },
];

export default function ProgramsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <div className="flex items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-neutral-900">Programs</h1>
          <p className="mt-2 text-neutral-600 max-w-2xl">
            Structured programs built to scale — without losing accountability.
          </p>
        </div>

        <Button href="/get-involved/partner" variant="secondary">
          Partner with us
        </Button>
      </div>

      <section className="mt-10 grid gap-6 md:grid-cols-3">
        {pillars.map((p) => (
          <div key={p.title} className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
            <div className="text-xs font-medium text-neutral-500">{p.pillar}</div>
            <h2 className="mt-2 text-lg font-semibold text-neutral-900">{p.title}</h2>
            <p className="mt-2 text-sm text-neutral-600">{p.description}</p>

            <div className="mt-5">
              <Button href={p.href} variant="outline">
                Explore more →
              </Button>
            </div>
          </div>
        ))}
      </section>

      <section className="mt-14 rounded-3xl border border-neutral-200 bg-neutral-50 p-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h3 className="text-xl font-semibold text-neutral-900">Want to fund a trackable outcome?</h3>
            <p className="mt-1 text-sm text-neutral-600">
              Support delivery systems, reporting, and governance.
            </p>
          </div>
          <div className="flex gap-2">
            <Button href="/get-involved/donate#donate" variant="primary">
              Donate
            </Button>
            <Button href="/get-involved/partner" variant="secondary">
              Partner
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
