import { baseMetadata } from "@/lib/seo";
import { sanityClient } from "@/lib/sanity/client";
import { qResourceByCategorySlug } from "@/lib/sanity/queries";
import type { ResourceDetail } from "@/lib/sanity/types";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

type ResourceRouteParams = {
  category: string;
  slug: string;
};

export async function generateMetadata({ params }: { params: Promise<ResourceRouteParams> }) {
  const { category, slug } = await params;

  return baseMetadata({ title: "Resource", path: `/resources/${category}/${slug}` });
}

export default async function ResourceDetailPage({ params }: { params: Promise<ResourceRouteParams> }) {
  const { category, slug } = await params;

  const resource = await sanityClient.fetch<ResourceDetail | null>(
    qResourceByCategorySlug,
    { category, slug },
    { next: { revalidate: 300 } }
  );

  if (!resource) {
    return (
      <article className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
        <h1 className="text-3xl font-semibold">Resource not found</h1>
        <p className="mt-3 text-sm text-neutral-600">Check CMS category and slug.</p>
      </article>
    );
  }

  return (
    <article className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6">
      <Breadcrumbs
        items={[
          { label: "Resources", href: "/resources" },
          { label: resource.category, href: "/resources" },
          { label: resource.title },
        ]}
      />

      <header className="mt-6">
        <h1 className="text-4xl font-semibold tracking-tight">{resource.title}</h1>
        <p className="mt-3 text-sm text-neutral-600">
          {resource.publishedAt ? new Date(resource.publishedAt).toLocaleDateString() : "Drafted / unpublished date"}
        </p>
      </header>

      <section className="prose prose-neutral mt-10 max-w-none">
        <p>
          Content is stored in Sanity Portable Text. Next iteration we render full rich text (headings, lists, links)
          with institutional formatting. For now this page confirms routing and CMS integrity.
        </p>
      </section>
    </article>
  );
}
