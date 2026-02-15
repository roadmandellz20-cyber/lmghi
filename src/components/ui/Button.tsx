import Link from "next/link";
import { ReactNode } from "react";

type Props =
  | { href: string; children: ReactNode; variant?: "primary" | "secondary" | "ghost"; type?: never; onClick?: never }
  | { href?: never; children: ReactNode; variant?: "primary" | "secondary" | "ghost"; type?: "button" | "submit"; onClick?: () => void };

export function Button(props: Props) {
  const variant = props.variant ?? "primary";
  const base =
    "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2";
  const styles =
    variant === "primary"
      ? "bg-neutral-900 text-white hover:bg-neutral-800"
      : variant === "secondary"
        ? "border border-neutral-300 bg-white text-neutral-900 hover:bg-neutral-50"
        : "text-neutral-900 hover:bg-neutral-100";

  if ("href" in props) {
    return (
      <Link href={props.href} className={`${base} ${styles}`}>
        {props.children}
      </Link>
    );
  }

  return (
    <button type={props.type ?? "button"} onClick={props.onClick} className={`${base} ${styles}`}>
      {props.children}
    </button>
  );
}
