export type Pillar = {
  id: string;
  title: string;
  shortLabel: string;
  summary: string;
  focusAreas: string[];
  examplePrograms: string[];
  outcomes: { label: string; value: string; note: string }[];
  howWeMeasure: string[];
};

export const pillars: Pillar[] = [
  {
    id: "prevention",
    title: "Prevention",
    shortLabel: "Prevention",
    summary:
      "Disease prevention, surveillance, and rapid response—built for community-level delivery and measurable outcomes.",
    focusAreas: ["Surveillance & early warning", "Community prevention", "Outbreak readiness"],
    examplePrograms: ["Disease Prevention & Surveillance", "Community Health Campaigns"],
    outcomes: [
      { label: "Coverage", value: "—", note: "Communities reached" },
      { label: "Detection", value: "—", note: "Time-to-signal improvement" },
      { label: "Response", value: "—", note: "Response readiness" },
    ],
    howWeMeasure: [
      "Sentinel reporting completeness",
      "Detection-to-response time",
      "Coverage of prevention interventions",
      "Stockout rate for essential prevention supplies",
    ],
  },
  {
    id: "care",
    title: "Primary Care Delivery",
    shortLabel: "Primary Care",
    summary:
      "Strengthening frontline services with standards, staffing support, and reliable operations—so care is consistent.",
    focusAreas: ["Service quality & standards", "Supply & operations", "Referral pathways"],
    examplePrograms: ["Primary Care Delivery", "Clinic Support Systems"],
    outcomes: [
      { label: "Quality", value: "—", note: "Standards adherence" },
      { label: "Access", value: "—", note: "Service availability" },
      { label: "Reliability", value: "—", note: "Operational uptime" },
    ],
    howWeMeasure: [
      "Facility standards checklist score",
      "Stockout rate for essential medicines",
      "Referral completion rate",
      "Wait time + service availability",
    ],
  },
  {
    id: "mch",
    title: "Maternal & Child Health",
    shortLabel: "MCH",
    summary:
      "Improving outcomes through continuity of care, safe service pathways, and community-based follow-up.",
    focusAreas: ["Antenatal & postnatal care", "Child health", "Continuity & follow-up"],
    examplePrograms: ["Maternal & Child Health", "Continuity of Care"],
    outcomes: [
      { label: "Continuity", value: "—", note: "Follow-up completion" },
      { label: "Safety", value: "—", note: "Safe pathway adherence" },
      { label: "Outcomes", value: "—", note: "Maternal/child indicators" },
    ],
    howWeMeasure: [
      "ANC/PNC completion rates",
      "Immunization completion",
      "Referral pathway adherence",
      "Drop-off points (where clients disengage)",
    ],
  },
  {
    id: "mel",
    title: "Monitoring, Evaluation & Learning",
    shortLabel: "MEL",
    summary:
      "Metrics-first delivery: indicators before narratives, transparency by default, and evidence that stands scrutiny.",
    focusAreas: ["Indicator design", "Data quality", "Reporting & disclosure"],
    examplePrograms: ["M&E Framework", "Institutional-grade Reporting"],
    outcomes: [
      { label: "Clarity", value: "—", note: "Indicator readiness" },
      { label: "Quality", value: "—", note: "Data reliability" },
      { label: "Disclosure", value: "—", note: "Progressive reporting" },
    ],
    howWeMeasure: [
      "Indicator definitions + baselines",
      "Data quality audits",
      "Reporting cadence adherence",
      "Public disclosure completeness",
    ],
  },
  {
    id: "capacity",
    title: "Capacity",
    shortLabel: "Capacity",
    summary:
      "Training and performance support for scale—supervision, competency-based learning, and delivery enablement.",
    focusAreas: ["Workforce training", "Supportive supervision", "Performance systems"],
    examplePrograms: ["Health Workforce & Training", "Delivery Enablement"],
    outcomes: [
      { label: "Competency", value: "—", note: "Skills achieved" },
      { label: "Support", value: "—", note: "Supervision cadence" },
      { label: "Scale", value: "—", note: "Sustained performance" },
    ],
    howWeMeasure: [
      "Training completion + competency checks",
      "Supervision frequency and quality",
      "Performance improvement over time",
      "Retention + staffing stability (where relevant)",
    ],
  },
];

export function getPillar(id: string) {
  return pillars.find((p) => p.id === id);
}
