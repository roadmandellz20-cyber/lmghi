import { ReactNode } from "react";

export function Callout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <aside className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
      <h3 className="text-sm font-semibold text-neutral-900">{title}</h3>
      <div className="mt-2 text-sm text-neutral-700">{children}</div>
    </aside>
  );
}
