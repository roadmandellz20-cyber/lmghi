import { ReactNode } from "react";

export function Card({ title, children }: { title?: string; children: ReactNode }) {
  return (
    <article className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
      {title ? <h3 className="text-lg font-semibold text-neutral-900">{title}</h3> : null}
      <div className={title ? "mt-3" : ""}>{children}</div>
    </article>
  );
}
