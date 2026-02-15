import { baseMetadata } from "@/lib/seo";
import { Button } from "@/components/ui/Button";
import { routes } from "@/lib/routes";

export const metadata = baseMetadata({ title: "Donation success" });

export default function DonateSuccess() {
  return (
    <article className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="text-4xl font-semibold tracking-tight">Thank you.</h1>
      <p className="mt-4 text-base text-neutral-600">
        Your donation was processed successfully. A confirmation has been issued by the payment processor.
      </p>
      <div className="mt-8 flex gap-3">
        <Button href={routes.programs} variant="secondary">Explore programs</Button>
        <Button href={routes.home}>Home</Button>
      </div>
    </article>
  );
}
