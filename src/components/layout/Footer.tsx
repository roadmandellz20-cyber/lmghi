import Link from "next/link";
import { routes } from "@/lib/routes";
import { ORG } from "@/lib/seo";

export function Footer() {
  const info = process.env.NEXT_PUBLIC_SITE_EMAIL_INFO || "info@lmghi.org";
  const partnerships = process.env.NEXT_PUBLIC_SITE_EMAIL_PARTNERSHIPS || "partnerships@lmghi.org";
  const donate = process.env.NEXT_PUBLIC_SITE_EMAIL_DONATE || "donate@lmghi.org";

  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <section aria-label="Organization">
            <h2 className="text-sm font-semibold text-neutral-900">{ORG.legalName}</h2>
            <p className="mt-2 text-sm text-neutral-600">
              Institutional infrastructure for accountable public health delivery in {ORG.region}.
            </p>
          </section>

          <nav aria-label="Footer navigation" className="grid gap-2 text-sm">
            <Link className="text-neutral-600 hover:text-neutral-900" href={routes.about}>About</Link>
            <Link className="text-neutral-600 hover:text-neutral-900" href={routes.programs}>Programs</Link>
            <Link className="text-neutral-600 hover:text-neutral-900" href={routes.transparency}>Impact & Transparency</Link>
            <Link className="text-neutral-600 hover:text-neutral-900" href={routes.resources}>Resources</Link>
            <Link className="text-neutral-600 hover:text-neutral-900" href={routes.donate}>Donate</Link>
          </nav>

          <section aria-label="Contact">
            <h2 className="text-sm font-semibold text-neutral-900">Contact</h2>
            <ul className="mt-3 grid gap-2 text-sm text-neutral-600">
              <li><a className="hover:text-neutral-900 hover:underline" href={`mailto:${info}`}>{info}</a></li>
              <li><a className="hover:text-neutral-900 hover:underline" href={`mailto:${partnerships}`}>{partnerships}</a></li>
              <li><a className="hover:text-neutral-900 hover:underline" href={`mailto:${donate}`}>{donate}</a></li>
            </ul>
          </section>
        </div>

        <div className="mt-10 border-t border-neutral-200 pt-6 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} {ORG.legalName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
