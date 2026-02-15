import Link from "next/link";

export default function SkipLink() {
  return (
    <Link
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-[100] focus:rounded-full focus:bg-neutral-900 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white focus:shadow-[0_12px_40px_rgba(0,0,0,0.25)]"
    >
      Skip to main content
    </Link>
  );
}
