"use client";

import * as React from "react";
import Link, { type LinkProps } from "next/link";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

type CommonProps = {
  children?: React.ReactNode;
  className?: string;
  variant?: Variant;
  size?: Size;
  disabled?: boolean;
};

type ButtonAsButton = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children" | "disabled"> & {
    href?: never;
  };

type ButtonAsLink = CommonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children" | "href"> & {
    href: LinkProps["href"];
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function baseClasses(size: Size) {
  const sizes: Record<Size, string> = {
    sm: "h-9 px-3 text-sm",
    md: "h-10 px-4 text-sm",
    lg: "h-11 px-5 text-base",
  };

  return cn(
    "inline-flex items-center justify-center gap-2 rounded-full whitespace-nowrap",
    "transition-colors select-none",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20",
    "disabled:opacity-50 disabled:pointer-events-none",
    sizes[size]
  );
}

function variantClasses(variant: Variant) {
  // IMPORTANT: force text colors to avoid dark-on-dark.
  const variants: Record<Variant, string> = {
    primary: cn(
      "bg-neutral-900 text-white",
      "hover:bg-neutral-800"
    ),
    secondary: cn(
      "bg-white text-neutral-900 border border-neutral-200",
      "hover:bg-neutral-50"
    ),
    ghost: cn(
      "bg-transparent text-neutral-900",
      "hover:bg-neutral-100"
    ),
  };

  return variants[variant];
}

export function Button(props: ButtonProps) {
  const {
    className,
    children,
    variant = "secondary",
    size = "md",
    disabled,
    ...rest
  } = props as ButtonProps;

  const classes = cn(baseClasses(size), variantClasses(variant), className);

  // Link mode
  if ("href" in props && props.href) {
    const { href, ...anchorProps } = rest as Omit<ButtonAsLink, keyof CommonProps>;
    return (
      <Link
        href={href}
        className={classes}
        aria-disabled={disabled ? true : undefined}
        tabIndex={disabled ? -1 : undefined}
        {...anchorProps}
      >
        {children}
      </Link>
    );
  }

  // Button mode
  const buttonProps = rest as Omit<ButtonAsButton, keyof CommonProps>;
  return (
    <button className={classes} disabled={disabled} {...buttonProps}>
      {children}
    </button>
  );
}

export default Button;
