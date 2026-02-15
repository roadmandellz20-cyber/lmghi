import Link from "next/link";

export function Breadcrumbs({
  items,
}: {
  items: { label: string; href?: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-neutral-600">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((it, idx) => (
          <li key={`${it.label}-${idx}`} className="flex items-center gap-2">
            {it.href ? (
              <Link className="hover:text-neutral-900 hover:underline" href={it.href}>
                {it.label}
              </Link>
            ) : (
              <span aria-current="page" className="font-semibold text-neutral-900">
                {it.label}
              </span>
            )}
            {idx < items.length - 1 ? <span aria-hidden="true">/</span> : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}
