import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="section">
        <div className="container-app">
          <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white">
            <div className="absolute inset-0">
              <div className="absolute -top-24 left-1/2 h-72 w-[720px] -translate-x-1/2 rounded-full bg-gray-100 blur-3xl" />
              <div className="absolute -bottom-24 left-1/2 h-72 w-[720px] -translate-x-1/2 rounded-full bg-gray-50 blur-3xl" />
            </div>

            <div className="relative px-6 py-14 md:px-12 md:py-20">
              <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                Institutional public health
              </p>

              <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight text-gray-900 md:text-6xl">
                Lambano Medfront Global Health Initiative{" "}
                <span className="text-gray-400">(LMGHI)</span>
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg">
                Structured, governed, evidence-driven programs strengthening
                health delivery across West Africa. Primary country: The Gambia.
                Operating region: West Africa.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/get-involved/donate"
                  className="inline-flex items-center justify-center rounded-full bg-gray-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
                >
                  Donate
                </Link>

                <Link
                  href="/programs"
                  className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 shadow-sm transition hover:bg-gray-50"
                >
                  Explore programs
                </Link>

                <Link
                  href="/get-involved/partner"
                  className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 transition hover:bg-gray-50"
                >
                  Partner
                </Link>
              </div>

              <div className="mt-10 grid gap-3 md:grid-cols-3">
                <div className="rounded-2xl border border-gray-200 bg-white p-5">
                  <p className="text-xs font-medium text-gray-500">Approach</p>
                  <p className="mt-2 text-sm text-gray-900">
                    Systems-first delivery: governance, standards, and measurable
                    outputs.
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-white p-5">
                  <p className="text-xs font-medium text-gray-500">Accountability</p>
                  <p className="mt-2 text-sm text-gray-900">
                    Built-in monitoring & evaluation pathways from day one.
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-white p-5">
                  <p className="text-xs font-medium text-gray-500">Transparency</p>
                  <p className="mt-2 text-sm text-gray-900">
                    Reports, disclosures, and governance documents published progressively.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <div className="hr-soft" />
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="section">
        <div className="container-app">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">
                Strategic pillars
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-gray-600 md:text-base">
                Five disciplined pillars—broad enough for scale, specific enough
                for accountability.
              </p>
            </div>
            <Link
              href="/programs"
              className="hidden rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 transition hover:bg-gray-50 md:inline-flex"
            >
              View programs →
            </Link>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Primary Care Delivery",
                desc: "Strengthen frontline services with standards, staffing support, and reliable operations.",
              },
              {
                title: "Maternal & Child Health",
                desc: "Improve outcomes through continuity of care, referrals, and safe service pathways.",
              },
              {
                title: "Disease Prevention & Surveillance",
                desc: "Early detection, rapid response, and community-level prevention programs.",
              },
              {
                title: "Health Workforce & Training",
                desc: "Competency-based training, supervision, and performance support for scale.",
              },
              {
                title: "Monitoring, Evaluation & Learning",
                desc: "Measurement, transparency, and evidence that withstand institutional scrutiny.",
              },
              {
                title: "Program Governance & Compliance",
                desc: "Clear roles, oversight, and policies that keep delivery accountable.",
              },
            ].map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <p className="text-sm font-semibold text-gray-900">{p.title}</p>
                <p className="mt-2 text-sm text-gray-600">{p.desc}</p>
                <div className="mt-4">
                  <Link
                    href="/programs"
                    className="text-sm font-medium text-gray-900 underline decoration-gray-200 underline-offset-4 hover:decoration-gray-400"
                  >
                    Explore →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT SNAPSHOT */}
      <section className="section">
        <div className="container-app">
          <div className="rounded-3xl border border-gray-200 bg-white p-8 md:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">
                  Impact snapshot
                </h2>
                <p className="mt-2 max-w-2xl text-sm text-gray-600 md:text-base">
                  Metrics are CMS-managed and supported by the Monitoring &
                  Evaluation framework.
                </p>
              </div>

              <Link
                href="/transparency"
                className="inline-flex w-fit items-center justify-center rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 transition hover:bg-gray-50"
              >
                Transparency hub →
              </Link>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                { k: "Programs", v: "Progressive rollout" },
                { k: "Operating region", v: "West Africa" },
                { k: "Primary country", v: "The Gambia" },
              ].map((m) => (
                <div
                  key={m.k}
                  className="rounded-2xl border border-gray-200 bg-gray-50 p-5"
                >
                  <p className="text-xs font-medium text-gray-500">{m.k}</p>
                  <p className="mt-2 text-sm font-semibold text-gray-900">{m.v}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-5">
              <p className="text-sm text-gray-600">
                No public metrics yet. This section is ready for progressive
                disclosure as data becomes available.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/transparency"
                className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 transition hover:bg-gray-50"
              >
                How we measure
              </Link>
              <Link
                href="/transparency"
                className="inline-flex items-center justify-center rounded-full bg-gray-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
              >
                Publish a report
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section">
        <div className="container-app">
          <div className="rounded-3xl border border-gray-200 bg-gray-900 p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-white md:text-3xl">
              Want to fund a trackable outcome?
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-gray-300 md:text-base">
              Donate to support evidence-driven delivery. Partner to strengthen
              programs, reporting, and systems.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/get-involved/donate"
                className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-medium text-gray-900 shadow-sm transition hover:bg-gray-100"
              >
                Donate
              </Link>
              <Link
                href="/get-involved/partner"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/15"
              >
                Partner with us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
