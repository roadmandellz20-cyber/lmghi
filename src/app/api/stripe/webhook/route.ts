import { NextResponse } from "next/server";
import { stripe } from "@/lib/donate/stripe";
import Stripe from "stripe";

export async function POST(req: Request) {
  const sig = req.headers.get("stripe-signature");
  const secret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!sig || !secret) {
    return NextResponse.json({ error: "Missing webhook secret/signature" }, { status: 400 });
  }

  const rawBody = await req.text();

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, sig, secret);
  } catch {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  // Keep it minimal & accountable: only accept the events you need.
  if (event.type === "checkout.session.completed") {
    // Later: log to DB / CMS, trigger confirmation email, analytics, etc.
  }

  return NextResponse.json({ received: true });
}
