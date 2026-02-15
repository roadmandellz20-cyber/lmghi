import { groq } from "next-sanity";

export const qSiteSettings = groq`*[_type=="siteSettings"][0]{
  _id, orgName, shortName, region, country, emails
}`;

export const qPillars = groq`*[_type=="pillar"]|order(order asc, title asc){
  _id, title, slug, summary, order
}`;

export const qPillarBySlug = groq`*[_type=="pillar" && slug.current==$slug][0]{
  _id, title, slug, summary, order
}`;

export const qProgramsByPillarSlug = groq`*[_type=="program" && pillar->slug.current==$pillarSlug]|order(title asc){
  _id, title, slug, overview,
  pillar->{_id, title, slug, summary, order},
  waysToSupport
}`;

export const qProgramBySlugs = groq`*[_type=="program" && pillar->slug.current==$pillarSlug && slug.current==$programSlug][0]{
  _id, title, slug, overview,
  pillar->{_id, title, slug, summary, order},
  problem, strategy, indicators, results, waysToSupport
}`;

export const qImpactMetrics = groq`*[_type=="impactMetric"]|order(order asc, label asc){
  _id, label, value, timeframe, methodNote, order
}`;

export const qReports = groq`*[_type=="report"]|order(publishedAt desc, title asc){
  _id, title, slug, type, period, publishedAt, summary,
  "pdfUrl": pdf.asset->url
}`;

export const qPolicyDocs = groq`*[_type=="policyDoc"]|order(effectiveDate desc, title asc){
  _id, title, slug, category, version, effectiveDate,
  "pdfUrl": pdf.asset->url
}`;

export const qPeopleByRole = groq`*[_type=="person" && roleType==$roleType]|order(name asc){
  _id, name, roleType, title, bio
}`;

export const qResources = groq`*[_type=="resource" && (!defined($category) || category==$category)]|order(publishedAt desc, title asc){
  _id, title, slug, category, tags, publishedAt,
  "excerpt": pt::text(body)[0..160]
}`;

export const qResourceByCategorySlug = groq`*[_type=="resource" && category==$category && slug.current==$slug][0]{
  _id, title, slug, category, tags, publishedAt,
  body
}`;
