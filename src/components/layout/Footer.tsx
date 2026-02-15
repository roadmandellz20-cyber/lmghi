import Link from "next/link";
import Button from "@/components/ui/Button";
import { routes } from "@/lib/routes";

const exploreLinks = [
  { href: routes.about, label: "About" },
  { href: routes.programs, label: "Programs" },
  { href: routes.transparency, label: "Impact & Transparency" },
  { href: routes.resources, label: "Resources" },
  { href: routes.contact, label: "Contact" },
] as const;

export default function Footer() {
  const info = process.env.NEXT_PUBLIC_SITE_EMAIL_INFO || "info@lmghi.org";
  const partnerships = process.env.NEXT_PUBLIC_SITE_EMAIL_PARTNERSHIPS || "partnerships@lmghi.org";
  const donate = process.env.NEXT_PUBLIC_SITE_EMAIL_DONATE || "donate@lmghi.org";

  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <section className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6 sm:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-neutral-900">
                Fund measurable public health outcomes
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-neutral-600">
                Support governed delivery systems with clear reporting, transparent progress, and accountable
                execution.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button href={routes.partner} variant="secondary">
                Partner
              </Button>
              <Button href={routes.donate}>Donate</Button>
            </div>
          </div>
        </section>

        <div className="mt-10 grid gap-10 md:grid-cols-3">
          <section className="max-w-md">
            <div className="flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-full border border-neutral-200 bg-white text-xs font-semibold text-neutral-900 shadow-sm">
                L
              </div>
              <div className="leading-tight">
                <p className="text-sm font-semibold text-neutral-900">Lambano Medfront Global Health Initiative</p>
                <p className="-mt-0.5 text-xs text-neutral-500">Institutional public health delivery in West Africa.</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-neutral-600">
              Structured programs with measurable outputs, governance controls, and transparency pathways from day one.
            </p>
          </section>

          <section>
            <h2 className="text-sm font-semibold text-neutral-900">Explore</h2>
            <nav aria-label="Footer navigation" className="mt-3 grid gap-2 text-sm">
              {exploreLinks.map((item) => (
                <Link key={item.href} href={item.href} className="text-neutral-600 transition hover:text-neutral-900">
                  {item.label}
                </Link>
              ))}
            </nav>
          </section>

          <section>
            <h2 className="text-sm font-semibold text-neutral-900">Contact</h2>
            <ul className="mt-3 grid gap-2 text-sm text-neutral-600">
              <li>
                info:{" "}
                <a className="transition hover:text-neutral-900" href={`mailto:${info}`}>
                  {info}
                </a>
              </li>
              <li>
                partnerships:{" "}
                <a className="transition hover:text-neutral-900" href={`mailto:${partnerships}`}>
                  {partnerships}
                </a>
              </li>
              <li>
                donate:{" "}
                <a className="transition hover:text-neutral-900" href={`mailto:${donate}`}>
                  {donate}
                </a>
              </li>
            </ul>
          </section>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-neutral-200 pt-6 text-xs text-neutral-500 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Lambano Medfront Global Health Initiative. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href={routes.transparency} className="transition hover:text-neutral-900">
              Transparency
            </Link>
            <Link href={routes.contact} className="transition hover:text-neutral-900">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
