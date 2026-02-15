import type { Metadata } from "next";

export const ORG = {
  fullName: "Lambano Medfront Global Health Initiative (LMGHI)",
  shortName: "LMGHI",
  legalName: "Lambano Medfront Global Health Initiative",
  region: "West Africa",
  country: "The Gambia",
};

export function baseMetadata(opts?: { title?: string; description?: string; path?: string }): Metadata {
  const title = opts?.title ? `${opts.title} — ${ORG.shortName}` : `${ORG.shortName} — ${ORG.legalName}`;
  const description =
    opts?.description ??
    "LMGHI is a global health initiative strengthening community health systems through programs, evidence, and accountable delivery.";

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const url = opts?.path ? new URL(opts.path, siteUrl).toString() : siteUrl;

  return {
    title,
    description,
    metadataBase: new URL(siteUrl),
    openGraph: {
      title,
      description,
      url,
      type: "website",
      siteName: ORG.shortName,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: url,
    },
  };
}

export function orgJsonLd() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: ORG.legalName,
    alternateName: ORG.shortName,
    url: siteUrl,
    areaServed: ORG.region,
  };
}
