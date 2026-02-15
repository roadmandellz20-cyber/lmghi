export type Slug = { current: string };

export type Pillar = {
  _id: string;
  title: string;
  slug: Slug;
  summary?: string;
  order?: number;
};

export type ProgramIndicator = {
  name: string;
  baseline?: string;
  target?: string;
  notes?: string;
};

export type Program = {
  _id: string;
  title: string;
  slug: Slug;
  overview: string;
  pillar: Pillar;
  problem?: any[];
  strategy?: any[];
  indicators?: ProgramIndicator[];
  results?: any[];
  waysToSupport?: {
    donate?: string;
    partner?: string;
    volunteer?: string;
  };
};

export type Report = {
  _id: string;
  title: string;
  slug: Slug;
  type: string;
  period?: string;
  publishedAt?: string;
  summary?: string;
  pdfUrl: string;
};

export type PolicyDoc = {
  _id: string;
  title: string;
  slug: Slug;
  category?: string;
  version?: string;
  effectiveDate?: string;
  pdfUrl: string;
};

export type Person = {
  _id: string;
  name: string;
  roleType: "Board" | "Executive" | "Advisor";
  title?: string;
  bio?: string;
};

export type Resource = {
  _id: string;
  title: string;
  slug: Slug;
  category: string;
  tags?: string[];
  publishedAt?: string;
  excerpt?: string;
};

export type ResourceDetail = Resource & {
  body: any[];
};

export type ImpactMetric = {
  _id: string;
  label: string;
  value: string;
  timeframe?: string;
  methodNote?: string;
  order?: number;
};

export type SiteSettings = {
  _id: string;
  orgName: string;
  shortName: string;
  region?: string;
  country?: string;
  emails?: { info?: string; partnerships?: string; donate?: string };
};
