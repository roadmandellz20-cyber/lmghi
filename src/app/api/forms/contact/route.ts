import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/forms/validators";
import { verifyTurnstile } from "@/lib/forms/turnstile";

export async function POST(req: Request) {
  const form = await req.formData();

  const payload = {
    name: String(form.get("name") || ""),
    email: String(form.get("email") || ""),
    subject: String(form.get("subject") || ""),
    message: String(form.get("message") || ""),
    turnstileToken: String(form.get("turnstileToken") || ""),
  };

  const parsed = contactSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const ts = await verifyTurnstile(parsed.data.turnstileToken, null);
  if (!ts.success) {
    return NextResponse.json({ error: "Spam protection failed" }, { status: 400 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const to = process.env.NEXT_PUBLIC_SITE_EMAIL_INFO || "info@lmghi.org";

  await resend.emails.send({
    from: "LMGHI Website <no-reply@lmghi.org>",
    to,
    replyTo: parsed.data.email,
    subject: `Contact: ${parsed.data.subject}`,
    text: `Name: ${parsed.data.name}\nEmail: ${parsed.data.email}\n\n${parsed.data.message}`,
  });

  return NextResponse.json({ ok: true });
}
