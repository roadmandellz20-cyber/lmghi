import Link from "next/link";
import { routes } from "@/lib/routes";
import { Button } from "@/components/ui/Button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/85 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href={routes.home} className="flex items-center gap-3" aria-label="LMGHI home">
          <div className="grid h-10 w-10 place-items-center rounded-2xl bg-neutral-900 text-xs font-extrabold text-white">
            LMGHI
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold text-neutral-900">LMGHI</div>
            <div className="text-xs text-neutral-500">Global Health Initiative</div>
          </div>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-6 md:flex">
          <Link className="text-sm font-medium text-neutral-700 hover:text-neutral-900" href={routes.about}>About</Link>
          <Link className="text-sm font-medium text-neutral-700 hover:text-neutral-900" href={routes.programs}>Programs</Link>
          <Link className="text-sm font-medium text-neutral-700 hover:text-neutral-900" href={routes.transparency}>Transparency</Link>
          <Link className="text-sm font-medium text-neutral-700 hover:text-neutral-900" href={routes.resources}>Resources</Link>
          <Link className="text-sm font-medium text-neutral-700 hover:text-neutral-900" href={routes.contact}>Contact</Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button href={routes.partner} variant="secondary">Partner</Button>
          <Button href={routes.donate}>Donate</Button>
        </div>
      </div>
    </header>
  );
}
