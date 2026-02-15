import type { MetadataRoute } from "next";
import { routes } from "@/lib/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const staticRoutes = [
    routes.home,
    routes.about,
    routes.governance,
    routes.leadership,
    routes.policies,
    routes.programs,
    routes.impact,
    routes.transparency,
    routes.reports,
    routes.downloads,
    routes.meFramework,
    routes.resources,
    routes.donate,
    routes.volunteer,
    routes.partner,
    routes.contact,
  ];

  return staticRoutes.map((path) => ({
    url: new URL(path, siteUrl).toString(),
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
