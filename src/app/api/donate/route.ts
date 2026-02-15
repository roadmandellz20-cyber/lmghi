import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req: Request) {
  try {
    const key = process.env.STRIPE_SECRET_KEY;

    // Don't crash builds / preview deployments
    if (!key) {
      return NextResponse.json(
        { ok: false, error: "Stripe is not configured (missing STRIPE_SECRET_KEY)." },
        { status: 500 }
      );
    }

    const stripe = new Stripe(key, { apiVersion: "2024-06-20" });

    const body = await req.json().catch(() => null);
    const amount = Number(body?.amount);

    if (!Number.isFinite(amount) || amount <= 0) {
      return NextResponse.json({ ok: false, error: "Invalid amount" }, { status: 400 });
    }

    const amountInCents = Math.round(amount * 100);

    const origin =
      req.headers.get("origin") ||
      process.env.NEXT_PUBLIC_SITE_URL ||
      "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            unit_amount: amountInCents,
            product_data: {
              name: "LMGHI Donation",
              description: "Support delivery systems, reporting, and governance.",
            },
          },
          quantity: 1,
        },
      ],
      success_url: `${origin}/get-involved/donate?success=1`,
      cancel_url: `${origin}/get-involved/donate?canceled=1`,
    });

    return NextResponse.json({ ok: true, url: session.url });
  } catch (err: any) {
    return NextResponse.json(
      { ok: false, error: err?.message || "Unknown error" },
      { status: 500 }
    );
  }
}
