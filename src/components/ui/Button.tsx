import Link, { type LinkProps } from "next/link";
import * as React from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Tone = "default" | "inverse";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/20 " +
  "disabled:opacity-50 disabled:pointer-events-none";

const variantsDefault: Record<Variant, string> = {
  primary: "bg-neutral-900 text-white hover:bg-neutral-800 active:bg-neutral-950 shadow-sm",
  secondary: "bg-white text-neutral-900 hover:bg-neutral-50 active:bg-neutral-100 border border-neutral-200 shadow-sm",
  outline: "bg-transparent text-neutral-900 hover:bg-neutral-50 active:bg-neutral-100 border border-neutral-200",
  ghost: "bg-transparent text-neutral-900 hover:bg-neutral-50 active:bg-neutral-100",
};

const variantsInverse: Record<Variant, string> = {
  primary: "bg-white text-neutral-900 hover:bg-neutral-100 active:bg-neutral-200 shadow-sm",
  secondary: "bg-white/10 text-white hover:bg-white/15 active:bg-white/20 border border-white/15",
  outline: "bg-transparent text-white hover:bg-white/10 active:bg-white/15 border border-white/20",
  ghost: "bg-transparent text-white hover:bg-white/10 active:bg-white/15",
};

type CommonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: Variant;
  tone?: Tone;
  target?: string;
  rel?: string;
};

type ButtonAsLinkProps = CommonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    href: LinkProps["href"];
  };

type ButtonAsButtonProps = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

export type ButtonProps = ButtonAsLinkProps | ButtonAsButtonProps;

function cx(...parts: Array<string | undefined | false>) {
  return parts.filter(Boolean).join(" ");
}

export default function Button(props: ButtonProps) {
  const variant = props.variant ?? "primary";
  const tone = props.tone ?? "default";
  const styles = tone === "inverse" ? variantsInverse : variantsDefault;

  const className = cx(base, styles[variant], props.className);

  if ("href" in props) {
    const { href, children, target, rel, ...rest } = props;
    const safeRel = target === "_blank" ? rel ?? "noopener noreferrer" : rel;

    return (
      <Link href={href} className={className} target={target} rel={safeRel} {...rest}>
        {children}
      </Link>
    );
  }

  const { children, ...rest } = props;
  return (
    <button className={className} {...rest}>
      {children}
    </button>
  );
}
