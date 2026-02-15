// src/app/(site)/programs/page.tsx
import { Button } from "@/components/ui/Button";

const PROGRAMS = [
  {
    title: "Primary Care Delivery",
    tag: "Delivery systems",
    desc: "Strengthen frontline services with standards, staffing support, and reliable operations.",
    href: "/programs/primary-care-delivery",
    icon: "PC",
  },
  {
    title: "Maternal & Child Health",
    tag: "MCH",
    desc: "Improve outcomes through continuity of care, referrals, and safe service pathways.",
    href: "/programs/maternal-child-health",
    icon: "MCH",
  },
  {
    title: "Monitoring, Evaluation & Learning",
    tag: "M&E",
    desc: "Measurement, transparency, and evidence that withstand institutional scrutiny.",
    href: "/programs/monitoring-evaluation-learning",
    icon: "ME",
  },
  {
    title: "Disease Prevention & Surveillance",
    tag: "Prevention",
    desc: "Early detection, rapid response, and community-level prevention programs.",
    href: "/programs/disease-prevention-surveillance",
    icon: "DP",
  },
  {
    title: "Health Workforce & Training",
    tag: "Capacity",
    desc: "Competency-based training, supportive supervision, and performance support for scale.",
    href: "/programs/health-workforce-training",
    icon: "HW",
  },
  {
    title: "Program Governance & Compliance",
    tag: "Governance",
    desc: "Clear roles, oversight, and policies that keep delivery accountable.",
    href: "/programs/governance-compliance",
    icon: "GC",
  },
];

export default function ProgramsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-14">
      <div className="flex items-start justify-between gap-6">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Programs</h1>
          <p className="mt-2 max-w-2xl text-neutral-600">
            Structured programs built to scale — without losing accountability.
          </p>
        </div>
        <Button href="/contact" variant="outline">
          Partner with us
        </Button>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {PROGRAMS.map((p) => {
          return (
            <div
              key={p.title}
              className="rounded-3xl border border-black/10 bg-white p-6 shadow-[0_1px_0_rgba(0,0,0,0.03)]"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-2xl bg-black/[0.04]">
                  <span className="text-xs font-semibold text-neutral-900">{p.icon}</span>
                </div>
                <div className="text-xs font-medium text-neutral-500">{p.tag}</div>
              </div>

              <h2 className="mt-4 text-lg font-semibold text-neutral-900">
                {p.title}
              </h2>
              <p className="mt-2 text-sm text-neutral-600">{p.desc}</p>

              <div className="mt-5">
                <Button href={p.href} variant="ghost" size="sm" className="px-0">
                  Explore more →
                </Button>
              </div>
            </div>
          );
        })}
      </div>

      <section className="mt-10 rounded-3xl border border-black/10 bg-[#0b1220] p-8 text-white">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-xl font-semibold">Want to fund a trackable outcome?</h3>
            <p className="mt-1 text-white/70">
              Support delivery systems, reporting, and governance.
            </p>
          </div>
          <div className="flex gap-3">
            <Button href="/get-involved/donate" variant="dark">
              Donate
            </Button>
            <Button href="/contact" variant="soft" className="text-white border border-white/15 bg-white/10 hover:bg-white/15">
              Partner
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
