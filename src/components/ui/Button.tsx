import Link, { type LinkProps } from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "default" | "primary" | "secondary" | "outline" | "ghost" | "soft" | "dark" | "danger";
type ButtonSize = "sm" | "md" | "lg";

type BaseProps = {
  href?: LinkProps["href"];
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: undefined;
    target?: never;
    rel?: never;
  };

type ButtonAsLink = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className" | "children"> & {
    href: LinkProps["href"];
    type?: never;
    disabled?: never;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

function cn(...classes: Array<string | undefined | false | null>) {
  return classes.filter(Boolean).join(" ");
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 " +
  "disabled:opacity-50 disabled:pointer-events-none select-none";

const variants: Record<ButtonVariant, string> = {
  default: "bg-black text-white hover:bg-black/90 shadow-sm",
  primary: "bg-black text-white hover:bg-black/90 shadow-sm",
  secondary: "border border-black/15 bg-white text-neutral-900 hover:bg-black/[0.04]",
  outline: "border border-black/15 bg-white text-neutral-900 hover:bg-black/[0.04]",
  ghost: "bg-transparent text-neutral-900 hover:bg-black/[0.05]",
  soft: "bg-black/[0.04] text-neutral-900 hover:bg-black/[0.07]",
  dark: "bg-white text-black hover:bg-white/90 shadow-sm",
  danger: "bg-red-600 text-white hover:bg-red-700 shadow-sm",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

export function Button(props: ButtonProps) {
  const variant = props.variant ?? "default";
  const size = props.size ?? "md";
  const classes = cn(base, variants[variant], sizes[size], props.className);

  if (props.href !== undefined) {
    const { href, children, target, rel, ...linkProps } = props;
    const safeRel = target === "_blank" ? rel ?? "noopener noreferrer" : rel;

    return (
      <Link href={href} className={classes} target={target} rel={safeRel} {...linkProps}>
        {children}
      </Link>
    );
  }

  const { children, type = "button", ...buttonProps } = props;
  return (
    <button type={type} className={classes} {...buttonProps}>
      {children}
    </button>
  );
}

export default Button;
