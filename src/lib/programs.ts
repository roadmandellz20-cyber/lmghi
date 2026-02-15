// src/lib/programs.ts
import { sanityClient, sanityConfigured } from "@/lib/sanity";

export type ProgramPillar = {
  slug: string;
  label: string;
  title: string;
  summary: string;
  focusAreas: string[];
  whatWeDo: string[];
  exampleActivities: string[];
};

const FALLBACK_PILLARS: ProgramPillar[] = [
  {
    slug: "primary-care",
    label: "Delivery systems",
    title: "Primary Care Delivery",
    summary:
      "Strengthen frontline services with standards, staffing support, and reliable operations.",
    focusAreas: ["Access", "Quality", "Continuity of care"],
    whatWeDo: ["Facility support", "Referral pathways", "Service readiness"],
    exampleActivities: ["Clinic audits", "Supply chain support", "Community linkage"],
  },
  {
    slug: "maternal-child-health",
    label: "MCH",
    title: "Maternal & Child Health",
    summary:
      "Improve outcomes through continuity of care, referrals, and safe service pathways.",
    focusAreas: ["ANC/PNC", "Newborn care", "Immunization"],
    whatWeDo: ["Care pathways", "Training & mentorship", "Quality improvement"],
    exampleActivities: ["Outreach days", "Mentorship rounds", "Case review"],
  },
  {
    slug: "monitoring-evaluation-learning",
    label: "M&E",
    title: "Monitoring, Evaluation & Learning",
    summary:
      "Measurement, transparency, and evidence that withstand institutional scrutiny.",
    focusAreas: ["Indicators", "Dashboards", "Reporting"],
    whatWeDo: ["M&E frameworks", "Data QA", "Periodic evaluations"],
    exampleActivities: ["Indicator design", "Dashboards", "Evaluations"],
  },
  {
    slug: "disease-prevention",
    label: "Prevention",
    title: "Disease Prevention & Surveillance",
    summary:
      "Early detection, rapid response, and community-level prevention programs.",
    focusAreas: ["Screening", "Surveillance", "Response"],
    whatWeDo: ["Community prevention", "Partner coordination", "Rapid reporting"],
    exampleActivities: ["Campaigns", "Case finding", "Referral support"],
  },
  {
    slug: "workforce-training",
    label: "Capacity",
    title: "Health Workforce & Training",
    summary:
      "Competency-based training, supervision, and performance support for scale.",
    focusAreas: ["Training", "Supervision", "Performance"],
    whatWeDo: ["Modules", "Mentorship", "Supportive supervision"],
    exampleActivities: ["Competency modules", "Mentorship", "Supervision visits"],
  },
  {
    slug: "governance-compliance",
    label: "Governance",
    title: "Program Governance & Compliance",
    summary:
      "Clear roles, oversight, and policies that keep delivery accountable.",
    focusAreas: ["Governance", "Compliance", "Accountability"],
    whatWeDo: ["Decision logs", "Policies", "Disclosure readiness"],
    exampleActivities: ["Decision logs", "Policy reviews", "Disclosure readiness"],
  },
];

export function getPillars(): ProgramPillar[] {
  return FALLBACK_PILLARS;
}

export async function getPillar(slug: string): Promise<ProgramPillar | null> {
  // If Sanity isn't configured, do NOT crash builds — return fallback.
  if (!sanityConfigured || !sanityClient) {
    return FALLBACK_PILLARS.find((p) => p.slug === slug) ?? null;
  }

  // If Sanity is configured, try fetching; if it fails, fallback.
  try {
    const query = `*[_type == "pillar" && slug.current == $slug][0]{
      "slug": slug.current,
      label,
      title,
      summary,
      focusAreas,
      whatWeDo,
      exampleActivities
    }`;

    const data = await sanityClient.fetch(query, { slug });

    if (!data) return FALLBACK_PILLARS.find((p) => p.slug === slug) ?? null;

    return {
      slug: data.slug,
      label: data.label ?? "Pillar",
      title: data.title ?? "Program Pillar",
      summary: data.summary ?? "",
      focusAreas: Array.isArray(data.focusAreas) ? data.focusAreas : [],
      whatWeDo: Array.isArray(data.whatWeDo) ? data.whatWeDo : [],
      exampleActivities: Array.isArray(data.exampleActivities) ? data.exampleActivities : [],
    };
  } catch {
    return FALLBACK_PILLARS.find((p) => p.slug === slug) ?? null;
  }
}
