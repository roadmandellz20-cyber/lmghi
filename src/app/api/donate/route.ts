import { NextResponse } from "next/server";
import { donationCurrency, getSiteUrl, stripe } from "@/lib/donate/stripe";

type DonateBody = {
  amount?: unknown;
};

function parseAmount(value: unknown) {
  const amount = Number(value);
  if (!Number.isFinite(amount) || amount <= 0) {
    return null;
  }

  return Math.round(amount * 100);
}

export async function POST(req: Request) {
  try {
    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json({ ok: false, error: "Missing STRIPE_SECRET_KEY" }, { status: 500 });
    }

    const body = (await req.json().catch(() => ({}))) as DonateBody;
    const amountInCents = parseAmount(body.amount);

    if (amountInCents === null) {
      return NextResponse.json({ ok: false, error: "Invalid amount" }, { status: 400 });
    }

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || getSiteUrl();

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: donationCurrency(),
            unit_amount: amountInCents,
            product_data: {
              name: "LMGHI Donation",
              description: "Support delivery systems, reporting, and governance.",
            },
          },
        },
      ],
      success_url: `${siteUrl}/get-involved/donate?success=1`,
      cancel_url: `${siteUrl}/get-involved/donate?canceled=1`,
    });

    if (!session.url) {
      return NextResponse.json({ ok: false, error: "Failed to create checkout session" }, { status: 500 });
    }

    return NextResponse.json({
      ok: true,
      checkoutUrl: session.url,
      sessionId: session.id,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown donation error";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
