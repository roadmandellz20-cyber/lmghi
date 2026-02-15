import { baseMetadata } from "@/lib/seo";
import { sanityClient } from "@/lib/sanity/client";
import { qPeopleByRole } from "@/lib/sanity/queries";
import type { Person } from "@/lib/sanity/types";
import { Card } from "@/components/ui/Card";

export const metadata = baseMetadata({ title: "Leadership" });

export default async function LeadershipPage() {
  const [executives, board, advisors] = await Promise.all([
    sanityClient.fetch<Person[]>(qPeopleByRole, { roleType: "Executive" }, { next: { revalidate: 300 } }),
    sanityClient.fetch<Person[]>(qPeopleByRole, { roleType: "Board" }, { next: { revalidate: 300 } }),
    sanityClient.fetch<Person[]>(qPeopleByRole, { roleType: "Advisor" }, { next: { revalidate: 300 } }),
  ]);

  const Section = ({ title, people }: { title: string; people: Person[] }) => (
    <section className="mt-10" aria-label={title}>
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {people.map((p) => (
          <Card key={p._id} title={p.name}>
            <p className="text-xs font-semibold text-neutral-500">{p.title || p.roleType}</p>
            <p className="mt-3 text-sm text-neutral-600">{p.bio || "Profile will be added via CMS."}</p>
          </Card>
        ))}
        {!people.length ? (
          <div className="md:col-span-3 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 text-sm text-neutral-700">
            No public profiles yet. CMS is ready for publication.
          </div>
        ) : null}
      </div>
    </section>
  );

  return (
    <article className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
      <header>
        <h1 className="text-4xl font-semibold tracking-tight">Leadership</h1>
        <p className="mt-4 max-w-2xl text-base text-neutral-600">
          Profiles are published from CMS with draft/publish controls.
        </p>
      </header>

      <Section title="Executive" people={executives} />
      <Section title="Board" people={board} />
      <Section title="Advisors" people={advisors} />
    </article>
  );
}
