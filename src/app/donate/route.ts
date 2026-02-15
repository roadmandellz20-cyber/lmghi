import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2026-01-28.clover",
});

export async function POST(req: Request) {
  try {
    const { amount } = await req.json();

    const numeric = Number(amount);
    if (!numeric || numeric < 1) {
      return NextResponse.json({ error: "Invalid amount." }, { status: 400 });
    }

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      success_url: `${siteUrl}/get-involved/donate?success=1`,
      cancel_url: `${siteUrl}/get-involved/donate?canceled=1`,
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "usd",
            unit_amount: Math.round(numeric * 100),
            product_data: {
              name: "Donation — LMGHI",
              description: "Support accountable public health delivery.",
            },
          },
        },
      ],
    });

    return NextResponse.json({ url: session.url });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Stripe error.";
    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}
