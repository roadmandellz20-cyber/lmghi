import { baseMetadata } from "@/lib/seo";
import { Button } from "@/components/ui/Button";
import { routes } from "@/lib/routes";

export const metadata = baseMetadata({ title: "Donation canceled" });

export default function DonateCancel() {
  return (
    <article className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="text-4xl font-semibold tracking-tight">Donation canceled</h1>
      <p className="mt-4 text-base text-neutral-600">
        No payment was completed. You can try again when ready.
      </p>
      <div className="mt-8 flex gap-3">
        <Button href={routes.donate}>Back to donate</Button>
        <Button href={routes.home} variant="secondary">Home</Button>
      </div>
    </article>
  );
}
