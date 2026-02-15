import { NextResponse } from "next/server";
import { stripe, getSiteUrl, donationCurrency } from "@/lib/donate/stripe";

export async function POST(req: Request) {
  const form = await req.formData();
  const amountUsd = Number(form.get("amount") || 0);
  const frequency = String(form.get("frequency") || "one_time");

  if (!Number.isFinite(amountUsd) || amountUsd <= 0) {
    return NextResponse.json({ error: "Invalid amount" }, { status: 400 });
  }

  const amountCents = Math.round(amountUsd * 100);
  const siteUrl = getSiteUrl();

  const mode = frequency === "monthly" ? "subscription" : "payment";

  // For subscriptions, Stripe requires price objects normally.
  // To keep architecture clean, we create a simple recurring price on the fly (acceptable for MVP),
  // and later migrate to managed Prices in Stripe Dashboard without changing frontend.
  if (mode === "subscription") {
    const product = await stripe.products.create({ name: "LMGHI Monthly Donation" });
    const price = await stripe.prices.create({
      product: product.id,
      unit_amount: amountCents,
      currency: donationCurrency(),
      recurring: { interval: "month" },
    });

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [{ price: price.id, quantity: 1 }],
      success_url: `${siteUrl}/get-involved/donate/success`,
      cancel_url: `${siteUrl}/get-involved/donate/cancel`,
    });

    return NextResponse.redirect(session.url!, 303);
  }

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [
      {
        price_data: {
          currency: donationCurrency(),
          product_data: { name: "LMGHI Donation" },
          unit_amount: amountCents,
        },
        quantity: 1,
      },
    ],
    success_url: `${siteUrl}/get-involved/donate/success`,
    cancel_url: `${siteUrl}/get-involved/donate/cancel`,
  });

  return NextResponse.redirect(session.url!, 303);
}
