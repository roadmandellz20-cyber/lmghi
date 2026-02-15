import { ReactNode } from "react";

export function Table({
  caption,
  head,
  children,
}: {
  caption?: string;
  head: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-neutral-200 bg-white shadow-sm">
      <table className="w-full border-collapse text-left text-sm">
        {caption ? <caption className="p-4 text-xs font-semibold text-neutral-600">{caption}</caption> : null}
        <thead className="border-b border-neutral-200 bg-neutral-50">{head}</thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}
