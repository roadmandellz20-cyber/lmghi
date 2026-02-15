"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import Button from "@/components/ui/Button";
import { routes } from "@/lib/routes";

const navItems = [
  { href: routes.about, label: "About" },
  { href: routes.programs, label: "Programs" },
  { href: routes.transparency, label: "Transparency" },
  { href: routes.resources, label: "Resources" },
  { href: routes.contact, label: "Contact" },
] as const;

function cx(...parts: Array<string | undefined | false>) {
  return parts.filter(Boolean).join(" ");
}

function isActive(pathname: string, href: string) {
  return pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));
}

export default function Navbar() {
  const pathname = usePathname() ?? "/";
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-white/75 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link href={routes.home} className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-full border border-neutral-200 bg-white text-xs font-semibold text-neutral-900 shadow-sm">
              L
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold text-neutral-900">LMGHI</p>
              <p className="-mt-0.5 text-xs text-neutral-500">Global Health Initiative</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
            {navItems.map((item) => {
              const active = isActive(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cx(
                    "rounded-full px-3 py-2 text-sm transition",
                    active
                      ? "bg-neutral-900 text-white"
                      : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <Button href={routes.partner} variant="secondary">
              Partner
            </Button>
            <Button href={routes.donate}>Donate</Button>
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 text-neutral-900 transition hover:bg-neutral-100 md:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <div className="grid gap-1.5">
              <span className={cx("h-0.5 w-5 bg-current transition", open && "translate-y-2 rotate-45")} />
              <span className={cx("h-0.5 w-5 bg-current transition", open && "opacity-0")} />
              <span className={cx("h-0.5 w-5 bg-current transition", open && "-translate-y-2 -rotate-45")} />
            </div>
          </button>
        </div>

        {open ? (
          <div id="mobile-nav" className="border-t border-neutral-200 py-4 md:hidden">
            <nav className="grid gap-1" aria-label="Mobile navigation">
              {navItems.map((item) => {
                const active = isActive(pathname, item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cx(
                      "rounded-2xl px-4 py-3 text-sm transition",
                      active
                        ? "bg-neutral-900 text-white"
                        : "text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900"
                    )}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-3 flex gap-2">
              <Button href={routes.partner} variant="secondary" className="flex-1 justify-center">
                Partner
              </Button>
              <Button href={routes.donate} className="flex-1 justify-center">
                Donate
              </Button>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
